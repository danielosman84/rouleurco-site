import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema, buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "AI Agent for Vehicle Rental Websites",
  description:
    "Your website answering questions, qualifying visitors, and capturing enquiries 24/7 — trained on your rental business. Leads flow straight into your hire desk pipeline.",
  path: "/features/ai-agent",
});

const capabilities = [
  {
    title: "Answers the questions your hire desk answers every day",
    body: "Rates, vehicle types, hire terms, minimum age, what documents are needed — the AI Agent handles the common questions from your own knowledge base. Consistent. Accurate. Every time.",
    badge: "Trained on your business specifically",
  },
  {
    title: "Qualifies the lead before it reaches your desk",
    body: "Vehicle type, hire dates, purpose, licence age — the agent asks the right questions so your hire desk picks up a warm, qualified enquiry. Not just a name and an email address.",
    badge: "Filters out unsuitable enquiries automatically",
  },
  {
    title: "Captures the enquiry and sends it to your pipeline",
    body: "Name, business, contact details — collected before the visitor leaves and pushed straight into your RouleurCo hire enquiry pipeline. Contact record created. Team notified. Follow-up automation triggered.",
    badge: "No manual transfer or data entry",
  },
];

const eligibility = [
  { title: "Age requirements", body: "Set a minimum driver age — say, 25 for certain vehicles. The agent asks upfront and politely declines enquiries that fall outside your eligibility criteria, with a clear explanation." },
  { title: "Licence type and duration", body: "Check whether the enquirer holds the correct licence class for the vehicle requested. New drivers, provisional licences, or recent bans can be filtered before the conversation progresses." },
  { title: "Insurance eligibility", body: "Occupation, intended use, business or personal hire — the agent asks the questions your team would ask before quoting. Enquiries that don't meet your underwriting requirements are handled correctly." },
];

const channels = [
  { name: "Website", body: "A chat widget on your site, available 24/7 to every visitor." },
  { name: "Facebook Messenger", body: "Customers messaging your Facebook Page get the same instant qualified response." },
  { name: "WhatsApp", body: "Conversational enquiries through WhatsApp, with full pipeline integration." },
  { name: "SMS", body: "Inbound SMS handled by the same agent — same knowledge base, same qualification rules." },
];

const faqs: FAQItem[] = [
  { question: "Does it replace my hire desk?", answer: "No. It fills the gap between a website visit and a conversation with your team. When a visitor is ready to enquire, the agent captures their details and hands off to your hire desk. Your team stays in control of the hire — the agent just makes sure the lead arrives qualified and ready, rather than disappearing." },
  { question: "What questions can it answer?", answer: "Whatever you train it on. Typically: rates, vehicle types, minimum hire duration, hire terms, what documents are needed, age requirements, how to get started, and anything else your hire desk answers regularly. If a question falls outside what it's been trained on, it captures the visitor's details and lets them know someone from your team will follow up directly." },
  { question: "What happens when a lead is captured?", answer: "A contact record is created in your RouleurCo pipeline, their details and conversation transcript are saved, and your hire desk is notified. Your existing follow-up automations trigger from that point — SMS, email, task creation — exactly as they do for any other enquiry." },
  { question: "Can it handle our minimum age rules?", answer: "Yes. You set the eligibility rules — minimum driver age, licence requirements, insurance criteria — and the agent applies them upfront. Enquiries that fall outside your criteria are handled politely and correctly, without the conversation needing to reach your team first." },
  { question: "Do I need a separate subscription or system?", answer: "No. The AI Agent is an add-on to your existing RouleurCo subscription. There's no separate system to log into or manage. Leads flow into the same pipeline your hire desk already works from." },
  { question: "Can I customise what it says and how it sounds?", answer: "Yes. The agent is configured during your setup session — your tone, your rates, your vehicles, your hire terms, your eligibility rules. It's not a generic chatbot. It's built around your specific operation." },
  { question: "What if a visitor asks something it can't answer?", answer: "The agent knows its limits. If a question falls outside what it's been trained on, it captures the visitor's details and lets them know someone from your team will follow up directly. It will never invent an answer or quote incorrect information." },
];

export default function AiAgentPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features", href: "/features" },
          { label: "AI Agent" },
        ]}
        eyebrow="Add-On Feature"
        heading="Your hire desk can't be available 24 hours a day. Your AI Agent can."
        lead="Trained on your rental business. Answers questions, qualifies visitors, captures enquiries — and sends them straight into your pipeline, ready for your team to pick up."
        badge={{ tone: "amber", label: "Add-on" }}
      />

      {/* THE PROBLEM */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <FadeUp>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance max-w-2xl">
              Your website is open at midnight. There&apos;s nobody there to answer.
            </h2>
            <p className="mt-4 text-lg text-brand-text-2 leading-relaxed max-w-3xl">
              Most rental businesses get web visitors outside business hours — evenings, weekends, early mornings. Potential customers checking rates, comparing vans, wondering how to get started. Without anything to respond to them, most of them move on. Not because your price was wrong. Just because nobody was there.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <FadeUp>
              <ProblemCard
                tone="red"
                label="What visitors find"
                items={[
                  "A static page with no way to ask questions",
                  "A contact form — submit and wait until Monday",
                  "A phone number that rings out",
                  "No answer to \"do you have a Luton available?\"",
                  "No certainty — so they check the next result",
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.07}>
              <ProblemCard
                tone="grey"
                label="The contact form problem"
                items={[
                  "Form submitted Sunday evening — checked Monday morning",
                  "By then, the visitor has already called around",
                  "They may have already booked with someone else",
                  "You have no idea they were on your site",
                  "A contact form captures data — it doesn't have a conversation",
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="h-full rounded-card bg-brand-navy p-7 text-white">
                <div className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white/40 mb-4">
                  With RouleurCo AI Agent
                </div>
                <CheckList
                  variant="white"
                  items={[
                    "Visitor gets an instant response — any time, any day",
                    "Questions answered from your knowledge base",
                    "Enquiry details captured before they leave",
                    "Lead arrives at your desk qualified and ready",
                    "Your hire desk picks it up with full context",
                  ]}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* THREE CAPABILITIES */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What It Does"
            heading="Three things. Done automatically."
            lead="Trained on your business. Running in the background. Handling the gap between a website visit and a hire desk conversation."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <h3 className="font-display text-base font-bold text-brand-navy">{c.title}</h3>
                  <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">{c.body}</p>
                  <div className="mt-4">
                    <Badge tone="blue">{c.badge}</Badge>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* TRAINED ON YOUR BUSINESS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow>Not a Generic Chatbot</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                Trained on your rental business — not a script.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-brand-text-2 leading-relaxed">
                <p>The AI Agent is built around your specific operation. Your vehicles, your rates, your hire terms, your eligibility rules. It knows what to answer and when to pass to your team.</p>
                <p>It won&apos;t make up information it hasn&apos;t been trained on. If a question falls outside its knowledge base, it captures the visitor&apos;s details and lets them know someone from your team will follow up directly.</p>
              </div>
              <CheckList
                className="mt-6"
                items={[
                  "Trained on your FAQs and business knowledge base",
                  "Knows your vehicle types, availability windows, and hire terms",
                  "Applies your eligibility rules — age, licence type, insurance requirements",
                  "Matches the tone and language of your hire desk",
                  "Knows what it can't answer — and hands off cleanly when needed",
                  "Knowledge base updated as your business changes",
                ]}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <AgentChatMock />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Built-In Qualification"
            heading="Your rules. Applied before the lead reaches your desk."
            lead="Every rental business has eligibility criteria. The AI Agent applies yours — so your team only picks up enquiries that can actually hire from you."
          />
          <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
            {eligibility.map((e) => (
              <StaggerItem key={e.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                  <h3 className="font-display text-base font-bold text-brand-navy">{e.title}</h3>
                  <p className="mt-3 text-sm text-brand-text-2 leading-relaxed">{e.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* MULTI-CHANNEL */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="Multi-Channel"
            heading="Deploy across the channels your customers already use."
            lead="The same trained agent runs across your website, Facebook Messenger, WhatsApp, and inbound SMS — handling enquiries wherever they arrive."
          />
          <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <StaggerItem key={c.name}>
                <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-6">
                  <h3 className="font-display text-base font-bold text-brand-navy">{c.name}</h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ROUTING */}
      <section className="bg-brand-navy py-20 sm:py-24 text-white">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeUp>
              <Eyebrow variant="white">Smart Routing</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-[1.15] text-balance">
                Direct bookings go to your booking widget. Everything else goes to your hire desk.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-white/70 leading-relaxed">
                <p>If you run a booking widget for short, transactional daily hires, the AI Agent can route ready-to-book enquiries straight to it — closing the loop without your team needing to touch the deal.</p>
                <p>For larger, longer-term or commercial enquiries that need human judgement, the agent qualifies the lead and hands it to your hire desk with full context.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-4">
                <div className="rounded-card border border-brand-green/30 bg-brand-green/10 p-6">
                  <Badge tone="green">Direct booking</Badge>
                  <h3 className="mt-3 font-display text-lg font-bold">Routed to your booking widget</h3>
                  <p className="mt-2 text-sm text-white/70">Daily, short-term hires where price is published and availability is bookable. No hire desk friction.</p>
                </div>
                <div className="rounded-card border border-brand-blue/30 bg-brand-blue/10 p-6">
                  <Badge tone="blue">Hire desk</Badge>
                  <h3 className="mt-3 font-display text-lg font-bold">Routed to your pipeline</h3>
                  <p className="mt-2 text-sm text-white/70">Long-term, commercial, fleet accounts, anything bespoke — your team handles with full conversation context.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SETUP / WHAT'S INCLUDED */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
            <FadeUp>
              <Eyebrow>Setup &amp; Configuration</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-[1.15] text-balance">
                One system. No separate tool to manage.
              </h2>
              <p className="mt-5 text-brand-text-2 leading-relaxed">
                The AI Agent is configured during your RouleurCo onboarding. We work with you to build the knowledge base, apply your eligibility rules, and deploy the agent across the channels that matter to your business.
              </p>
              <CheckList
                className="mt-6"
                items={[
                  "Initial knowledge base configuration and agent training",
                  "Eligibility rules applied to your specific hire criteria",
                  "Multi-channel deployment — website, Facebook, WhatsApp, SMS",
                  "Pipeline integration — leads flow into your existing workflow",
                  "Daily hire routing to your booking widget (if applicable)",
                  "Out-of-hours automated responses on all channels",
                  "Full conversation transcript stored in CRM record",
                  "Ongoing knowledge base updates as your business changes",
                ]}
              />
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-card border border-brand-mid bg-brand-lightbg p-7">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-display text-sm font-bold text-brand-navy">Availability</div>
                    <div className="text-xs text-brand-muted">Founding Operator &amp; Standard Plans</div>
                  </div>
                  <Badge tone="blue">Add-On</Badge>
                </div>
                <div className="border-t border-brand-mid pt-5">
                  <div className="font-display text-sm font-bold text-brand-navy mb-1">Pricing</div>
                  <p className="text-sm text-brand-text-2 leading-relaxed">
                    Available on enquiry — based on volume and channels required.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Common Questions"
            heading="What operators ask before adding the AI Agent."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Your website should be capturing enquiries at midnight, not just at 9am."
        subtext="The AI Agent is an add-on to any RouleurCo plan. Includes knowledge base setup, eligibility configuration, and multi-channel deployment."
        primary={{ label: "Add the AI Agent", href: "/contact#founding" }}
        secondary={{ label: "See All Features", href: "/features" }}
      />

      <Script
        id="ai-agent-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            name: "RouleurCo AI Agent",
            description:
              "AI-powered chat agent for vehicle rental businesses. Answers FAQs, qualifies enquiries, and captures leads directly into your RouleurCo pipeline 24/7.",
            url: `${SITE_URL}/features/ai-agent`,
          }),
        }}
      />
      <Script
        id="ai-agent-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}

function ProblemCard({
  tone,
  label,
  items,
}: {
  tone: "red" | "grey";
  label: string;
  items: string[];
}) {
  const toneClasses =
    tone === "red"
      ? { border: "border-brand-red/30", bg: "bg-brand-red/5", label: "text-brand-red", dot: "bg-brand-red/15 text-brand-red" }
      : { border: "border-brand-mid", bg: "bg-brand-lightbg", label: "text-brand-muted", dot: "bg-brand-mid text-brand-muted" };

  return (
    <div className={`h-full rounded-card border ${toneClasses.border} ${toneClasses.bg} p-7`}>
      <div className={`font-display text-xs font-bold uppercase tracking-[0.08em] mb-4 ${toneClasses.label}`}>
        {label}
      </div>
      <ul className="flex flex-col gap-3 text-sm text-brand-text-2">
        {items.map((s) => (
          <li key={s} className="flex gap-2.5">
            <span className={`mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full text-xs ${toneClasses.dot}`}>
              {tone === "red" ? "✕" : "~"}
            </span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AgentChatMock() {
  return (
    <div className="rounded-card border border-white/10 bg-brand-navy p-6 shadow-2xl text-white" aria-hidden="true">
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/10">
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-blue">
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </span>
        <div className="flex-1">
          <div className="font-display text-xs font-bold">RouleurCo Assistant</div>
          <div className="text-[10px] text-white/40">Typically replies instantly</div>
        </div>
        <span className="size-2 rounded-full bg-brand-green" aria-hidden="true" />
      </div>

      <ChatBubble side="ai">Hi there 👋 I&apos;m here to help with any questions about our hire fleet. What are you looking for today?</ChatBubble>
      <ChatBubble side="user">Do you hire Luton vans? I need one for 3 days next week.</ChatBubble>
      <ChatBubble side="ai">Yes — we have Luton vans available with tail lift or without. A couple of quick questions: How old is the main driver, and do you hold a standard UK driving licence?</ChatBubble>
      <ChatBubble side="user">I&apos;m 34, full UK licence.</ChatBubble>
      <ChatBubble side="ai">No problem at all — you&apos;re eligible for our Luton fleet. Let me take your details and get you a quote. What&apos;s the best name and number for your hire desk?</ChatBubble>

      <div className="mt-3 rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2 flex items-center gap-2">
        <svg className="size-3 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="font-display text-[11px] font-bold text-brand-green">
          Lead qualified — contact capture in progress
        </span>
      </div>
    </div>
  );
}

function ChatBubble({ side, children }: { side: "ai" | "user"; children: React.ReactNode }) {
  if (side === "ai") {
    return (
      <div className="flex gap-2 mb-2.5 items-end">
        <span className="size-6 shrink-0 rounded-full bg-brand-blue flex items-center justify-center">
          <svg className="size-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </span>
        <div className="max-w-[85%] rounded-[4px_12px_12px_12px] bg-white/[0.07] px-3.5 py-2.5 text-xs text-white/80 leading-relaxed">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-end gap-2 mb-2.5">
      <div className="max-w-[85%] rounded-[12px_4px_12px_12px] bg-brand-blue px-3.5 py-2.5 text-xs text-white leading-relaxed">
        {children}
      </div>
    </div>
  );
}
