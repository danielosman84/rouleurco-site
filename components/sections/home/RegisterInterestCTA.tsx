import { FadeUp } from "@/components/motion/FadeUp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RegisterInterestForm } from "@/components/forms/RegisterInterestForm";

export function RegisterInterestCTA() {
  return (
    <section id="register-interest" className="relative overflow-hidden bg-brand-navy py-20 sm:py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container-rc relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center">
          <FadeUp>
            <div className="max-w-xl">
              <Eyebrow variant="white">Register your interest</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance">
                Interested? Tell us where to reach you.
              </h2>
              <p className="mt-5 text-lg text-white/75 leading-relaxed text-balance">
                No commitment. We&apos;ll show you how it works and whether it&apos;s a fit for how your hire desk runs.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-card bg-white p-7 sm:p-8 shadow-2xl ring-1 ring-black/5">
              <RegisterInterestForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
