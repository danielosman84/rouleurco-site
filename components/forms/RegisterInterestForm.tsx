"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fleetSizes = ["1–5", "6–15", "16–30", "31–50", "50+"] as const;

export function RegisterInterestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("firstName") ?? "").trim(),
      business: String(formData.get("companyName") ?? "").trim(),
      location: String(formData.get("location") ?? "").trim(),
      fleetSize: String(formData.get("fleetSize") ?? ""),
      email: String(formData.get("email") ?? "").trim(),
      notes: String(formData.get("notes") ?? "").trim(),
      consent: formData.get("consent") === "on",
      source: "Website — Register Interest",
    };

    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-card border border-brand-green/30 bg-brand-green/10 p-8 text-center"
      >
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-brand-green text-white">
          <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">
          Thanks — we&apos;ve got your details.
        </h3>
        <p className="mt-3 text-brand-text-2 leading-relaxed">
          We&apos;ll be in touch within two business days. No hard sell — just a conversation about whether it&apos;s a fit for how your hire desk runs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Field
        id="firstName"
        name="firstName"
        label="First name"
        required
        autoComplete="given-name"
      />
      <Field
        id="companyName"
        name="companyName"
        label="Company name"
        required
        autoComplete="organization"
      />
      <Field
        id="location"
        name="location"
        label="Location / Town"
        required
        autoComplete="address-level2"
        helper="So we know roughly where you operate."
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="fleetSize"
          className="font-display text-sm font-semibold text-brand-navy"
        >
          Fleet size <span className="text-brand-red">*</span>
        </label>
        <select
          id="fleetSize"
          name="fleetSize"
          required
          defaultValue=""
          className="w-full rounded-btn border border-brand-mid bg-white px-4 py-3 text-base text-brand-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 min-h-[44px]"
        >
          <option value="" disabled>Select fleet size…</option>
          {fleetSizes.map((s) => (
            <option key={s} value={s}>{s} vehicles</option>
          ))}
        </select>
      </div>

      <Field
        id="email"
        name="email"
        type="email"
        label="Email address"
        required
        autoComplete="email"
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="notes"
          className="font-display text-sm font-semibold text-brand-navy"
        >
          Notes <span className="text-brand-muted font-normal">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="w-full rounded-btn border border-brand-mid bg-white px-4 py-3 text-base text-brand-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
          placeholder="Anything we should know about your hire desk?"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          className="mt-0.5 size-4 shrink-0 rounded border-brand-mid accent-brand-blue focus:ring-2 focus:ring-brand-blue/30"
        />
        <span className="text-sm text-brand-text-2 leading-relaxed">
          Keep me updated about RouleurCo by email.{" "}
          <span className="text-brand-muted">(optional)</span>
        </span>
      </label>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-card border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-navy"
        >
          <strong className="font-display block mb-1">We couldn&apos;t submit your form.</strong>
          {errorMsg ?? "Please try again, or email hello@rouleurco.com."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-brand-blue px-6 py-3 font-display font-semibold text-white hover:bg-brand-blue-hover disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px] transition-colors"
      >
        {status === "submitting" ? "Submitting…" : "Register my interest"}
      </button>

      <p className="text-sm text-brand-muted text-center">
        We&apos;ll be in touch within two business days. No hard sell — just a conversation.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  helper,
}: {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
  autoComplete?: string;
  helper?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-display text-sm font-semibold text-brand-navy"
      >
        {label}{" "}
        {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-btn border border-brand-mid bg-white px-4 py-3 text-base text-brand-text focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 min-h-[44px]"
      />
      {helper && (
        <p className="text-xs text-brand-muted">{helper}</p>
      )}
    </div>
  );
}
