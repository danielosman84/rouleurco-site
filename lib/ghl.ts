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
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }

  return true;
}
