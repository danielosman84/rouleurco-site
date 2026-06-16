// ROUTE TEST — POSTs the form's exact payload to the running /api/register-interest
// route, then verifies the CONTACT and the OPPORTUNITY (nurture pipeline, entry
// stage) in RouleurCo, proves dedupe of both on resubmit, and deletes the test
// contact. Submit goes through the route; verify/cleanup use the local PIT.
//   1) npm run dev   (server must be running)
//   2) node --env-file=.env.local scripts/ghl-routetest.mjs
const APP = process.env.TEST_BASE_URL || "http://localhost:3000";
const BASE = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";
const ROULEURCO = "hCW1XgNUW2gssImbG9EN";
const UVH = "kRfviw1Gs30Ek0UF2fYE";
const TEST_EMAIL = "claude-routetest@test.rouleurco.com";
const EXPECT_PIPELINE = process.env.GHL_PIPELINE_ID || "";
const EXPECT_STAGE = process.env.GHL_PIPELINE_STAGE_ID || "";

const pit = process.env.GHL_PIT;
const loc = process.env.GHL_LOCATION_ID || ROULEURCO;
if (!pit) { console.error("GHL_PIT not set"); process.exit(1); }
if (loc === UVH) { console.error("STOP: UVH location"); process.exit(1); }
const H = { Authorization: `Bearer ${pit}`, Version: VERSION, Accept: "application/json", "Content-Type": "application/json" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function ghl(method, path, body) {
  const r = await fetch(BASE + path, { method, headers: H, body: body ? JSON.stringify(body) : undefined });
  const t = await r.text(); let j; try { j = JSON.parse(t); } catch { j = { raw: t }; }
  return { ok: r.ok, status: r.status, json: j, text: t };
}
async function opps(contactId) {
  const r = await ghl("GET", `/opportunities/search?location_id=${loc}&contact_id=${encodeURIComponent(contactId)}`);
  return r.ok ? (r.json.opportunities || []) : null;
}
async function oppsWithRetry(contactId, want = 1, tries = 8) {
  let last = [];
  for (let i = 0; i < tries; i++) {
    const o = await opps(contactId);
    if (o && o.length >= want) return o;
    last = o || [];
    await sleep(4000);
  }
  return last;
}

// Exact payload the form sends (see RegisterInterestForm.tsx).
const payload = {
  name: "Claude Routetest", business: "Routetest Hire Co", location: "Hull",
  fleetSize: "31–50", email: TEST_EMAIL, notes: "Route test — safe to delete.",
  consent: true, source: "Website — Register Interest",
};

async function submit() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`${APP}/api/register-interest`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      if (r.status !== 404) { const j = await r.json().catch(() => ({})); return { status: r.status, json: j }; }
    } catch { /* server warming up */ }
    await sleep(2500);
  }
  throw new Error(`dev server never responded at ${APP}`);
}

(async () => {
  console.log(`App: ${APP}  Expect pipeline=${EXPECT_PIPELINE} stage=${EXPECT_STAGE}\n`);

  console.log("1) POST #1 to the route …");
  const s1 = await submit();
  console.log(`   -> ${s1.status} ${JSON.stringify(s1.json)}`);
  if (s1.status !== 200 || !s1.json.ok) { console.error("   FAIL: route did not return ok"); process.exit(1); }

  console.log("2) Resolve contactId (dedupe-upsert, local PIT) …");
  const tags = ["Source — Web Form", "Interest — Website", "Consent — Email Marketing"];
  const up = await ghl("POST", "/contacts/upsert", { locationId: loc, firstName: payload.name, email: payload.email, companyName: payload.business, city: payload.location, tags, source: payload.source });
  const id = up.json.contact?.id ?? up.json.id;
  console.log(`   contactId=${id}  new=${up.json.new} ${up.json.new === false ? "(route created it ✓)" : "(WARN created now)"}`);

  console.log("3) Contact fields …");
  const c = (await ghl("GET", `/contacts/${id}`)).json.contact || {};
  console.log(`   locationId=${c.locationId} ${c.locationId === ROULEURCO ? "✓" : "✗"}  company=${c.companyName}  city=${c.city}`);
  console.log(`   tags=${JSON.stringify(c.tags)}`);
  console.log(`   custom=${JSON.stringify(c.customFields)}`);

  console.log("4) Opportunity (retrying for search-index lag) …");
  let o = await oppsWithRetry(id, 1);
  console.log(`   opportunities found: ${o.length}`);
  for (const op of o) console.log(`     - ${op.name} | pipeline=${op.pipelineId} ${op.pipelineId === EXPECT_PIPELINE ? "✓" : "✗"} | stage=${op.pipelineStageId} ${op.pipelineStageId === EXPECT_STAGE ? "✓(New Lead)" : "✗"} | status=${op.status}`);

  console.log("\n5) Wait 20s, then POST #2 (resubmit) — dedupe …");
  await sleep(20000);
  const s2 = await submit();
  console.log(`   -> ${s2.status} ${JSON.stringify(s2.json)}`);
  await sleep(4000);
  const o2 = await opps(id) || [];
  const byEmail = (await ghl("GET", `/contacts/?locationId=${loc}&query=${encodeURIComponent(TEST_EMAIL)}`)).json.contacts || [];
  console.log(`   opportunities now: ${o2.length} ${o2.length === 1 ? "✓ (no duplicate)" : "✗"}`);
  console.log(`   contacts by email: ${byEmail.length} (search may lag)`);

  console.log("\n6) Delete test contact …");
  const del = await ghl("DELETE", `/contacts/${id}`);
  console.log(`   delete -> ${del.status} ${del.ok ? "✓" : "✗"}`);
  const gone = await ghl("GET", `/contacts/${id}`);
  console.log(`   re-fetch -> ${gone.status} ${gone.status >= 400 ? "✓ gone" : "✗ still present"}`);

  console.log("\nROUTE TEST DONE.");
})().catch((e) => { console.error("ERROR:", e.message); process.exit(1); });
