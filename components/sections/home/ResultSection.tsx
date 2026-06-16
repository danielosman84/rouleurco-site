import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const results = [
  {
    title: "Steadier troughs",
    body: "The quiet months stop hurting, because more of the fleet is already earning.",
  },
  {
    title: "Higher year-round utilisation",
    body: "Your average climbs as long-term hires fill the gaps daily work leaves behind.",
  },
  {
    title: "Confidence to grow the fleet",
    body: "Adding vehicles becomes a plan, not a gamble — because you know they'll earn.",
  },
];

export function ResultSection() {
  return (
    <section className="bg-brand-lightbg py-20 sm:py-24">
      <div className="container-rc">
        <SectionHeader
          eyebrow="The result"
          heading="What growing actually looks like."
        />
        <StaggerChildren className="mt-12 grid gap-5 md:grid-cols-3">
          {results.map((r) => (
            <StaggerItem key={r.title}>
              <div className="h-full rounded-card border border-brand-mid bg-white p-7">
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">
                  {r.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <FadeUp delay={0.15}>
          <p className="mt-12 text-center font-display text-xl sm:text-2xl font-bold text-brand-navy text-balance max-w-2xl mx-auto">
            More of the enquiries you already get — and more of the ones you actually want.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
