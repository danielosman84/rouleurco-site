import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata } from "@/lib/metadata";
import { buildFAQSchema, type FAQItem } from "@/lib/faqSchema";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckList } from "@/components/ui/CheckList";
import { Accordion } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GhlIframe } from "@/components/forms/GhlIframe";
import { FadeUp } from "@/components/motion/FadeUp";

export const metadata: Metadata = buildMetadata({
  title: "Get in Touch — Register as a Founding Operator",
  description:
    "Register your interest in RouleurCo's founding operator programme. Limited to the first 10 independent vehicle rental companies.",
  path: "/contact",
});

const faqs: FAQItem[] = [
  {
    question: "Do I need to commit to anything by registering?",
    answer:
      "No. Registering your interest is completely free and puts you in the conversation about a founding operator spot. There's no commitment until you decide to proceed.",
  },
  {
    question: "What happens after I register?",
    answer:
      "We'll contact you within 24 hours to have a short conversation about your business and what you're looking for. We'll walk you through the platform and the founding operator pricing. Then it's your call.",
  },
  {
    question: "Is the platform available now?",
    answer:
      "RouleurCo is currently in development with early operators. Founding operators get access as part of the early build process — you'll be onboarded as the platform is being finalised, not after a long wait.",
  },
  {
    question: "What if I'm not sure it's right for me?",
    answer:
      "Register anyway and have the conversation. We'd rather you understand exactly what RouleurCo does and decide it's not right for you now than miss out on the founding pricing because you were unsure. There's no pressure.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in Touch"
        heading="Register your interest or ask us anything."
        lead="Whether you want to secure a founding operator spot or just want to know more — we'll get back to you within 24 hours."
      />

      <section id="founding" className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-start">
            <FadeUp>
              <div className="rounded-card border border-brand-mid bg-brand-lightbg p-8 sm:p-10">
                <Eyebrow>Founding Operator Registration</Eyebrow>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                  Register Your Interest
                </h2>
                <p className="mt-2 text-brand-text-2">
                  Fill in your details below and we&apos;ll be in touch within 24 hours to discuss securing your founding operator spot.
                </p>
                <div className="mt-8">
                  <GhlIframe formId="z32IZHrmlAUbbSA7f8To" />
                </div>
              </div>
            </FadeUp>

            <div className="flex flex-col gap-5">
              <FadeUp delay={0.1}>
                <div className="rounded-card border border-white/10 bg-brand-navy text-white p-8 shadow-xl">
                  <h3 className="font-display text-xl font-bold">
                    Founding Operator Programme
                  </h3>
                  <div className="mt-5 flex flex-col">
                    <PriceRow label="Founding price" value={<><strong>£250</strong><span className="text-sm font-medium text-white/45">/month</span></>} primary />
                    <PriceRow label="Standard price" value={<span className="line-through text-white/35 text-sm">£350/month</span>} />
                    <PriceRow label="One-time setup fee" value="£500" />
                  </div>
                  <p className="mt-5 text-sm text-white/60 leading-relaxed">
                    The first 10 rental companies to join get their rate locked at £250/month permanently. Once those spots are gone, standard pricing applies.
                  </p>
                  <CheckList
                    className="mt-6"
                    variant="white"
                    items={[
                      "Early platform access",
                      "Founding operator pricing — locked in for life",
                      "Influence over product features and roadmap",
                      "Personal onboarding support",
                      "Priority support line",
                    ]}
                  />
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="flex items-center gap-3 rounded-card border border-brand-green/30 bg-brand-green/10 px-5 py-4">
                  <span
                    className="size-2.5 rounded-full bg-brand-green animate-pulse shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-brand-navy">
                    We typically respond within <strong>24 hours</strong> on business days.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-lightbg py-20 sm:py-24">
        <div className="container-rc max-w-3xl">
          <SectionHeader
            eyebrow="Before You Register"
            heading="Quick answers."
          />
          <div className="mt-12">
            <Accordion items={faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
      />
    </>
  );
}

function PriceRow({
  label,
  value,
  primary,
}: {
  label: string;
  value: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
      <span className="text-sm text-white/55">{label}</span>
      <span
        className={
          primary
            ? "font-display text-2xl font-bold text-white"
            : "font-display font-bold text-white/70"
        }
      >
        {value}
      </span>
    </div>
  );
}
