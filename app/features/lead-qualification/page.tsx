import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";

export const metadata: Metadata = buildMetadata({
  title: "Enquiry Qualification for Vehicle Rental",
  description:
    "Score and route every enquiry the moment it arrives based on submitted information. Spend hire desk time on genuine leads — automated qualification handles the rest.",
  path: "/features/lead-qualification",
});

const leadCards = [
  { name: "Hartley Building Services", meta: "Transit x3 · Start Monday · Business account", score: "91pts", scoreColor: "text-brand-red", emoji: "🔴 HOT", border: "border-brand-red/30", bg: "bg-brand-red/5",
    signals: [{ text: "Business customer", kind: "pos" }, { text: "Specific dates", kind: "pos" }, { text: "Returned enquirer", kind: "pos" }, { text: "Replied within 10min", kind: "pos" }] },
  { name: "Nexus Contractors Ltd", meta: 'Sprinter x2 · "Probably 3 weeks time"', score: "62pts", scoreColor: "text-brand-amber", emoji: "🟡 WARM", border: "border-brand-amber/30", bg: "bg-brand-amber/5",
    signals: [{ text: "Business customer", kind: "pos" }, { text: "Specific vehicle", kind: "pos" }, { text: "Dates vague", kind: "neu" }] },
  { name: "M. Johnson", meta: 'Any van · "Sometime next month maybe"', score: "31pts", scoreColor: "text-brand-blue", emoji: "🔵 SLOW", border: "border-brand-blue/30", bg: "bg-brand-blue/5",
    signals: [{ text: "No vehicle specified", kind: "neu" }, { text: "No dates", kind: "neg" }, { text: "First contact", kind: "neu" }] },
  { name: "Unknown enquirer", meta: '"How much does a van cost?" · Gmail address', score: "8pts", scoreColor: "text-white/50", emoji: "⚪ LOW", border: "border-white/15", bg: "bg-white/[0.03]",
    signals: [{ text: "No name given", kind: "neg" }, { text: "No dates", kind: "neg" }, { text: "No vehicle type", kind: "neg" }, { text: "Vague question only", kind: "neg" }] },
];

const positiveSignals = [
  { strong: "Specific hire dates given", body: "they've planned it, they're ready to act" },
  { strong: "Business name or company", body: "commercial customer, higher value, repeat potential" },
  { strong: "Specific vehicle type requested", body: "they know what they need, not browsing" },
  { strong: "Multi-vehicle enquiry", body: "higher value, genuine operational need" },
  { strong: "Returned / existing customer", body: "already knows you, high close rate" },
  { strong: "Fast reply to your messages", body: "actively engaged, decision close" },
  { strong: "Long-term or repeat hire requested", body: "high value, worth fast-tracking" },
  { strong: "Enquiry from website form", body: "higher intent than a casual social message" },
];

const negativeSignals = [
  { strong: "No dates, no vehicle, no name", body: "classic early-stage tyre-kicker pattern" },
  { strong: '"How much does it cost?" with no context', body: "price shopping only" },
  { strong: "No reply to follow-up messages", body: "interest was superficial" },
  { strong: "Short hire, personal use, no business need", body: "low value, high admin ratio" },
  { strong: 'Repeated "just checking" contacts with no booking', body: "pattern of non-commitment" },
];

const scoreRows = [
  { label: "Business customer", width: 100, points: "+20", green: true },
  { label: "Specific dates given", width: 85, points: "+17", green: true },
  { label: "Multi-vehicle hire", width: 75, points: "+15", green: true },
  { label: "Returned customer", width: 80, points: "+16", green: true },
  { label: "Quick reply (8 min)", width: 65, points: "+13", green: false },
  { label: "Web form source", width: 50, points: "+10", green: false },
];

const workflowSteps = [
  { icon: "→", iconBg: "bg-brand-navy/10 text-brand-navy", title: "Enquiry arrives with low qualification score (<40pts)", body: "No specific dates, no business name, vague request. System flags as unqualified — hire desk is not alerted yet.", badge: "Auto-detected on arrival", badgeTone: "navy" as const },
  { icon: "SMS", iconBg: "bg-brand-blue text-white text-[10px]", title: "Automated qualifying SMS sent immediately", body: '"Hi [name], thanks for your enquiry — to get you an accurate quote, could you let us know: what vehicle you need, your start date, and how long you\'ll need it for?"', badge: "Sent within 2 minutes of enquiry", badgeTone: "blue" as const },
  { icon: "?", iconBg: "bg-brand-amber text-white", title: "Did they reply with the details?", body: "RouleurCo monitors the inbox. If they reply with dates, vehicle type and a real name — score is updated automatically." },
  { icon: "✓", iconBg: "bg-brand-green text-white", title: "YES — Score updated, routed to hire desk", body: "Qualifying details received. Score recalculated. Enquiry moves to the correct pipeline track and hire desk is notified with full context.", badge: "Hire desk involved now — with all the info", badgeTone: "green" as const },
  { icon: "✕", iconBg: "bg-brand-red text-white", title: "NO reply after 48 hours — marked as low priority", body: "No response to qualifying questions. Moved to a low-priority cold track with a single light-touch follow-up at 2 weeks. Hire desk time protected.", badge: "Hire desk not involved — time protected", badgeTone: "amber" as const },
];

const timeWasterPatterns = [
  { title: "No dates, no vehicle, no name", body: "Three missing qualifiers in one enquiry is the single strongest indicator of a time-waster." },
  { title: "Multiple follow-ups sent, zero response", body: "Two or more automated follow-ups sent with no reply. Engagement has dropped to zero — the enquiry is flagged as inactive." },
  { title: "Price-only enquiry with no qualifying detail", body: "No vehicle type, no dates, no business context — just asking for a price. Combined with other missing fields, this scores low and triggers the qualification workflow first." },
  { title: "Third or fourth enquiry with no previous booking", body: "Patterns of repeated non-commitment are logged. Your hire desk sees the history before replying." },
  { title: "No reply to two qualifying questions", body: "If they won't answer two simple questions to get a quote, they're not serious about hiring." },
];

const signalToneClasses = {
  pos: "bg-brand-green/15 text-brand-green",
  neu: "bg-brand-mid text-brand-muted",
  neg: "bg-brand-red/15 text-brand-red",
} as const;

export default function LeadQualificationPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Enquiry Qualification" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Know which enquiries are worth chasing — and stop wasting time on the ones that aren't."
        lead="RouleurCo's enquiry qualification workflow assesses every lead the moment it arrives based on what was submitted — vehicle, dates, business name, hire type — routes it to the right nurture track automatically, and flags low-quality enquiries before your hire desk spends an hour on someone who was never going to book."
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Every enquiry gets treated the same.<br />They&apos;re not the same.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              A business with 3 Transits ready to go next Monday and a student asking about hiring a van for 24 hours both send enquiries. Without qualification, your hire desk spends the same energy on both. One will hire. One will ghost you after asking fifteen questions.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-muted mb-5">
                  Without qualification
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { title: "40 min spent on a tyre-kicker", body: "Quoted, answered 8 questions, sent availability — never heard from them again." },
                    { title: "Hot lead goes cold", body: "While chasing the tyre-kicker, a genuine commercial customer waited 3 hours for a reply and booked elsewhere." },
                    { title: "No visibility on pipeline quality", body: "You can't tell which of your 12 open enquiries are real until you've already worked all of them." },
                  ].map((c) => (
                    <div key={c.title} className="rounded-card border border-brand-red/30 bg-brand-red/5 p-4">
                      <h4 className="font-display text-sm font-bold text-brand-red">{c.title}</h4>
                      <p className="mt-1 text-xs text-brand-text-2">{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="h-full rounded-card bg-brand-navy p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-5">
                  With RouleurCo
                </div>
                <div className="flex flex-col gap-2.5" aria-hidden="true">
                  {leadCards.map((card) => (
                    <div key={card.name} className={`rounded-lg border p-3 ${card.border} ${card.bg}`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="font-display text-xs font-bold text-white/90 truncate">{card.name}</div>
                          <div className="text-[10px] text-white/45 mt-0.5 truncate">{card.meta}</div>
                        </div>
                        <span className={`shrink-0 font-display text-[11px] font-bold ${card.scoreColor}`}>
                          {card.emoji} — {card.score}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {card.signals.map((s) => (
                          <span key={s.text} className={`rounded px-1.5 py-0.5 text-[9px] font-display font-semibold ${signalToneClasses[s.kind as keyof typeof signalToneClasses]}`}>
                            {s.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* HOW SCORING WORKS */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Lead Scoring</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Every enquiry scored the moment it arrives.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              RouleurCo evaluates the information submitted in every enquiry — vehicle type, hire dates, business name, hire duration, enquiry source — and assigns a lead score that tells your hire desk exactly where to focus their time. Scoring is based on what the customer provides. The more detail they give, the more accurately the system can prioritise.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
            <FadeUp>
              <div className="rounded-card bg-brand-blue-light border-l-4 border-brand-blue p-5">
                <p className="text-sm text-brand-navy">
                  <strong className="font-display">Standard scoring</strong> is based on form fields — what the customer submitted. An AI-powered scoring layer that analyses freetext messages and engagement patterns is available as an advanced workflow add-on, built during onboarding for operators who want it.
                </p>
              </div>

              <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Positive signals — score goes up</h3>
              <p className="mt-1 text-sm text-brand-muted mb-5">These tell you the enquiry is likely to convert.</p>
              <ul className="flex flex-col gap-2.5">
                {positiveSignals.map((s) => (
                  <li key={s.strong} className="flex gap-3 items-start rounded-md border border-brand-green/20 bg-brand-green/5 p-3 text-sm">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-brand-green" />
                    <span className="text-brand-text-2"><strong className="text-brand-navy">{s.strong}</strong> — {s.body}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">Negative signals — score goes down</h3>
              <p className="mt-1 text-sm text-brand-muted mb-5">These are time-waster flags. Not dealbreakers — but your hire desk should see them.</p>
              <ul className="flex flex-col gap-2.5">
                {negativeSignals.map((s) => (
                  <li key={s.strong} className="flex gap-3 items-start rounded-md border border-brand-red/20 bg-brand-red/5 p-3 text-sm">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-brand-red" />
                    <span className="text-brand-text-2"><strong className="text-brand-navy">{s.strong}</strong> — {s.body}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ScoreMeterMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* QUALIFICATION WORKFLOW */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Qualification Workflow</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-3xl">
              Low-score enquiries go through a qualification sequence first — before your hire desk spends time on them.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Instead of your team spending 30 minutes quoting someone who turns out to be just browsing, RouleurCo sends a short automated qualification sequence that separates genuine enquiries from time-wasters.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
            <ol className="flex flex-col gap-6">
              {workflowSteps.map((step, i) => (
                <FadeUp key={i}>
                  <li className="flex gap-4">
                    <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full font-display font-bold ${step.iconBg}`}>
                      {step.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold text-brand-navy">{step.title}</h3>
                      <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{step.body}</p>
                      {step.badge && (
                        <div className="mt-3">
                          <Badge tone={step.badgeTone!}>{step.badge}</Badge>
                        </div>
                      )}
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>

            <FadeUp delay={0.15}>
              <SmsConversationMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TIME WASTER */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Time Waster Protection"
            heading="The patterns RouleurCo flags — before your team gets involved."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
            <FadeUp>
              <div className="rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <h3 className="font-display text-xl font-bold text-brand-red">🚩 Time-waster signals</h3>
                <p className="mt-2 text-sm text-brand-text-2">
                  These patterns are flagged automatically. Your hire desk sees the alert before responding.
                </p>
                <ul className="mt-5 flex flex-col gap-4">
                  {timeWasterPatterns.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-red/20 text-brand-red text-xs font-bold">!</span>
                      <div>
                        <h4 className="font-display text-sm font-bold text-brand-navy">{p.title}</h4>
                        <p className="mt-1 text-sm text-brand-text-2 leading-relaxed">{p.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            <div className="flex flex-col gap-5">
              <FadeUp delay={0.1}>
                <div className="rounded-card border border-brand-mid bg-white p-6">
                  <h4 className="font-display text-lg font-bold text-brand-navy">What happens when a time-waster is flagged</h4>
                  <CheckList
                    className="mt-4"
                    items={[
                      "Hire desk sees the flag and context before spending any time on the enquiry",
                      "Suggested response templates for common time-waster scenarios",
                      "One-click option to archive the enquiry with a reason",
                      "Archiving feeds into data — you can see how many time-waster enquiries arrive per week and from which sources",
                    ]}
                  />
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="rounded-card border border-brand-mid bg-white p-6">
                  <h4 className="font-display text-lg font-bold text-brand-navy">This isn&apos;t about ignoring people</h4>
                  <p className="mt-3 text-brand-text-2 leading-relaxed">
                    Some low-score enquiries become real hires once they get information. RouleurCo doesn&apos;t block them — it protects your hire desk&apos;s time by handling the early qualification automatically, so they only get involved when there&apos;s a genuine opportunity.
                  </p>
                  <p className="mt-3 text-brand-text-2 leading-relaxed">
                    The goal is simple: <strong className="text-brand-navy">your best people spend their time on your best leads.</strong>
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Spend your time on the enquiries worth chasing."
        subtext="Every enquiry scored, sorted and routed the moment it arrives. Your hire desk sees the best leads first — and time-wasters never make it past the qualification sequence."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      <Script
        id="lead-qual-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Enquiry Qualification",
            description:
              "Score and route every enquiry the moment it arrives based on submitted information. Spend hire desk time on genuine leads — automated qualification sequence handles the rest.",
            url: `${SITE_URL}/features/lead-qualification`,
          }),
        }}
      />
    </>
  );
}

function ScoreMeterMock() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-card border border-white/10 bg-brand-navy p-7 shadow-xl text-white" aria-hidden="true">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40">
              Lead Score Breakdown
            </div>
            <div className="mt-1 font-display text-sm font-bold text-white/85">Hartley Building Services</div>
          </div>
          <div className="text-right">
            <div className="font-display text-4xl font-bold leading-none">91</div>
            <div className="mt-0.5 text-[10px] text-white/35">out of 100</div>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {scoreRows.map((r) => (
            <li key={r.label} className="flex items-center gap-3 text-xs">
              <span className="w-32 shrink-0 text-white/70">{r.label}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/8 overflow-hidden">
                <div
                  className={`h-full rounded-full ${r.green ? "bg-brand-green" : "bg-brand-blue"}`}
                  style={{ width: `${r.width}%` }}
                />
              </div>
              <span className={`w-8 text-right font-display font-bold ${r.green ? "text-brand-green" : "text-brand-blue"}`}>
                {r.points}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-md border border-brand-red/30 bg-brand-red/15 p-3">
          <div className="font-display text-[11px] font-bold text-red-300 mb-1">
            🔴 HOT — PRIORITY FOLLOW-UP
          </div>
          <div className="text-xs text-white/55">
            Auto-routed to Hot Track. 1-hour response target. Fast quote sequence started.
          </div>
        </div>
      </div>

      <div className="rounded-card border border-white/10 bg-brand-navy p-6 shadow-xl text-white" aria-hidden="true">
        <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-3">
          Low Score — Time-Waster Alert
        </div>
        <div className="font-display text-sm font-bold text-white/70 mb-3">Unknown enquirer — 8/100</div>
        <div className="rounded-md bg-white/[0.04] px-3 py-3 text-xs text-white/45">
          Auto-routed to qualification workflow. System will ask qualifying questions before hire desk gets involved.
        </div>
      </div>
    </div>
  );
}

function SmsConversationMock() {
  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-2xl bg-[#1a1a1a] p-5 max-w-[360px] mx-auto w-full" aria-hidden="true">
        <div className="text-center font-display text-xs text-white/40 mb-4">
          Hartley Van Hire · SMS
        </div>
        <div className="rounded-[18px_18px_18px_4px] bg-[#2c2c2e] px-3.5 py-2.5 text-xs text-white/85 leading-relaxed max-w-[80%] mb-2">
          Hi, how much does it cost to hire a van?
        </div>
        <div className="rounded-[18px_18px_4px_18px] bg-brand-blue px-3.5 py-2.5 text-xs text-white leading-relaxed max-w-[90%] ml-auto mb-2">
          Hi there! Thanks for getting in touch with Hartley Van Hire. To get you an accurate quote, could you let us know:
          <br /><br />
          1. What type of van do you need?<br />
          2. When do you need it from?<br />
          3. How long will you need it?
          <br /><br />
          We&apos;ll come straight back to you with a price.
        </div>
        <div className="rounded-[18px_18px_18px_4px] bg-[#2c2c2e] px-3.5 py-2.5 text-xs text-white/85 leading-relaxed max-w-[80%]">
          Transit, starting this Monday, need it for 2 weeks — it&apos;s for a construction project. Name is Dave Foster, Hartley Building Services.
        </div>
        <div className="mt-3 text-center text-[10px] text-white/25">
          Score updated: 8pts → 74pts · Routed to Hot Track
        </div>
      </div>

      <div className="rounded-card border border-brand-mid bg-brand-lightbg p-6">
        <Eyebrow>What just happened — automatically</Eyebrow>
        <CheckList
          className="mt-4"
          items={[
            "Qualifying SMS sent within 2 minutes of enquiry",
            "Customer replied with full details",
            "Score recalculated from 8 to 74",
            "Automatically routed to Hot Track",
            "Hire desk notified with full context",
            "Quote sequence started",
          ]}
        />
        <div className="mt-4 rounded-md bg-brand-green/10 border border-brand-green/30 px-4 py-3 text-sm text-brand-navy">
          Your hire desk spent <strong>0 minutes</strong> on this until it was a qualified, ready-to-book lead.
        </div>
      </div>
    </div>
  );
}
