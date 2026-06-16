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
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Payment Collection & Recovery for Rental Businesses",
  description:
    "Collect deposits, chase failed payments, and send receipts automatically. Stripe for card payments, GoCardless for Direct Debit. Zero manual chasing.",
  path: "/features/payments",
});

const withoutSteps = [
  "Customer confirms the hire verbally or by SMS",
  "Someone manually sends a payment link or bank details",
  "Payment fails — nobody knows until they check",
  "Staff member calls or texts the customer to retry",
  "Customer says they'll do it later. Staff member has to remember to chase again.",
  "Hire can't start until payment clears — delays and awkward conversations",
  "No automatic receipt. Staff manually confirms. Customer asks if it went through.",
];

const withSteps = [
  "Hire confirmed → payment link sent automatically",
  "Customer pays online — no bank details, no manual process",
  "Payment failure detected immediately and automatically",
  "Retry sequence starts without any staff involvement",
  "SMS and email reminders sent at timed intervals automatically",
  "Payment confirmed → receipt sent, hire desk notified, record updated",
  "Zero manual chasing. Zero awkward calls. Everything tracked.",
];

const lifecycle = [
  { n: "1", color: "blue", title: "Hire confirmed — payment link sent immediately", body: "The moment a hire is marked as confirmed in the pipeline, RouleurCo sends the customer a secure payment link via SMS and email. No staff involvement required.", badge: "Trigger: Hire confirmed", badgeTone: "blue" as const },
  { n: "2", color: "amber", title: "Payment not completed within 2 hours — reminder sent", body: "If the customer hasn't clicked the payment link within a set window, an automated reminder SMS is sent. Friendly. Personalised. Automatic.", badge: "Trigger: Link unopened after 2 hours", badgeTone: "amber" as const },
  { n: "3a", color: "green", title: "Payment successful — receipt sent, record updated", body: "Customer pays. Receipt sent instantly. The pipeline updates automatically. The hire desk gets a notification. No manual confirmation needed.", badge: "Outcome: Cleared ✓", badgeTone: "green" as const },
  { n: "3b", color: "red", title: "Payment fails — automated retry sequence begins", body: "Card declined, insufficient funds, or expired card — RouleurCo detects the failure immediately and starts a structured recovery sequence without anyone on your team needing to know.", badge: "Trigger: Payment declined", badgeTone: "amber" as const },
  { n: "4", color: "blue", title: "Retry sequence: SMS + email at timed intervals", body: "Retry 1 at 30 minutes. Retry 2 at 4 hours. Final notice at 24 hours — all personalised, all automated, all stopping the moment payment clears. Your hire desk never has to make an awkward call.", badge: "Automated: 3-touch recovery sequence", badgeTone: "blue" as const },
  { n: "5", color: "navy", title: "Unresolved after 48 hours — hire desk notified to intervene", body: "If the automated sequence doesn't resolve it, your team gets a clear notification with full context so they can step in with all the information they need.", badge: "Alert: Manual follow-up required", badgeTone: "navy" as const },
];

const inclusions = [
  { title: "Secure payment links", body: "Customers pay via a branded, secure payment page. No bank details shared over email or SMS. Stripe-powered for card payments, with GoCardless available for Direct Debit collection." },
  { title: "Automated payment sequences", body: "Link sent on confirmation. Reminder if not paid. Retry notifications if failed. Final notice if unresolved. All automatic, all timed." },
  { title: "Instant receipts", body: "Payment confirmed — receipt sent to the customer automatically. No staff involvement. Branded with your business details." },
  { title: "Failed payment detection", body: "Card declines are detected instantly. The recovery sequence starts automatically within minutes — no manual checking required." },
  { title: "SMS + email recovery", body: "Recovery messages sent via both SMS and email. Short, professional, personalised. Customers can retry payment directly from the message." },
  { title: "Payment reporting", body: "See collected, pending and failed payments at a glance. Month-by-month revenue. Recovery rate tracking. Everything in one dashboard." },
  { title: "Partial and split payments", body: "Collect a deposit now, balance later. Configure split payment schedules that trigger automatically on the right date." },
  { title: "Mobile-accessible", body: "Customers receive payment links on mobile and pay in seconds. No login, no app download, no friction." },
  { title: "Stripe & GoCardless", body: "Card payments via Stripe — PCI-compliant, no card data stored on your systems. Direct Debit collection via GoCardless — ideal for recurring hires, contract accounts, and longer-term arrangements." },
];

const methodMatrix = [
  { type: "One-off hire / deposit", sub: "Daily, weekly or short-term", method: "Stripe", methodTone: "blue" },
  { type: "Contract / fleet account", sub: "Monthly recurring collection", method: "GoCardless", methodTone: "green" },
  { type: "Longer-term hire arrangement", sub: "6–12 week hire, staged payments", method: "GoCardless", methodTone: "green" },
  { type: "Immediate deposit collection", sub: "Hire confirmed — pay now", method: "Stripe", methodTone: "blue" },
];

const lifecycleColors: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-brand-blue", text: "text-white" },
  amber: { bg: "bg-brand-amber", text: "text-white" },
  green: { bg: "bg-brand-green", text: "text-white" },
  red: { bg: "bg-brand-red", text: "text-white" },
  navy: { bg: "bg-brand-navy", text: "text-white" },
};

export default function PaymentsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Payments & Recovery" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Collect payments. Chase failures automatically. Remove payment admin entirely."
        lead="Reliable payment collection is how an independent operator turns more of the right hires — especially the long-term hires that steady the year — into cleared revenue and a growing business. Most hire desks spend hours every week chasing deposits, following up bounced payments, and manually confirming receipts. RouleurCo removes all of it."
      />

      {/* PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Payment admin is eating your hire desk&apos;s time.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Every payment that doesn&apos;t go through cleanly creates a chain of manual tasks. Chasing. Reminding. Re-sending links. Checking bank statements. Logging confirmations. It adds up fast.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <div className="flex items-center gap-2 mb-5 font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-red">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                  Without RouleurCo
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {withoutSteps.map((s) => (
                    <li key={s} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">✕</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-card border border-brand-green/30 bg-brand-green/5 p-7">
                <div className="flex items-center gap-2 mb-5 font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-green">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  With RouleurCo
                </div>
                <CheckList items={withSteps} />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-10 rounded-card bg-brand-navy text-white p-10">
              <div className="grid gap-8 sm:grid-cols-3 text-center">
                <div>
                  <div className="font-display text-4xl font-bold">0 calls</div>
                  <p className="mt-3 text-sm text-white/55">needed to chase a failed payment. RouleurCo handles it automatically.</p>
                </div>
                <div className="sm:border-x sm:border-white/10 sm:px-6">
                  <div className="font-display text-4xl font-bold">24/7</div>
                  <p className="mt-3 text-sm text-white/55">Payment collection runs even when the hire desk is closed.</p>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold">Auto</div>
                  <p className="mt-3 text-sm text-white/55">Receipts, reminders, retries — all sent without touching them.</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              The full payment lifecycle. Automated.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              From the moment a hire is confirmed to the moment payment clears — every step is handled by RouleurCo. Here&apos;s exactly what happens.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start">
            <ol className="flex flex-col gap-6">
              {lifecycle.map((step) => {
                const c = lifecycleColors[step.color];
                return (
                  <FadeUp key={step.n}>
                    <li className="flex gap-4">
                      <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full font-display font-bold ${c.bg} ${c.text}`}>
                        {step.n}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-base font-bold text-brand-navy">{step.title}</h3>
                        <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{step.body}</p>
                        <div className="mt-3">
                          <Badge tone={step.badgeTone}>{step.badge}</Badge>
                        </div>
                      </div>
                    </li>
                  </FadeUp>
                );
              })}
            </ol>

            <FadeUp delay={0.15}>
              <PaymentDashboardMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Everything Included"
            heading="The full payments feature set."
          />
          <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((i) => (
              <StaggerItem key={i.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-6">
                  <h3 className="font-display text-base font-bold text-brand-navy">{i.title}</h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{i.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* GOCARDLESS */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>Direct Debit Collection</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                GoCardless integration for recurring and long-term hires.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>Stripe is the right tool for one-off deposits and immediate card payments. But for rental businesses running contract accounts, recurring monthly hires, or longer-term fleet arrangements — GoCardless Direct Debit is a better fit.</p>
                <p>RouleurCo integrates with GoCardless to give you both options in one system. Set up a Direct Debit mandate for a contract customer and their payments collect automatically on the schedule you define — no manual invoicing, no chasing.</p>
              </div>
              <CheckList
                className="mt-6"
                items={[
                  "Direct Debit mandates set up and managed inside RouleurCo",
                  "Automatic collection on defined payment dates",
                  "Ideal for long-term hire, fleet accounts and recurring arrangements",
                  "Failed collections trigger the same automated recovery sequence as card payments",
                  "Customer notified automatically before each collection",
                ]}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-card bg-brand-navy text-white p-7 shadow-xl">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-5">
                  Payment method — by hire type
                </div>
                <ul className="flex flex-col gap-2.5">
                  {methodMatrix.map((m) => (
                    <li
                      key={m.type}
                      className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.04] p-4"
                    >
                      <div>
                        <div className="font-display text-sm font-bold text-white/85">{m.type}</div>
                        <div className="text-xs text-white/40 mt-0.5">{m.sub}</div>
                      </div>
                      <span
                        className={`rounded-md px-3 py-1 font-display text-xs font-bold ${
                          m.methodTone === "blue"
                            ? "bg-brand-blue/20 text-brand-blue border border-brand-blue/40"
                            : "bg-brand-green/15 text-brand-green border border-brand-green/30"
                        }`}
                      >
                        {m.method}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-md bg-white/[0.04] px-4 py-3 text-center text-xs text-white/45">
                  Both payment methods managed in one system — no separate dashboards
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Stop chasing payments manually."
        subtext="Every deposit, retry, receipt and recovery sequence runs automatically. Your hire desk focuses on bookings — not bank transfers."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See all features", href: "/features" }}
      />

      <Script
        id="payments-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Payments and Recovery",
            description:
              "Automated payment collection, failed payment recovery, and instant receipts for vehicle rental companies. Stripe for card payments, GoCardless for Direct Debit.",
            url: `${SITE_URL}/features/payments`,
          }),
        }}
      />
    </>
  );
}

function PaymentDashboardMock() {
  const rows = [
    { name: "Hartley Building Services", sub: "Transit x3 · 2-week hire · Deposit", amount: "£336", color: "text-brand-green", status: "Collected", statusBg: "bg-brand-green/15 text-brand-green", border: "border-white/10" },
    { name: "Nexus Contractors Ltd", sub: "Sprinter x2 · Weekly hire · Full payment", amount: "£1,240", color: "text-brand-amber", status: "Link Sent", statusBg: "bg-brand-amber/15 text-brand-amber", border: "border-white/10" },
    { name: "CityBuild Ltd", sub: "Transit x1 · Daily hire · Deposit", amount: "£85", color: "text-red-300", status: "Card Failed", statusBg: "bg-brand-red/15 text-red-300", border: "border-brand-red/30", retry: true },
    { name: "Apex Site Services", sub: "Sprinter · 3-day hire · Was: declined", amount: "£420", color: "text-brand-green", status: "Recovered ✓", statusBg: "bg-brand-green/15 text-brand-green", border: "border-brand-green/30", recovered: true },
  ];

  return (
    <div className="rounded-card border border-white/10 bg-brand-navy p-6 shadow-2xl" aria-hidden="true">
      <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-5">
        Payment Dashboard
      </div>
      <ul className="flex flex-col gap-3">
        {rows.map((r) => (
          <li
            key={r.name}
            className={`rounded-lg border bg-white/[0.04] p-4 ${r.border}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h4 className="font-display text-sm font-bold text-white/85 truncate">{r.name}</h4>
                <p className="text-xs text-white/40 mt-0.5">{r.sub}</p>
              </div>
              <div className="text-right shrink-0">
                <div className={`font-display text-base font-bold ${r.color}`}>{r.amount}</div>
                <div className={`mt-1 inline-block rounded px-2 py-0.5 text-[10px] font-display font-bold ${r.statusBg}`}>
                  {r.status}
                </div>
              </div>
            </div>

            {r.retry && (
              <div className="mt-4 pt-3 border-t border-white/8">
                <div className="font-display text-[10px] font-bold uppercase tracking-wide text-white/30 mb-3">
                  Automated recovery in progress
                </div>
                <div className="flex items-center justify-between text-[10px] text-white/55">
                  <TimelinePoint kind="failed" label="Failed" sub="10:42am" />
                  <span className="flex-1 h-px bg-white/15 mx-2" />
                  <TimelinePoint kind="sent" label="SMS sent" sub="11:12am" />
                  <span className="flex-1 h-px bg-white/15 mx-2" />
                  <TimelinePoint kind="pending" label="Email 2" sub="3:12pm" />
                  <span className="flex-1 h-px bg-white/15 mx-2" />
                  <TimelinePoint kind="future" label="Final" sub="notice" />
                </div>
              </div>
            )}

            {r.recovered && (
              <p className="mt-2 text-[11px] text-brand-green/80">
                Auto-recovery sequence cleared this payment after 2nd retry
              </p>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center justify-between rounded-md bg-white/[0.04] p-4">
        <span className="text-xs text-white/40">This month</span>
        <div className="flex gap-6 text-center">
          <div>
            <div className="font-display text-base font-bold text-white">£8,640</div>
            <div className="text-[10px] text-white/30">Collected</div>
          </div>
          <div>
            <div className="font-display text-base font-bold text-brand-green">£840</div>
            <div className="text-[10px] text-white/30">Recovered</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelinePoint({
  kind,
  label,
  sub,
}: {
  kind: "failed" | "sent" | "pending" | "future";
  label: string;
  sub: string;
}) {
  const dotColors = {
    failed: "bg-brand-red border-brand-red",
    sent: "bg-brand-blue/40 border-brand-blue",
    pending: "bg-brand-amber/20 border-brand-amber/50",
    future: "bg-white/[0.05] border-white/15",
  };
  return (
    <div className="flex flex-col items-center min-w-[44px]">
      <div className={`size-5 rounded-full border-2 ${dotColors[kind]}`} />
      <span className="mt-1 text-center leading-tight">
        {label}
        <br />
        <span className="text-white/35">{sub}</span>
      </span>
    </div>
  );
}
