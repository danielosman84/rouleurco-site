import type { Metadata } from "next";
import Script from "next/script";
import { buildMetadata, SITE_URL } from "@/lib/metadata";
import { buildSoftwareApplicationSchema } from "@/lib/faqSchema";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { CeilingSection } from "@/components/sections/home/CeilingSection";
import { LeverSection } from "@/components/sections/home/LeverSection";
import { CompetitionSection } from "@/components/sections/home/CompetitionSection";
import { MechanismsSection } from "@/components/sections/home/MechanismsSection";
import { CommercialLayerSection } from "@/components/sections/home/CommercialLayerSection";
import { ResultSection } from "@/components/sections/home/ResultSection";
import { RegisterInterestCTA } from "@/components/sections/home/RegisterInterestCTA";

export const metadata: Metadata = buildMetadata({
  title: "RouleurCo | Grow Your Vehicle Rental Business",
  description:
    "RouleurCo helps independent vehicle rental companies grow — winning more of the right hires, especially long-term ones, so the fleet earns year-round. The commercial layer that sits alongside your fleet software.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <CeilingSection />
      <LeverSection />
      <CompetitionSection />
      <MechanismsSection />
      <CommercialLayerSection />
      <ResultSection />
      <RegisterInterestCTA />
      <Script
        id="home-software-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: buildSoftwareApplicationSchema({
            description:
              "The commercial layer for independent vehicle rental companies — capture every enquiry, track where hires come from, follow up every quote, and convert more long-term hire. Sits alongside your fleet software.",
            url: SITE_URL,
          }),
        }}
      />
    </>
  );
}
