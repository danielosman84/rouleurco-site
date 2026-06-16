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
import { HeroPipelineMock } from "@/components/decorative/HeroPipelineMock";

export const metadata: Metadata = buildMetadata({
  title: "Enquiry Pipeline Management for Vehicle Rental",
  description:
    "Separate pipelines for hot leads, warm prospects, and slow-burn enquiries — each with its own nurture sequence. Re-engage cold enquiries and lapsed hirers automatically.",
  path: "/features/pipelines",
});

const tracks = [
  {
    accent: "red",
    n: 1,
    label: "Hot Track — This Week",
    heading: "Ready to hire. Needs fast, structured follow-up.",
    body: "The customer needs a vehicle soon. They've enquired, they're comparing options, and they'll decide quickly. This track is fast-paced — every touchpoint is close together to stay top of mind while they're deciding.",
    bullets: [
      "Quote sent within the day",
      "SMS follow-up at 24 and 48 hours",
      "Email follow-up with quote attached at 72 hours",
      "Final touch at day 5 — then marked as cold if no reply",
    ],
    sequence: ["Day 0: Quote", "Day 1: SMS", "Day 2: Email", "Day 5: Final"],
  },
  {
    accent: "amber",
    n: 2,
    label: "Warm Track — 2–4 Weeks",
    heading: "Interested but not ready. Needs patient, consistent follow-up.",
    body: "They've enquired but are planning ahead. A project starting in 3 weeks. A busy period coming up. They're not comparing options right now — they need to be kept warm without being hassled.",
    bullets: [
      "Quote sent, space given to consider",
      "Friendly check-in SMS at day 7",
      "Value-led email at day 14 — no pressure",
      "Personal follow-up at day 21",
      "Final offer at day 28",
    ],
    sequence: ["Day 0: Quote", "Day 7: SMS", "Day 14: Email", "Day 21: Check-in", "Day 28: Offer"],
  },
  {
    accent: "blue",
    n: 3,
    label: "Slow Burn Track — 6–12 Weeks",
    heading: "Long-term prospect. Needs light-touch, long-game nurturing.",
    body: "They're not ready yet. A budget review coming up. A contract they're waiting on. They enquired speculatively. Under most systems, they'd be forgotten. RouleurCo keeps them warm on a slow, non-intrusive schedule.",
    bullets: [
      "Quote held on file with no pressure",
      "Light check-in every 3–4 weeks",
      "Relevant content or availability update",
      "Triggered re-engagement when the time window opens",
    ],
    sequence: ["Week 1: Quote", "Week 3: Check-in", "Week 6: Update", "Week 10: Offer"],
  },
];

const segmentRules = [
  { signal: "Start date: this week or next", track: "Hot", dot: "bg-brand-red", why: "Urgency is high — fast follow-up needed" },
  { signal: "Start date: 2–4 weeks away", track: "Warm", dot: "bg-brand-amber", why: "Considering, not yet deciding" },
  { signal: "Start date: 6+ weeks or unknown", track: "Slow Burn", dot: "bg-brand-blue", why: "Long-game nurturing only" },
  { signal: "Returned customer", track: "Hot", dot: "bg-brand-red", why: "High intent — already knows you" },
  { signal: "First contact, large fleet need", track: "Warm", dot: "bg-brand-amber", why: "Needs consideration — worth nurturing" },
  { signal: 'Speculative / "just checking prices"', track: "Slow Burn", dot: "bg-brand-blue", why: "Not ready — don't push, stay visible" },
];

const additionalPipelines = [
  { title: "Account Management Pipeline", body: "Track your existing business accounts separately. Know when contracts are up for renewal, when a fleet account hasn't been active, when to offer a loyalty deal." },
  { title: "Re-engagement Pipeline", body: "Customers who hired 6–12 months ago and haven't been back. Automatically placed in a re-engagement sequence with a timely offer at the right moment." },
  { title: "Post-hire Review Pipeline", body: "Automatically ask for a review 24 hours after hire ends. Customers who leave reviews are then tagged for a loyalty follow-up. All automated." },
];

const reEngagement = [
  {
    type: "Campaign Type 1",
    heading: "Enquiries that went cold",
    intro:
      "They asked for a quote. You sent one. They went quiet. Under most systems, that's the end of it. Under RouleurCo, it's the start of a re-engagement sequence.",
    body: "These contacts already know your business — they reached out once. The barrier to re-engaging them is much lower than generating a completely new enquiry.",
    bullets: [
      "Triggered automatically after a set number of days with no response",
      "SMS and email sequence — different message, different angle",
      "Soft re-engagement tone — not a chase, a check-in",
      "Offer hook at the final touchpoint — availability, seasonal deal, or fleet update",
      "Unresponsive contacts tagged and moved out of the active pipeline",
    ],
    sequenceLabel: "Example sequence — cold enquiry",
    sequence: [
      ["Day 14", 'SMS — "Still looking for van hire? We&rsquo;ve got availability."'],
      ["Day 21", "Email — Quote refreshed, no pressure follow-up"],
      ["Day 30", "SMS — Final touch with a time-limited offer"],
    ],
    accent: "from-brand-amber to-yellow-300",
  },
  {
    type: "Campaign Type 2",
    heading: "Past hirers who haven&rsquo;t returned",
    intro:
      "They hired from you before. Maybe once, maybe several times. Then they stopped. You don&rsquo;t know if they switched to a competitor, changed need, or just forgot about you. A well-timed re-engagement campaign finds out.",
    body: "A past hirer is your warmest possible lead. They&rsquo;ve already used your service, they trusted you with a booking, and they know how you work. Re-engagement campaigns convert these at a significantly higher rate than cold outreach.",
    bullets: [
      "Triggered automatically after X months with no new hire activity",
      "Personalised to their hire history — vehicle type, frequency, last hire date",
      'Email and SMS campaign with a "we miss you" angle',
      "Loyalty offer or preferred rate hook at the close",
      "Repeat hirers tagged for account management pipeline",
    ],
    sequenceLabel: "Example sequence — lapsed hirer",
    sequence: [
      ["Month 6", 'Email — "It&rsquo;s been a while — still need vans?"'],
      ["Month 6+7d", "SMS — Personalised check-in referencing their last vehicle"],
      ["Month 6+21d", "Email — Preferred rate offer for returning hirers"],
    ],
    accent: "from-brand-blue to-blue-400",
  },
];

const outcomes = [
  { title: "No enquiry abandoned prematurely", body: "Every lead stays in an active nurture sequence until they convert, opt out, or are manually closed." },
  { title: "Sequences run without staff involvement", body: "Once categorised, the right messages go out at the right time. Your hire desk doesn't need to remember anything." },
  { title: "Full pipeline visibility", body: "See every live enquiry, what track it's on, what stage it's at, and what's coming next — all in one view." },
];

const accentMap = {
  red: { bg: "bg-brand-red/10", text: "text-brand-red", dot: "bg-brand-red", seqBg: "bg-brand-red/10", seqText: "text-brand-red" },
  amber: { bg: "bg-brand-amber/10", text: "text-brand-amber", dot: "bg-brand-amber", seqBg: "bg-brand-amber/15", seqText: "text-brand-amber" },
  blue: { bg: "bg-brand-blue-light", text: "text-brand-blue", dot: "bg-brand-blue", seqBg: "bg-brand-blue-light", seqText: "text-brand-blue" },
} as const;

export default function PipelinesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Multi-Pipeline Nurturing" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Not every enquiry converts this week. Most operators treat them all the same. RouleurCo doesn't."
        lead="Growing the business means winning more of the right hires — especially the long-term ones that steady your year. Separate pipelines for hot leads, slow-burn enquiries, and long-term prospects give each its own nurture sequence, its own pace, and its own triggers. Nobody slips through. Nobody gets pestered."
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>The Problem with One Pipeline</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                Most operators run a single pipeline — and lose half their potential hires in it.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>An enquiry comes in. You send a quote. They don&apos;t reply immediately. Your follow-up sequence fires — once, maybe twice — and then the lead goes cold. You move on.</p>
                <p>But some of those leads weren&apos;t gone. They were just slow. A contractor who needs vans in 6 weeks. A business owner comparing costs for a decision next quarter. A growing company not ready to commit yet.</p>
                <p>Treated the same as a hot lead, they get pushed too hard, too fast, and then abandoned. <strong className="text-brand-navy">A properly structured multi-pipeline approach captures the ones your current process loses.</strong></p>
              </div>
              <div className="mt-6 rounded-card bg-brand-lightbg border-l-4 border-brand-blue p-5">
                <p className="text-sm text-brand-text-2 italic leading-relaxed">
                  &ldquo;We had a contractor come back 8 weeks after their original enquiry and book 4 Transits for 3 months. Under our old system, we&rsquo;d have stopped following up after two weeks.&rdquo;
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <HeroPipelineMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* THREE TRACKS */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Three Tracks"
            heading={<>Every enquiry gets the right treatment.<br />At the right pace.</>}
            lead="RouleurCo sorts enquiries into three tracks based on how you categorise them — each with its own automated nurture sequence, timing and messaging."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {tracks.map((t) => {
              const a = accentMap[t.accent as keyof typeof accentMap];
              return (
                <StaggerItem key={t.n}>
                  <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                    <div className={`inline-flex size-10 items-center justify-center rounded-lg font-display font-bold ${a.bg} ${a.text}`}>
                      {t.n}
                    </div>
                    <div className={`mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wide ${a.text}`}>
                      <span className={`size-1.5 rounded-full ${a.dot}`} />
                      {t.label}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-brand-navy leading-snug">
                      {t.heading}
                    </h3>
                    <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">{t.body}</p>
                    <CheckList className="mt-4 [&_li]:text-sm" items={t.bullets} />
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {t.sequence.map((s) => (
                        <span
                          key={s}
                          className={`rounded-md px-2 py-1 text-[11px] font-display font-semibold ${a.seqBg} ${a.seqText}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* SMART CATEGORISATION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>Smart Categorisation</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Every enquiry sorted automatically — or with one click.
            </h2>
            <div className="mt-6 flex flex-col gap-4 max-w-2xl text-brand-text-2 leading-relaxed">
              <p>When an enquiry arrives, RouleurCo can auto-assign it to a pipeline track based on the information in the enquiry — hire dates, lead time, vehicle type, or customer type.</p>
              <p>Or your hire desk can manually categorise it in one click. Either way, once an enquiry is in a track, the right sequence starts running automatically. No manual follow-ups to schedule. No reminders to set.</p>
            </div>
          </FadeUp>

          <div className="mt-12 overflow-x-auto rounded-card border border-brand-mid bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-mid bg-brand-lightbg">
                  <th className="py-4 px-5 text-left font-display text-xs font-semibold uppercase tracking-wide text-brand-text-2">Signal</th>
                  <th className="py-4 px-5 text-left font-display text-xs font-semibold uppercase tracking-wide text-brand-text-2">Auto-track</th>
                  <th className="py-4 px-5 text-left font-display text-xs font-semibold uppercase tracking-wide text-brand-text-2">Why</th>
                </tr>
              </thead>
              <tbody>
                {segmentRules.map((r) => (
                  <tr key={r.signal} className="border-b border-brand-mid last:border-0">
                    <td className="py-3.5 px-5 text-brand-text">{r.signal}</td>
                    <td className="py-3.5 px-5 font-display font-semibold text-brand-navy">
                      <span className="inline-flex items-center gap-2">
                        <span className={`inline-block size-2 rounded-full ${r.dot}`} />
                        {r.track}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-brand-text-2">{r.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ADDITIONAL PIPELINES */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Beyond Enquiries"
            heading="Separate pipelines for every part of the business."
            lead="RouleurCo doesn't limit you to one pipeline for enquiries. You can run separate pipelines for different parts of your operation — all managed in the same system."
            variant="dark"
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {additionalPipelines.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* RE-ENGAGEMENT */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Re-engagement"
            heading={<>Two types of lost hire.<br />Two different campaigns.</>}
            lead="Most hire desks treat a cold enquiry and a lapsed customer the same way — they don't contact them at all. RouleurCo runs separate, targeted campaigns for each."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {reEngagement.map((c, i) => (
              <FadeUp key={c.heading} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-card border border-brand-mid bg-white p-8">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.accent}`} />
                  <Eyebrow>{c.type}</Eyebrow>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-navy" dangerouslySetInnerHTML={{ __html: c.heading }} />
                  <p className="mt-3 text-brand-text-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.intro }} />
                  <p className="mt-4 text-sm text-brand-text-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.body }} />
                  <CheckList className="mt-5" items={c.bullets} />
                  <div className="mt-6 rounded-card bg-brand-lightbg p-5">
                    <div className="font-display text-[10px] font-bold uppercase tracking-[0.08em] text-brand-muted mb-3">
                      {c.sequenceLabel}
                    </div>
                    <div className="flex flex-col gap-2">
                      {c.sequence.map(([when, what], idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <span className="w-20 shrink-0 font-display text-xs font-bold text-brand-muted pt-1.5">{when}</span>
                          <span
                            className="flex-1 rounded-md border border-brand-mid bg-white px-3 py-2 text-brand-text"
                            dangerouslySetInnerHTML={{ __html: what }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-10 rounded-card bg-brand-navy text-white p-10 text-center">
              <Eyebrow variant="white">The reality</Eyebrow>
              <p className="mt-4 font-display text-xl sm:text-2xl font-bold text-balance leading-snug max-w-3xl mx-auto">
                Most independent hire desks have months of cold enquiries sitting in their inbox that have never been followed up a second time.
              </p>
              <p className="mt-3 text-white/55 max-w-xl mx-auto">
                RouleurCo re-engagement campaigns turn that backlog into a revenue opportunity — automatically, without your team having to do anything.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="The Outcome"
            heading="More hires from enquiries you'd normally lose."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 items-stretch">
            <FadeUp>
              <div className="h-full rounded-card bg-brand-navy p-8 text-white">
                <span className="font-display text-6xl leading-none text-brand-blue" aria-hidden="true">&ldquo;</span>
                <blockquote className="-mt-4 text-lg leading-relaxed text-balance">
                  Most operators have a graveyard of enquiries in their inbox. Leads that asked for a quote, got one, and never heard back again. <em className="text-brand-blue not-italic font-semibold">Those leads haven&apos;t gone cold — they&apos;ve just been neglected.</em> Multi-pipeline nurturing is how you recover them.
                </blockquote>
                <div className="mt-6 pt-5 border-t border-white/10 text-sm text-white/45">
                  RouleurCo — Platform philosophy
                </div>
              </div>
            </FadeUp>
            <div className="flex flex-col gap-4">
              {outcomes.map((o) => (
                <FadeUp key={o.title} delay={0.1}>
                  <div className="rounded-card border border-brand-mid bg-white p-6">
                    <h3 className="font-display text-base font-bold text-brand-navy">{o.title}</h3>
                    <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{o.body}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Stop losing the slow ones."
        subtext="Multi-pipeline nurturing recovers the enquiries your current process abandons — the slow-burn and long-term ones that grow your year."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "View All Features →", href: "/features" }}
      />

      <Script
        id="pipelines-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Multi-Pipeline Nurturing",
            description:
              "Separate pipelines for hot leads, warm prospects, and slow-burn enquiries — each with its own nurture sequence. Re-engage cold enquiries and lapsed hirers automatically.",
            url: `${SITE_URL}/features/pipelines`,
          }),
        }}
      />
    </>
  );
}
