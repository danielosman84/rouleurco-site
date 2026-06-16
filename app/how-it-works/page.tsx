import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
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
  title: "How RouleurCo Works — The Commercial Layer for Your Hire Desk",
  description:
    "How RouleurCo helps independent rental companies grow: capture every enquiry, see where your hires come from, follow up every quote, and convert more long-term hire.",
  path: "/how-it-works",
});

const setupSteps = [
  { n: 1, title: "Register your interest", body: "Tell us where to reach you. We'll be in touch within two business days." },
  { n: 2, title: "Onboarding call", body: "A short setup call to configure your pipeline, inbox and follow-ups around how your desk runs." },
  { n: 3, title: "Import your contacts", body: "Bring your existing customer list in, or start fresh with new enquiries." },
  { n: 4, title: "Start converting", body: "Enquiries captured, sources tracked, follow-ups running, more hires landing." },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How RouleurCo Grows Your Hire Desk",
  description:
    "How RouleurCo runs the commercial side of an independent rental business — capturing every enquiry, tracking where hires come from, following up every quote, and converting more long-term hire.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Capture every enquiry", text: "Phone, email, website, Facebook and missed calls all flow into one inbox the moment they land. Nothing slips while the desk is busy." },
    { "@type": "HowToStep", position: 2, name: "Know where your work comes from", text: "The source of every enquiry is recorded — Google, Facebook, the phone, word of mouth — so you can lean into what's converting." },
    { "@type": "HowToStep", position: 3, name: "Follow up until they reply", text: "Every quote is chased automatically across SMS and email until the customer answers. Chasing stops the moment they reply." },
    { "@type": "HowToStep", position: 4, name: "Convert more long-term hire", text: "Every enquiry moves through clear pipeline stages to a confirmed, earning hire — with the long-term opportunities prioritised." },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        eyebrow="How it works"
        heading="How RouleurCo wins you more of the work."
        lead="RouleurCo runs the commercial side of your hire desk — capturing every enquiry, showing you where your hires come from, chasing every quote, and converting more of the long-term work that steadies your year. Here's how."
      />

      {/* The four mechanisms */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The four moving parts</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Growth isn&apos;t one big move. It&apos;s four things done well, every day.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Each one is part of the commercial side of the business — the half that decides whether you grow. Here&apos;s what RouleurCo does, and where each piece goes deeper.
            </p>
          </FadeUp>

          <div className="mt-16 flex flex-col gap-20">
            <Step
              num="01"
              eyebrow="Capture"
              heading="Every enquiry, from everywhere — in one place"
              lead="Growth starts with not losing the enquiries you've already earned. Phone, email, website, Facebook, a missed call at 9pm — RouleurCo pulls every channel into one inbox the moment it lands, so nothing slips while the desk is busy."
              bullets={[
                "Website forms flow straight into the pipeline",
                "Emails become enquiry records automatically",
                "Facebook and web chat land in one unified inbox",
                "Phone calls logged in seconds, with the detail kept",
              ]}
              before="You check three different inboxes, a notepad on the desk, and your personal email. Maybe. If you remember."
              visual={<ChannelsVisual />}
              link={{ label: "See the unified inbox", href: "/features/unified-inbox" }}
            />
            <Step
              num="02"
              eyebrow="Measure"
              heading="Know where your work actually comes from"
              lead="You can't grow a channel you can't see. RouleurCo records the source of every enquiry — Google, Facebook, the phone, word of mouth — so you can lean into what's converting and stop spending on guesswork."
              bullets={[
                "Source captured on every enquiry, automatically",
                "See which channels bring the most hires",
                "Spot the ones quietly winning you long-term work",
                "Put your effort where it's already paying",
              ]}
              before="You've a rough feel for where work comes from — but no numbers, so marketing spend is a guess."
              visual={<OpportunityVisual />}
              reverse
            />
            <Step
              num="03"
              eyebrow="Chase"
              heading="Follow up until someone replies"
              lead="The first business to reply often wins the hire — and most enquiries that go cold weren't lost, just never chased. RouleurCo chases every quote automatically, across SMS and email, until you get an answer."
              bullets={[
                "Follow-up sequence starts the moment a quote goes out",
                "Automated SMS and email at timed intervals",
                "Chasing stops the instant the customer replies",
                "No quote left to go cold on a busy day",
              ]}
              before="Quote sent. Desk gets busy. The customer books with whoever followed up. You never find out why."
              visual={<FollowUpVisual />}
              link={{ label: "See follow-up automation", href: "/features/missed-call" }}
            />
            <Step
              num="04"
              eyebrow="Convert"
              heading="Turn more enquiries — especially the long ones — into booked vehicles"
              lead="A structured desk converts more of what it captures. RouleurCo moves every enquiry through clear stages to a confirmed, earning hire — and makes the long-term enquiries that steady your year the ones you chase hardest."
              bullets={[
                "Every enquiry tracked through clear pipeline stages",
                "Long-term opportunities flagged and prioritised",
                "Agreements signed and deposits taken in-platform",
                "More of the work that lifts your quiet months",
              ]}
              before="The daily hires get chased. The long-term enquiry that could've filled February slips quietly away."
              visual={<ConfirmVisual />}
              link={{ label: "See enquiry pipelines", href: "/features/pipelines" }}
              reverse
            />
          </div>
        </div>
      </section>

      {/* Commercial layer positioning */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl text-center">
          <FadeUp>
            <Eyebrow>The commercial layer</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
              RouleurCo isn&apos;t a fleet system, and it isn&apos;t trying to replace one.
            </h2>
            <p className="mt-5 text-lg text-brand-text-2 leading-relaxed">
              Your fleet software runs the vehicles. Your inbox holds the emails. Neither one is making sure the long-term enquiry gets chased, or telling you which channel your hires come from. That&apos;s the commercial side — and it&apos;s the half of the business that decides whether you grow.
            </p>
            <p className="mt-6 font-display text-xl sm:text-2xl font-bold text-brand-navy text-balance">
              Keep what runs your fleet.{" "}
              <span className="text-brand-blue">RouleurCo runs the part that wins the work.</span>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Setup */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Getting set up"
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
        heading="Want to see what it'd do for your desk?"
        subtext="Register your interest and we'll show you how RouleurCo would map to how your hire desk runs. No commitment."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "Take the Growth Check", href: "/growth-check" }}
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
  link,
}: {
  num: string;
  eyebrow: string;
  heading: string;
  lead: string;
  bullets: string[];
  before?: string;
  visual: React.ReactNode;
  reverse?: boolean;
  link?: { label: string; href: string };
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
                <strong className="font-display text-brand-navy">Without it:</strong>{" "}
                {before}
              </p>
            </div>
          )}
          {link && (
            <Link
              href={link.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-brand-blue hover:text-brand-navy"
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
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
        <div className="font-display text-sm font-bold">→ RouleurCo Inbox</div>
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
          ["DURATION", "6 months"],
          ["SOURCE", "Google"],
          ["ASSIGNED", "Dave H."],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="font-display text-[10px] font-semibold uppercase tracking-wide text-brand-muted">{k}</div>
            <div className="font-semibold text-brand-text">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2 text-xs font-display font-semibold text-brand-green">
        ✓ Source tracked: Google
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
            Long-Term Hire
          </span>
          <Badge tone="green">BOOKED</Badge>
        </div>
        <div className="font-display text-sm font-bold text-brand-navy">Hartley Building Services</div>
        <div className="text-xs text-brand-muted mt-1">Transit x3 · 6 months · earning year-round</div>
      </div>
      <div className="flex items-center justify-between rounded-card border border-brand-green/30 bg-brand-green/10 p-4 mb-2.5">
        <div>
          <div className="font-display text-xs font-bold text-brand-navy">Deposit received</div>
          <div className="text-xs text-brand-muted">Via payment link</div>
        </div>
        <div className="font-display text-base font-bold text-brand-green">Paid</div>
      </div>
      <div className="rounded-card bg-brand-blue p-4 text-center text-white">
        <div className="font-display text-sm font-bold">✓ Hire Confirmed</div>
        <div className="text-xs text-white/70 mt-1">A vehicle earning through the quiet months</div>
      </div>
    </div>
  );
}
