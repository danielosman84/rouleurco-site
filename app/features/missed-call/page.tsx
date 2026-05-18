import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Missed Call Text-Back for Van Hire Companies",
  description:
    "Every missed call gets an automatic SMS response within seconds — inbound and outbound. Never lose a vehicle hire enquiry to an unanswered phone again.",
  path: "/features/missed-call",
});

const withoutSteps = [
  { n: 1, title: "Customer calls your hire desk", body: "You're with another customer. Phone rings out." },
  { n: 2, title: "No response from you", body: "Customer hangs up. No voicemail. No text. Nothing." },
  { n: 3, title: "Customer calls the next company", body: "They pick up. Hire confirmed before you even know you missed the call." },
  { n: 4, title: "You call back 20 minutes later", body: "Too late. Hire already booked elsewhere. Revenue gone." },
];

const withSteps = [
  { n: 1, title: "Customer calls — nobody answers", body: "Line is busy, hire desk is occupied.", green: false },
  { n: 2, title: "SMS sent automatically — within seconds", body: "\"Hi, sorry we missed your call — we'll be back in touch shortly. Can we help with a van hire?\"", green: true },
  { n: 3, title: "Customer replies by text", body: "Conversation started. They're now engaged with you, not calling the next number.", green: true },
  { n: 4, title: "Hire desk picks up and converts", body: "Context in the inbox. Enquiry captured. Hire saved.", green: true },
];

const inclusions = [
  { title: "Inbound missed call response", body: "Customer calls and nobody answers — SMS fires within seconds. Never lose an inbound enquiry to an unanswered call again." },
  { title: "Outbound no-answer follow-up", body: "You call a lead and they don't pick up — automatic SMS sent immediately. Keeps momentum without requiring a manual callback." },
  { title: "Reply captured in inbox", body: "When the customer texts back, the reply lands directly in the unified inbox — linked to their contact record and ready for your hire desk." },
  { title: "Customisable message", body: "Edit the SMS wording to match your brand voice. Include your business name, a specific offer, or a direct callback number." },
  { title: "Out-of-hours awareness", body: "Set different messages for out-of-hours missed calls. Customers know when to expect a response — reducing frustration and setting the right expectation." },
  { title: "Activity tracked", body: "Every text-back logged against the contact. See how many missed call recoveries you've made each month — and how many converted to confirmed hires." },
];

export default function MissedCallPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Missed Call Text-Back" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Every missed call gets a response. Automatically. Within seconds."
        lead="A customer calls your hire desk. Nobody answers. Before they've put the phone down, they've already received a text from you. Works both ways — when a lead doesn't pick up your call, an automatic SMS follows immediately."
      />

      {/* PROBLEM with before/after */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              The hire goes to whoever responds first. That&apos;s not always you.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Independent rental is a competitive market. When a customer wants a van, they call two or three companies. Whoever calls back first — or responds first — gets the booking. A missed call with no follow-up is a hire handed to a competitor.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-8">
                <div className="font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-red mb-6">
                  What happens without text-back
                </div>
                <ol className="flex flex-col">
                  {withoutSteps.map((s, i) => (
                    <li
                      key={s.n}
                      className={`flex gap-3 py-3.5 ${i < withoutSteps.length - 1 ? "border-b border-brand-red/20" : ""}`}
                    >
                      <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-red/15 font-display text-xs font-bold text-brand-red">
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-bold text-brand-red">{s.title}</h3>
                        <p className="mt-0.5 text-sm text-brand-text-2">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="h-full rounded-card bg-brand-navy text-white p-8 ring-1 ring-white/10">
                <div className="font-display text-xs font-bold uppercase tracking-[0.1em] text-white/40 mb-6">
                  With RouleurCo text-back
                </div>
                <ol className="flex flex-col">
                  {withSteps.map((s, i) => (
                    <li
                      key={s.n}
                      className={`flex gap-3 py-3.5 ${i < withSteps.length - 1 ? "border-b border-white/10" : ""}`}
                    >
                      <span
                        className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold ${
                          s.green
                            ? "bg-brand-green/20 text-brand-green"
                            : "bg-brand-blue/20 text-brand-blue"
                        }`}
                      >
                        {s.n}
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-bold text-white">{s.title}</h3>
                        <p className="mt-0.5 text-sm text-white/55">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TWO DIRECTIONS */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Both Directions"
            heading="Missed calls happen both ways. Both are covered."
            lead="Whether a customer calls you and you miss it — or you call a lead and they don't answer — an automatic SMS response fires immediately in both cases."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <DirectionCard
                direction="Direction 1 — Inbound"
                accent="brand-blue"
                heading="Customer calls you — nobody picks up"
                body="The most common scenario. A prospect or existing customer calls your hire desk. The phone rings out — busy period, lunchtime, out of hours. Without text-back, that enquiry is gone. With RouleurCo, they receive an SMS within seconds."
                smsLabel="Example SMS sent to customer"
                sms='"Hi — sorry we missed your call to Hartley Van Hire. We&rsquo;ll call you back as soon as we&rsquo;re free. In the meantime, can we help with a van hire enquiry? Just reply to this message."'
                bullets={[
                  "Fires within seconds of the missed call",
                  "Branded with your business name",
                  "Reply lands directly in your unified inbox",
                  "Notification to hire desk that a missed call text-back was triggered",
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <DirectionCard
                direction="Direction 2 — Outbound"
                accent="brand-green"
                heading="You call a lead — they don&rsquo;t answer"
                body="Your hire desk calls a lead to follow up on a quote or enquiry. They don&rsquo;t pick up. Instead of leaving a voicemail nobody listens to or waiting to try again, RouleurCo automatically sends them an SMS the moment the call ends unanswered."
                smsLabel="Example SMS sent to lead"
                sms='"Hi Dave — we just tried to call you about your van hire enquiry. No worries if you&rsquo;re busy — just reply here and we&rsquo;ll get back to you with everything you need."'
                bullets={[
                  "Triggered automatically when an outbound call goes unanswered",
                  "Personalised to the lead&rsquo;s name from the CRM record",
                  "Keeps the conversation moving without requiring a callback",
                  "Reply captured in inbox and linked to the opportunity",
                ]}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHY SPEED MATTERS */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Why Speed Matters"
            heading="The first response wins the hire."
            lead="Vehicle rental is a comparison market. Customers call multiple companies. Speed of response is often the deciding factor — not price, not fleet."
            variant="dark"
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3 max-w-3xl mx-auto">
            {[
              { num: "Seconds", body: "Time between missed call and SMS response with RouleurCo" },
              { num: "3+", body: "Companies a typical customer contacts when looking to hire" },
              { num: "1st", body: "Response almost always wins the hire — not the cheapest" },
            ].map((s) => (
              <StaggerItem key={s.num}>
                <div className="h-full rounded-card border border-white/10 bg-white/[0.05] p-7 text-center">
                  <div className="font-display text-4xl font-bold leading-none">{s.num}</div>
                  <p className="mt-3 text-sm text-white/55">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Everything Included"
            heading="The full missed call feature set."
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

      <CtaBanner
        heading="Stop handing hires to competitors."
        subtext="Every missed call — inbound or outbound — gets an automatic SMS response within seconds. Keep the conversation alive before they call the next company on the list."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      <Script
        id="missed-call-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Missed Call Text-Back",
            description:
              "Automatic SMS response to every missed call — inbound and outbound — within seconds. Stop losing vehicle hire enquiries to competitors who pick up first.",
            url: `${SITE_URL}/features/missed-call`,
          }),
        }}
      />
    </>
  );
}

function DirectionCard({
  direction,
  accent,
  heading,
  body,
  smsLabel,
  sms,
  bullets,
}: {
  direction: string;
  accent: "brand-blue" | "brand-green";
  heading: string;
  body: string;
  smsLabel: string;
  sms: string;
  bullets: string[];
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-card border border-brand-mid bg-white p-8">
      <div className={`absolute inset-x-0 top-0 h-1 bg-${accent}`} />
      <Eyebrow>{direction}</Eyebrow>
      <h3
        className="mt-4 font-display text-xl font-bold text-brand-navy"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-3 text-brand-text-2 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div className="mt-6 rounded-card bg-brand-lightbg p-5">
        <div className="font-display text-[10px] font-bold uppercase tracking-[0.08em] text-brand-muted mb-2">
          {smsLabel}
        </div>
        <div
          className="rounded-md border border-brand-mid bg-white px-4 py-3 text-sm text-brand-text leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sms }}
        />
      </div>
      <CheckList className="mt-6" items={bullets} />
    </div>
  );
}
