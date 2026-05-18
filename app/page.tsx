import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { LogosBar } from "@/components/sections/home/LogosBar";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { FeaturesTabsSection } from "@/components/sections/home/FeaturesTabsSection";
import { StatsStrip } from "@/components/sections/home/StatsStrip";
import { HowItWorksSummary } from "@/components/sections/home/HowItWorksSummary";
import { FoundingSection } from "@/components/sections/home/FoundingSection";
import { WhyWeBuiltSection } from "@/components/sections/home/WhyWeBuiltSection";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "RouleurCo | Sales & Automation for Vehicle Rental Companies",
  description:
    "Enterprise-level sales and automation software built for independent vehicle rental companies. Capture every enquiry, automate follow-ups, and convert more hires.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LogosBar />
      <ProblemSection />
      <FeaturesTabsSection />
      <StatsStrip />
      <HowItWorksSummary />
      <FoundingSection />
      <WhyWeBuiltSection />
      <FinalCTA />
      <Script
        id="home-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            description:
              "Sales and automation platform configured for vehicle rental companies — pipelines, unified inbox, automated follow-ups, e-signature and payments.",
            url: SITE_URL,
          }),
        }}
      />
    </>
  );
}
