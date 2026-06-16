import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "About RouleurCo — Built for Independent Vehicle Rental",
  description:
    "RouleurCo was built by someone who has worked inside the vehicle rental industry. Independent operators deserve enterprise-grade tools, configured for how rental actually works.",
  path: "/about",
});

const audiences = [
  {
    title: "Van Hire Companies",
    body: "Running a van hire operation with a busy hire desk taking enquiries from local businesses, tradespeople and removal customers.",
    bullets: [
      "Manage multiple enquiry types in one pipeline",
      "Automated follow-up for every quote sent",
      "Business customer repeat hire tracking",
    ],
  },
  {
    title: "Car Hire Companies",
    body: "Short-term and daily hire, leisure and business customers. Fast-moving enquiries that need quick turnaround and consistent follow-up.",
    bullets: [
      "Fast enquiry-to-quote pipeline for short-term hire",
      "Automated follow-up for unanswered quote requests",
      "Customer record with full hire history",
    ],
  },
  {
    title: "Commercial Vehicle Hire",
    body: "Longer-term hire, larger vehicles, business accounts. More complex enquiries that need structured management.",
    bullets: [
      "Long-term hire pipeline management",
      "Document collection for longer-term hires",
      "Account management for repeat business customers",
    ],
  },
  {
    title: "Multi-Location Operators",
    body: "More than one depot. Multiple hire desks. A growing business that needs visibility across the whole operation.",
    bullets: [
      "Team assignment across locations",
      "Pipeline visibility across depots",
      "Reporting across the whole business",
    ],
  },
];

const industryStats = [
  { num: "84%", label: "of LCV rental customers are business users", source: "BVRLA" },
  { num: "67%", label: "of car rental volumes are business customers", source: "BVRLA" },
  { num: "28%", label: "of all UK rental activity is work-related", source: "BVRLA" },
  { num: "39mo", label: "Average LCV holding period before disposal", source: "BVRLA" },
];

const values = [
  {
    title: "Industry-first, not software-first",
    body: "Every feature in RouleurCo was designed around a real problem that hire desks face. Not the other way around. We start with the operational reality and build to fix it.",
  },
  {
    title: "Set up in days, not weeks",
    body: "Independent operators don't have time to build a CRM. We handle the full setup — pipeline, inbox, workflows. You're operational in days, not months.",
  },
  {
    title: "Practical, not theoretical",
    body: "We don't build features that sound impressive on a features page but don't change anything on the hire desk. Every feature has a clear job: convert more enquiries, reduce admin, or save time.",
  },
  {
    title: "Built with operators, not for them",
    body: "The operators we build alongside aren't just early customers — they're co-builders. Their feedback directly shapes the product. We're building RouleurCo alongside the people who use it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About RouleurCo"
        heading="Built by someone who has stood behind a hire desk."
        lead="RouleurCo exists because most rental software is built by people who have never worked in rental. This one wasn't."
      />

      {/* MISSION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <FadeUp>
              <Eyebrow>Why RouleurCo Exists</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                Independent rental operators deserve better tools.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>Enterprise rental companies — the national chains — have full technology stacks. CRM systems, booking platforms, fleet management tools, reporting dashboards. Built for them. Configured for them. Supported properly.</p>
                <p>Independent operators don&apos;t. They get generic CRM software that was designed for estate agents or recruitment firms and has been loosely adapted for rental. Or they use spreadsheets. Or notepads.</p>
                <p>The result? Enquiries fall through the gaps. Follow-ups get forgotten. Hires go to competitors not because of price, not because of fleet — but because of process.</p>
                <p>RouleurCo was built to fix that. To give independent rental companies the same quality of sales and automation tooling that the big operators have — configured for how rental businesses actually work, at a price that makes sense for an independent business.</p>
              </div>
              <p className="mt-6 pt-6 border-t border-brand-mid text-sm text-brand-muted">
                Built by someone who has worked directly inside the vehicle rental industry — not someone looking at it from the outside. The problems RouleurCo solves are problems we&apos;ve experienced first-hand, behind a hire desk.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-card border border-brand-mid bg-brand-lightbg p-8">
                <span
                  className="font-display text-6xl leading-none text-brand-blue"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-4 text-lg leading-relaxed text-brand-navy text-balance">
                  Most rental companies don&apos;t need more enquiries. They need a better way to handle the ones they already receive.
                </blockquote>
                <div className="mt-5 pt-5 border-t border-brand-mid">
                  <div className="font-display font-bold text-brand-navy">RouleurCo</div>
                  <div className="text-xs text-brand-muted">Core belief</div>
                </div>
              </div>

              <div className="mt-5 rounded-card border border-brand-mid bg-white p-6">
                <Eyebrow>Our mission</Eyebrow>
                <p className="mt-3 text-brand-text-2 leading-relaxed">
                  Bring enterprise-level sales and automation tools to independent vehicle rental operators — without enterprise-level pricing or enterprise-level setup time.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="industry" className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Who It's For"
            heading="Built for independent vehicle rental operators."
            lead="If you run a rental business with a busy hire desk, RouleurCo was built for you."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {audiences.map((a) => (
              <StaggerItem key={a.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{a.title}</h3>
                  <p className="mt-3 text-brand-text-2 leading-relaxed text-sm">{a.body}</p>
                  <CheckList className="mt-4" items={a.bullets} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* INDUSTRY DATA */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Industry"
            heading="The UK vehicle rental market. By the numbers."
            lead="Context on the market RouleurCo serves. Data from BVRLA and SMMT."
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

      {/* VALUES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="How We Work"
            heading="The principles behind RouleurCo."
          />
          <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{v.title}</h3>
                  <p className="mt-3 text-brand-text-2 leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBanner
        heading="Built for operators who want to grow."
        subtext="RouleurCo runs the commercial side of your hire desk — so you win more of the right hires and the fleet earns year-round."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "Take the Growth Check", href: "/growth-check" }}
      />
    </>
  );
}
