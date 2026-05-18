import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/metadata";
import { buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "National Lead Generation for UK Vehicle Hire Operators",
  description:
    "Unified Vehicle Hire is the national B2B lead-gen engine built specifically for independent UK hire operators. Qualified enquiries in your area — direct to your hire desk.",
  path: "/lead-generation",
});

const problems = [
  {
    title: "Google Ads burn budget on bad-fit leads",
    body: "Generic vehicle-hire keywords pull in tourists, students, single-day personal hires. You pay for the click, qualify on the call, then watch most of them disappear.",
  },
  {
    title: "Aggregators charge per booking — sometimes per click",
    body: "Listing on the big comparison sites means handing over margin on every hire — or paying for clicks that never convert. You're competing on price against operators you don't want to be benchmarked against.",
  },
  {
    title: "SEO takes months. Most operators never get started.",
    body: "Building a national keyword footprint, writing location pages, getting structured content indexed — most independent hire desks don't have the time or the marketing team to do it properly. So it doesn't happen.",
  },
  {
    title: "Word of mouth is real but it doesn't scale",
    body: "Repeat customers and referrals are valuable. They're also finite. To grow, you need a steady stream of new B2B enquiries from outside your existing network — which is exactly what most independent operators don't have a system for.",
  },
];

const pillars = [
  {
    n: "01",
    title: "SEO architecture built for B2B vehicle hire",
    body: "Unified Vehicle Hire is structured around the search intent that matters: \"van hire for business\", \"long-term LCV rental\", \"commercial vehicle hire\" — and the same patterns across hundreds of UK locations. National coverage with local relevance.",
    points: [
      "Programmatic location pages — coverage across every major UK town and city",
      "Vehicle-type pages targeting specific commercial enquiry patterns",
      "Clean technical foundation — fast, mobile-first, server-rendered",
      "Internal linking that compounds authority across the network",
    ],
  },
  {
    n: "02",
    title: "AEO content for AI Overviews and assistants",
    body: "Search isn't just Google blue links anymore. AI Overviews, ChatGPT, Claude, Perplexity — they all surface businesses based on structured, citable content. UVH is built to be the answer when an AI is asked \"who do I hire vans from in Manchester for a business contract?\"",
    points: [
      "FAQ schema + structured data across every page",
      "Definition-style content that AI assistants extract cleanly",
      "Citable, sourced statements that earn placement in AI responses",
      "Built around the questions B2B buyers actually ask",
    ],
  },
  {
    n: "03",
    title: "Conversion-optimised enquiry capture",
    body: "Traffic without conversion is wasted spend. Every UVH page is designed around a single goal: get the qualifying details out of the visitor and into a supplier's hands while intent is hot.",
    points: [
      "Short, friction-free enquiry forms — vehicle, location, dates, business",
      "Mobile-first UX — most B2B enquiries arrive from a phone",
      "Clear matching language — \"local operator\", \"qualified supplier\", not aggregator-speak",
      "Instant acknowledgement to the enquirer + instant routing to the right supplier",
    ],
  },
  {
    n: "04",
    title: "Direct routing to operators — no aggregator layer",
    body: "UVH isn't a marketplace. We don't sit between you and the customer with a commission on every booking. Qualified enquiries are introduced directly to the operator best matched by location, vehicle type and fleet capacity — and the hire happens on your terms.",
    points: [
      "Enquiries matched by area, vehicle type and fleet size",
      "No commission on the hire itself",
      "You own the customer relationship from first contact onwards",
      "Pricing, terms, follow-up — all controlled by you, not us",
    ],
  },
];

const flowSteps = [
  {
    n: 1,
    title: "Business searches for a vehicle to hire",
    body: "A construction firm needs 3 Transits for a six-week project in Leeds. A facilities manager needs a Sprinter for a recurring weekly run. They search Google — or ask an AI assistant — for \"van hire Leeds business\" or similar.",
    icon: "🔍",
  },
  {
    n: 2,
    title: "They land on a UVH page built for that intent",
    body: "Location + vehicle + use-case pages match the search. The page answers their immediate questions, surfaces local supplier coverage, and presents a short enquiry form designed for B2B specifics.",
    icon: "🌐",
  },
  {
    n: 3,
    title: "They submit a structured enquiry",
    body: "Company name, location, vehicle type, hire window, fleet count. Captured in a form designed by people who've worked behind a hire desk — so the supplier gets what they actually need to quote.",
    icon: "📋",
  },
  {
    n: 4,
    title: "The enquiry is routed to the right operator",
    body: "UVH matches the enquiry to the operator in that area with the right fleet for the job. The supplier is notified immediately. The enquirer is told who's going to be in touch and when.",
    icon: "📍",
  },
  {
    n: 5,
    title: "It lands in your RouleurCo pipeline — qualified",
    body: "The enquiry doesn't just hit your inbox. It enters your RouleurCo pipeline as a structured opportunity, ready for your hire desk to quote — and RouleurCo's automated follow-up starts immediately so the lead doesn't go cold while you're busy.",
    icon: "⚡",
  },
];

const industryStats = [
  { num: "84%", label: "of LCV rental customers are business users", source: "BVRLA" },
  { num: "67%", label: "of car rental volumes are business customers", source: "BVRLA" },
  { num: "28%", label: "of all UK rental activity is work-related", source: "BVRLA" },
  { num: "39mo", label: "average LCV holding period before disposal", source: "BVRLA" },
];

const operatorBenefits = [
  { title: "Qualified B2B enquiries in your area", body: "Matched to your fleet and location. You don't see enquiries for vehicles you don't run or hires you can't service." },
  { title: "No commission on the hire itself", body: "We don't take a cut of the booking. The hire happens directly between you and the customer on your terms." },
  { title: "No long-term aggregator contract", body: "You don't need to commit to a multi-year listing or hand over your customer data. Join the network, accept the enquiries that fit." },
  { title: "Backed by RouleurCo's follow-up automation", body: "Every enquiry that reaches you flows into your RouleurCo pipeline — so the follow-up sequence fires automatically even when the hire desk is busy." },
  { title: "Full conversion control", body: "Quote, agreement, deposit, hire — all handled in your existing system, your way. UVH does the introduction; you run the hire." },
  { title: "Coverage that grows with the network", body: "As more operators join, UVH adds more location pages, more vehicle-type coverage, more SEO surface area. National scale compounds for every supplier in the network." },
];

const faqs: FAQItem[] = [
  {
    question: "What is Unified Vehicle Hire (UVH)?",
    answer:
      "UVH is a national B2B introduction service for the UK vehicle hire industry. Businesses needing to hire vehicles search UVH or land on it via Google or AI assistants, submit a structured enquiry, and are matched to a local supplier in our network. We do the marketing and the routing — operators handle the hire.",
  },
  {
    question: "How does UVH actually generate the leads?",
    answer:
      "Four pillars: SEO architecture covering every major UK location and vehicle type, AEO-optimised content that ranks in AI Overviews and assistants, conversion-optimised enquiry forms built for B2B specifics, and direct supplier routing with no aggregator layer in between. The result is a steady flow of intent-driven enquiries from businesses that already know what they need.",
  },
  {
    question: "Do you charge a commission on hires?",
    answer:
      "No. UVH does not take a percentage of the hire. The introduction is the service. The hire itself happens directly between you and the customer, with your pricing, your terms, and your contract. RouleurCo subscription pricing applies for the platform; UVH listing terms are confirmed during onboarding.",
  },
  {
    question: "How are enquiries matched to operators?",
    answer:
      "By area, by vehicle type, and by fleet capacity. We match the enquiry to the operator in the right location with the right fleet for the job. If multiple operators in an area could service an enquiry, routing rules apply — these are discussed during onboarding.",
  },
  {
    question: "How is this different from a comparison site or aggregator?",
    answer:
      "Aggregators sit between you and the customer, take commission, and benchmark you on price. UVH introduces the enquiry directly to the operator best matched for the job and steps out of the way. There's no marketplace layer, no commission on bookings, and you own the customer relationship from first contact.",
  },
  {
    question: "Do I need to be on RouleurCo to receive UVH enquiries?",
    answer:
      "Yes. The supplier network runs on RouleurCo — that's how we make sure every enquiry has a structured follow-up sequence behind it. Operators in the network use RouleurCo as their sales and automation platform. UVH provides the demand; RouleurCo provides the conversion engine.",
  },
  {
    question: "What's the founding operator advantage?",
    answer:
      "The first 10 RouleurCo founding operators get £250/month locked in for life (vs the £350/month standard rate). They also get priority placement when joining the UVH supplier network and direct input into how matching rules work in their area. Once the 10 founding spots are filled, founding pricing closes.",
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Lead Generation" }]}
        eyebrow="National Lead Generation"
        heading="The national lead-gen engine, built from the ground up for UK vehicle hire."
        lead="Unified Vehicle Hire generates qualified B2B vehicle hire enquiries across every major UK location — and routes them directly to operators in our network. RouleurCo runs the conversion engine behind every supplier."
        badge={{ tone: "amber", label: "Flagship" }}
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-3xl">
              Independent operators can&apos;t scale lead generation on their own.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              The big national chains have full marketing teams, dedicated SEO budgets, and brand recognition that pulls in commercial enquiries by default. Independent operators don&apos;t. The result is a real gap — operators with great fleets and strong service, invisible to the businesses that need them most.
            </p>
          </FadeUp>

          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-2">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                  <div className="flex gap-3">
                    <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">✕</span>
                    <div>
                      <h3 className="font-display text-base font-bold text-brand-navy">{p.title}</h3>
                      <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeUp delay={0.15}>
            <div className="mt-10 rounded-card bg-brand-navy text-white p-8 text-center">
              <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-balance max-w-3xl mx-auto">
                Unified Vehicle Hire was built to close that gap. Nationally. At scale.
              </p>
              <p className="mt-3 text-white/65 max-w-2xl mx-auto">
                A purpose-built lead-generation engine for independent UK vehicle hire operators — designed from the ground up to capture B2B demand and route it directly to suppliers in the network.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* INDUSTRY OPPORTUNITY */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Market Opportunity"
            heading="B2B vehicle hire is a £-billion market — and most of it isn't generated by national chains."
            lead="The data is unambiguous: UK vehicle rental is overwhelmingly business demand. The opportunity for independent operators isn't the leisure market — it's the steady, repeat, commercial enquiries that drive the industry."
            variant="dark"
          />
          <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industryStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7 text-center">
                  <div className="font-display text-4xl font-bold leading-none">{s.num}</div>
                  <div className="mt-3 text-sm text-white/70 leading-relaxed">{s.label}</div>
                  <div className="mt-2 text-[11px] text-white/30">Source: {s.source}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <p className="mt-8 text-center text-xs text-white/35">
            Data from BVRLA Industry Report and SMMT Vehicle Registration Statistics
          </p>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="How UVH Generates Leads"
            heading="Four pillars. Engineered for B2B vehicle hire."
            lead="UVH isn't a directory. It isn't an aggregator. It's a purpose-built lead-generation platform — every page, every page template, every form field designed for one thing: turning business search intent into qualified hire enquiries."
          />

          <div className="mt-14 flex flex-col gap-10">
            {pillars.map((p) => (
              <FadeUp key={p.n}>
                <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12 items-start">
                  <div className="lg:sticky lg:top-24">
                    <div className="inline-flex size-20 items-center justify-center rounded-2xl bg-brand-blue-light font-display text-3xl font-bold text-brand-blue">
                      {p.n}
                    </div>
                  </div>
                  <div className="rounded-card border border-brand-mid bg-white p-7 sm:p-8">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy leading-tight text-balance">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-brand-text-2 leading-relaxed">{p.body}</p>
                    <CheckList className="mt-5" items={p.points} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* THE FLOW */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Flow"
            heading="From search intent to your hire desk — in five steps."
            lead="Every UVH enquiry follows the same structured path. Demand captured at intent. Routed by match. Delivered into the conversion engine that turns enquiries into confirmed hires."
          />

          <ol className="mt-14 max-w-3xl mx-auto flex flex-col">
            {flowSteps.map((step, i) => (
              <FadeUp key={step.n}>
                <li className="flex gap-5 items-start">
                  <div className="flex flex-col items-center w-12 shrink-0">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-blue text-white font-display font-bold shadow-md text-lg">
                      {step.n}
                    </span>
                    {i < flowSteps.length - 1 && (
                      <span className="w-px flex-1 bg-brand-mid my-2 min-h-[24px]" />
                    )}
                  </div>
                  <div className="flex-1 pb-8 rounded-card border border-brand-mid bg-white p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-bold text-brand-navy">{step.title}</h3>
                      <span className="text-2xl shrink-0" aria-hidden="true">{step.icon}</span>
                    </div>
                    <p className="text-sm text-brand-text-2 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>

          <FadeUp delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto rounded-card border-l-4 border-brand-blue bg-brand-blue-light p-6">
              <p className="text-brand-navy leading-relaxed">
                <strong className="font-display">The compounding effect:</strong> every operator in the network strengthens the SEO surface area. More location coverage. More vehicle-type pages. More structured supplier data for AI assistants to cite. The lead-gen engine gets stronger as the network grows.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT OPERATORS GET */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="For Operators"
            heading="What you get as a supplier in the network."
            lead="UVH is the demand engine. RouleurCo is the conversion engine. Together they give independent operators a national lead-gen capability that competes with the chains — without the marketing budget."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {operatorBenefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-blue text-white">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-brand-navy">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* SYSTEM DIAGRAM */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The System"
            heading="UVH brings the demand. RouleurCo converts it. You run the hire."
            variant="dark"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <FadeUp>
              <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7">
                <Badge tone="blue">01 · Demand</Badge>
                <h3 className="mt-4 font-display text-lg font-bold">Unified Vehicle Hire</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  The national lead-gen engine. SEO + AEO + structured enquiry capture across every major UK location.
                </p>
                <a
                  href="https://unifiedvehiclehire.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-blue hover:text-white"
                >
                  unifiedvehiclehire.co.uk
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-card border border-brand-blue/30 bg-brand-blue/10 p-7 ring-2 ring-brand-blue/20">
                <Badge tone="amber">02 · Conversion</Badge>
                <h3 className="mt-4 font-display text-lg font-bold">RouleurCo</h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  Every UVH enquiry lands in your RouleurCo pipeline. Automated follow-up fires immediately. Hires get confirmed instead of going cold.
                </p>
                <a
                  href="/features"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-blue hover:text-white"
                >
                  Explore the platform →
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-7">
                <Badge tone="green">03 · Hire</Badge>
                <h3 className="mt-4 font-display text-lg font-bold">You</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  The hire happens on your terms. Your pricing. Your contract. Your customer relationship. UVH steps out of the way after the introduction.
                </p>
                <div className="mt-4 text-sm text-white/45">
                  No commission. No marketplace layer.
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Common Questions"
            heading="What operators ask before joining the network."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        eyebrow="Join the network"
        heading="Get the lead-gen engine working for your hire desk."
        subtext="Register your interest as a UVH supplier. Founding RouleurCo operators get founding pricing locked in for life and priority placement in the supplier network."
        primary={{ label: "Register Your Interest", href: "/register-interest" }}
        secondary={{ label: "See How RouleurCo Works", href: "/how-it-works" }}
        note="No cost to register. No commitment until you decide to proceed."
      />

      <Script
        id="lead-gen-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}
