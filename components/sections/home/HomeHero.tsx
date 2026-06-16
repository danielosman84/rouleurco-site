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
              <Eyebrow variant="white">Grow your hire desk</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                You want to <em className="not-italic text-brand-blue">grow</em>.
                <br />
                You already know it&apos;s hard.
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg sm:text-xl text-white/75 leading-relaxed text-balance">
                For an independent rental company, growth isn&apos;t about working harder — your desk is already flat out. It&apos;s about winning more of the right hires, so your vehicles earn year-round and adding to the fleet stops feeling like a gamble.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-lg font-display font-semibold text-white text-balance">
                RouleurCo is built to help you do exactly that.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-3 mt-2">
                <ButtonLink href="/register-interest" variant="primary" size="lg">
                  Register your interest
                  <span aria-hidden="true">→</span>
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="ghost-white" size="lg">
                  See how it works
                </ButtonLink>
              </div>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-white/10">
                <ProofStat strong="Capture" label="every enquiry, from everywhere" />
                <span className="hidden sm:block h-10 w-px bg-white/10 self-center" />
                <ProofStat strong="Follow up" label="until someone replies" />
                <span className="hidden sm:block h-10 w-px bg-white/10 self-center" />
                <ProofStat strong="Convert" label="more of the hires that grow your year" />
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
    <div className="flex flex-col max-w-[12rem]">
      <strong className="font-display text-lg font-bold text-white">{strong}</strong>
      <span className="text-xs text-white/55">{label}</span>
    </div>
  );
}
