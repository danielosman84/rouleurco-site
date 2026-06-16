import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema, buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Customer Onboarding & Document Collection",
  description:
    "Automated document collection, structured follow-up, and an authorisation gate that prevents vehicle release until every required document is verified and on file.",
  path: "/features/onboarding",
});

const stages = [
  { n: "01", title: "Hire Confirmed", desc: "Booking accepted. Onboarding sequence triggered automatically. Customer receives welcome message with document portal link.", badge: "✓ Auto-triggered", state: "done" },
  { n: "02", title: "Document Collection", desc: "Customer uploads licence, insurance and ID via their phone. Each item logged and checked off. Automated reminders if anything is outstanding.", badge: "In progress", state: "active" },
  { n: "03", title: "Review & Authorise", desc: "Hire desk reviews documents. Authorisation decision logged. Customer notified. High-risk flags surfaced automatically for review.", badge: "🔒 Awaiting docs", state: "locked" },
  { n: "04", title: "Vehicle Release", desc: "All documents verified and authorisation granted. Hire agreement signed. Handover confirmation sent. Vehicle can be released.", badge: "🔒 Awaiting auth", state: "locked" },
];

const docCategories = [
  {
    title: "Driving Licence",
    sub: "Identity and licence validation",
    color: "bg-brand-blue-light text-brand-blue",
    docs: [
      { name: "Photocard front and back", tag: "Required", tone: "blue", body: "Both sides of the current UK photocard licence. Expiry date, licence categories and endorsements all verified from the image." },
      { name: "DVLA licence check code", tag: "Conditional", tone: "amber", body: "Customer generates a share code at DVLA.gov.uk. Gives you access to their full endorsement and penalty point history — the thing a photocopy never tells you." },
      { name: "Paper counterpart (pre-2015 licences)", tag: "Conditional", tone: "amber", body: "Required only for customers with licences issued before 8 June 2015. System flags this based on licence date automatically." },
    ],
  },
  {
    title: "Insurance",
    sub: "Cover verification before keys are handed over",
    color: "bg-brand-green/15 text-brand-green",
    docs: [
      { name: "Certificate of Motor Insurance", tag: "Required", tone: "blue", body: "Current insurance certificate showing the vehicle is covered for hire or reward, or that the customer has appropriate hired-in vehicle cover. Expiry date validated automatically." },
      { name: "Goods in transit cover", tag: "Conditional", tone: "amber", body: "Required if the customer is hiring for commercial use and carrying third-party goods. Flag set based on hire type." },
    ],
  },
  {
    title: "Identity & Business Verification",
    sub: "For business accounts and new customers",
    color: "bg-brand-amber/15 text-brand-amber",
    docs: [
      { name: "Proof of address", tag: "Required", tone: "blue", body: "Recent utility bill or bank statement (within 3 months) confirming the address on the licence. Stored against the customer record." },
      { name: "Company registration number", tag: "Conditional", tone: "amber", body: "For business accounts. Auto-verified against Companies House. Flags dissolved or dormant companies before hire is authorised." },
      { name: "Authorised driver list (fleet accounts)", tag: "Conditional", tone: "amber", body: "For business accounts with multiple drivers. Each named driver completes their own licence submission. No unnamed driver can take a vehicle." },
      { name: "Second form of photo ID", tag: "Optional", tone: "navy", body: "Passport or national ID card. Recommended for high-value or long-term hires. Can be made mandatory by vehicle category." },
    ],
  },
  {
    title: "Hire Agreement",
    sub: "Legally signed before vehicle handover",
    color: "bg-indigo-500/15 text-indigo-500",
    docs: [
      { name: "Digital hire agreement", tag: "Required", tone: "blue", body: "Sent automatically once all documents are received and verified. Customer signs electronically on their phone. Signed copy stored against the booking instantly — no printing, no scanning." },
    ],
  },
];

const journeySteps = [
  { n: "1", title: "Document request SMS sent automatically", body: '"Hi Dave — thanks for booking. Before we can confirm your hire, we just need a few documents from you. Here\'s your secure link: [link]. Please complete this as soon as you can."' },
  { n: "2", title: "Customer opens the portal on their phone", body: "Clear checklist of what's needed. Each item has instructions. They photograph documents with their camera — no app, no login required." },
  { n: "3", title: "Automated follow-up sequence until documents are received", body: "Customers forget, leave it until the last minute. RouleurCo runs a structured follow-up sequence automatically — SMS reminders at set intervals, escalating as the hire date approaches. 48 hours out? Reminder. 24 hours? Second reminder. Morning of hire? Final chase. Your desk is only alerted when it's still unresolved and needs a human call." },
  { n: "✓", title: "All docs received → hire desk reviews → hire agreement sent", body: "Once all documents are received, your hire desk is notified to review and approve. Once authorised, the hire agreement is sent automatically for e-signature. Customer arrives. Everything is in order and on file." },
];

const authChecks = [
  { label: "Driving licence received and reviewed", status: "Verified" },
  { label: "DVLA check code (where required)", status: "Clean" },
  { label: "Insurance certificate in date", status: "Verified" },
  { label: "Hire agreement signed", status: "Signed" },
  { label: "Deposit payment cleared", status: "Cleared" },
];

const riskTiers = [
  { level: "Low Risk — Standard hire", title: "All documents clean. No flags.", body: "Returned customer, clean licence, valid insurance, signed agreement. Standard authorisation. No additional checks needed.", badge: "Auto-cleared for release", badgeTone: "green" as const, border: "border-brand-green/30", bg: "bg-brand-green/5", dot: "bg-brand-green" },
  { level: "Moderate Risk — Review recommended", title: "3–5 penalty points. First-time customer.", body: "Licence shows minor endorsements. New customer with no hire history. Hire desk prompted to review before authorising. Decision logged.", badge: "Hire desk review required", badgeTone: "amber" as const, border: "border-brand-amber/30", bg: "bg-brand-amber/5", dot: "bg-brand-amber" },
  { level: "High Risk — Gate blocked", title: "6+ points, DR/DD endorsements, or insurance expiry within 7 days.", body: "Gate is automatically held. Hire desk notified immediately. No vehicle can be released until a senior authorisation decision is made and logged.", badge: "Gate held — senior sign-off required", badgeTone: "red" as const, border: "border-brand-red/30", bg: "bg-brand-red/5", dot: "bg-brand-red" },
];

const faqs: FAQItem[] = [
  {
    question: "What documents does RouleurCo collect before a vehicle is released?",
    answer:
      "Driving licence (both sides), DVLA check code where required, paper counterpart for pre-2015 licences, Certificate of Motor Insurance, goods in transit cover for commercial use, proof of address, Companies House verification for business accounts, named driver licences for fleet accounts, and a signed digital hire agreement. Your operation decides which are mandatory.",
  },
  {
    question: "What is the RouleurCo authorisation gate?",
    answer:
      "The authorisation gate is a hard check before any hire is cleared for vehicle handover. Every required document must be received, verified, and approved. The gate is system-enforced — it cannot be bypassed by the hire desk. If anything is missing or flagged as high-risk, the vehicle cannot be released until a senior authorisation decision is made and logged.",
  },
  {
    question: "How does the RouleurCo onboarding sequence chase customers for documents?",
    answer:
      "The system runs a structured follow-up sequence automatically. SMS reminders fire at set intervals that escalate as the hire date approaches: 48 hours out, 24 hours out, and morning of hire. Your hire desk is only alerted when the documents are still unresolved at that point and need a human call. Every chase is logged.",
  },
];

const tagToneClasses = {
  blue: "bg-brand-blue-light text-brand-blue border-brand-blue/30",
  amber: "bg-brand-amber/15 text-brand-amber border-brand-amber/30",
  navy: "bg-brand-mid text-brand-text-2 border-brand-mid",
} as const;

export default function OnboardingPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Customer Onboarding" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="No vehicle leaves without the right documents in place. RouleurCo collects them — automatically."
        lead="Fast, watertight onboarding is how an independent operator wins more of the right hires — especially the long-term hires that steady the year — without slowing the desk down or taking on risk. Driving licence checks. Proof of insurance. Company details. Signed hire agreements. RouleurCo sends the onboarding sequence the moment a hire is confirmed, tracks what's been received, and blocks vehicle release until every required document is in place."
      />

      {/* PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-3xl">
              Document collection is a liability waiting to happen — and it&apos;s eating time it shouldn&apos;t.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Most independent operators collect documents inconsistently. Sometimes over email. Sometimes a photo on a phone that never gets filed. Sometimes nothing at all because the customer seemed fine. Then something goes wrong.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-red mb-5">
                  The way most operators do it
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {[
                    "Staff ask for documents over the phone — customer says they'll bring them on the day",
                    "Customer arrives, documents aren't ready — awkward delay at the desk",
                    "Licence photo taken on staff member's personal phone, stored nowhere permanent",
                    "Hire agreement printed, signed in a hurry, scanned badly, filed in a folder nobody opens",
                    'Insurance details not collected — "they seemed fine"',
                    "Incident happens. Documents are missing. Company is exposed.",
                    "New customer next week — same process. Same risk.",
                  ].map((s) => (
                    <li key={s} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">✕</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-card border border-brand-blue/30 bg-brand-lightbg p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-blue mb-5">
                  With RouleurCo
                </div>
                <CheckList
                  items={[
                    "Hire confirmed → onboarding sequence sent to customer automatically via SMS and email",
                    "Customer uploads documents from their phone before they arrive — at their convenience",
                    "Each document checked off as received and logged against the booking",
                    "Missing documents flagged — customer chased automatically with timed reminders",
                    "Hire agreement sent digitally, signed electronically, stored against the booking",
                    "Authorisation gate checks all required documents before vehicle release is permitted",
                    "Everything stored permanently, searchable, retrievable in seconds if ever needed",
                  ]}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* STAGE TRACK */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Onboarding Flow"
            heading="Four stages. All automated. Nothing releases until they're complete."
          />
          <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <StaggerItem key={s.n}>
                <div
                  className={`h-full rounded-card p-6 border ${
                    s.state === "done"
                      ? "border-brand-green/40 bg-white"
                      : s.state === "active"
                      ? "border-brand-blue/40 bg-white ring-2 ring-brand-blue/20"
                      : "border-brand-mid bg-white/60"
                  }`}
                >
                  <div className="font-display text-xs font-bold uppercase tracking-wide text-brand-muted">STAGE {s.n}</div>
                  <h3 className="mt-2 font-display text-base font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{s.desc}</p>
                  <div className="mt-4">
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-xs font-display font-bold ${
                        s.state === "done"
                          ? "bg-brand-green/15 text-brand-green"
                          : s.state === "active"
                          ? "bg-brand-blue/15 text-brand-blue"
                          : "bg-brand-mid text-brand-muted"
                      }`}
                    >
                      {s.badge}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>What Gets Collected</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Every document that matters — collected before the keys change hands.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              RouleurCo&apos;s onboarding checklist is pre-configured for vehicle rental. Required, conditional and optional documents are separated clearly. You decide what&apos;s mandatory for your operation.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {docCategories.map((cat) => (
              <FadeUp key={cat.title}>
                <div className="rounded-card border border-brand-mid bg-white p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`inline-flex size-10 items-center justify-center rounded-lg ${cat.color}`}>
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="3" width="16" height="18" rx="2" />
                        <path d="M9 8h6M9 12h6M9 16h4" />
                      </svg>
                    </span>
                    <div>
                      <div className="font-display text-base font-bold text-brand-navy">{cat.title}</div>
                      <div className="text-xs text-brand-muted">{cat.sub}</div>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {cat.docs.map((d) => (
                      <li key={d.name} className="rounded-md border border-brand-mid p-3.5">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-display text-sm font-bold text-brand-navy">{d.name}</h4>
                          <span className={`shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-display font-bold ${tagToneClasses[d.tone as keyof typeof tagToneClasses]}`}>
                            {d.tag}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs text-brand-text-2 leading-relaxed">{d.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Customer Journey</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              What the customer receives — automatically.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              After the hire is confirmed, this is the journey the customer goes through — without your hire desk doing anything.
            </p>
          </FadeUp>

          <div className="mt-12 max-w-3xl">
            <ol className="flex flex-col gap-5">
              {journeySteps.map((step, i) => (
                <FadeUp key={i}>
                  <li className="flex gap-4 items-start">
                    <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full font-display font-bold text-white ${
                      step.n === "✓" ? "bg-brand-green" : "bg-brand-blue"
                    }`}>
                      {step.n}
                    </span>
                    <div className="flex-1 rounded-card border border-brand-mid bg-white p-5">
                      <h3 className="font-display text-base font-bold text-brand-navy">{step.title}</h3>
                      <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>

            <FadeUp delay={0.15}>
              <div className="mt-8 rounded-card border border-brand-mid bg-white p-5 flex gap-3 items-start">
                <svg className="size-5 shrink-0 mt-0.5 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
                <p className="text-sm text-brand-text-2 leading-relaxed">
                  Document collection takes as long as it takes — some customers act immediately, others need several follow-ups over multiple days. The difference with RouleurCo is that every chase, reminder and escalation happens automatically. Your hire desk stays focused on customers who actually need attention.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* AUTHORISATION GATE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Authorisation Gate"
            heading="No vehicle is released without passing the gate."
            lead="The authorisation gate is a hard check before any hire is cleared for vehicle handover. Every required document must be received, verified, and approved — the system prevents release if anything is missing."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
            <FadeUp>
              <div className="rounded-card bg-brand-navy text-white p-8 shadow-2xl">
                <div className="mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                  <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold">Authorisation Gate</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  A hire cannot proceed to vehicle release until all items below are checked. This cannot be bypassed by the hire desk — it is a system-enforced requirement.
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {authChecks.map((c) => (
                    <li key={c.label} className="flex items-center gap-3 rounded-md bg-white/[0.04] p-3">
                      <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                        <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="flex-1 text-sm text-white/85">{c.label}</span>
                      <span className="rounded px-2 py-0.5 text-[10px] font-display font-bold bg-brand-green/15 text-brand-green">{c.status}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-md border border-brand-green/30 bg-brand-green/15 p-3 flex items-center gap-2.5">
                  <svg className="size-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="font-display text-xs font-bold text-brand-green">
                    ALL CLEAR — Vehicle release authorised
                  </span>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Risk flagging — the gate surfaces problems automatically
              </h3>
              <p className="mt-2 text-brand-text-2 leading-relaxed">
                Some authorisation decisions need human judgement. RouleurCo surfaces the risk signals clearly so your hire desk can make a fast, informed decision.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                {riskTiers.map((tier) => (
                  <div key={tier.level} className={`rounded-card border p-5 ${tier.border} ${tier.bg}`}>
                    <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide text-brand-navy">
                      <span className={`size-2.5 rounded-full ${tier.dot}`} />
                      {tier.level}
                    </div>
                    <h4 className="mt-2 font-display text-base font-bold text-brand-navy">{tier.title}</h4>
                    <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{tier.body}</p>
                    <div className="mt-3">
                      <Badge tone={tier.badgeTone}>{tier.badge}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-12 rounded-card bg-brand-navy text-white p-10">
              <h3 className="font-display text-xl font-bold">Why this matters — in plain terms</h3>
              <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
                If a vehicle leaves your yard without the right documents in place and something goes wrong, you&apos;re exposed. RouleurCo&apos;s authorisation gate removes the &ldquo;I thought someone had checked it&rdquo; problem entirely. Every decision is logged, timestamped, and retrievable.
              </p>
              <ul className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  { title: "Every hire has a complete, timestamped paper trail.", body: "Who authorised it. When. What documents were on file. No gaps." },
                  { title: "Inconsistency is eliminated.", body: "It's not down to which member of staff is on — the system enforces the same standard for every hire, every time." },
                  { title: "Documents are retrievable in seconds.", body: "If a claim is made 6 months after hire, you pull up the booking and every document is right there. Not in a folder. Not on someone's phone." },
                ].map((b) => (
                  <li key={b.title} className="rounded-card border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm text-white/85">
                      <strong className="font-display block mb-1.5">{b.title}</strong>
                      {b.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        heading="Documents in order before every hire."
        subtext="Automated collection, structured follow-up, and an authorisation gate that prevents release until everything is on file. No shortcuts. No gaps."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See all features", href: "/features" }}
      />

      <Script
        id="onboarding-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Customer Onboarding",
            description:
              "Automated document collection, structured follow-up sequences, and an authorisation gate that prevents vehicle release until every required document is verified.",
            url: `${SITE_URL}/features/onboarding`,
          }),
        }}
      />
      <Script
        id="onboarding-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}
