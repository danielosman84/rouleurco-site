import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getAllGuides, GUIDES_BASE_PATH } from "@/lib/guides";
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
                <Link
                  href={`${GUIDES_BASE_PATH}/${guide.slug}`}
                  className="group flex h-full flex-col rounded-card border border-brand-mid bg-white p-7 transition hover:border-brand-blue hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold tabular-nums text-brand-blue">
                      {String(guide.order).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
                      {guide.eyebrow}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold leading-snug text-brand-navy sm:text-2xl">
                    {guide.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-text-2">
                    {guide.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-blue">
                    Read the guide
                    <svg
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
