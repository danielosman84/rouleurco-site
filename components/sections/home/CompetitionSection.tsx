import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";

export function CompetitionSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-rc">
        <SectionHeader
          eyebrow="The real competition"
          heading="You're not really competing with the unit down the road."
        />
        <FadeUp delay={0.1}>
          <div className="mx-auto mt-8 max-w-3xl flex flex-col gap-5 text-lg text-brand-text-2 leading-relaxed">
            <p>
              You&apos;re up against the national networks — the ones with the ad budgets, the brand recall and the fleet depth. You won&apos;t out-spend them. You don&apos;t need to.
            </p>
            <p>
              What they can&apos;t do is pick up fast, know the customer, and follow up like it matters. At their scale, the desk is slow, scripted and faceless.
            </p>
            <p className="font-display text-xl font-bold text-brand-navy">
              That&apos;s the ground you win on.
            </p>
            <p>
              RouleurCo gives you the structure of a big operation — nothing missed, every enquiry chased — while you stay as fast and personal as only an independent can be.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
