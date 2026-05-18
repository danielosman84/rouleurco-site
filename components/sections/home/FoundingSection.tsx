import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckList } from "@/components/ui/CheckList";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

export function FoundingSection() {
  return (
    <section id="founding" className="bg-brand-navy text-white py-20 sm:py-24">
      <div className="container-rc">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeUp>
            <Eyebrow variant="white">Founding Operators</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] text-balance">
              Limited to the first 10 rental companies.
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              RouleurCo is being built with a small group of founding operators who get early access, founding pricing, and direct input into the product.
            </p>
            <CheckList
              className="mt-8 mb-8"
              variant="white"
              items={[
                "Early access to the platform",
                "£250/month — locked in for life (saves £100/month vs standard)",
                "Direct influence over features and roadmap",
                "Personal onboarding and setup support",
                "Priority support as the platform grows",
              ]}
            />
            <ButtonLink href="/contact#founding" variant="primary" size="lg">
              Register Your Interest →
            </ButtonLink>
          </FadeUp>

          <FadeUp delay={0.1}>
            <FoundingCard />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function FoundingCard() {
  return (
    <div className="rounded-card border border-white/10 bg-brand-navy-mid p-8 shadow-2xl">
      <h3 className="font-display text-xl font-bold text-white">
        Founding Operator Access
      </h3>
      <p className="mt-3 text-sm text-white/60 leading-relaxed">
        Places are limited while the platform is being built with operator feedback. Once the founding spots are filled, this pricing will close.
      </p>

      <div className="mt-6 border-t border-white/10 pt-5 flex flex-col gap-3.5">
        <PriceRow label="Founding operator price" value={<>£250<span className="text-sm font-medium text-white/45">/month</span></>} primary />
        <PriceRow label="Standard price (after founding)" value={<span className="line-through text-white/40">£350/month</span>} />
        <PriceRow label="One-time setup fee" value="£500" />
      </div>
    </div>
  );
}

function PriceRow({
  label,
  value,
  primary,
}: {
  label: string;
  value: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-white/60">{label}</span>
      <span
        className={`font-display font-bold ${
          primary ? "text-2xl text-white" : "text-base text-white/70"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
