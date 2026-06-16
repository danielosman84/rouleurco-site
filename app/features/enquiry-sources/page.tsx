import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Enquiry Source Tracking — Know Where Your Hires Come From",
  description:
    "RouleurCo tags every enquiry with its source — Google, Facebook, website, phone — so you can see which channels bring hires, not just clicks, and put your effort where it pays.",
  path: "/features/enquiry-sources",
});

const capabilities = [
  {
    title: "Every enquiry, tagged at the source",
    body: "Google, Facebook, your website, the phone, a walk-in — each one logged against where it came from, automatically.",
    badge: "Automatic",
    tone: "blue" as const,
  },
  {
    title: "See what's actually working",
    body: "Which channels bring enquiries, which bring hires, and which quietly do nothing. Plenty of channels look busy and rarely convert — telling the difference is the whole point.",
    badge: "Enquiries vs hires",
    tone: "blue" as const,
  },
  {
    title: "Spend your effort where it pays",
    body: "If your Google Business Profile brings your best long-term hires, that's where to focus. If a channel's just noise, stop feeding it. You can only make that call if you can see it.",
    badge: "Grow what works",
    tone: "blue" as const,
  },
  {
    title: "Built for a lean desk",
    body: "No spreadsheets, no manual tallying — the picture builds itself as enquiries come in.",
    badge: "Zero admin",
    tone: "amber" as const,
  },
];

const cantAnswer = [
  "Which channel brings the most enquiries?",
  "Which channel brings the most hires?",
  "Which channel just looks busy?",
  "Where do your best long-term hires come from?",
];

const inclusions = [
  "Source captured on every enquiry, automatically",
  "Enquiry volume and hire conversion by channel",
  "Spot the channels quietly winning your long-term work",
  "A live picture that builds itself — no manual tallying",
];

export default function EnquirySourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Enquiry Source Tracking" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Know where your hires actually come from"
        lead="Stop guessing which channel brings the work. RouleurCo tags every enquiry with its source — so you can see what's converting and put your effort where it pays."
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                You can&apos;t grow a channel you can&apos;t see.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>
                  Most operators have a rough feel for where their work comes from — but no numbers. So the marketing spend is a guess, the busy-looking channels get the credit, and the ones quietly bringing the best hires go unnoticed.
                </p>
                <p>
                  The trouble is, a channel that brings lots of enquiries isn&apos;t always the one that brings hires. Without the source on every enquiry, you can&apos;t tell the difference — and you can&apos;t put your effort where it actually pays.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-card border border-brand-mid bg-brand-lightbg p-8">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-muted">
                  Questions most hire desks can&apos;t answer
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {cantAnswer.map((q) => (
                    <li key={q} className="flex gap-3 items-start text-sm text-brand-text-2">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-amber/15 text-brand-amber text-xs font-bold">
                        ?
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What It Does"
            heading="Turn a hunch into a number."
            lead="Every enquiry carries its source, so the picture of what's working builds itself — no spreadsheets required."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-2">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{c.title}</h3>
                  <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">{c.body}</p>
                  <div className="mt-4">
                    <Badge tone={c.tone}>{c.badge}</Badge>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* IN PRACTICE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>In Practice</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                See what converts — not just what&apos;s busy.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>
                  Every enquiry lands in your <Link href="/features/unified-inbox" className="text-brand-blue underline underline-offset-2">unified inbox</Link> and your <Link href="/features/pipelines" className="text-brand-blue underline underline-offset-2">pipeline</Link> with its source attached. So the breakdown of where your hires come from is always there — current, and built from real enquiries, not a memory of a busy month.
                </p>
              </div>
              <CheckList className="mt-6" items={inclusions} />
            </FadeUp>

            <FadeUp delay={0.1}>
              <SourceBreakdownMock />
            </FadeUp>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Stop guessing. Start seeing."
        subtext="When you know which channels bring your best hires, you can grow the ones that work and stop feeding the ones that don't."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See all features", href: "/features" }}
      />

      <Script
        id="enquiry-sources-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Enquiry Source Tracking",
            description:
              "Enquiry source tracking for vehicle rental companies. Every enquiry is tagged with its source — Google, Facebook, website, phone — so operators can see which channels bring hires and focus their effort where it pays.",
            url: `${SITE_URL}/features/enquiry-sources`,
          }),
        }}
      />
    </>
  );
}

function SourceBreakdownMock() {
  const rows = [
    { label: "Google", enquiries: 41, hires: 38, color: "bg-brand-blue" },
    { label: "Word of mouth", enquiries: 19, hires: 27, color: "bg-brand-green" },
    { label: "Facebook", enquiries: 22, hires: 14, color: "bg-indigo-500" },
    { label: "Website", enquiries: 12, hires: 16, color: "bg-violet-500" },
    { label: "Phone", enquiries: 6, hires: 5, color: "bg-brand-amber" },
  ];
  return (
    <div className="w-full max-w-[440px] mx-auto rounded-card border border-white/10 bg-brand-navy p-6 shadow-2xl" aria-hidden="true">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
        <div className="font-display text-sm font-bold text-white/85">
          Where this month&apos;s hires came from
        </div>
        <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 font-display text-[10px] font-semibold text-white/45">
          Last 30 days
        </span>
      </div>
      <div className="flex items-center justify-between mb-3 text-[10px] font-display font-semibold uppercase tracking-wide text-white/35">
        <span>Channel</span>
        <span>Share of hires</span>
      </div>
      <ul className="flex flex-col gap-3.5">
        {rows.map((r) => (
          <li key={r.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-display text-sm font-semibold text-white/85">{r.label}</span>
              <span className="font-display text-xs font-bold text-white/60">{r.hires}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/[0.06]">
              <div className={`h-2 rounded-full ${r.color}`} style={{ width: `${r.hires}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2.5 text-xs leading-relaxed text-brand-green">
        Word of mouth brings fewer enquiries than Facebook — but more <strong>hires</strong>. That&apos;s where to lean in.
      </div>
    </div>
  );
}
