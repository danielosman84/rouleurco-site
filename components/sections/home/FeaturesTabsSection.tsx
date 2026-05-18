"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import { HeroPipelineMock } from "@/components/decorative/HeroPipelineMock";
import { MiniInboxMock } from "@/components/decorative/MiniInboxMock";
import { AutomationFlowMock } from "@/components/decorative/AutomationFlowMock";
import { DocsPaymentsMock } from "@/components/decorative/DocsPaymentsMock";

type TabKey = "pipeline" | "inbox" | "automation" | "docs";

type Tab = {
  key: TabKey;
  label: string;
  eyebrow: string;
  heading: string;
  lead: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  visual: React.ReactNode;
};

const tabs: Tab[] = [
  {
    key: "pipeline",
    label: "Enquiry Pipeline",
    eyebrow: "Enquiry Pipeline",
    heading: "Every enquiry. Visible. Structured. Tracked.",
    lead: "Rental enquiries from every channel flow into one structured pipeline. Nothing gets lost. Nothing gets forgotten.",
    bullets: [
      "Captures enquiries from web forms, social, email and phone",
      "Turns every enquiry into a structured opportunity",
      "Visual pipeline with custom stages for your rental process",
      "Full history of every interaction per enquiry",
      "Assign to team members with visibility for everyone",
    ],
    ctaLabel: "Multi-Pipeline Deep Dive →",
    ctaHref: "/features/pipelines",
    visual: <HeroPipelineMock />,
  },
  {
    key: "inbox",
    label: "Unified Inbox",
    eyebrow: "Unified Inbox",
    heading: "All your messages. One place. Zero missed conversations.",
    lead: "SMS, email, Facebook, web chat — every message from every channel lands in one inbox. Reply without switching tabs.",
    bullets: [
      "Two-way SMS conversations built in",
      "Email, Facebook Messenger, web chat unified",
      "Full message history linked to the customer record",
      "Assign conversations to team members",
      "Automated replies for out-of-hours enquiries",
    ],
    ctaLabel: "Unified Inbox Deep Dive →",
    ctaHref: "/features/unified-inbox",
    visual: <MiniInboxMock />,
  },
  {
    key: "automation",
    label: "Automation",
    eyebrow: "Automation",
    heading: "Follow-ups that run themselves. Hires that don't get forgotten.",
    lead: "Pre-built automation workflows handle the follow-up sequence that most hire desks never get to. Set once. Run forever.",
    bullets: [
      "Automated follow-up sequences after every quote",
      "Missed call text-back — reply in seconds automatically",
      "Re-engagement campaigns for cold enquiries",
      "Document reminders and payment chasers",
      "Pre-built workflows — no setup required",
    ],
    ctaLabel: "Missed Call Text-Back →",
    ctaHref: "/features/missed-call",
    visual: <AutomationFlowMock />,
  },
  {
    key: "docs",
    label: "Documents & Payments",
    eyebrow: "Documents & Payments",
    heading: "Hire agreements, deposits and payments — automated.",
    lead: "Stop chasing paperwork. RouleurCo automates document collection, e-signatures, and payment collection.",
    bullets: [
      "Digital hire agreements with e-signature",
      "Automated document collection reminders",
      "Online deposit and payment collection",
      "Payment receipts and confirmations sent automatically",
      "All documents linked to the customer record",
    ],
    ctaLabel: "Payments Deep Dive →",
    ctaHref: "/features/payments",
    visual: <DocsPaymentsMock />,
  },
];

export function FeaturesTabsSection() {
  const [active, setActive] = useState<TabKey>("pipeline");
  const tab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <section id="features" className="bg-brand-navy py-20 sm:py-24 text-white">
      <div className="container-rc">
        <SectionHeader
          eyebrow="The Platform"
          heading={
            <>
              Everything the hire desk needs.<br />In one system.
            </>
          }
          lead="RouleurCo is pre-configured for vehicle rental. Not a generic CRM you have to rebuild from scratch — a rental sales platform ready from day one."
          variant="dark"
        />

        <div
          className="mt-12 flex flex-wrap justify-center gap-2"
          role="tablist"
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={active === t.key}
              aria-controls={`tab-panel-${t.key}`}
              onClick={() => setActive(t.key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-display font-semibold transition-colors min-h-[44px]",
                active === t.key
                  ? "bg-white text-brand-navy"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id={`tab-panel-${tab.key}`}
          role="tabpanel"
          className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
        >
          <div className="flex justify-center lg:justify-start">{tab.visual}</div>
          <div className="max-w-xl">
            <Eyebrow variant="white">{tab.eyebrow}</Eyebrow>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white leading-tight text-balance">
              {tab.heading}
            </h3>
            <p className="mt-4 text-white/75 leading-relaxed">{tab.lead}</p>
            <CheckList className="mt-6" items={tab.bullets} variant="white" />
            <Link
              href={tab.ctaHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-display font-semibold text-brand-blue hover:text-white"
            >
              {tab.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
