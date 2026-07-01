import Link from "next/link";
import { getGuide, type GuideMeta } from "@/lib/guides";
import { GuideCard } from "@/components/guides/GuideCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

// The four foundational guides — same data/order as the /guides index (01–04).
const bandGuides: GuideMeta[] = [
  "google-business-profile",
  "posting-consistently",
  "ppc-and-paid-ads",
  "flexi-and-long-term-hire",
]
  .map((slug) => getGuide(slug))
  .filter((guide): guide is GuideMeta => Boolean(guide));

export function GuidesBandSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-rc">
        <SectionHeader
          eyebrow="Guides"
          heading="Everything we know — written down, free to read."
          lead="The things that quietly win and lose hires for an independent yard — getting found locally, posting without it eating your week, spending sensibly on ads, growing with flexi and long-term hire. Written for operators, no sign-up, no upsell. Whether or not RouleurCo's ever a fit for you."
        />

        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
          {bandGuides.map((guide) => (
            <StaggerItem key={guide.slug}>
              <GuideCard guide={guide} titleAs="h3" />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-10 text-center">
          <Link
            href="/guides"
            className="inline-block font-display text-sm font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:decoration-brand-blue"
          >
            See all guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
