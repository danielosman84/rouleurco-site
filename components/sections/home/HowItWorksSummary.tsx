import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";

const steps = [
  { n: 1, title: "Enquiry Captured", body: "Every channel flows into one system. Web, email, social, phone." },
  { n: 2, title: "Quote Sent", body: "Structured opportunity created. Quote sent directly from the platform." },
  { n: 3, title: "Follow-Up Automated", body: "Sequences run automatically. No chasing required by your team." },
  { n: 4, title: "Hire Confirmed", body: "Docs signed, payment taken, hire booked. All in one system." },
];

export function HowItWorksSummary() {
  return (
    <section className="bg-brand-lightbg py-20 sm:py-24">
      <div className="container-rc">
        <SectionHeader
          eyebrow="How It Works"
          heading={
            <>
              From enquiry to confirmed hire.<br />Without the gaps.
            </>
          }
          lead="RouleurCo structures the entire rental sales process so your hire desk can focus on customers, not admin."
        />

        <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="rounded-card border border-brand-mid bg-white p-6 h-full">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-blue text-white font-display font-bold">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-2 leading-relaxed">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeUp delay={0.2}>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/how-it-works" variant="primary" size="lg">
              See The Full Process →
            </ButtonLink>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
