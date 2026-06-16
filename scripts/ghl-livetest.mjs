// LIVE TEST — replicates the exact GHL sequence app/api/register-interest/route.ts
// performs (find/create Fleet Size -> upsert contact + tags -> note), then reads
// the record back, proves dedupe (upsert twice), checks no opportunity exists,
// and DELETES the test contact. Writes go to RouleurCo (hCW1XgNUW2gssImbG9EN) only.
//   Run: node --env-file=.env.local scripts/ghl-livetest.mjs
const BASE = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";
const ROULEURCO = "hCW1XgNUW2gssImbG9EN";
const UVH = "kRfviw1Gs30Ek0UF2fYE";
const TEST_EMAIL = "claude-livetest@test.rouleurco.com";

const pit = process.env.GHL_PIT;
const loc = process.env.GHL_LOCATION_ID || ROULEURCO;
if (!pit) { console.error("GHL_PIT not set"); process.exit(1); }
if (loc === UVH) { console.error("STOP: UVH location id"); process.exit(1); }

const H = { Authorization: `Bearer ${pit}`, Version: VERSION, Accept: "application/json", "Content-Type": "application/json" };
async function ghl(method, path, body) {
  const res = await fetch(BASE + path, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { json = { raw: text }; }
  return { ok: res.ok, status: res.status, json, text };
}
async function findByEmail(email) {
  const r = await ghl("GET", `/contacts/?locationId=${loc}&query=${encodeURIComponent(email)}`);
  if (!r.ok) throw new Error(`contact search ${r.status}: ${r.text.slice(0, 200)}`);
  return (r.json.contacts || []).filter((c) => (c.email || "").toLowerCase() === email.toLowerCase());
}

// Mirror of the route's input -> GHL mapping.
const input = {
  name: "Claude Livetest",
  email: TEST_EMAIL,
  business: "Livetest Hire Co",
  location: "Leeds",
  fleetSize: "6–15",
  notes: "Automated live test — safe to delete.",
  consent: true,
  source: "Website — Register Interest",
};

async function resolveFleetField() {
  const cf = await ghl("GET", `/locations/${loc}/customFields?model=contact`);
  if (!cf.ok) { console.log(`  custom fields read failed ${cf.status}: ${cf.text.slice(0, 160)}`); return { id: null, existed: false }; }
  const fields = cf.json.customFields || [];
  const found = fields.find((f) => (f.name || "").toLowerCase().includes("fleet") || (f.fieldKey || "").toLowerCase().includes("fleet"));
  if (found) return { id: found.id, existed: true };
  const created = await ghl("POST", `/locations/${loc}/customFields`, { name: "Fleet Size", dataType: "TEXT", model: "contact" });
  if (!created.ok) { console.log(`  Fleet Size CREATE failed ${created.status}: ${created.text.slice(0, 200)}`); return { id: null, existed: false }; }
  const f = created.json.customField || created.json;
  return { id: f.id, existed: false };
}

async function upsert(fleetId) {
  const tags = ["Source — Web Form", "Interest — Website"];
  if (input.consent) tags.push("Consent — Email Marketing");
  const body = {
    locationId: loc,
    firstName: input.name,
    email: input.email,
    companyName: input.business,
    city: input.location,
    tags,
    source: input.source,
    customFields: fleetId ? [{ id: fleetId, value: input.fleetSize }] : undefined,
  };
  return ghl("POST", "/contacts/upsert", body);
}

(async () => {
  console.log(`Location: ${loc} ${loc === ROULEURCO ? "(RouleurCo ✓)" : "(NOT RouleurCo ✗)"}\n`);

  console.log("1) Resolve Fleet Size custom field …");
  const fleet = await resolveFleetField();
  console.log(`   Fleet Size: ${fleet.id ? (fleet.existed ? "already existed" : "CREATED") : "unavailable"}  id=${fleet.id || "-"}`);

  console.log("\n2) Upsert #1 (consent ticked) …");
  const u1 = await upsert(fleet.id);
  console.log(`   upsert -> ${u1.status} ${u1.ok ? "✓" : "✗ " + u1.text.slice(0, 200)}`);
  if (!u1.ok) process.exit(1);
  const id = u1.json.contact?.id ?? u1.json.id;
  console.log(`   contactId: ${id}  (new: ${u1.json.new})`);

  console.log("\n3) Add note …");
  const note = await ghl("POST", `/contacts/${id}/notes`, { body: input.notes });
  console.log(`   note -> ${note.status} ${note.ok ? "✓" : "✗ " + note.text.slice(0, 160)}`);

  console.log("\n4) Read the contact back …");
  const full = await ghl("GET", `/contacts/${id}`);
  const c = full.json.contact || {};
  console.log(`   locationId : ${c.locationId} ${c.locationId === ROULEURCO ? "✓" : "✗ NOT RouleurCo"}`);
  console.log(`   name       : ${c.firstName ?? ""} ${c.lastName ?? ""}`);
  console.log(`   companyName: ${c.companyName}`);
  console.log(`   city       : ${c.city}`);
  console.log(`   tags       : ${JSON.stringify(c.tags)}`);
  console.log(`   customFields: ${JSON.stringify(c.customFields)}`);

  console.log("\n5) Confirm NO opportunity for this contact …");
  const opp = await ghl("GET", `/opportunities/search?location_id=${loc}&contact_id=${id}`);
  if (opp.ok) console.log(`   opportunities: ${(opp.json.opportunities || []).length} (expected 0)`);
  else console.log(`   opportunity search returned ${opp.status} (skipping — route does not create one anyway)`);

  console.log("\n6) Upsert #2 (same email) — dedupe …");
  const u2 = await upsert(fleet.id);
  const id2 = u2.json.contact?.id ?? u2.json.id;
  console.log(`   upsert -> ${u2.status}  contactId: ${id2}  sameId: ${id2 === id ? "yes ✓" : "no ✗"}`);
  const matches = await findByEmail(TEST_EMAIL);
  console.log(`   contacts with this email: ${matches.length} ${matches.length === 1 ? "✓" : "✗"}`);

  console.log("\n7) Delete the test contact …");
  const del = await ghl("DELETE", `/contacts/${id}`);
  console.log(`   delete -> ${del.status} ${del.ok ? "✓" : "✗ " + del.text.slice(0, 160)}`);
  const after = await findByEmail(TEST_EMAIL);
  console.log(`   contacts after delete: ${after.length} ${after.length === 0 ? "✓" : "✗"}`);

  console.log("\nDONE.");
})().catch((e) => { console.error("ERROR:", e.message); process.exit(1); });
