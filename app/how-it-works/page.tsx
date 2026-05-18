import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "How RouleurCo Works — Enquiry to Hire, Automated",
  description:
    "From the first enquiry to a confirmed hire — see how RouleurCo structures the rental sales process and removes the gaps where hires get lost.",
  path: "/how-it-works",
});

const problems = [
  {
    title: "Notes on notepads",
    body: "Enquiry details written on paper. Passed between staff verbally. Lost between shifts. No visibility for anyone else on the team.",
  },
  {
    title: "Messages missed for hours",
    body: "Facebook messages. Web chat. Email to a shared inbox. No single place to check — things sit unread while the hire desk is on the phone.",
  },
  {
    title: "Follow-up never happens",
    body: "Quote sent. Customer doesn't reply immediately. The hire desk gets busy. The enquiry sits there. The customer books with someone who followed up.",
  },
];

const setupSteps = [
  { n: 1, title: "Register Interest", body: "Register as a founding operator. We'll be in touch within 24 hours." },
  { n: 2, title: "Onboarding Call", body: "A personal setup call to configure your pipeline, inbox and automations." },
  { n: 3, title: "Import Contacts", body: "Bring your existing customer list in. Or start fresh with new enquiries." },
  { n: 4, title: "Start Converting", body: "Enquiries flowing in. Follow-ups running automatically. Hires confirmed." },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How RouleurCo Works — From Enquiry to Confirmed Hire",
  description:
    "How RouleurCo structures the rental sales process — capturing enquiries from every channel and turning them into confirmed hires automatically.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Enquiry Captured", text: "Every channel flows into one system. Web, email, social, phone. Nothing gets missed." },
    { "@type": "HowToStep", position: 2, name: "Opportunity Structured", text: "Customer record created automatically. Vehicle, dates, source all recorded. Acknowledgement sent to customer." },
    { "@type": "HowToStep", position: 3, name: "Quote Sent — Follow-up Automated", text: "Quote sent from the platform. Automated follow-up sequence starts immediately. SMS and email at timed intervals." },
    { "@type": "HowToStep", position: 4, name: "Hire Confirmed", text: "Documents collected, e-signature obtained, deposit taken. All automated. Hire confirmed and recorded." },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        eyebrow="The Process"
        heading="From enquiry to confirmed hire. Without the gaps."
        lead="Here's exactly how RouleurCo structures the rental sales process — and where it fixes the gaps that cost most operators hires every week."
      />

      {/* Reality check */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Reality"
            heading="How most hire desks handle enquiries today."
            lead="Before RouleurCo, this is what enquiry management looks like for most independent rental operators."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <div className="relative h-full rounded-card border border-brand-red/30 bg-white p-7">
                  <Badge tone="red" className="absolute right-4 top-4">PROBLEM</Badge>
                  <h3 className="font-display text-lg font-bold text-brand-navy pr-20">{p.title}</h3>
                  <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <FadeUp delay={0.15}>
            <p className="mt-10 text-center font-display text-lg font-bold text-brand-navy">
              This isn&apos;t a people problem. It&apos;s a process problem.
              <br />
              <span className="text-brand-blue">RouleurCo fixes the process.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 4 Steps */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>How RouleurCo Works</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              The rental sales process. Structured and automated.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Here&apos;s how RouleurCo takes an enquiry from any channel and turns it into a confirmed hire — without relying on your team to remember to follow up.
            </p>
          </FadeUp>

          <div className="mt-16 flex flex-col gap-20">
            <Step
              num="01"
              eyebrow="Step 1"
              heading="Enquiry arrives — from any channel"
              lead="A customer enquires about a van hire. It doesn't matter whether they came through your website, sent an email, messaged on Facebook, or called the office."
              bullets={[
                "Website forms flow directly into the pipeline",
                "Emails automatically become enquiry records",
                "Social messages land in the unified inbox",
                "Phone calls can be logged manually in seconds",
              ]}
              before="You check three different inboxes, a notepad on the desk, and your personal email. Maybe. If you remember."
              visual={<ChannelsVisual />}
            />
            <Step
              num="02"
              eyebrow="Step 2"
              heading="Enquiry is structured as an opportunity"
              lead="Every enquiry becomes a structured opportunity in the pipeline. The customer details, vehicle requirements, dates and source are all captured and visible to the whole team."
              bullets={[
                "Customer record created automatically",
                "Vehicle type, dates and hire duration recorded",
                "Opportunity assigned to a team member",
                "Acknowledgement message sent to customer automatically",
              ]}
              before="The person who took the call has the info. No-one else knows about it. If they're off sick, the customer hears nothing."
              visual={<OpportunityVisual />}
              reverse
            />
            <Step
              num="03"
              eyebrow="Step 3"
              heading="Quote sent. Follow-up sequence starts automatically."
              lead="Your team sends the quote. At that moment, RouleurCo starts the follow-up sequence automatically. No one needs to remember to follow up — it just happens."
              bullets={[
                "Quote sent directly from within the platform",
                "Automated SMS follow-up after 24 hours if no reply",
                "Automated email follow-up after 48 hours",
                "Sequence stops the moment the customer responds",
              ]}
              before="Quote sent. Hire desk gets busy. Customer never hears back. They've already booked with someone else by the time you remember."
              visual={<FollowUpVisual />}
            />
            <Step
              num="04"
              eyebrow="Step 4"
              heading="Customer confirms. Documents collected. Payment taken."
              lead="Customer says yes. RouleurCo sends the hire agreement for e-signature and the deposit request automatically. No chasing. No paperwork delays."
              bullets={[
                "Hire agreement sent with one click",
                "Customer signs on any device — no printing required",
                "Payment link sent automatically on confirmation",
                "Document reminders if not completed within set time",
              ]}
              visual={<ConfirmVisual />}
              reverse
            />
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Getting Set Up"
            heading="Up and running in days."
            lead="RouleurCo comes pre-configured with rental workflows. We handle the setup — you don't need a technical team or weeks of configuration."
            variant="dark"
          />
          <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {setupSteps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-6">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-blue font-display font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBanner
        heading="Ready to see it in action?"
        subtext="Register as a founding operator and get the full setup — configured for your rental business."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      <Script
        id="how-it-works-howto-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

function Step({
  num,
  eyebrow,
  heading,
  lead,
  bullets,
  before,
  visual,
  reverse,
}: {
  num: string;
  eyebrow: string;
  heading: string;
  lead: string;
  bullets: string[];
  before?: string;
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <FadeUp>
        <div className="max-w-xl">
          <span className="font-display text-7xl font-bold leading-none text-brand-blue-light">
            {num}
          </span>
          <div className="mt-2"><Eyebrow>{eyebrow}</Eyebrow></div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight text-balance">
            {heading}
          </h3>
          <p className="mt-4 text-brand-text-2 leading-relaxed">{lead}</p>
          <CheckList className="mt-5" items={bullets} />
          {before && (
            <div className="mt-6 rounded-card bg-brand-lightbg border-l-4 border-brand-blue p-5">
              <p className="text-sm text-brand-text-2 leading-relaxed">
                <strong className="font-display text-brand-navy">Before RouleurCo:</strong>{" "}
                {before}
              </p>
            </div>
          )}
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <div className="flex justify-center">{visual}</div>
      </FadeUp>
    </div>
  );
}

function ChannelsVisual() {
  const channels = [
    { label: "Website Form", color: "border-brand-blue/40 bg-brand-blue/10 text-brand-blue" },
    { label: "Facebook", color: "border-indigo-400/40 bg-indigo-400/10 text-indigo-500" },
    { label: "Email", color: "border-brand-green/40 bg-brand-green/10 text-brand-green" },
    { label: "Phone", color: "border-brand-amber/40 bg-brand-amber/10 text-brand-amber" },
  ];
  return (
    <div className="w-full max-w-[320px]">
      <div className="grid grid-cols-2 gap-2.5">
        {channels.map((c) => (
          <div
            key={c.label}
            className={`rounded-card border p-4 text-center font-display text-sm font-semibold ${c.color}`}
          >
            {c.label}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-card bg-brand-blue p-4 text-center text-white">
        <div className="font-display text-sm font-bold">→ RouleurCo Pipeline</div>
        <div className="text-xs text-white/70 mt-1">All enquiries. One place.</div>
      </div>
    </div>
  );
}

function OpportunityVisual() {
  return (
    <div className="w-full max-w-[320px] rounded-card border border-brand-mid bg-white p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="font-display text-xs font-bold text-brand-navy">New Enquiry</span>
        <Badge tone="blue">NEW</Badge>
      </div>
      <div className="pb-3 mb-3 border-b border-brand-mid">
        <div className="text-[10px] font-display font-semibold uppercase tracking-wide text-brand-muted">Customer</div>
        <div className="font-display text-sm font-bold text-brand-navy">Hartley Building Services</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs">
        {[
          ["VEHICLE", "Transit x3"],
          ["DURATION", "2 weeks"],
          ["SOURCE", "Web form"],
          ["ASSIGNED", "Dave H."],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="font-display text-[10px] font-semibold uppercase tracking-wide text-brand-muted">{k}</div>
            <div className="font-semibold text-brand-text">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2 text-xs font-display font-semibold text-brand-green">
        ✓ Acknowledgement sent automatically
      </div>
    </div>
  );
}

function FollowUpVisual() {
  const nodes = [
    { kind: "trigger" as const, label: "Quote Marked Sent", sub: "Sequence starts automatically" },
    { kind: "action" as const, label: "Immediate confirmation SMS", sub: "To customer — quote received" },
    { kind: "delay" as const, label: "Wait 24 hours", sub: "No reply received" },
    { kind: "action" as const, label: "SMS Follow-up #1", sub: "Personalised to their enquiry" },
    { kind: "delay" as const, label: "Wait 48 hours", sub: "Still no reply" },
    { kind: "action" as const, label: "Email Follow-up #2", sub: "Quote attached automatically" },
  ];
  const colors = {
    trigger: { dot: "bg-brand-blue", ring: "ring-brand-blue/30", label: "text-brand-blue" },
    delay: { dot: "bg-brand-amber", ring: "ring-brand-amber/30", label: "text-brand-amber" },
    action: { dot: "bg-brand-green", ring: "ring-brand-green/30", label: "text-brand-green" },
  };
  return (
    <div className="w-full max-w-[320px]">
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

function ConfirmVisual() {
  return (
    <div className="w-full max-w-[320px]">
      <div className="rounded-card border border-brand-mid bg-white p-5 mb-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-display text-[10px] font-bold uppercase tracking-wide text-brand-muted">
            Hire Agreement
          </span>
          <Badge tone="green">SIGNED</Badge>
        </div>
        <div className="font-display text-sm font-bold text-brand-navy">Hartley Building Services</div>
        <div className="text-xs text-brand-muted mt-1">Transit x3 · 2 weeks · £1,680</div>
      </div>
      <div className="flex items-center justify-between rounded-card border border-brand-green/30 bg-brand-green/10 p-4 mb-2.5">
        <div>
          <div className="font-display text-xs font-bold text-brand-navy">Deposit received</div>
          <div className="text-xs text-brand-muted">Via payment link</div>
        </div>
        <div className="font-display text-base font-bold text-brand-green">£336</div>
      </div>
      <div className="rounded-card bg-brand-blue p-4 text-center text-white">
        <div className="font-display text-sm font-bold">✓ Hire Confirmed</div>
        <div className="text-xs text-white/70 mt-1">Moved to Confirmed in pipeline</div>
      </div>
    </div>
  );
}
