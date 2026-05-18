import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description:
    "Your enquiry has been received. The RouleurCo team will be in touch within 24 hours.",
  path: "/thank-you",
  noIndex: true,
});

const nextSteps = [
  "We'll review the details you've submitted",
  "A member of the team will contact you — usually within one business day",
  "We'll walk you through the platform and answer any questions",
];

export default function ThankYouPage() {
  return (
    <section className="bg-brand-navy text-white min-h-[80vh] flex items-center py-20">
      <div className="container-rc max-w-2xl text-center">
        <div
          className="mx-auto inline-flex size-[72px] items-center justify-center rounded-full bg-brand-blue"
          aria-hidden="true"
        >
          <svg
            className="size-9 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="mt-8 font-display text-3xl sm:text-4xl font-bold text-balance">
          We&apos;ve received your enquiry
        </h1>

        <p className="mt-4 text-lg text-white/70 leading-relaxed text-balance">
          Someone from the RouleurCo team will be in touch shortly — usually within one business day — to talk through your requirements and next steps.
        </p>

        <div
          className="mx-auto mt-10 h-1 w-12 rounded-full bg-brand-blue"
          aria-hidden="true"
        />

        <div className="mt-10 rounded-card border border-brand-blue/20 bg-brand-blue/10 p-7 text-left">
          <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-blue">
            What happens next
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {nextSteps.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue">
                  <svg
                    className="size-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm text-white/80 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm font-display font-semibold text-white/55 hover:text-white"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to rouleurco.com
        </Link>
      </div>
    </section>
  );
}
