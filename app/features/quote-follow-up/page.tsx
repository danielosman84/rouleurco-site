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
  title: "Quote Follow-Up — Every Quote Chased Until Someone Replies",
  description:
    "RouleurCo follows up every quote automatically, across email and SMS, until the customer replies or you close the enquiry — so hires don't go cold while the hire desk gets busy.",
  path: "/features/quote-follow-up",
});

const capabilities = [
  {
    title: "The follow-up runs itself",
    body: "Once a quote goes out, RouleurCo chases on the schedule you set — email, SMS — without anyone having to remember.",
    badge: "Automatic",
    tone: "blue" as const,
  },
  {
    title: "Until you get an answer",
    body: "A single templated email isn't a follow-up. RouleurCo keeps going until the customer replies or you close the enquiry.",
    badge: "Persistent",
    tone: "blue" as const,
  },
  {
    title: "The long ones especially",
    body: "Long-term hires often take more than one touch to land — and they're the ones that steady your year. They're worth chasing properly.",
    badge: "Long-term hire",
    tone: "blue" as const,
  },
  {
    title: "You stay in control",
    body: "Every follow-up is visible, every reply lands in one inbox, and you can step in the moment a customer responds.",
    badge: "Always visible",
    tone: "amber" as const,
  },
];

const whyCold = [
  "The quote goes out and the desk moves on to the next call",
  "The customer means to reply, then forgets",
  "Nobody owns the chase, so nobody does it",
  "By the time someone remembers, they've booked elsewhere",
];

const inclusions = [
  "Sequences trigger automatically when a quote is sent",
  "Email and SMS touches on the schedule you set",
  "Chasing stops the instant the customer replies",
  "Long-term enquiries chased with the persistence they deserve",
  "Every touch and reply visible in one place",
];

export default function QuoteFollowUpPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Quote Follow-Up" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Every quote, followed up — until someone replies"
        lead="The hire you lose is rarely the one you quoted wrong. It's the one nobody chased. RouleurCo follows up automatically, across channels, so quotes don't go cold while the desk gets busy."
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                The hire you lose is the one nobody chased.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>
                  A quote goes out. The customer doesn&apos;t reply straight away — they&apos;re busy too. The hire desk gets pulled onto the next call, and the quote sits there. Nobody decided to drop it. It just quietly went cold.
                </p>
                <p>
                  Chasing properly means more than one message, on more than one day, across more than one channel — and remembering to do it every single time. On a busy desk, that&apos;s exactly what doesn&apos;t happen.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-card border border-brand-mid bg-brand-lightbg p-8">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-muted">
                  How a quote goes cold
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {whyCold.map((q) => (
                    <li key={q} className="flex gap-3 items-start text-sm text-brand-text-2">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">
                        ✕
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
            heading="Set the chase once. It runs every time."
            lead="A structured, multi-touch follow-up on every quote — so the persistence that wins hires doesn't depend on anyone remembering."
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

          <FadeUp delay={0.15}>
            <p className="mt-10 text-center text-sm text-brand-muted max-w-2xl mx-auto">
              Different from{" "}
              <Link href="/features/missed-call" className="text-brand-blue underline underline-offset-2">
                Missed Call Text-Back
              </Link>
              , which answers a missed call in seconds. This chases a quote you&apos;ve already sent — over days, until you get an answer.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* IN PRACTICE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>In Practice</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                A follow-up that doesn&apos;t rely on memory.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>
                  The sequence fires the moment a quote is marked sent and runs in the background. Every reply lands in your{" "}
                  <Link href="/features/unified-inbox" className="text-brand-blue underline underline-offset-2">unified inbox</Link>, and the enquiry moves through your{" "}
                  <Link href="/features/pipelines" className="text-brand-blue underline underline-offset-2">pipeline</Link> as it goes — so you always know what&apos;s been chased and what&apos;s landed.
                </p>
              </div>
              <CheckList className="mt-6" items={inclusions} />
            </FadeUp>

            <FadeUp delay={0.1}>
              <FollowUpSequenceMock />
            </FadeUp>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Stop losing the quotes nobody chased."
        subtext="Set the follow-up once and every quote gets chased — especially the long-term ones that steady your year — until you get an answer."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See all features", href: "/features" }}
      />

      <Script
        id="quote-follow-up-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Quote Follow-Up",
            description:
              "Automated quote follow-up for vehicle rental companies. Every quote is chased automatically across email and SMS until the customer replies or the enquiry is closed.",
            url: `${SITE_URL}/features/quote-follow-up`,
          }),
        }}
      />
    </>
  );
}

function FollowUpSequenceMock() {
  const nodes = [
    { kind: "trigger" as const, label: "Quote sent", sub: "Sequence starts automatically" },
    { kind: "delay" as const, label: "Day 2 — no reply", sub: "Customer hasn't responded" },
    { kind: "action" as const, label: "SMS nudge sent", sub: "Personalised to their enquiry" },
    { kind: "delay" as const, label: "Day 4 — still nothing", sub: "Quote would normally go cold here" },
    { kind: "action" as const, label: "Email follow-up sent", sub: "Quote attached again" },
    { kind: "reply" as const, label: "Day 7 — customer replies", sub: "Sequence stops — over to you" },
  ];
  const colors = {
    trigger: { dot: "bg-brand-blue", ring: "ring-brand-blue/30", label: "text-brand-blue" },
    delay: { dot: "bg-brand-amber", ring: "ring-brand-amber/30", label: "text-brand-amber" },
    action: { dot: "bg-brand-green", ring: "ring-brand-green/30", label: "text-brand-green" },
    reply: { dot: "bg-brand-blue", ring: "ring-brand-blue/40", label: "text-brand-blue" },
  };
  return (
    <div className="w-full max-w-[360px] mx-auto" aria-hidden="true">
      {nodes.map((n, i) => {
        const c = colors[n.kind];
        return (
          <div key={i}>
            <div className={`flex items-start gap-3 rounded-xl border border-brand-mid bg-white p-3.5 ring-1 ${c.ring}`}>
              <span className={`mt-1.5 inline-block size-2.5 rounded-full ${c.dot}`} />
              <div>
                <div className={`font-display text-xs font-semibold uppercase tracking-wide ${c.label}`}>
                  {n.label}
                </div>
                <div className="text-xs text-brand-text-2 mt-0.5">{n.sub}</div>
              </div>
            </div>
            {i < nodes.length - 1 && <div className="ml-[18px] h-5 w-px bg-brand-mid" />}
          </div>
        );
      })}
    </div>
  );
}
