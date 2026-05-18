import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/metadata";
import { buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ComparisonTable, type ComparisonRow } from "@/components/sections/ComparisonTable";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "RouleurCo vs Spreadsheets & Generic CRM",
  description:
    "How RouleurCo compares to spreadsheets, generic CRMs, and rental booking systems. Side-by-side breakdown for independent vehicle hire operators.",
  path: "/compare",
});

const spreadsheetCons = [
  { title: "No automatic follow-up", body: "You have to manually remember to chase every quote. When things get busy, you don't." },
  { title: "No message history", body: "SMS, email, and Facebook conversations are spread across different places. Context is lost constantly." },
  { title: "One person's knowledge", body: "Whoever filled in the row knows the context. Everyone else is guessing. Staff absences = chaos." },
  { title: "No document management", body: "Licences photographed on phones. Insurance certificates in email. Hire agreements in a physical folder nobody opens." },
  { title: "No pipeline visibility", body: "Can't see at a glance how many live enquiries you have, what stage they're at, or what value is in the pipeline." },
];

const rouleurcoPros = [
  { title: "Automated follow-up on every quote", body: "SMS and email sequences fire automatically. Follow-up happens whether the desk is busy or not." },
  { title: "Every message in one inbox", body: "SMS, email, Facebook, Instagram — all channels unified. Full conversation history per customer." },
  { title: "Full team visibility", body: "Every team member sees every enquiry with full context. No single point of knowledge." },
  { title: "Document collection automated", body: "Documents requested, tracked, and stored against every booking. Nothing released without the right paperwork." },
  { title: "Live pipeline with full value visibility", body: "See every open enquiry, its stage, its value, and what's happening next — at a glance." },
];

const genericCrmRows: ComparisonRow[] = [
  { feature: "Ready to use from day one — no build required", cells: [{ kind: "cross", text: "Weeks of setup and customisation" }, { kind: "check", text: "Pre-configured for rental on day one" }] },
  { feature: "Rental-specific pipeline stages", cells: [{ kind: "partial", text: "Build them yourself from scratch" }, { kind: "check", text: "Pre-built: Enquiry → Quote → Confirmed → On Hire" }] },
  { feature: "Two-way SMS from one inbox", cells: [{ kind: "cross", text: "Usually a paid add-on or third-party integration" }, { kind: "check", text: "Built in — included as standard" }] },
  { feature: "Facebook and Instagram messages", cells: [{ kind: "partial", text: "Integration required — often expensive" }, { kind: "check", text: "Connected natively" }] },
  { feature: "Automated follow-up for vehicle hire quotes", cells: [{ kind: "partial", text: "Possible — but requires significant workflow building" }, { kind: "check", text: "Pre-built workflows included" }] },
  { feature: "Document collection before vehicle release", cells: [{ kind: "cross", text: "Not available — needs a separate tool" }, { kind: "check", text: "Built into the onboarding flow" }] },
  { feature: "E-signature for hire agreements", cells: [{ kind: "cross", text: "Third-party integration and additional cost" }, { kind: "check", text: "Included — no extra tools needed" }] },
  { feature: "Missed call text-back", cells: [{ kind: "cross", text: "Not standard — complex to build" }, { kind: "check", text: "Automatic — fires within seconds" }] },
  { feature: "Setup support for vehicle rental specifically", cells: [{ kind: "cross", text: "Generic support — no rental expertise" }, { kind: "check", text: "Configured by people who know rental" }] },
  { feature: "Pricing that works for an independent operator", cells: [{ kind: "partial", text: "Can scale to hundreds per month for full feature sets" }, { kind: "check", text: "Built for independents — not enterprise pricing" }] },
];

const nothingStats = [
  { num: "1 in 3", body: "Enquiries that receive no follow-up after the initial quote at a typical unstructured hire desk" },
  { num: "4+ hrs", body: "Average time per week spent by hire desk staff on manual chasing, payment follow-up, and document requests" },
  { num: "#1", body: "Reason independent rental companies lose hires to competitors — not price, not fleet — process gaps" },
];

const faqs: FAQItem[] = [
  {
    question: "How does RouleurCo compare to spreadsheets for managing rental enquiries?",
    answer:
      "Spreadsheets record what happened. They don't help you do anything about it. RouleurCo acts — automatically — so your team doesn't have to. Follow-up sequences fire on their own, every message lives in one inbox, and the whole team sees the same live pipeline.",
  },
  {
    question: "Is RouleurCo a generic CRM?",
    answer:
      "No. Generic CRMs like HubSpot or Salesforce are powerful — but they're built for sales teams selling software or financial services, not for hire desks managing vehicle enquiries. Adapting one for rental takes months of work, a budget for integrations, and someone technical to maintain it. RouleurCo arrives pre-configured for rental.",
  },
  {
    question: "How much can a structured follow-up process improve hire conversion?",
    answer:
      "A typical van hire enquiry is worth £400–£800. If one in four of your unstructured enquiries converts and you handle 30 enquiries a month, that's about 7–8 hires. Add consistent follow-up and push that to 9–10 per month. That's one or two additional hires from the same enquiry volume — no new leads required.",
  },
];

export default function ComparePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Compare" }]}
        eyebrow="Why RouleurCo"
        heading="Most rental companies are running on spreadsheets, notepads, or generic CRM software. Here's how that compares."
        lead="This isn't a comparison of feature lists. It's a comparison of what actually happens on the hire desk — day to day, enquiry by enquiry."
      />

      {/* VS SPREADSHEETS */}
      <section id="vs-spreadsheets" className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Comparison 1 of 3</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              RouleurCo vs Spreadsheets
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Spreadsheets are the most common enquiry management tool in independent rental. They&apos;re free, familiar, and completely inadequate for following up properly.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-8">
                <div className="flex items-center gap-2 mb-6 font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-red">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6M9 12h6M9 15h4" />
                  </svg>
                  Spreadsheets
                </div>
                <ul className="flex flex-col gap-4">
                  {spreadsheetCons.map((c) => (
                    <li key={c.title} className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red font-bold text-xs">
                        ✕
                      </span>
                      <div>
                        <strong className="font-display text-sm text-brand-navy">
                          {c.title}
                        </strong>
                        <p className="mt-1 text-sm text-brand-text-2 leading-relaxed">
                          {c.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="h-full rounded-card bg-brand-navy text-white p-8 ring-1 ring-white/10">
                <div className="flex items-center gap-2 mb-6 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/55">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  RouleurCo
                </div>
                <ul className="flex flex-col gap-4">
                  {rouleurcoPros.map((c) => (
                    <li key={c.title} className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green font-bold text-xs">
                        ✓
                      </span>
                      <div>
                        <strong className="font-display text-sm text-white">
                          {c.title}
                        </strong>
                        <p className="mt-1 text-sm text-white/55 leading-relaxed">
                          {c.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15}>
            <div className="mt-10 rounded-card bg-brand-lightbg border-l-4 border-brand-blue p-8">
              <p className="font-display text-lg font-bold text-brand-navy leading-snug text-balance">
                The honest truth about spreadsheets: they record what happened. They don&apos;t help you do anything about it. RouleurCo acts — automatically — so your team doesn&apos;t have to.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VS GENERIC CRM */}
      <section id="vs-generic-crm" className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Comparison 2 of 3</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              RouleurCo vs Generic CRM Software
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              Generic CRMs — HubSpot, Salesforce, Zoho, Pipedrive — are powerful tools. But they were built for sales teams selling software subscriptions or financial services. Not for a hire desk managing vehicle enquiries.
            </p>
          </FadeUp>

          <div className="mt-10">
            <ComparisonTable
              headers={["What the hire desk needs", "Generic CRM", "RouleurCo"]}
              rows={genericCrmRows}
              highlightColumn={2}
            />
          </div>

          <FadeUp delay={0.1}>
            <div className="mt-10 rounded-card bg-brand-navy text-white p-8">
              <p className="font-display text-lg font-bold mb-2">
                Generic CRM isn&apos;t the wrong answer because it&apos;s bad software.
              </p>
              <p className="text-white/70 leading-relaxed">
                It&apos;s the wrong answer because adapting it for rental takes months of work, a budget for integrations, and someone technical to maintain it. Most independent operators don&apos;t have any of those things. RouleurCo is already built for rental — so you don&apos;t have to build it yourself.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VS DOING NOTHING */}
      <section id="vs-nothing" className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Comparison 3 of 3</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              RouleurCo vs Doing Nothing
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              The most common alternative isn&apos;t spreadsheets or a CRM. It&apos;s just carrying on as normal — because changing how the hire desk works feels like too much effort. Here&apos;s what that costs.
            </p>
          </FadeUp>

          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {nothingStats.map((s) => (
              <StaggerItem key={s.num}>
                <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-8 text-center">
                  <div className="font-display text-5xl font-bold text-brand-navy leading-none">
                    {s.num}
                  </div>
                  <p className="mt-4 text-sm text-brand-text-2 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-mid bg-white p-8">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
                  The cost of a missed follow-up
                </h3>
                <p className="text-brand-text-2 leading-relaxed mb-4">
                  A typical van hire enquiry might be worth £400–£800. If one in four of your unstructured enquiries converts and you handle 30 enquiries a month, that&apos;s about 7–8 hires.
                </p>
                <p className="text-brand-text-2 leading-relaxed">
                  Add consistent follow-up and push that to 9–10 per month. That&apos;s one or two additional hires — every month — from the same enquiry volume. No new leads required. Just a better process.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-card border border-brand-mid bg-white p-8">
                <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
                  The cost of inconsistent document collection
                </h3>
                <p className="text-brand-text-2 leading-relaxed mb-4">
                  One incident with a driver whose licence details weren&apos;t properly checked. One hire agreement missing from the file when a damage dispute arises. One complaint that takes hours to resolve because nothing is properly recorded.
                </p>
                <p className="text-brand-text-2 leading-relaxed">
                  Process failures don&apos;t just cost hires. They cost time, reputation, and sometimes money. RouleurCo removes the inconsistency entirely.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ — added for AEO per Stage 1 audit */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Common Questions"
            heading="The questions operators ask most."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="The Decision"
        heading="The question isn't whether to change. It's how long to wait."
        subtext="Every hire that goes uncontacted after a quote, every missed call with no response, every document chased manually — that's time and revenue that a structured process would have recovered."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "Explore All Features →", href: "/features" }}
        note="One-time setup fee of £500. Founding operators: 6-month minimum. Standard: 12-month minimum."
      />

      <Script
        id="compare-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}
