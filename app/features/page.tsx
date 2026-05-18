import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ComparisonTable, type ComparisonRow } from "@/components/sections/ComparisonTable";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckList } from "@/components/ui/CheckList";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { HeroPipelineMock } from "@/components/decorative/HeroPipelineMock";
import { MiniInboxMock } from "@/components/decorative/MiniInboxMock";
import { AutomationFlowMock } from "@/components/decorative/AutomationFlowMock";
import { DocsPaymentsMock } from "@/components/decorative/DocsPaymentsMock";
import {
  CrmRecordMock,
  ReportingMock,
  CheckInTimelineMock,
  OnboardingChecklistMock,
  SocialCalendarMock,
  AppPhoneMock,
} from "@/components/decorative/FeatureOverviewMocks";

export const metadata: Metadata = buildMetadata({
  title: "Platform Features",
  description:
    "Every feature in RouleurCo is pre-configured for vehicle rental. Pipeline, unified inbox, automation, documents, payments, AI agent, active hire check-in, apps and more.",
  path: "/features",
});

const navItems: { label: string; sub: string; anchor: string; page?: string }[] = [
  { label: "Enquiry Pipeline", sub: "Capture & track every hire", anchor: "#pipeline", page: "/features/pipelines" },
  { label: "Unified Inbox", sub: "SMS, email & social in one place", anchor: "#inbox", page: "/features/unified-inbox" },
  { label: "Automation", sub: "Follow-ups that run themselves", anchor: "#automation", page: "/features/missed-call" },
  { label: "Docs & Payments", sub: "E-sign, deposits & collection", anchor: "#documents", page: "/features/payments" },
  { label: "CRM & Contacts", sub: "Full history per customer", anchor: "#crm", page: "/features/lead-qualification" },
  { label: "Reporting", sub: "Conversion & pipeline visibility", anchor: "#reporting" },
  { label: "Hire Check-In", sub: "Automated mileage & damage updates", anchor: "#checkin", page: "/features/hire-check-in" },
  { label: "Customer Onboarding", sub: "Docs, e-sign & eligibility gate", anchor: "#onboarding", page: "/features/onboarding" },
  { label: "Social Media", sub: "Plan & post without leaving RC", anchor: "#social", page: "/features/social-media" },
  { label: "Mobile & Desktop App", sub: "iOS, Android, Mac & Windows", anchor: "#apps", page: "/features/apps" },
  { label: "AI Agent", sub: "24/7 website lead capture", anchor: "#ai", page: "/features/ai-agent" },
  { label: "vs Alternatives", sub: "Why operators choose RouleurCo", anchor: "#compare", page: "/compare" },
];

const featureSections = [
  {
    id: "pipeline",
    eyebrow: "Enquiry Pipeline",
    heading: "Turn every enquiry into a structured opportunity",
    lead: "Rental enquiries arrive from multiple sources. RouleurCo captures them all, turns each into a tracked opportunity, and makes sure nothing gets lost or forgotten.",
    bullets: [
      "Web form integration — enquiries flow directly into the pipeline",
      "Email-to-pipeline — incoming emails become opportunities automatically",
      "Manual entry for phone and walk-in enquiries",
      "Custom pipeline stages for your rental process",
      "Drag-and-drop deal management",
      "Full activity timeline per opportunity",
      "Assign opportunities to specific team members",
      "Filter and search across the full pipeline",
    ],
    cta: { label: "Pipeline Deep Dive →", href: "/features/pipelines" },
    visual: <HeroPipelineMock />,
  },
  {
    id: "inbox",
    eyebrow: "Unified Inbox",
    heading: "All your messages. One place. Zero missed conversations.",
    lead: "SMS, email, Facebook Messenger, Instagram, and web chat — every message from every channel lands in a single inbox. Reply without switching tabs or losing context.",
    bullets: [
      "Two-way SMS conversations from a dedicated business number",
      "Email conversations linked to customer records",
      "Facebook and Instagram direct message integration",
      "Web chat widget for your website",
      "All conversations linked to the customer's CRM record",
      "Assign conversations to team members",
      "Automated replies for out-of-hours enquiries",
      "Read receipts and delivery confirmations",
    ],
    cta: { label: "Unified Inbox Deep Dive →", href: "/features/unified-inbox" },
    visual: <MiniInboxMock />,
  },
  {
    id: "automation",
    eyebrow: "Automation",
    heading: "Pre-built workflows that run the follow-up for you",
    lead: "Most hire desks lose enquiries not because they're lazy — but because they're busy. RouleurCo automates the follow-up sequence so nothing falls through the cracks, even when the phone is ringing.",
    bullets: [
      "Automated follow-up sequences after every quote — SMS and email",
      "Missed call text-back — automatic SMS reply within seconds",
      "Enquiry acknowledgement messages sent immediately on receipt",
      "Document and payment reminders sent automatically",
      "Re-engagement campaigns for cold enquiries",
      "Post-hire review requests sent automatically",
      "Custom automation triggers and conditions",
      "Pre-built rental workflows — no setup from scratch",
    ],
    cta: { label: "Missed Call Text-Back →", href: "/features/missed-call" },
    visual: <AutomationFlowMock />,
  },
  {
    id: "documents",
    eyebrow: "Documents & Payments",
    heading: "Hire agreements, deposits and payments — without the admin",
    lead: "Stop chasing customers for paperwork and payments. RouleurCo handles the entire document and payment process automatically, from agreement to collection.",
    bullets: [
      "Digital hire agreements sent directly to the customer",
      "E-signature collection — customers sign on any device",
      "Automated document reminders if not completed",
      "Deposit collection via secure payment link",
      "Payment confirmation receipts sent automatically",
      "All documents stored against the customer record",
      "Stripe and GoCardless integration for payment processing",
      "Payment status visible inside the pipeline",
    ],
    cta: { label: "Payments Deep Dive →", href: "/features/payments" },
    visual: <DocsPaymentsMock />,
  },
  {
    id: "crm",
    eyebrow: "CRM & Contacts",
    heading: "A complete customer record. Every interaction. Every hire.",
    lead: "Every customer contact, conversation, quote, document and payment is stored in one place. Your team gets full context on any customer in seconds.",
    bullets: [
      "Full contact record per customer or company",
      "Complete history of all enquiries and hires",
      "All messages, emails and SMS linked to the contact",
      "Quote and invoice history",
      "Documents and signed agreements stored per contact",
      "Tags and custom fields for rental-specific data",
      "Smart contact deduplication",
      "Bulk contact management and segmentation",
    ],
    cta: { label: "Lead Qualification →", href: "/features/lead-qualification" },
    visual: <CrmRecordMock />,
  },
  {
    id: "reporting",
    eyebrow: "Reporting & Analytics",
    heading: "See exactly where your hires come from — and where they're being lost.",
    lead: "A clear reporting dashboard gives you visibility over your enquiry-to-hire conversion, revenue pipeline, and team performance at a glance.",
    bullets: [
      "Enquiry-to-hire conversion rate tracking",
      "Revenue pipeline value by stage",
      "Enquiry source breakdown — where are leads coming from?",
      "Team performance and response time metrics",
      "Monthly and weekly hire volume trends",
      "Automation performance reporting",
      "Custom date range reporting",
      "Mobile-accessible dashboard",
    ],
    cta: null,
    visual: <ReportingMock />,
  },
  {
    id: "checkin",
    eyebrow: "Active Hire Check-In",
    heading: "Once a vehicle is out on hire, RouleurCo keeps the conversation going — automatically.",
    lead: "Automated SMS and email touchpoints at set intervals during every long-term hire — collecting mileage readings, flagging damage early, and surfacing renewal intent before the vehicle comes back.",
    bullets: [
      "Welcome SMS and email sent on day one of every long-term hire",
      "4-week mileage check — SMS with automatic chase and desk escalation",
      "6-week full check-in — mileage, damage, driver changes, extension intent",
      "3-month review with renewal conversation opener",
      "30-day, 14-day, and 5-day return reminders",
      "Non-response escalated to a hire desk call task automatically",
      "Damage flagged immediately — logged in writing during the hire",
      "Renewal signals captured and tasked to the hire desk",
    ],
    cta: { label: "Check-In Deep Dive →", href: "/features/hire-check-in" },
    visual: <CheckInTimelineMock />,
  },
  {
    id: "onboarding",
    eyebrow: "Customer Onboarding",
    heading: "No vehicle leaves without the right documents in place.",
    lead: "RouleurCo automates the collection of driver documents, hire agreements, and e-signatures — so your hire desk never has to chase paperwork manually before a hire can start.",
    bullets: [
      "Automated document request sent to the customer on hire confirmation",
      "Driving licence and insurance document collection",
      "E-signature on hire agreements — signed from any device",
      "Automated reminders if documents are not returned",
      "Eligibility gate — vehicle cannot proceed until docs are confirmed",
      "All documents stored against the hire record",
    ],
    cta: { label: "Onboarding Deep Dive →", href: "/features/onboarding" },
    visual: <OnboardingChecklistMock />,
  },
  {
    id: "social",
    eyebrow: "Social Media Management",
    heading: "Plan and post social content without leaving RouleurCo.",
    lead: "Schedule and publish posts across Facebook and Instagram from inside the platform. No separate tools, no switching between accounts, no forgotten posting schedules.",
    bullets: [
      "Schedule posts for Facebook and Instagram in advance",
      "Plan a content calendar weeks ahead",
      "Manage multiple pages from one account",
      "Oversight without giving everyone direct social media access",
      "Post performance reporting built in",
    ],
    cta: { label: "Social Media Deep Dive →", href: "/features/social-media" },
    visual: <SocialCalendarMock />,
  },
  {
    id: "apps",
    eyebrow: "Mobile & Desktop App",
    heading: "Your hire desk in your pocket. On every device your team uses.",
    lead: "The RouleurCo mobile and desktop app gives your team full access to the pipeline, inbox, and tasks from any device — iOS, Android, Mac, and Windows. Push notifications the moment anything needs attention.",
    bullets: [
      "iOS and Android mobile app — full pipeline and inbox access",
      "Mac and Windows desktop app — native notifications, no browser tab required",
      "Push notifications for every new enquiry, message, and task",
      "Reply to customers from the app using your saved templates",
      "Team visibility — everyone sees the same live pipeline",
      "Real-time sync — changes on mobile appear on desktop instantly",
    ],
    cta: { label: "App Deep Dive →", href: "/features/apps" },
    visual: <AppPhoneMock />,
  },
];

const comparisonRows: ComparisonRow[] = [
  { feature: "Pre-built rental workflows", cells: [{ kind: "cross", text: "Build from scratch" }, { kind: "check", text: "Ready from day one" }] },
  { feature: "Automated follow-up sequences", cells: [{ kind: "partial", text: "Possible but complex to set up" }, { kind: "check", text: "Pre-configured for rental" }] },
  { feature: "Unified inbox (SMS, email, social)", cells: [{ kind: "cross", text: "Usually separate tools" }, { kind: "check", text: "All channels in one inbox" }] },
  { feature: "Hire agreement e-signature", cells: [{ kind: "cross", text: "Third-party add-on" }, { kind: "check", text: "Built in" }] },
  { feature: "Missed call text-back", cells: [{ kind: "cross", text: "Not available" }, { kind: "check", text: "Automatic" }] },
  { feature: "Active hire check-in sequence", cells: [{ kind: "cross", text: "Not available" }, { kind: "check", text: "Automated — 7 touchpoints" }] },
  { feature: "Mobile & desktop app", cells: [{ kind: "partial", text: "Mobile web only" }, { kind: "check", text: "Native iOS, Android, Mac, Windows" }] },
  { feature: "Rental industry configuration", cells: [{ kind: "cross", text: "Generic setup" }, { kind: "check", text: "Configured for rental" }] },
  { feature: "Social media scheduling", cells: [{ kind: "partial", text: "Separate tool required" }, { kind: "check", text: "Built in" }] },
  { feature: "Payment collection", cells: [{ kind: "partial", text: "Integration required" }, { kind: "check", text: "Built in" }] },
  { feature: "AI website chat agent (24/7 lead capture)", cells: [{ kind: "cross", text: "Third-party tool, separate system" }, { kind: "check", text: "Add-on — integrates with pipeline" }] },
  { feature: "Setup time", cells: [{ kind: "cross", text: "Weeks of customisation" }, { kind: "check", text: "Days — we set it up for you" }] },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Features" }]}
        eyebrow="Platform Features"
        heading="Enterprise-level tools. Configured for rental."
        lead="Every feature in RouleurCo is built around the vehicle rental sales process — not adapted from a generic CRM. Here's what's included."
      />

      <section className="bg-brand-navy text-white py-14">
        <div className="container-rc">
          <FadeUp>
            <div className="text-center mb-10">
              <Eyebrow variant="white">Everything included</Eyebrow>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold">Every feature. One platform.</h2>
              <p className="mt-3 text-white/60 max-w-xl mx-auto">
                Pre-configured for vehicle rental from day one. Jump to any overview below, or go straight to the full page.
              </p>
            </div>
          </FadeUp>
          <StaggerChildren className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {navItems.map((item) => (
              <StaggerItem key={item.label}>
                <div className="h-full rounded-card border border-white/10 bg-white/[0.04] p-4 hover:border-brand-blue/40 hover:bg-white/[0.06] transition">
                  <div className="font-display text-sm font-semibold text-white">{item.label}</div>
                  <div className="mt-1 text-xs text-white/55">{item.sub}</div>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-display font-semibold">
                    <a href={item.anchor} className="text-brand-blue hover:text-white">
                      Overview ↓
                    </a>
                    {item.page && (
                      <Link href={item.page} className="text-white/60 hover:text-white">
                        Full page →
                      </Link>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-brand-navy text-white pb-20 sm:pb-24">
        <div className="container-rc flex flex-col gap-20">
          {featureSections.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center scroll-mt-24"
            >
              <FadeUp>
                <div className="max-w-xl">
                  <Eyebrow variant="white">{s.eyebrow}</Eyebrow>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold leading-tight text-balance">
                    {s.heading}
                  </h3>
                  <p className="mt-4 text-white/70 leading-relaxed">{s.lead}</p>
                  <CheckList className="mt-6" items={s.bullets} variant="white" />
                  {s.cta && (
                    <Link
                      href={s.cta.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-brand-blue hover:text-white"
                    >
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="flex justify-center lg:justify-end">
                  {s.visual}
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </section>

      <section id="compare" className="bg-brand-lightbg py-20 sm:py-24 scroll-mt-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Why RouleurCo"
            heading="Not just another CRM."
            lead="Generic CRMs can do many things — but they're not built for vehicle rental. RouleurCo is."
          />
          <div className="mt-12">
            <ComparisonTable
              headers={["Feature", "Generic CRM", "RouleurCo"]}
              rows={comparisonRows}
              highlightColumn={2}
            />
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/compare" variant="secondary">
              Full comparison →
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Get started"
        heading="Every feature. Pre-built for rental."
        subtext="RouleurCo is ready from day one. No configuration, no adapting a generic CRM, no wasted weeks of setup."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />

      <Script
        id="features-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            description:
              "Every feature in RouleurCo is pre-configured for vehicle rental. Pipeline management, unified inbox, automation, document collection, payments, AI agent, active hire check-ins, mobile app, and more.",
            url: `${SITE_URL}/features`,
          }),
        }}
      />
    </>
  );
}

