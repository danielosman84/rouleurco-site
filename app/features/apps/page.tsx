import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Mobile & Desktop App — Manage Your Hire Desk From Anywhere",
  description:
    "The RouleurCo mobile and desktop app puts your hire desk pipeline, conversations, and team tasks in your pocket — so you're never out of the loop, even off-site.",
  path: "/features/apps",
});

const without = [
  "Enquiries arrive while you're on the yard — you see them hours later",
  "Customer calls about a hire — you can't check the record without going back inside",
  "Team member asks what stage a quote is at — nobody knows without logging on",
  "A task was created by automation — nobody saw the notification",
  "New message from a customer on a Saturday — sits unanswered until Monday",
];

const withApp = [
  "Push notifications the moment an enquiry or message arrives",
  "Full pipeline and contact records accessible from your phone",
  "Reply to customers via SMS or email without logging onto a desktop",
  "See and action tasks wherever you are",
  "Your team sees the same live data — no version mismatch",
];

const platforms = [
  { name: "iOS (iPhone & iPad)", sub: "App Store download" },
  { name: "Android", sub: "Google Play download" },
  { name: "Desktop (Mac & Windows)", sub: "Native desktop application" },
  { name: "Web browser", sub: "Full platform access, any device" },
];

const capabilities = [
  { heading: "Pipeline management on the move", body: "View, update, and move opportunities through every stage of your hire pipeline. See what's new, what's waiting on a quote, and what's confirmed — without sitting at a desk." },
  { heading: "Unified inbox — reply from anywhere", body: "Every SMS, email, Facebook message, and web chat lands in one inbox on your phone. Reply directly, assign to a team member, or leave an internal note — all from the app." },
  { heading: "Push notifications for every trigger", body: "New enquiry arrives? Notification. Customer replies to a quote? Notification. A task is assigned to you? Notification. Nothing waits until you happen to open a browser." },
  { heading: "Task management and team visibility", body: 'See your open tasks, action them, and mark complete. View what the rest of the team is working on. Everyone sees the same live state — no "I didn\'t know about that" conversations.' },
  { heading: "Contact records and hire history", body: "Full customer records accessible in seconds. Previous hires, notes, messages, documents — everything that's happened with that customer, available before you pick up the phone." },
  { heading: "Send SMS and email directly", body: "Compose and send from the app using your RouleurCo templates. The message logs to the contact record and shows in the shared inbox — the same as if it was sent from the desktop." },
];

const desktopFeatures = [
  "Full pipeline view — all stages visible at once",
  "Multi-pane inbox with conversation history",
  "Reporting and analytics dashboard",
  "Workflow and automation management",
  "Works offline for contact and record viewing",
  "Native desktop notifications — no tab-switching required",
];

const mobileFeatures = [
  "Pipeline access optimised for mobile screens",
  "Push notifications for every new enquiry, message, task",
  "Reply to customers from anywhere — yard, site, on the road",
  "Same live data as the desktop — no syncing required",
  "Quick-action buttons for common hire desk responses",
  "Works on any iOS or Android device",
];

const phoneDeals = [
  { name: "Hartley Building Svcs", meta: "Transit x3 · Web form", stage: "New Enquiry", tagBg: "bg-brand-blue/25", tagColor: "text-brand-blue" },
  { name: "Nexus Contractors", meta: "£1,240 · 24h follow-up due", stage: "Quote Sent", tagBg: "bg-brand-amber/20", tagColor: "text-brand-amber" },
  { name: "Apex Site Services", meta: "Docs signed · £2,800", stage: "Confirmed", tagBg: "bg-brand-green/20", tagColor: "text-brand-green" },
];

export default function AppsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Mobile & Desktop App" },
        ]}
        eyebrow="Mobile & Desktop"
        heading="Your hire desk in your pocket. And on your desk. At the same time."
        lead="Whether you're on the yard, at a customer site, or in the office — the RouleurCo app keeps your pipeline, conversations, and team tasks in sync. One system. Every device."
      />

      {/* PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Reality</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              The hire desk doesn&apos;t stop when you leave the office.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              Rental businesses don&apos;t work nine to five. Enquiries come in on Saturday morning. A customer calls about a vehicle on hire at 6pm. A team member needs to see whether a quote was sent. Without access to the system away from a desk, decisions get delayed, customers wait, and things get missed.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FadeUp>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-red mb-4">
                  Without the app
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
            <FadeUp delay={0.07}>
              <div className="h-full rounded-card border border-brand-blue/30 bg-brand-blue-light p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-blue mb-4">
                  With the RouleurCo app
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {withApp.map((w) => (
                    <li key={w} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue text-xs font-bold">✓</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="h-full rounded-card border border-brand-green/30 bg-brand-green/5 p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-green mb-4">
                  Available on
                </div>
                <ul className="flex flex-col gap-4">
                  {platforms.map((p) => (
                    <li key={p.name} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green text-xs font-bold">✓</span>
                      <div>
                        <div className="font-display text-sm font-bold text-brand-navy">{p.name}</div>
                        <div className="text-xs text-brand-muted">{p.sub}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CAPABILITIES + phone mockup */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What You Can Do"
            heading="Full hire desk capability. On every device."
            lead="The app isn't a cut-down version of the platform. Every capability available on the desktop is accessible on mobile — because a hire desk manager shouldn't need to be at a specific desk to run the desk."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <FadeUp>
              <ul className="flex flex-col gap-7">
                {capabilities.map((c) => (
                  <li key={c.heading} className="flex gap-5">
                    <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-brand-navy">{c.heading}</h3>
                      <p className="mt-1 text-sm text-brand-text-2 leading-relaxed">{c.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.1}>
              <PhoneFrameMock />
              <p className="mt-3 text-center text-xs text-brand-muted">
                Live pipeline and push notifications on mobile
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* DESKTOP VS MOBILE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Two versions. One system."
            heading="The right experience for the right context."
          />
          <StaggerChildren className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Desktop App", sub: "Mac & Windows", icon: (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              ), body: "For hire desk work at a fixed location. The desktop app gives you the full platform experience — multi-column pipeline view, full inbox, reporting, and workflow management — without needing a browser tab open.", items: desktopFeatures },
              { title: "Mobile App", sub: "iOS & Android", icon: (
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              ), body: "For hire desk managers who are on the move — on the yard, at a customer site, or just not at their desk. Push notifications keep you connected to every new enquiry, message, and task the moment it happens.", items: mobileFeatures },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      {v.icon}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-navy">{v.title}</h3>
                      <div className="text-sm text-brand-muted">{v.sub}</div>
                    </div>
                  </div>
                  <p className="text-brand-text-2 leading-relaxed">{v.body}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {v.items.map((i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-brand-text-2">
                        <svg className="mt-1 size-3.5 shrink-0 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBanner
        heading="Run the hire desk from anywhere."
        subtext="iOS, Android, Mac and Windows — full pipeline access, every message, every task. Your team works from one live system, on every device."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      <Script
        id="apps-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Mobile & Desktop App",
            description:
              "Native iOS, Android, Mac and Windows applications providing full hire desk access — pipeline, unified inbox, tasks and contact records — with push notifications.",
            url: `${SITE_URL}/features/apps`,
          }),
        }}
      />
    </>
  );
}

function PhoneFrameMock() {
  return (
    <div className="rounded-3xl bg-brand-navy p-7 shadow-2xl relative overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-blue/15" />
      <div className="relative">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="font-display text-xs font-bold text-white/90">Pipeline</div>
            <span className="rounded-md border border-brand-blue/40 bg-brand-blue/25 px-2.5 py-1 font-display text-[10px] font-bold text-brand-blue">
              3 new today
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            {phoneDeals.map((d) => (
              <li key={d.name} className="flex items-center justify-between gap-3 rounded-lg border border-white/8 bg-white/[0.04] px-3.5 py-3">
                <div className="min-w-0">
                  <div className="font-display text-xs font-bold text-white/85 truncate">{d.name}</div>
                  <div className="text-[11px] text-white/40 mt-0.5 truncate">{d.meta}</div>
                </div>
                <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-display font-bold whitespace-nowrap ${d.tagBg} ${d.tagColor}`}>
                  {d.stage}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.08] px-4 py-3">
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/30 text-brand-blue">
            <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </span>
          <div>
            <div className="font-display text-xs font-bold text-white/90">New enquiry — Pinnacle Logistics</div>
            <div className="text-[11px] text-white/40">Sprinter x1 · Just now via web form</div>
          </div>
        </div>
      </div>
    </div>
  );
}
