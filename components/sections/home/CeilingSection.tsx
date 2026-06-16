import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";

export function CeilingSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-rc">
        <SectionHeader
          eyebrow="The ceiling"
          heading="Daily hire is a brilliant business. It's also capped."
        />
        <FadeUp delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl flex flex-col gap-5 text-lg text-brand-text-2 leading-relaxed">
            <p>
              You can only fit so many vehicles on the yard, and only turn each one around so many times a week. Through the peak you&apos;ve barely got a van available. Through the trough the car park&apos;s full and those assets are sitting there — still costing you finance, insurance and depreciation, earning nothing.
            </p>
            <p className="font-display text-xl font-bold text-brand-navy">
              You can&apos;t admin your way past that ceiling. The way past it is changing the mix.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
