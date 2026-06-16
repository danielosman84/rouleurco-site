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
  title: "Social Media Management for Rental Businesses",
  description:
    "Create, schedule and publish social content across Facebook and Instagram without leaving RouleurCo. Comments and DMs flow into your unified inbox automatically.",
  path: "/features/social-media",
});

const flowSteps = [
  { n: "1", color: "blue", title: "Write your post", body: "Create your content directly in RouleurCo. Add images, write your caption, include any relevant hashtags. All in one editor.", badge: "One editor — all platforms", badgeTone: "blue" as const },
  { n: "2", color: "blue", title: "Choose your platforms", body: "Select where the post goes — Facebook Page, Instagram, or both. Platform-specific previews show exactly how it'll look before it goes live.", badge: "Facebook + Instagram", badgeTone: "blue" as const },
  { n: "3", color: "amber", title: "Schedule or post immediately", body: "Pick a date and time for the post to go live — or publish it immediately. The content calendar shows all your upcoming posts in one view.", badge: "Schedule weeks ahead", badgeTone: "amber" as const },
  { n: "4", color: "green", title: "Replies and DMs flow into your inbox", body: "Comments and direct messages from your posts land in the unified inbox alongside all your other conversations. No separate apps to monitor.", badge: "Fully connected to your inbox", badgeTone: "green" as const },
];

const calendarPosts = [
  { date: "Mon 7 Apr", platform: "FB + IG", title: "Fleet availability post — Spring hiring season", status: "Published ✓", state: "published" },
  { date: "Thu 10 Apr", platform: "FB", title: "Customer spotlight — Hartley Building Services", status: "Published ✓", state: "published" },
  { date: "Mon 14 Apr", platform: "FB + IG", title: "Why a hired van beats buying for short-term projects", status: "Scheduled", state: "scheduled" },
  { date: "Thu 17 Apr", platform: "IG", title: "Fleet showcase — new Sprinters just arrived", status: "Scheduled", state: "scheduled" },
  { date: "Mon 21 Apr", platform: "FB + IG", title: "Bank holiday availability — book early", status: "Draft", state: "draft" },
];

const contentIdeas = [
  { title: "Fleet showcases", body: "A photo of a clean Transit, a new addition to the fleet, or vehicles being prepared for a big job. Visual, easy to produce, performs well on both platforms." },
  { title: "Customer highlights", body: "With permission, share a customer's job or project that used your vehicles. Builds credibility and social proof with other local businesses." },
  { title: "Availability windows", body: "Let your audience know when vehicles are available — especially around busy periods or bank holidays. Direct route to last-minute bookings." },
  { title: "Hire tips and advice", body: "What size van do I need for a house move? What licence do I need for a 3.5t vehicle? Simple, useful content that builds trust and drives search traffic." },
  { title: "Reviews and feedback", body: "Share positive Google reviews as social posts. Permission-based, brand-building, and requires almost no effort to produce." },
  { title: "Seasonal and industry news", body: "BVRLA data, industry changes, local business news relevant to your audience. Positions your business as an informed, engaged operator." },
];

const inclusions = [
  { title: "Content calendar", body: "Plan and schedule posts weeks in advance. See everything in one view — drafted, scheduled, and published. The whole team can see what's coming." },
  { title: "Post creation and editing", body: "Write captions, upload images, and preview posts for each platform before scheduling. All in one editor — no switching between apps." },
  { title: "Facebook integration", body: "Connected to your Facebook Business Page. Posts published, scheduled and monitored. Comments and DMs captured in your inbox." },
  { title: "Instagram integration", body: "Schedule to Instagram feed from the same interface. Images and captions prepared in advance, posted automatically at the right time." },
  { title: "Engagement tracking", body: "See which posts are getting reach, comments and clicks. Understand what content your audience responds to without leaving the platform." },
  { title: "Inbox integration", body: "Every comment, reply and DM from your social posts flows into the unified inbox. Social enquiries handled the same way as every other channel." },
];

const flowColors = {
  blue: "bg-brand-blue text-white",
  amber: "bg-brand-amber text-white",
  green: "bg-brand-green text-white",
} as const;

export default function SocialMediaPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Social Media Management" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Create, schedule and publish social content — without leaving RouleurCo."
        lead="Staying visible is how you win more of the right hires — the steady long-term ones that grow the business. Most rental companies know they should be posting regularly, but almost none do, because it's one more thing to manage in a separate tool. RouleurCo brings social scheduling into the same system as your CRM and inbox."
      />

      {/* PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-3xl">
              Most independent rental companies are invisible on social. Their competitors aren&apos;t.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-2xl">
              Social media is how local businesses stay visible between hires. A consistent presence on Facebook and Instagram keeps you front of mind when customers are ready to book. But it requires time and a separate tool — so it doesn&apos;t happen.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-muted mb-5">
                  How it usually goes
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {[
                    "Post randomly when someone remembers — no consistency",
                    "No content planned in advance — always reactive",
                    "Login to Facebook separately, then Instagram separately",
                    "Post performance never checked — no idea what's working",
                    "Comments on posts go unanswered — missed enquiries",
                    "Social presence looks dormant — customers question whether the business is active",
                  ].map((s) => (
                    <li key={s} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-mid text-brand-muted text-xs">~</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="h-full rounded-card bg-brand-navy p-7 text-white">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-5">
                  With RouleurCo
                </div>
                <CheckList
                  variant="white"
                  items={[
                    "Content planned and scheduled weeks in advance",
                    "Post to Facebook and Instagram from one place",
                    "Content calendar visible across the whole team",
                    "Comments and DMs from posts land in the unified inbox",
                    "Consistent presence without daily effort",
                    "Social activity tied to your CRM — leads from posts are captured",
                  ]}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="How It Works"
            heading="Create once. Schedule across platforms. Done."
            lead="The social planner in RouleurCo lets you write a post, add an image, pick your platforms, and schedule it — all in one place. Posts go out automatically on the date and time you set."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
            <ol className="flex flex-col gap-6">
              {flowSteps.map((step) => (
                <FadeUp key={step.n}>
                  <li className="flex gap-4">
                    <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full font-display font-bold ${flowColors[step.color as keyof typeof flowColors]}`}>
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
              ))}
            </ol>

            <FadeUp delay={0.15}>
              <ContentCalendarMock posts={calendarPosts} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WHAT TO POST */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What Rental Companies Should Post"
            heading="Content that works for a hire desk."
            lead="You don't need a marketing team. Rental businesses have plenty of natural content — it just needs to be captured and scheduled consistently."
          />
          <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contentIdeas.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-6">
                  <h3 className="font-display text-base font-bold text-brand-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CONNECTED TO INBOX */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow variant="white">Connected to Everything</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-[1.15] text-balance">
                Social isn&apos;t separate. It&apos;s part of the same system.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-white/70 leading-relaxed">
                <p>The most important thing about RouleurCo&apos;s social tool isn&apos;t the scheduling — it&apos;s the integration. Comments on your posts and DMs from social platforms don&apos;t disappear into a separate app. They land in your unified inbox alongside every other customer message.</p>
                <p>A customer comments &ldquo;do you have a Transit available this weekend?&rdquo; on your Facebook post. That comment appears in your inbox. You reply. The conversation is linked to their contact record if they&apos;ve enquired before. One system. One place.</p>
              </div>
              <CheckList
                className="mt-6"
                variant="white"
                items={[
                  "Post comments land in the unified inbox",
                  "Instagram and Facebook DMs from social activity captured automatically",
                  "Enquiries from posts linked to CRM records",
                  "Full visibility of social-driven leads in the pipeline",
                ]}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <SocialInboxMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Everything Included"
            heading="The full social media feature set."
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
        heading="Stay visible. Stay consistent. Win more local hires."
        subtext="Schedule weeks of social content in one sitting — connected to your inbox so every enquiry from social is captured and followed up automatically."
        primary={{ label: "Register your interest", href: "/register-interest" }}
        secondary={{ label: "See all features", href: "/features" }}
      />

      <Script
        id="social-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Social Media Management",
            description:
              "Create, schedule and publish social content across Facebook and Instagram without leaving RouleurCo. Comments and DMs flow into the unified inbox automatically.",
            url: `${SITE_URL}/features/social-media`,
          }),
        }}
      />
    </>
  );
}

type CalendarPost = { date: string; platform: string; title: string; status: string; state: string };

function ContentCalendarMock({ posts }: { posts: CalendarPost[] }) {
  const stateClasses: Record<string, { border: string; bg: string; badge: string }> = {
    published: { border: "border-brand-green/30", bg: "bg-brand-green/10", badge: "text-brand-green" },
    scheduled: { border: "border-brand-blue/30", bg: "bg-brand-blue/10", badge: "text-brand-blue" },
    draft: { border: "border-brand-amber/30", bg: "bg-brand-amber/10", badge: "text-brand-amber" },
  };
  return (
    <div className="rounded-card border border-white/10 bg-brand-navy p-6 shadow-2xl text-white" aria-hidden="true">
      <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40">
        Content Calendar — April 2026
      </div>
      <div className="text-xs text-white/25 mb-5">6 posts scheduled · 2 published this week</div>
      <ul className="flex flex-col gap-2">
        {posts.map((p) => {
          const c = stateClasses[p.state];
          return (
            <li key={p.title} className={`rounded-lg border p-3.5 ${c.border} ${c.bg}`}>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-display text-[10px] font-bold text-white/40">
                    {p.date} · {p.platform}
                  </div>
                  <div className="mt-1 text-xs text-white/75 leading-snug">{p.title}</div>
                </div>
                <span className={`shrink-0 font-display text-[10px] font-bold whitespace-nowrap ${c.badge}`}>
                  {p.status}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-4 rounded-md bg-white/[0.04] p-3 text-center font-display text-xs font-bold text-brand-blue">
        + Add new post
      </div>
    </div>
  );
}

function SocialInboxMock() {
  return (
    <div className="rounded-card border border-white/10 bg-white/[0.05] p-7" aria-hidden="true">
      <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">
        Inbox — New from social
      </div>
      <ul className="flex flex-col gap-2 mb-3">
        <li className="flex gap-3 rounded-md bg-brand-blue/10 p-3">
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white font-bold">f</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="font-display text-xs font-bold text-white/85 truncate">Mark T. — Facebook comment</div>
              <div className="text-[10px] text-white/35 shrink-0 ml-2">5 min ago</div>
            </div>
            <div className="text-[11px] text-white/45">On: &ldquo;Fleet showcase — new Sprinters just arrived&rdquo;</div>
            <div className="mt-1 text-xs text-white/70">&ldquo;Do you have a Sprinter available this weekend? Need it for Saturday.&rdquo;</div>
          </div>
        </li>
        <li className="flex gap-3 rounded-md bg-brand-blue/10 p-3">
          <span
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-white font-bold text-[10px]"
            style={{ background: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)" }}
          >
            IG
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div className="font-display text-xs font-bold text-white/85 truncate">j.foster.builds — Instagram DM</div>
              <div className="text-[10px] text-white/35 shrink-0 ml-2">22 min ago</div>
            </div>
            <div className="text-[11px] text-white/45">Saw your profile</div>
            <div className="mt-1 text-xs text-white/70">&ldquo;Hi, do you hire vans long term? Need something for a 3-month site job.&rdquo;</div>
          </div>
        </li>
      </ul>
      <div className="rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2 text-center text-xs text-brand-green">
        Both conversations captured — ready to convert
      </div>
    </div>
  );
}
