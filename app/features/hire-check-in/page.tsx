import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema, buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Active Hire Check-In — Automated Mileage & Condition Updates",
  description:
    "RouleurCo automatically contacts customers on long-term hire at set intervals — collecting mileage readings, flagging damage, and surfacing renewal intent before the vehicle comes back.",
  path: "/features/hire-check-in",
});

const problems = [
  { title: "Mileage overruns", body: "A vehicle goes 40,000 miles over the agreed limit before anyone notices. At return, the customer disputes the excess charge. The records show nobody asked.", border: "border-brand-red/30", bg: "bg-brand-red/5", label: "text-brand-red" },
  { title: "Unreported damage", body: "A scratch or dent happens in month two. By the time the vehicle is returned, the customer claims they never mentioned it because nobody asked. Evidence is gone.", border: "border-brand-amber/30", bg: "bg-brand-amber/5", label: "text-brand-amber" },
  { title: "Missed renewals", body: "End of contract arrives and the customer has already arranged another vehicle. The conversation about renewal never happened. A long-term relationship walks out the door.", border: "border-indigo-400/30", bg: "bg-indigo-400/5", label: "text-indigo-500" },
];

const touchpoints = [
  { day: "Day 1", label: "Welcome on Hire", channel: "SMS + Email", desc: "Confirms the hire is live, introduces the check-in process, and gives the customer a direct line to your hire desk if anything comes up.", colorClass: "bg-brand-blue", tagClass: "bg-brand-blue/10 text-brand-blue" },
  { day: "4 Weeks", label: "First Mileage Check", channel: "SMS", desc: "A short SMS asking for a mileage reading and whether anything needs flagging. If the customer does not respond within 48 hours, a chase message goes out. If still no response, a task is created for your hire desk to call.", colorClass: "bg-brand-blue", tagClass: "bg-brand-blue/10 text-brand-blue" },
  { day: "6 Weeks", label: "Full Check-In", channel: "SMS + Email", desc: "A fuller check-in covering mileage, any damage, driver changes, and whether the customer is likely to extend or return early. Any mention of damage or intent to change triggers a priority task for your hire desk.", colorClass: "bg-brand-amber", tagClass: "bg-brand-amber/10 text-brand-amber" },
  { day: "3 Months", label: "Review & Renewal Opener", channel: "Email + Task", desc: "A full review email collecting mileage and condition, combined with an opening conversation about renewal. A task is automatically created for your hire desk to follow up by call before renewal discussions get left too late.", colorClass: "bg-brand-amber", tagClass: "bg-brand-amber/10 text-brand-amber" },
  { day: "30 Days Before Return", label: "Renewal Conversation", channel: "Email + Task", desc: "A structured email presenting the options — extend, swap vehicle, or return as planned. A hire desk task is created simultaneously so the renewal call happens while there is still time to act.", colorClass: "bg-brand-green", tagClass: "bg-brand-green/10 text-brand-green" },
  { day: "14 Days Before Return", label: "Return Reminder", channel: "SMS", desc: "A reminder that the hire end date is approaching and a prompt to confirm return logistics — time, location, and who is bringing the vehicle back.", colorClass: "bg-brand-green", tagClass: "bg-brand-green/10 text-brand-green" },
  { day: "5 Days Before Return", label: "Final Confirmation", channel: "SMS", desc: "Final check-in asking for current mileage and confirmation of the return plan. Everything your hire desk needs for a clean, undisputed handover.", colorClass: "bg-brand-green", tagClass: "bg-brand-green/10 text-brand-green" },
];

const collected = [
  { label: "Current mileage reading", desc: "Logged against the hire record at each check-in. Tracked across all touchpoints so any overrun is visible well before return." },
  { label: "Damage or condition issues", desc: "If the customer mentions damage in any check-in response, a high-priority task is immediately created for your hire desk. Date and context are logged." },
  { label: "Driver changes", desc: "If the driver has changed since the hire started, the desk is notified so eligibility can be re-checked before the hire continues." },
  { label: "Extension or early return intent", desc: "Any signal that the customer wants to extend or return early triggers a follow-up task while there is still time to act on it." },
  { label: "Renewal decision", desc: "Captured at the 30-day touchpoint — extend, swap, or return. Logged against the opportunity so your team has the conversation with context." },
];

const escalation = [
  { n: 1, label: "Check-in message sent", sub: "SMS or email at the scheduled touchpoint", dot: "bg-brand-blue/20 text-brand-blue" },
  { n: 2, label: "No response — 48 hours", sub: "One automated chase message sent", dot: "bg-brand-amber/20 text-brand-amber" },
  { n: 3, label: "Still no response — 48 hours", sub: "Task created for hire desk to call", dot: "bg-brand-red/20 text-brand-red" },
  { n: 4, label: "Hire desk calls the customer", sub: "Human judgement takes over from here", dot: "bg-brand-green/20 text-brand-green" },
];

const without = [
  "Mileage tracked by memory or not at all",
  "Damage discovered at return with no prior record",
  "Renewal conversations that never happen in time",
  "Driver changes that nobody knows about",
  "A vehicle comes back 50,000 miles over — now a dispute",
  "Long-term customers leave because nobody stayed in touch",
];

const withRC = [
  "Mileage logged at 4 weeks, 6 weeks, and 3 months automatically",
  "Damage flagged in writing during the hire — not disputed at return",
  "Renewal conversations opened 30 days before the hire ends",
  "Driver changes surfaced immediately and logged on the record",
  "Every non-response escalated to a hire desk call before it becomes a problem",
  "Customers feel looked after — more likely to renew and rehire",
];

const related = [
  { href: "/features/pipelines", label: "Enquiry Pipelines", desc: "The pipeline stage that triggers the check-in sequence — Vehicle on Hire — lives here." },
  { href: "/features/unified-inbox", label: "Unified Inbox", desc: "Customer check-in replies arrive in your shared inbox — visible to everyone on the hire desk." },
  { href: "/features/onboarding", label: "Customer Onboarding", desc: "Before the check-ins begin, onboarding makes sure documents and agreements are in place." },
];

const faqs: FAQItem[] = [
  {
    question: "What is RouleurCo's active hire check-in?",
    answer:
      "Once a vehicle moves to Vehicle on Hire in your pipeline, RouleurCo automatically contacts the customer at set intervals — collecting mileage readings, flagging damage early, and surfacing renewal intent before the vehicle comes back. It runs in the background without any action from your team unless something needs attention.",
  },
  {
    question: "At what intervals does RouleurCo check in with long-term hire customers?",
    answer:
      "Seven touchpoints: Day 1 welcome (SMS + Email), 4 weeks for first mileage check (SMS), 6 weeks full check-in (SMS + Email), 3 months review + renewal opener (Email + Task), 30 days before return for renewal conversation (Email + Task), 14 days before return reminder (SMS), and 5 days before return final confirmation (SMS).",
  },
  {
    question: "What happens if a long-term hire customer doesn't respond to a RouleurCo check-in?",
    answer:
      "If there's no response within 48 hours, one automated chase message goes out. If there's still no response after another 48 hours, a task is created for your hire desk to call the customer directly. A non-responsive long-term customer is a risk worth a human call — so the system escalates rather than silently continuing.",
  },
];

export default function HireCheckInPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Active Hire Check-In" },
        ]}
        eyebrow="Long-Term Hire"
        heading="Once a vehicle is out on hire, the work isn't over. RouleurCo keeps the conversation going — automatically."
        lead="Long-term hires are what steady your year — so protecting and renewing them is how you grow. Automated check-ins at 4 weeks, 6 weeks, 3 months, and through to return collect mileage, flag damage early, and surface renewal intent in time — keeping every long-term vehicle utilised and your hire desk on top of it without lifting a finger."
      />

      {/* PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Vehicles on long-term hire go quiet. That silence is a risk.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              Once a vehicle leaves the yard on a monthly or long-term hire, most rental businesses lose visibility completely until it comes back. Mileage builds up unchecked. Damage goes unreported. Renewal conversations happen too late — or not at all. And the hire desk only finds out about problems at return, when it is too late to act on them.
            </p>
          </FadeUp>

          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <div className={`h-full rounded-card border ${p.border} ${p.bg} p-7`}>
                  <div className={`font-display text-xs font-bold uppercase tracking-[0.08em] ${p.label} mb-3`}>Silent risk</div>
                  <h3 className="font-display text-lg font-bold text-brand-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeUp delay={0.15}>
            <div className="mt-10 rounded-card bg-brand-navy text-white p-8 text-center">
              <p className="font-display text-xl font-bold leading-snug text-balance">
                RouleurCo contacts your customers on your behalf at set points during every long-term hire.
              </p>
              <p className="mt-2 text-white/55 font-medium">
                No manual reminders. No forgotten calls. No surprises at return.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Check-In Schedule"
            heading="Seven touchpoints. Automatic from day one."
            lead="When a hire moves to Vehicle on Hire in your pipeline, the check-in sequence starts. It runs in the background until the vehicle is returned — no action required from your team unless something needs attention."
          />

          <div className="mt-14 max-w-3xl mx-auto">
            <ol className="flex flex-col">
              {touchpoints.map((tp, i) => (
                <FadeUp key={tp.label}>
                  <li className="flex gap-5">
                    <div className="flex flex-col items-center w-10 shrink-0">
                      <span className={`mt-1 size-3.5 rounded-full ${tp.colorClass}`} />
                      {i < touchpoints.length - 1 && (
                        <span className="w-px flex-1 bg-brand-mid my-2 min-h-[40px]" />
                      )}
                    </div>
                    <div className="flex-1 pb-7">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-display text-sm font-bold text-brand-navy">{tp.label}</span>
                        <span className={`rounded px-2 py-0.5 text-[10px] font-display font-bold ${tp.tagClass}`}>
                          {tp.day}
                        </span>
                        <span className="rounded bg-brand-mid/40 px-2 py-0.5 text-[11px] font-display font-semibold text-brand-text-2">
                          {tp.channel}
                        </span>
                      </div>
                      <p className="text-sm text-brand-text-2 leading-relaxed">{tp.desc}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* WHAT GETS COLLECTED */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What Gets Collected"
            heading="The information your hire desk actually needs."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <FadeUp>
              <ul className="flex flex-col gap-5">
                {collected.map((c) => (
                  <li key={c.label} className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-brand-navy">{c.label}</h3>
                      <p className="mt-1 text-sm text-brand-text-2 leading-relaxed">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <SixWeekSmsMock />
              <p className="mt-3 text-center text-xs text-brand-muted">
                Extension intent captured automatically — task created for hire desk
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* NON-RESPONSE ESCALATION */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow variant="white">Non-Response Handling</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-[1.15] text-balance">
                If a customer goes quiet, your hire desk is alerted.
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed">
                Not every customer responds to a check-in message promptly. RouleurCo does not just move on. If there is no response within 48 hours, one chase message goes out automatically. If there is still no response after a further 48 hours, a task is created for your hire desk to call the customer directly.
              </p>
              <p className="mt-3 text-white/65 leading-relaxed">
                A non-responsive long-term customer is a risk worth a human call — so the system escalates rather than silently continuing.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ol className="flex flex-col gap-5">
                {escalation.map((s) => (
                  <li key={s.n} className="flex gap-4 items-start">
                    <span className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full font-display font-bold ${s.dot}`}>
                      {s.n}
                    </span>
                    <div>
                      <div className="font-display text-sm font-bold text-white">{s.label}</div>
                      <div className="text-sm text-white/45">{s.sub}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHAT IT REPLACES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What It Replaces"
            heading="The system your hire desk is currently running on."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-red mb-4">
                  Without RouleurCo check-ins
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {without.map((w) => (
                    <li key={w} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">✕</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-card border border-brand-blue/30 bg-brand-blue-light p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-blue mb-4">
                  With RouleurCo check-ins
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {withRC.map((w) => (
                    <li key={w} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue text-xs font-bold">✓</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Also in RouleurCo"
            heading="Check-ins work best alongside these."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <StaggerItem key={r.href}>
                <Link
                  href={r.href}
                  className="block h-full rounded-card border border-brand-mid bg-white p-7 hover:border-brand-blue hover:shadow-md transition"
                >
                  <h3 className="font-display text-lg font-bold text-brand-navy">{r.label} →</h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{r.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBanner
        heading="Stop finding out about problems when the vehicle comes back."
        subtext="RouleurCo active hire check-ins run automatically on every long-term hire — no manual reminders, no forgotten calls."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See all features", href: "/features" }}
      />

      <Script
        id="checkin-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Active Hire Check-In",
            description:
              "Automated check-in sequence for long-term vehicle hire — mileage, damage, renewal intent and return logistics, collected from the customer at seven timed touchpoints.",
            url: `${SITE_URL}/features/hire-check-in`,
          }),
        }}
      />
      <Script
        id="checkin-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}

function SixWeekSmsMock() {
  return (
    <div className="rounded-2xl bg-brand-navy p-7 shadow-2xl text-white relative overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-blue/20" />
      <div className="relative">
        <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-5">
          Six-week check-in — example SMS
        </div>

        <div className="rounded-[14px_14px_14px_4px] border border-brand-blue/40 bg-brand-blue/25 px-4 py-3 max-w-[90%] mb-3">
          <div className="text-sm text-white/85 leading-relaxed">
            Hi James, six-week check-in on your Transit Custom. A few quick questions when you get a moment:
          </div>
          <div className="mt-2 text-sm text-white/85 leading-relaxed">
            1. Current mileage?<br />
            2. Any damage to flag?<br />
            3. Any change of driver?<br />
            4. Likely to extend or return early?
          </div>
          <div className="mt-2 text-[11px] text-white/30">Fleet Hire Co</div>
        </div>

        <div className="rounded-[14px_14px_4px_14px] border border-white/10 bg-white/[0.08] px-4 py-3 max-w-[90%] ml-auto mb-3">
          <div className="text-sm text-white/85 leading-relaxed">
            Hi, mileage is 14,240. No damage. Same driver. Might want to extend by another month, will confirm next week.
          </div>
          <div className="mt-2 text-[11px] text-white/30">James Hartley</div>
        </div>

        <div className="rounded-md border border-brand-amber/30 bg-brand-amber/15 px-3.5 py-3">
          <div className="flex items-center gap-2 mb-1">
            <svg className="size-3 text-brand-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
            </svg>
            <span className="font-display text-[10px] font-bold uppercase tracking-wide text-brand-amber">
              Task created automatically
            </span>
          </div>
          <div className="text-xs text-white/70">Follow Up — Extension Intent (6 Week) — James Hartley</div>
          <div className="text-[11px] text-white/35 mt-0.5">Priority: High · Assigned to: Hire Desk</div>
        </div>
      </div>
    </div>
  );
}
