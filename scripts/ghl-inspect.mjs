// READ-ONLY RouleurCo GHL inspection — lists pipelines + entry stages and checks
// the Fleet Size contact custom field. Makes no writes.
//   Run: node --env-file=.env.local scripts/ghl-inspect.mjs
const BASE = "https://services.leadconnectorhq.com";
const VERSION = "2021-07-28";
const ROULEURCO = "hCW1XgNUW2gssImbG9EN";
const UVH = "kRfviw1Gs30Ek0UF2fYE";

const pit = process.env.GHL_PIT;
const loc = process.env.GHL_LOCATION_ID || ROULEURCO;

if (!pit) {
  console.error("GHL_PIT not set — add it to .env.local");
  process.exit(1);
}
if (loc === UVH) {
  console.error("STOP: GHL_LOCATION_ID is the UVH account. Wrong target.");
  process.exit(1);
}

async function ghl(path) {
  const res = await fetch(BASE + path, {
    headers: { Authorization: `Bearer ${pit}`, Version: VERSION, Accept: "application/json" },
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status}: ${text.slice(0, 300)}`);
  return json;
}

async function main() {
  console.log(`Requested locationId: ${loc}\n`);

  const data = await ghl(`/opportunities/pipelines?locationId=${loc}`);
  const pipelines = data.pipelines || [];

  // Account guard.
  const locs = [...new Set(pipelines.map((p) => p.locationId).filter(Boolean))];
  if (locs.includes(UVH)) {
    console.error("STOP: pipelines came back scoped to UVH (kRfviw1Gs30Ek0UF2fYE). Wrong account.");
    process.exit(1);
  }
  if (locs.length && !locs.includes(ROULEURCO)) {
    console.error(`STOP: response locationId(s) ${locs.join(", ")} are not RouleurCo (${ROULEURCO}).`);
    process.exit(1);
  }
  console.log(`Pipelines: ${pipelines.length}; response locationId(s): ${locs.join(", ") || "(not on objects)"}`);
  console.log("=".repeat(60));

  for (const p of pipelines) {
    const stages = (p.stages || []).slice().sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
    const entry = stages[0];
    console.log(`\nPIPELINE: ${p.name}`);
    console.log(`  pipelineId:  ${p.id}`);
    console.log(`  entry stage: ${entry?.name}  ->  ${entry?.id}`);
    console.log(`  all stages:  ${stages.map((s) => s.name).join("  ->  ")}`);
  }

  console.log("\n" + "=".repeat(60));
  const cf = await ghl(`/locations/${loc}/customFields?model=contact`);
  const fields = cf.customFields || [];
  const fleet = fields.find(
    (f) =>
      (f.name || "").toLowerCase().includes("fleet") ||
      (f.fieldKey || "").toLowerCase().includes("fleet")
  );
  console.log(
    fleet
      ? `Fleet Size field EXISTS: "${fleet.name}"  id=${fleet.id}  key=${fleet.fieldKey}`
      : `Fleet Size field NOT found among ${fields.length} contact fields — the API route will create it on first submit.`
  );
}

main().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
