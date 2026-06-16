export type RegisterInterestPayload = {
  firstName: string;
  companyName: string;
  location: string;
  fleetSize: string;
  email: string;
  notes?: string;
};

export async function submitToGHL(data: RegisterInterestPayload): Promise<true> {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("GHL webhook URL not configured");
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      source: "rouleurco-register-interest",
      // Hints for the receiving GHL inbound-webhook workflow. NOTE: there is no
      // "New Enquiry" stage in GHL today — the entry stage is "New Lead" (e.g. the
      // Marketing Pipeline). The workflow should file this contact at that entry
      // stage and apply the tags below so website interest stays distinct from
      // live hire enquiries. No nurture sequence is attached yet (lead gen is
      // paused) — capture and notify only.
      pipelineStage: "New Lead",
      tags: ["Source — Web Form", "Interest — Website"],
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }

  return true;
}
