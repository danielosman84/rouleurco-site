import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { HeroPipelineMock } from "@/components/decorative/HeroPipelineMock";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container-rc relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 items-center">
          <div className="flex flex-col gap-6 max-w-xl">
            <FadeUp>
              <Eyebrow variant="white">Built for vehicle rental</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                Sales & automation built for{" "}
                <em className="not-italic text-brand-blue">rental companies</em>
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed text-balance">
                Capture every enquiry. Send quotes faster. Follow up automatically. Convert more hires — without adding admin.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex flex-wrap gap-3 mt-2">
                <ButtonLink href="/contact#founding" variant="primary" size="lg">
                  Join Founding Operators
                  <span aria-hidden="true">→</span>
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="ghost-white" size="lg">
                  See How It Works
                </ButtonLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-white/10">
                <ProofStat strong="10 spots" label="Founding operators" />
                <span className="hidden sm:block h-10 w-px bg-white/10 self-center" />
                <ProofStat strong="84%" label="LCV customers are business users" />
                <span className="hidden sm:block h-10 w-px bg-white/10 self-center" />
                <ProofStat strong="1 system" label="Everything in one place" />
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <HeroPipelineMock />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ProofStat({ strong, label }: { strong: string; label: string }) {
  return (
    <div className="flex flex-col">
      <strong className="font-display text-lg font-bold text-white">{strong}</strong>
      <span className="text-xs text-white/55">{label}</span>
    </div>
  );
}
