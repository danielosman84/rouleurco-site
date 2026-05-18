import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/metadata";
import { buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Van Hire CRM Plans",
  description:
    "Transparent pricing for independent rental operators. Founding Operator plan from £250/month + £500 setup. No hidden costs.",
  path: "/pricing",
});

const inclusions = [
  { title: "Enquiry Pipeline", body: "Every enquiry tracked from first contact to confirmed hire. Custom stages, full history, team assignment." },
  { title: "Unified Inbox", body: "SMS, email, Facebook, Instagram and web chat — all messages in one place, linked to CRM records." },
  { title: "Automation", body: "Pre-built follow-up sequences, missed call text-back, document reminders and re-engagement campaigns." },
  { title: "CRM & Contacts", body: "Complete customer records. Full hire history, all communications, tags and custom fields." },
  { title: "Documents & E-Signature", body: "Send hire agreements, collect e-signatures and store all documents against the customer record." },
  { title: "Payments", body: "Collect deposits and payments via secure payment links. Receipts sent automatically. Stripe powered." },
  { title: "Reporting Dashboard", body: "Conversion rates, pipeline value, revenue tracking, team performance and enquiry source breakdown." },
  { title: "Pre-Built Workflows", body: "Rental-specific automation workflows ready from day one. No build required." },
  { title: "Mobile App", body: "Manage enquiries, messages and the pipeline from your phone. Full access on the go." },
];

const faqs: FAQItem[] = [
  {
    question: "How does founding operator pricing work?",
    answer:
      "Founding operators are the first 10 rental companies to register. They get a discounted monthly price of £250 per month, locked in permanently — it won't increase as standard pricing rises to £350 per month. That's a saving of £100 every month, forever.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "Yes, there is a minimum contract term. Founding operators sign a 6-month minimum agreement — after that, the discounted rate is locked in and rolls monthly. Standard plans require a 12-month minimum commitment. There are no exit fees after the minimum term.",
  },
  {
    question: "What's included in onboarding?",
    answer:
      "Standard accounts include guided onboarding support to get your pipeline, inbox, and automation set up. Founding operators receive a personal onboarding call and hands-on setup support directly with the RouleurCo team.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "Yes. There is a one-time setup fee of £500, which covers your full platform configuration, pipeline build, workflow setup, and onboarding call. This is a one-off cost — there are no recurring setup charges.",
  },
  {
    question: "How many users are included?",
    answer:
      "Standard plans include up to 2 team members. Founding operator plans include up to 5 users — suitable for most independent hire desks and growing multi-location operators. Additional users can be discussed at the time of onboarding.",
  },
  {
    question: "What happens when founding spots are gone?",
    answer:
      "Once all 10 founding spots are taken, the founding pricing programme closes. New operators will join at standard pricing. There is no waitlist for founding pricing once it's closed.",
  },
  {
    question: "Can I use RouleurCo if I have more than one location?",
    answer:
      "Yes. RouleurCo works well for multi-location rental businesses. Founding operators get up to 5 users which covers most multi-depot setups. Get in touch to discuss your specific team size and setup.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        eyebrow="Pricing"
        heading="Simple pricing. No surprises."
        lead="Enterprise-level tools at a price that works for independent rental operators. Founding pricing available for the first 10 companies."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-rc">
          <FadeUp>
            <div className="mb-12 rounded-card border border-brand-amber/30 bg-brand-amber/10 px-6 py-5 flex flex-wrap items-center gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-amber bg-white text-brand-amber">
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-brand-navy">
                  Founding Operator Pricing — £250/month, locked for life
                </div>
                <div className="text-sm text-brand-text-2 mt-1">
                  The first 10 rental companies get lifetime founding pricing. Register your interest to secure yours before they&apos;re gone.
                </div>
              </div>
              <ButtonLink href="/contact#founding" variant="primary" size="sm">
                Register Interest
              </ButtonLink>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
              <PricingCard
                title="Standard"
                sub="For established rental businesses ready to scale with a full CRM"
                price="£350"
                priceLight
                billing="+ £500 one-time setup fee · 12-month minimum"
                bullets={[
                  "Enquiry pipeline with unlimited stages",
                  "Unified inbox — SMS, email, social DMs",
                  "Automated follow-up sequences",
                  "CRM and contact management",
                  "Document and e-signature collection",
                  "Payment collection via Stripe",
                  "Reporting and analytics dashboard",
                  "Up to 2 team members",
                  "Guided onboarding support",
                ]}
                ctaLabel="Register Interest"
                ctaHref="/contact"
                ctaVariant="secondary"
              />

              <PricingCard
                featured
                title="Founding Operator"
                sub="For the first 10 operators. Your rate is locked forever."
                price="£250"
                billing="+ £500 one-time setup fee · 6-month minimum, then rolling"
                badge="Founding Operator"
                bullets={[
                  "Everything in Standard",
                  "£100/month cheaper — locked permanently",
                  "Up to 5 team members (vs 2 on Standard)",
                  "Personal onboarding call with the RouleurCo team",
                  "Priority support — direct line to us",
                  "Direct input into the product roadmap",
                  "Early access to every new feature",
                  "Founding operator recognition",
                ]}
                ctaLabel="Secure Your Founding Spot →"
                ctaHref="/contact#founding"
                ctaVariant="primary"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-8 max-w-2xl mx-auto rounded-card border border-brand-mid bg-brand-lightbg p-6 flex gap-4">
              <svg className="shrink-0 mt-1 size-5 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <div>
                <div className="font-display font-bold text-brand-navy mb-1">
                  About the £500 setup fee
                </div>
                <p className="text-sm text-brand-text-2 leading-relaxed">
                  This is a one-time cost across both plans. It covers your full platform configuration, pipeline build, workflow setup, and onboarding call. Your hire desk is ready to use from day one — not a blank CRM you have to figure out yourself.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc">
          <SectionHeader
            eyebrow="What's Included"
            heading={<>Everything your hire desk needs.<br />Pre-configured.</>}
            lead="No add-ons. No hidden modules. One-time setup fee covers your full onboarding and configuration."
          />
          <StaggerChildren className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((i) => (
              <StaggerItem key={i.title}>
                <div className="h-full rounded-card border border-brand-mid bg-white p-6">
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    {i.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{i.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Common Questions"
            heading="Pricing questions answered."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Secure your founding operator spot."
        subtext="Founding pricing is only available to the first 10 operators. Once those spots are filled, this rate closes."
        primary={{ label: "Register as a Founding Operator", href: "/contact#founding" }}
        secondary={{ label: "Explore Features", href: "/features" }}
      />

      <Script
        id="pricing-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}

function PricingCard({
  title,
  sub,
  price,
  priceLight,
  billing,
  badge,
  bullets,
  ctaLabel,
  ctaHref,
  ctaVariant,
  featured,
}: {
  title: string;
  sub: string;
  price: string;
  priceLight?: boolean;
  billing: string;
  badge?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "primary" | "secondary";
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "relative rounded-card bg-brand-navy text-white p-8 ring-2 ring-brand-blue shadow-2xl"
          : "relative rounded-card border border-brand-mid bg-white p-8"
      }
    >
      {badge && (
        <div className="absolute -top-3 left-6">
          <Badge tone="amber">⭐ {badge}</Badge>
        </div>
      )}
      <h3
        className={`font-display text-2xl font-bold ${
          featured ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          featured ? "text-white/70" : "text-brand-text-2"
        }`}
      >
        {sub}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <strong
          className={`font-display text-5xl font-bold ${
            priceLight && !featured ? "text-brand-navy" : "text-white"
          } ${featured ? "text-white" : "text-brand-navy"}`}
        >
          {price}
        </strong>
        <span className={featured ? "text-white/60" : "text-brand-muted"}>/month</span>
      </div>
      <p
        className={`mt-2 text-xs ${
          featured ? "text-white/55" : "text-brand-muted"
        }`}
      >
        {billing}
      </p>
      <hr
        className={`my-6 ${
          featured ? "border-white/15" : "border-brand-mid"
        }`}
      />
      <CheckList items={bullets} variant={featured ? "white" : "default"} />
      <div className="mt-8">
        <ButtonLink
          href={ctaHref}
          variant={ctaVariant === "primary" ? "primary" : "secondary"}
          size="lg"
          className="w-full"
        >
          {ctaLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
