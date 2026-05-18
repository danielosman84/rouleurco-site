import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

export function FinalCTA() {
  return (
    <section className="bg-brand-navy py-20 sm:py-24 text-white">
      <div className="container-rc max-w-3xl text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-3 text-white/60">
            <span className="h-px w-7 bg-white/30" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.12em]">
              Get started
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance">
            Stop losing hires to process gaps.
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed text-balance">
            Register your interest today and secure a founding operator spot before all 10 are taken.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact#founding" variant="primary" size="lg">
              Register as a Founding Operator
            </ButtonLink>
            <ButtonLink href="/pricing" variant="ghost-white" size="lg">
              View Pricing
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm text-white/55">
            No commitment required. Register interest and we&apos;ll be in touch with details.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
