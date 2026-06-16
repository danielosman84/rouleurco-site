import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { RegisterInterestForm } from "@/components/forms/RegisterInterestForm";

export const metadata: Metadata = buildMetadata({
  title: "Register Your Interest",
  description:
    "See whether RouleurCo fits how your hire desk runs. Register your interest — no commitment, just a conversation about winning more of the hires that grow your year.",
  path: "/register-interest",
});

const reassurance = [
  "No hard sell — just a conversation",
  "We'll show you how it maps to your hire desk",
  "Built for independent UK rental operators",
];

const whatNext = [
  {
    title: "We'll be in touch",
    body: "Within two business days. A real person, not an automated drip — just a short note to find a time that suits.",
  },
  {
    title: "A walk-through of how it works",
    body: "We'll show you how RouleurCo captures every enquiry, tracks where your hires come from, and follows up until you get an answer.",
  },
  {
    title: "An honest read on fit",
    body: "If it's right for how your desk runs, brilliant. If it isn't, we'll tell you. There's nothing to sign and nothing to pay.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What is RouleurCo?",
    answer:
      "RouleurCo is a sales and automation platform built specifically for independent vehicle rental companies. It sits alongside the software that runs your fleet and the inbox that holds your emails, and it runs the commercial side — capturing every enquiry, tracking where your hires come from, and making sure quotes get followed up until you get an answer.",
  },
  {
    question: "What happens after I register?",
    answer:
      "We'll be in touch within two business days for a short, no-pressure conversation. We'll show you how it works and give you an honest read on whether it's a fit for how your hire desk runs.",
  },
  {
    question: "Is there any commitment?",
    answer:
      "None. Registering your interest just starts a conversation. There's nothing to sign and nothing to pay.",
  },
];

export default function RegisterInterestPage() {
  return (
    <>
      {/* HERO with form */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div className="container-rc relative py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
            <div className="flex flex-col gap-6 max-w-xl">
              <FadeUp>
                <Eyebrow variant="white">Register your interest</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
                  See if it&apos;s a fit for how your hire desk runs
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-lg sm:text-xl text-white/75 leading-relaxed text-balance">
                  RouleurCo helps independent rental companies win more of the right hires — especially the long-term ones that steady the year. Register your interest and we&apos;ll show you how it works. No commitment.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-4 flex flex-col gap-3">
                  {reassurance.map((text) => (
                    <BulletProof key={text} text={text} />
                  ))}
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.1}>
              <div className="rounded-card bg-white p-7 sm:p-8 shadow-2xl ring-1 ring-black/5">
                <Eyebrow>Register your interest</Eyebrow>
                <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-brand-navy">
                  Interested? Tell us where to reach you.
                </h2>
                <p className="mt-1 text-sm text-brand-text-2">
                  No commitment. We&apos;ll show you how it works and whether it&apos;s a fit for how your hire desk runs.
                </p>
                <div className="mt-6">
                  <RegisterInterestForm />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What happens next"
            heading="A conversation, not a sales pitch."
            lead="We're in a quiet build phase, working with a small group of operators. Registering your interest just puts you on the list to see it."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {whatNext.map((w, i) => (
              <StaggerItem key={w.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-blue text-white font-display font-bold">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Common questions"
            heading="A couple of quick answers before you register."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
          <p className="mt-8 text-center text-sm text-brand-muted">
            Prefer to ask first? <Link href="/contact" className="text-brand-blue underline">Get in touch directly.</Link>
          </p>
        </div>
      </section>

      <Script
        id="register-interest-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}

function BulletProof({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
        <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="text-sm text-white/85">{text}</span>
    </div>
  );
}
