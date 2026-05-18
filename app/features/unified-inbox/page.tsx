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
  title: "Unified Inbox for Hire Desks — SMS, Email & Web Chat",
  description:
    "SMS, email, Facebook Messenger, Instagram DMs, and web chat — all in one inbox. Internal team notes. Every message linked to the customer record.",
  path: "/features/unified-inbox",
});

const channels = [
  { title: "Two-Way SMS", body: "Send and receive SMS messages from a dedicated business number. Every conversation stored, searchable, and linked to the customer record. No more staff using personal phones.", badge: "Most common enquiry channel", tone: "blue" as const },
  { title: "Email", body: "Connect your business email. Incoming enquiries become conversations in the inbox, linked to CRM records automatically. Reply from within the platform — no switching tabs.", badge: "Full two-way email", tone: "blue" as const },
  { title: "Facebook Messenger", body: "Facebook messages from your business page land directly in the inbox alongside everything else. Reply instantly without logging into Facebook. Never miss a Messenger enquiry again.", badge: "Huge for rental enquiries", tone: "blue" as const },
  { title: "Instagram DMs", body: "Instagram direct messages connected to the same inbox. Customers who find you on Instagram can message directly — you respond from one place, without switching platforms.", badge: "Growing enquiry channel", tone: "blue" as const },
  { title: "Web Chat Widget", body: "A chat widget for your website. Visitors start a conversation that lands in the inbox instantly. Can run automated responses out of hours so enquiries aren't lost while the desk is closed.", badge: "High-intent channel", tone: "blue" as const },
  { title: "Internal Team Chat", body: "Your team communicates inside the same inbox. Leave internal notes on a customer conversation — visible only to staff, not the customer. No more WhatsApp groups or verbal handovers.", badge: "Internal only — customers never see this", tone: "amber" as const },
];

const inclusions = [
  { title: "All channels, one view", body: "SMS, email, Facebook, Instagram, web chat — every incoming message in one inbox. No platform switching required." },
  { title: "Internal team notes", body: "Leave context for colleagues directly on a customer conversation. Visible only to staff — never to the customer." },
  { title: "Conversation assignment", body: "Assign any conversation to a specific team member. They're notified. Accountability is clear. Nothing falls between the cracks." },
  { title: "CRM-linked history", body: "Every message from every channel linked to the customer's CRM record. Full context available the moment a conversation is opened." },
  { title: "Automated out-of-hours replies", body: "Web chat and SMS enquiries received outside business hours get an automatic acknowledgement. Customers know they've been received — and they don't go elsewhere." },
  { title: "Mobile accessible", body: "The full inbox available on your phone. Reply to any message, on any channel, from anywhere — without being tied to the desk." },
];

const convos = [
  { init: "HS", bg: "bg-brand-blue", name: "Hartley Building Services", channel: "SMS", preview: "Is the Transit still available from Monday?", time: "2 min ago", unread: true, score: "🔴 HOT" },
  { init: "PL", bg: "bg-violet-600", name: "Pinnacle Logistics", channel: "Email", preview: "Could you send over weekly rates for a Sprinter?", time: "18 min ago", unread: true, score: "🟡 WARM" },
  { init: "CB", bg: "bg-emerald-600", name: "CityBuild Ltd", channel: "FB", preview: "Saw your post — do you do long-term hire?", time: "1 hr ago", unread: true, score: "🟡 WARM" },
  { init: "NE", bg: "bg-red-600", name: "Nexus Engineering", channel: "IG", preview: "Need 2 vans for a job next week", time: "2 hrs ago", unread: false, score: "🔴 HOT" },
  { init: "AP", bg: "bg-amber-700", name: "Apex Site Services", channel: "Chat", preview: "Hi, what vehicles do you have available?", time: "3 hrs ago", unread: false, score: "⚪ NEW" },
];

export default function UnifiedInboxPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "Unified Inbox" },
        ]}
        eyebrow="Feature Deep Dive"
        heading="Every message. Every channel. One inbox — and your team talking inside it too."
        lead="SMS, email, Facebook Messenger, Instagram DMs, web chat — and internal team notes — all in one place. No more missed messages because someone forgot to check a platform."
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-3xl">
              Your enquiries are scattered across five different places. Nobody&apos;s checking all of them.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              A customer messages on Facebook. Another emails the shared inbox. Someone sends a web chat. A fourth texts your business number. Your hire desk is on the phone. By the time anyone checks everything, one of them has already booked elsewhere.
            </p>
          </FadeUp>

          <StaggerChildren className="mt-12 grid gap-5 lg:grid-cols-3">
            <StaggerItem>
              <div className="h-full rounded-card border border-brand-red/30 bg-brand-red/5 p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-red mb-4">
                  The reality
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {[
                    "Facebook messages sitting unread for 4 hours",
                    "Email enquiry buried under 40 other emails",
                    "Instagram DM nobody thought to check",
                    "SMS replied to from a personal phone — no record",
                    "Web chat message missed entirely",
                    "No history when a different team member picks it up",
                  ].map((c) => (
                    <li key={c} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red text-xs font-bold">✕</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-brand-muted mb-4">
                  What operators do instead
                </div>
                <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
                  {[
                    "Check Facebook every couple of hours — if they remember",
                    "Share email login with multiple staff — replies go missing",
                    "Use personal phones for SMS — data goes nowhere",
                    "Ask customers to call instead — they don't, they go elsewhere",
                    "Write messages down to pass on — details get lost",
                  ].map((c) => (
                    <li key={c} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-mid text-brand-muted text-xs">~</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="h-full rounded-card bg-brand-navy text-white p-7">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">
                  With RouleurCo
                </div>
                <ul className="flex flex-col gap-3 text-sm text-white/80">
                  {[
                    "Every channel in one inbox — one place to check",
                    "Every message linked to the customer's CRM record",
                    "Team members can see and pick up any conversation",
                    "Internal notes visible only to your team, not the customer",
                    "Full conversation history regardless of who replied",
                  ].map((c) => (
                    <li key={c} className="flex gap-2.5">
                      <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-green text-xs font-bold">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Every Channel"
            heading="All your message sources. One place."
            lead="Every platform your customers use to reach you — unified into a single inbox your whole team works from."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {channels.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-6">
                  <h3 className="font-display text-lg font-bold text-brand-navy">{c.title}</h3>
                  <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">{c.body}</p>
                  <div className="mt-4">
                    <Badge tone={c.tone}>{c.badge}</Badge>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* INTERNAL CHAT CALLOUT with mockup */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>Internal Communication</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                Your team talks inside the deal — not on WhatsApp.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>When a customer conversation is in the inbox, your team can leave internal notes directly on that conversation. Visible only to staff. Linked to the booking. In context.</p>
                <p>No more &ldquo;I told Sarah about this one&rdquo; — or the customer getting a call from someone who has no idea what&apos;s been discussed. Every team member picks up any conversation with the full picture already in front of them.</p>
              </div>
              <CheckList
                className="mt-6"
                items={[
                  "Internal notes pinned to any customer conversation",
                  "Notes visible to all team members, hidden from customer",
                  "Tag a colleague to alert them to a specific conversation",
                  "Full conversation history regardless of who responded last",
                  "No separate messaging app — your whole team works from one place",
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <ConversationMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* IN PRACTICE — full inbox */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="In Practice"
            heading="What your hire desk actually sees."
            lead="One view. All active conversations. Every channel. Sorted by unread and urgency."
          />
          <FadeUp delay={0.1}>
            <div className="mt-12 max-w-2xl mx-auto rounded-card border border-white/10 bg-brand-navy p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="font-display text-sm font-bold text-white/85">
                  All Conversations
                </div>
                <span className="rounded-full bg-brand-blue px-3 py-0.5 font-display text-xs font-bold text-white">
                  {convos.filter((c) => c.unread).length} unread
                </span>
              </div>
              <ul className="flex flex-col gap-1">
                {convos.map((c) => (
                  <li
                    key={c.name}
                    className={`flex items-center gap-3 rounded-md p-3 ${
                      c.unread ? "bg-brand-blue/10" : ""
                    }`}
                  >
                    <span
                      className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white ${c.bg}`}
                    >
                      {c.init}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div
                          className={`font-display text-sm truncate ${
                            c.unread ? "font-bold text-white/90" : "font-semibold text-white/55"
                          }`}
                        >
                          {c.name}
                        </div>
                        <div className="text-[10px] text-white/35 shrink-0">{c.time}</div>
                      </div>
                      <div className="flex items-center justify-between mt-0.5">
                        <div className="text-xs text-white/40 truncate pr-2">{c.preview}</div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="rounded px-1.5 py-0.5 text-[10px] font-display font-semibold text-white/45 bg-white/[0.06]">
                            {c.channel}
                          </span>
                          <span className="text-[10px]">{c.score}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Everything Included"
            heading="The full unified inbox feature set."
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
        heading="Never miss another message."
        subtext="Every channel your customers use to reach you — SMS, email, Facebook, Instagram, web chat — in one inbox your whole team works from."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      <Script
        id="inbox-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo Unified Inbox",
            description:
              "Unified messaging inbox for vehicle rental companies. SMS, email, Facebook Messenger, Instagram DMs, and web chat — all in one place with internal team notes.",
            url: `${SITE_URL}/features/unified-inbox`,
          }),
        }}
      />
    </>
  );
}

function ConversationMock() {
  return (
    <div className="w-full max-w-[440px] mx-auto rounded-2xl border border-white/10 bg-brand-navy p-6 shadow-2xl" aria-hidden="true">
      <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">
        Conversation — Hartley Building Services
      </div>

      {/* Customer message */}
      <div className="flex gap-3 mb-3">
        <span className="size-7 shrink-0 rounded-full bg-white/10 flex items-center justify-center font-display text-[10px] font-bold text-white/55">
          HS
        </span>
        <div className="max-w-[80%] rounded-[4px_12px_12px_12px] bg-white/[0.07] px-3.5 py-2.5 text-xs text-white/75 leading-relaxed">
          Hi, just checking — is the Transit still available from Monday? We need it for 2 weeks.
        </div>
      </div>

      {/* Internal note */}
      <div className="flex gap-3 mb-3">
        <span className="size-7 shrink-0 rounded-full bg-brand-amber/20 flex items-center justify-center font-display text-[10px] font-bold text-brand-amber">
          DH
        </span>
        <div className="max-w-[90%] rounded-[4px_12px_12px_12px] border border-brand-amber/20 bg-brand-amber/10 px-3.5 py-2.5 text-xs text-brand-amber leading-relaxed">
          <div className="font-display text-[9px] font-bold uppercase tracking-wide mb-1 opacity-70">
            Internal note · Dave H
          </div>
          Sarah — this is the Hartley account. They always pay on time. Transit LN23 is free from Monday, check fleet board before confirming.
        </div>
      </div>

      {/* Staff reply */}
      <div className="flex flex-row-reverse gap-3 mb-4">
        <span className="size-7 shrink-0 rounded-full bg-brand-blue flex items-center justify-center font-display text-[10px] font-bold text-white">
          SB
        </span>
        <div className="max-w-[80%] rounded-[12px_4px_12px_12px] bg-brand-blue px-3.5 py-2.5 text-xs text-white leading-relaxed">
          Hi Dave — yes, the Transit is available from Monday. I&apos;ve put a hold on it for you. Shall I send over the quote?
        </div>
      </div>

      <div className="rounded-md bg-brand-amber/10 px-3 py-2 text-center text-[10px] text-brand-amber/70">
        🔒 Internal notes are never visible to the customer
      </div>
    </div>
  );
}
