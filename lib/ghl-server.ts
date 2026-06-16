/**
 * Server-only helper for the RouleurCo GoHighLevel (LeadConnector) v2 REST API.
 *
 * SAFETY — this integration writes to the RouleurCo sub-account ONLY.
 *   RouleurCo locationId: hCW1XgNUW2gssImbG9EN   (correct target)
 *   UVH locationId:       kRfviw1Gs30Ek0UF2fYE   (NEVER write here)
 * Two protections make a mis-write impossible:
 *   1. Every call carries the RouleurCo locationId (constant below / GHL_LOCATION_ID env).
 *   2. GHL_PIT is a RouleurCo-scoped Private Integration Token — it can only
 *      read/write the location it was issued for, so it cannot touch UVH.
 *
 * This module reads process.env.GHL_PIT and must NEVER be imported by a client
 * component. The token is never logged or returned to the browser.
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

const ROULEURCO_LOCATION_ID = "hCW1XgNUW2gssImbG9EN";
const UVH_LOCATION_ID = "kRfviw1Gs30Ek0UF2fYE"; // for the guard only — do not write here

/** The resolved RouleurCo locationId. Defaults to the RouleurCo constant; an env
 *  override is allowed but a UVH value is rejected outright. */
export function locationId(): string {
  const id = process.env.GHL_LOCATION_ID || ROULEURCO_LOCATION_ID;
  if (id === UVH_LOCATION_ID) {
    throw new GhlError("Refusing to use the UVH locationId — this integration is RouleurCo-only", 500);
  }
  return id;
}

export class GhlError extends Error {
  status: number;
  detail: unknown;
  constructor(message: string, status: number, detail?: unknown) {
    super(message);
    this.name = "GhlError";
    this.status = status;
    this.detail = detail;
  }
}

function authHeaders(): Record<string, string> {
  const token = process.env.GHL_PIT;
  if (!token) {
    throw new GhlError("GHL_PIT is not configured", 500);
  }
  return {
    Authorization: `Bearer ${token}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

/** Low-level fetch wrapper. Throws GhlError (with parsed detail) on non-2xx.
 *  Never include the response body in anything sent to the client — log it server-side. */
async function ghlFetch<T = unknown>(
  path: string,
  init?: { method?: string; body?: unknown }
): Promise<T> {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method: init?.method ?? "GET",
    headers: authHeaders(),
    body: init?.body !== undefined ? JSON.stringify(init.body) : undefined,
    cache: "no-store",
  });

  const raw = await res.text();
  let parsed: unknown = undefined;
  try {
    parsed = raw ? JSON.parse(raw) : {};
  } catch {
    parsed = { raw };
  }

  if (!res.ok) {
    throw new GhlError(`GHL ${init?.method ?? "GET"} ${path} -> ${res.status}`, res.status, parsed);
  }
  return parsed as T;
}

// ---- Pipelines -------------------------------------------------------------

export type GhlStage = { id: string; name: string; position?: number };
export type GhlPipeline = { id: string; name: string; locationId?: string; stages: GhlStage[] };

export async function getPipelines(): Promise<GhlPipeline[]> {
  const data = await ghlFetch<{ pipelines?: GhlPipeline[] }>(
    `/opportunities/pipelines?locationId=${encodeURIComponent(locationId())}`
  );
  const pipelines = data.pipelines ?? [];
  // Guard: nothing we read should belong to UVH.
  for (const p of pipelines) {
    if (p.locationId && p.locationId === UVH_LOCATION_ID) {
      throw new GhlError("Pipelines came back scoped to UVH — aborting", 500);
    }
  }
  return pipelines;
}

// ---- Custom fields ---------------------------------------------------------

export type GhlCustomField = {
  id: string;
  name?: string;
  fieldKey?: string;
  dataType?: string;
  model?: string;
};

export async function getContactCustomFields(): Promise<GhlCustomField[]> {
  const data = await ghlFetch<{ customFields?: GhlCustomField[] }>(
    `/locations/${encodeURIComponent(locationId())}/customFields?model=contact`
  );
  return data.customFields ?? [];
}

export async function createContactTextCustomField(name: string): Promise<GhlCustomField> {
  const data = await ghlFetch<{ customField?: GhlCustomField } & GhlCustomField>(
    `/locations/${encodeURIComponent(locationId())}/customFields`,
    { method: "POST", body: { name, dataType: "TEXT", model: "contact" } }
  );
  return (data.customField ?? data) as GhlCustomField;
}

// ---- Contacts --------------------------------------------------------------

export type UpsertContactInput = {
  firstName?: string;
  lastName?: string;
  email: string;
  companyName?: string;
  city?: string;
  tags?: string[];
  source?: string;
  // v2 write shape is customFields: [{ id, value }]. If a live test shows the
  // account expects [{ key, field_value }], switch the mapping in the route.
  customFields?: { id: string; value: string }[];
};

export type UpsertContactResult = { contactId: string | undefined; isNew: boolean };

export async function upsertContact(input: UpsertContactInput): Promise<UpsertContactResult> {
  const data = await ghlFetch<{ contact?: { id?: string }; id?: string; new?: boolean }>(
    `/contacts/upsert`,
    { method: "POST", body: { ...input, locationId: locationId() } }
  );
  return { contactId: data.contact?.id ?? data.id, isNew: Boolean(data.new) };
}

export async function addContactNote(contactId: string, body: string): Promise<void> {
  await ghlFetch(`/contacts/${encodeURIComponent(contactId)}/notes`, {
    method: "POST",
    body: { body },
  });
}

// ---- Opportunities ---------------------------------------------------------

export type CreateOpportunityInput = {
  pipelineId: string;
  pipelineStageId: string;
  name: string;
  contactId: string;
  status?: "open" | "won" | "lost" | "abandoned";
};

export async function createOpportunity(input: CreateOpportunityInput): Promise<{ id: string | undefined }> {
  const data = await ghlFetch<{ opportunity?: { id?: string }; id?: string }>(`/opportunities/`, {
    method: "POST",
    body: { ...input, status: input.status ?? "open", locationId: locationId() },
  });
  return { id: data.opportunity?.id ?? data.id };
}

export type GhlOpportunity = { id: string; pipelineId?: string; pipelineStageId?: string; status?: string };

/** Existing opportunities for a contact — used to keep opportunity creation
 *  idempotent (so a resubmit doesn't create a duplicate). */
export async function findOpportunitiesForContact(contactId: string): Promise<GhlOpportunity[]> {
  const data = await ghlFetch<{ opportunities?: GhlOpportunity[] }>(
    `/opportunities/search?location_id=${encodeURIComponent(locationId())}&contact_id=${encodeURIComponent(contactId)}`
  );
  return data.opportunities ?? [];
}
