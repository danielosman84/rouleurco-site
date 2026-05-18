import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { RegisterInterestForm } from "@/components/forms/RegisterInterestForm";

export const metadata: Metadata = buildMetadata({
  title: "Join the UVH Supplier Network",
  description:
    "Register your independent van or vehicle hire company to receive qualified B2B enquiries through the Unified Vehicle Hire network. Powered by RouleurCo.",
  path: "/register-interest",
});

const whyJoin = [
  {
    title: "Qualified B2B enquiries matched to your fleet and location",
    body: "Businesses come to UVH looking for a local hire operator. You only see enquiries that fit what you offer.",
  },
  {
    title: "No aggregator fees — enquiries direct to your hire desk",
    body: "We don&rsquo;t take a cut of the hire. Enquiries land in your inbox so you can quote and book on your own terms.",
  },
  {
    title: "Backed by RouleurCo — so no enquiry goes cold",
    body: "Every supplier in the network is powered by RouleurCo&rsquo;s automated follow-up, so qualified leads turn into confirmed hires.",
  },
];

const whoFor = [
  "Independent van hire, car &amp; van hire, or commercial vehicle rental operators",
  "UK-based with an active hire desk and a fleet of 1–50 vehicles",
  "Operators who can respond to qualified enquiries within 24 hours",
];

const whoNot = [
  "National chains (Enterprise, Hertz, Europcar, Sixt, Avis, etc.)",
  "Franchise operations of national brands",
  "Peer-to-peer car sharing platforms",
];

const platformFeatures = [
  {
    title: "Enquiry Pipeline",
    body: "Every UVH enquiry lands in one structured pipeline. No notepads, no scattered spreadsheets, no missed follow-ups.",
  },
  {
    title: "Unified Inbox",
    body: "SMS, email, Facebook, web chat — all messages in one place, linked to the customer&rsquo;s record.",
  },
  {
    title: "Automated Follow-Up",
    body: "Pre-built sequences fire automatically after every quote. Hires don&rsquo;t get forgotten on busy days.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What is the Unified Vehicle Hire network?",
    answer:
      "Unified Vehicle Hire (UVH) is a B2B introduction service that connects businesses looking to hire vehicles with trusted local hire operators. We do the marketing, qualification and routing — you handle the hire. There&apos;s no commission on the hire itself.",
  },
  {
    question: "How do I get listed as a hire operator?",
    answer:
      "Register your interest using the form above. We&apos;ll be in touch within 2 business days to walk through your fleet, locations, and the kinds of enquiries you can handle — then add you to the supplier network for your area.",
  },
  {
    question: "What is RouleurCo?",
    answer:
      "RouleurCo is the sales and automation platform that sits behind every UVH supplier. It captures enquiries, sends quotes, automates follow-ups, and tracks every hire from first contact to confirmed booking. It&apos;s how we make sure UVH enquiries actually convert into hires.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "There&apos;s no cost to register your interest or be considered for the network. The RouleurCo platform itself is a paid subscription with a founding operator rate for the first 10 companies that join. We&apos;ll walk through pricing in your initial conversation — no surprises.",
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
                <Eyebrow variant="white">For independent hire operators</Eyebrow>
              </FadeUp>
              <FadeUp delay={0.05}>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
                  Get qualified B2B hire enquiries for your area
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-lg sm:text-xl text-white/75 leading-relaxed text-balance">
                  Unified Vehicle Hire connects businesses with trusted local hire operators. Register your interest to join the supplier network — and discover the platform behind it.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="mt-4 flex flex-col gap-3">
                  <BulletProof text="No aggregator fees on the hire itself" />
                  <BulletProof text="Enquiries direct to your hire desk" />
                  <BulletProof text="We&rsquo;ll respond within 2 business days" />
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.1}>
              <div className="rounded-card bg-white p-7 sm:p-8 shadow-2xl ring-1 ring-black/5">
                <Eyebrow>Register Your Interest</Eyebrow>
                <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-brand-navy">
                  Tell us about your hire desk
                </h2>
                <p className="mt-1 text-sm text-brand-text-2">
                  Takes under a minute. We&apos;ll be in touch within 2 business days.
                </p>
                <div className="mt-6">
                  <RegisterInterestForm />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Why join the network"
            heading="Built so qualified enquiries actually convert."
            lead="UVH brings the demand. RouleurCo makes sure it doesn&rsquo;t fall through the cracks at your hire desk."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {whyJoin.map((w) => (
              <StaggerItem key={w.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                    {w.title}
                  </h3>
                  <p
                    className="mt-2 text-sm text-brand-text-2 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: w.body }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Who this is for"
            heading="Independent UK hire operators with an active fleet."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
            <FadeUp>
              <div className="rounded-card border border-brand-green/30 bg-brand-green/5 p-7">
                <Badge tone="green">Good fit</Badge>
                <ul className="mt-5 flex flex-col gap-3">
                  {whoFor.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-brand-text-2">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green text-xs font-bold">
                        ✓
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <Badge tone="red">Not a fit</Badge>
                <ul className="mt-5 flex flex-col gap-3">
                  {whoNot.map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-brand-text-2">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">
                        ✕
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* UVH CONTEXT */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <FadeUp>
            <Eyebrow>About Unified Vehicle Hire</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
              The introduction service connecting UK businesses with local hire operators.
            </h2>
            <p className="mt-5 text-lg text-brand-text-2 leading-relaxed">
              Unified Vehicle Hire (UVH) is a B2B introduction service that matches businesses needing to hire vehicles with trusted local hire operators across the UK. We do the marketing, qualification and routing — operators handle the hire on their own terms.
            </p>
            <p className="mt-4 text-brand-text-2 leading-relaxed">
              No commission on the hire. No long-form aggregator listings. Just a clean route from business demand to local supply.
            </p>
            <div className="mt-8">
              <a
                href="https://unifiedvehiclehire.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-semibold text-brand-blue hover:text-brand-blue-hover underline underline-offset-4"
              >
                Visit unifiedvehiclehire.co.uk
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ROULEURCO INTRO */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The platform behind the network"
            heading="RouleurCo makes sure UVH enquiries actually convert."
            lead="Every supplier in the network runs on RouleurCo — a sales and automation platform pre-configured for vehicle rental."
            variant="dark"
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {platformFeatures.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7">
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p
                    className="mt-3 text-sm text-white/70 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeUp delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/how-it-works" variant="primary" size="lg">
                See How It Works
              </ButtonLink>
              <ButtonLink href="/features" variant="ghost-white" size="lg">
                Explore the Platform →
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Common Questions"
            heading="Quick answers before you register."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
          <p className="mt-8 text-center text-sm text-brand-muted">
            Still got a question? <Link href="/contact" className="text-brand-blue underline">Get in touch directly.</Link>
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
      <span
        className="text-sm text-white/85"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
