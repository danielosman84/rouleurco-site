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
  title: "Get in Touch",
  description:
    "Get in touch with RouleurCo, or register your interest. We'll get back to you within two business days — no hard sell, just a conversation about how your hire desk runs.",
  path: "/contact",
});

const faqs: FAQItem[] = [
  {
    question: "Do I need to commit to anything by getting in touch?",
    answer:
      "No. Getting in touch is free and just starts a conversation. There's nothing to sign and nothing to pay.",
  },
  {
    question: "What happens after I get in touch?",
    answer:
      "We'll come back to you within two business days for a short conversation about your hire desk and what you're looking for. We'll walk you through how RouleurCo works. Then it's your call.",
  },
  {
    question: "Is the platform available now?",
    answer:
      "RouleurCo is in a quiet build phase, working with a small group of operators. Get in touch and we'll show you where things are and give you an honest read on whether it's a fit.",
  },
  {
    question: "What if I'm not sure it's right for me?",
    answer:
      "Get in touch anyway. We'd rather show you exactly what RouleurCo does and have you decide it's not right for you now than have you wonder. There's no pressure.",
  },
];

const whatToExpect = [
  "A reply within two business days",
  "A short, no-pressure conversation",
  "A walk-through of how it works",
  "An honest read on whether it's a fit",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        heading="Get in touch — or register your interest."
        lead="Want to see whether RouleurCo fits how your hire desk runs, or just have a question? Drop us a line and we'll get back to you within two business days."
      />

      <section id="contact-form" className="bg-white py-20 sm:py-24">
        <div className="container-rc">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-start">
            <FadeUp>
              <div className="rounded-card border border-brand-mid bg-brand-lightbg p-8 sm:p-10">
                <Eyebrow>Send us a message</Eyebrow>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                  Tell us about your hire desk
                </h2>
                <p className="mt-2 text-brand-text-2">
                  Fill in your details below and we&apos;ll be in touch within two business days. No hard sell — just a conversation.
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
                    What to expect
                  </h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    We&apos;re in a quiet build phase, working with a small group of operators. Getting in touch just puts you in the conversation.
                  </p>
                  <CheckList
                    className="mt-6"
                    variant="white"
                    items={whatToExpect}
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
                    We typically respond within <strong>two business days</strong>.
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
            eyebrow="Before you get in touch"
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
