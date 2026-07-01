import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getAllGuides, GUIDES_BASE_PATH } from "@/lib/guides";
import { GuideCard } from "@/components/guides/GuideCard";
import { PageHero } from "@/components/sections/PageHero";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const baseMetadata = buildMetadata({
  title: "Guides for Independent Vehicle Rental Operators",
  description:
    "Practical, no-nonsense guides for independent UK vehicle rental operators — getting found locally, staying visible, spending wisely on ads, and growing with flexi and long-term hire.",
  path: GUIDES_BASE_PATH,
});

// buildMetadata already appends "| RouleurCo"; mark the document title absolute so
// the root layout's "%s | RouleurCo" template doesn't append it a second time.
export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: baseMetadata.title as string },
};

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
        eyebrow="Guides"
        heading="Straight-talking guides for independent rental operators"
        lead="No jargon and no upsell — just the things that quietly win (and lose) hires for independent yards: getting found locally, staying visible, spending sensibly on ads, and growing the fleet without a bigger yard."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-rc">
          <FadeUp>
            <p className="max-w-2xl text-[17px] leading-relaxed text-brand-text-2">
              We wrote these for operators, not marketers. Each one is a practical walkthrough of
              something we see independent hire businesses either miss or do the hard way — start
              anywhere, they stand on their own.
            </p>
          </FadeUp>

          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <StaggerItem key={guide.slug}>
                <GuideCard guide={guide} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
