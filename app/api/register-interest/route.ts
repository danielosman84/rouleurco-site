import { NextResponse } from "next/server";
import {
  getPipelines,
  getContactCustomFields,
  createContactTextCustomField,
  upsertContact,
  addContactNote,
  createOpportunity,
  findOpportunitiesForContact,
  GhlError,
} from "@/lib/ghl-server";

// Node runtime (needs process.env + server fetch); never statically optimised.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LOG = "[register-interest]";

/**
 * Target pipeline + entry stage for website soft-interest.
 *
 * NOT hardcoded with IDs — these come from env vars that Dan sets once we've
 * fetched the live RouleurCo pipelines (locationId hCW1XgNUW2gssImbG9EN) and
 * confirmed the target together (§4 Step B / §9).
 *
 * DO NOT paste UVH IDs here (e.g. pipeline Bnrf7zPG9dvXcd2t8S0d or stage
 * bfd32b4b-7961-4f0b-a6c3-f287426930a1) — those belong to the wrong account.
 *
 * Until both are set AND validated against the live RouleurCo pipelines, the
 * opportunity step is skipped (the contact is still captured — see fail-safe).
 *
 * CURRENT DECISION (Jun 2026): opportunities are OFF — website registrants are
 * captured as tagged contacts only (no opportunity) until a dedicated nurture
 * pipeline exists in RouleurCo. These vars are intentionally left blank.
 */
const TARGET_PIPELINE_ID = process.env.GHL_PIPELINE_ID ?? "";
const TARGET_PIPELINE_STAGE_ID = process.env.GHL_PIPELINE_STAGE_ID ?? "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Warm-instance memo so we don't refetch config on every submission.
let memoFleetFieldId: string | null | undefined;
let memoTarget: { pipelineId: string; pipelineStageId: string } | null | undefined;

function logError(msg: string, err?: unknown) {
  if (err instanceof GhlError) {
    // status + message + trimmed detail are safe to log; the PIT is never echoed by GHL.
    console.error(`${LOG} ${msg}: GHL ${err.status} ${err.message}`, JSON.stringify(err.detail)?.slice(0, 600));
  } else if (err) {
    console.error(`${LOG} ${msg}:`, err instanceof Error ? err.message : err);
  } else {
    console.error(`${LOG} ${msg}`);
  }
}

export async function POST(req: Request) {
  // --- Step A: parse + validate ---------------------------------------------
  let raw: Record<string, unknown>;
  try {
    raw = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(raw.name);
  const email = str(raw.email);
  const business = str(raw.business);
  const location = str(raw.location);
  const fleetSize = str(raw.fleetSize);
  const notes = str(raw.notes);
  const consent = raw.consent === true;
  const source = str(raw.source) || "Website — Register Interest";

  if (!name || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name and a valid email address." },
      { status: 400 }
    );
  }

  const tags = ["Source — Web Form", "Interest — Website"];
  if (consent) tags.push("Consent — Email Marketing");

  // --- Step C+D: resolve Fleet Size field, then upsert the contact ----------
  // The contact is the lead — if this fails we tell the user to retry. Everything
  // after it is best-effort so a downstream hiccup never loses the lead (Step G).
  let contactId: string | undefined;
  try {
    const fleetFieldId = fleetSize ? await resolveFleetFieldId() : null;
    const customFields =
      fleetSize && fleetFieldId ? [{ id: fleetFieldId, value: fleetSize }] : undefined;

    const result = await upsertContact({
      firstName: name,
      email,
      companyName: business || undefined,
      city: location || undefined,
      tags,
      source,
      customFields,
    });
    contactId = result.contactId;
    if (!contactId) {
      logError("upsert returned no contactId");
      return NextResponse.json(
        { ok: false, error: "We couldn't submit your details. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    logError("contact upsert failed", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your details. Please try again, or email hello@rouleurco.com." },
      { status: 502 }
    );
  }

  // --- Step E: note (best-effort) -------------------------------------------
  if (notes) {
    try {
      await addContactNote(contactId, notes);
    } catch (err) {
      logError("note failed (contact saved)", err);
    }
  }

  // --- Step F: opportunity (best-effort, fail-safe) -------------------------
  try {
    const target = await resolveTarget();
    if (target) {
      // Idempotent: skip if this contact already has an opportunity in the
      // target pipeline (e.g. on a resubmit) so we never duplicate.
      let alreadyHas = false;
      try {
        const existing = await findOpportunitiesForContact(contactId);
        alreadyHas = existing.some((o) => o.pipelineId === target.pipelineId);
      } catch (err) {
        logError("opportunity dedupe check failed — will attempt create", err);
      }
      if (alreadyHas) {
        console.log(`${LOG} opportunity already exists for contact ${contactId} in pipeline ${target.pipelineId} — skipping`);
      } else {
        await createOpportunity({
          pipelineId: target.pipelineId,
          pipelineStageId: target.pipelineStageId,
          name: `Website Interest — ${business || name}`,
          status: "open",
          contactId,
        });
      }
    } else {
      // No pipeline configured — tagged contact only. Contact saved.
      console.log(`${LOG} opportunity disabled — tagged contact saved (contactId ${contactId})`);
    }
  } catch (err) {
    logError("opportunity failed (contact saved)", err);
  }

  // --- Step G: respond ------------------------------------------------------
  return NextResponse.json({ ok: true });
}

/** Find the "Fleet Size" contact custom field; create it if missing. Returns
 *  null (and logs) if it can't be resolved, so the upsert proceeds without it. */
async function resolveFleetFieldId(): Promise<string | null> {
  if (memoFleetFieldId !== undefined) return memoFleetFieldId;
  try {
    const fields = await getContactCustomFields();
    const match = fields.find(
      (f) =>
        f.name?.toLowerCase().includes("fleet") ||
        f.fieldKey?.toLowerCase().includes("fleet")
    );
    if (match?.id) {
      memoFleetFieldId = match.id;
      return memoFleetFieldId;
    }
    // Not found — try to create it.
    const created = await createContactTextCustomField("Fleet Size");
    memoFleetFieldId = created.id ?? null;
    if (!memoFleetFieldId) {
      logError("Fleet Size field could not be created — flag Dan to add it in the GHL UI");
    }
    return memoFleetFieldId;
  } catch (err) {
    logError("resolveFleetFieldId failed — proceeding without Fleet Size", err);
    memoFleetFieldId = null;
    return null;
  }
}

/** Resolve the target pipeline + entry stage from env, validating the IDs
 *  against the LIVE RouleurCo pipelines. Returns null (skip opportunity) until
 *  the target is configured and confirmed. */
async function resolveTarget(): Promise<{ pipelineId: string; pipelineStageId: string } | null> {
  if (memoTarget !== undefined) return memoTarget;

  if (!TARGET_PIPELINE_ID || !TARGET_PIPELINE_STAGE_ID) {
    // Opportunity creation intentionally disabled — website registrants are
    // captured as tagged contacts only until a dedicated nurture pipeline
    // exists. Set GHL_PIPELINE_ID + GHL_PIPELINE_STAGE_ID to enable (they are
    // validated against the live RouleurCo pipelines below).
    memoTarget = null;
    return memoTarget;
  }

  // Configured — validate the IDs belong to the live RouleurCo pipelines.
  try {
    const pipelines = await getPipelines();
    const pipeline = pipelines.find((p) => p.id === TARGET_PIPELINE_ID);
    const stage = pipeline?.stages?.find((s) => s.id === TARGET_PIPELINE_STAGE_ID);
    if (pipeline && stage) {
      memoTarget = { pipelineId: TARGET_PIPELINE_ID, pipelineStageId: TARGET_PIPELINE_STAGE_ID };
    } else {
      logError(
        `configured pipeline/stage not found in RouleurCo (pipeline ${TARGET_PIPELINE_ID}, stage ${TARGET_PIPELINE_STAGE_ID}) — skipping opportunity`
      );
      memoTarget = null;
    }
  } catch (err) {
    logError("pipeline validation failed — skipping opportunity", err);
    memoTarget = null;
  }
  return memoTarget;
}
