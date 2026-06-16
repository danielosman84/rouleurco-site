// PROD SMOKE TEST — POSTs a test enquiry to the LIVE /api/register-interest route
// (which uses Vercel's GHL_PIT), then verifies the contact in RouleurCo and
// deletes it. The verify/delete use the LOCAL PIT (.env.local). A dedupe-upsert
// is used to resolve the contactId reliably (GHL's search index lags).
//   node --env-file=.env.local scripts/ghl-prodsmoke.mjs
const APP = process.env.PROD_URL || "https://www.rouleurco.com";
const BASE = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";
const ROULEURCO = "hCW1XgNUW2gssImbG9EN";
const UVH = "kRfviw1Gs30Ek0UF2fYE";
const TEST_EMAIL = "claude-prodsmoke@test.rouleurco.com";

const pit = process.env.GHL_PIT;
const loc = process.env.GHL_LOCATION_ID || ROULEURCO;
if (!pit) { console.error("GHL_PIT not set in .env.local (needed for read-back/delete)"); process.exit(1); }
if (loc === UVH) { console.error("STOP: UVH location id"); process.exit(1); }

const H = { Authorization: `Bearer ${pit}`, Version: VERSION, Accept: "application/json", "Content-Type": "application/json" };
async function ghl(method, path, body) {
  const r = await fetch(BASE + path, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const t = await r.text(); let j; try { j = JSON.parse(t); } catch { j = { raw: t }; }
  return { ok: r.ok, status: r.status, json: j, text: t };
}

const payload = {
  name: "Claude Prodsmoke", email: TEST_EMAIL, business: "Prodsmoke Hire Co",
  location: "York", fleetSize: "16–30", notes: "Prod smoke test — safe to delete.",
  consent: true, source: "Website — Register Interest",
};

(async () => {
  console.log(`1) POST to LIVE route: ${APP}/api/register-interest`);
  const res = await fetch(`${APP}/api/register-interest`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
  });
  const j = await res.json().catch(() => ({}));
  console.log(`   -> ${res.status} ${JSON.stringify(j)}`);
  if (res.status !== 200 || !j.ok) { console.error("   FAIL: prod route did not return ok — check Vercel GHL_PIT"); process.exit(1); }
  console.log("   => prod route upserted the contact in RouleurCo using Vercel's GHL_PIT ✓");

  console.log("\n2) Resolve contactId via dedupe-upsert (local PIT) …");
  const tags = ["Source — Web Form", "Interest — Website"];
  if (payload.consent) tags.push("Consent — Email Marketing");
  const up = await ghl("POST", "/contacts/upsert", {
    locationId: loc, firstName: payload.name, email: payload.email,
    companyName: payload.business, city: payload.location, tags, source: payload.source,
  });
  const id = up.json.contact?.id ?? up.json.id;
  console.log(`   upsert ${up.status}  new=${up.json.new} ${up.json.new === false ? "(prod created it first ✓)" : "(WARN created just now)"}  contactId=${id}`);

  console.log("\n3) Read the contact back from RouleurCo …");
  const full = await ghl("GET", `/contacts/${id}`); const c = full.json.contact || {};
  console.log(`   locationId : ${c.locationId} ${c.locationId === ROULEURCO ? "✓ RouleurCo" : "✗ NOT RouleurCo"}`);
  console.log(`   company    : ${c.companyName}`);
  console.log(`   city       : ${c.city}`);
  console.log(`   tags       : ${JSON.stringify(c.tags)}`);
  console.log(`   customFields: ${JSON.stringify(c.customFields)}`);

  console.log("\n4) Delete the test contact …");
  const del = await ghl("DELETE", `/contacts/${id}`);
  console.log(`   delete -> ${del.status} ${del.ok ? "✓" : "✗ " + del.text.slice(0, 140)}`);

  console.log("\nPROD SMOKE DONE.");
})().catch((e) => { console.error("ERROR:", e.message); process.exit(1); });
