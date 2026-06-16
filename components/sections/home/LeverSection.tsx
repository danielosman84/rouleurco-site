import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckList } from "@/components/ui/CheckList";
import { FadeUp } from "@/components/motion/FadeUp";

export function LeverSection() {
  return (
    <section className="bg-brand-lightbg py-20 sm:py-24">
      <div className="container-rc">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeUp>
            <div className="max-w-xl">
              <Eyebrow>The lever</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] text-balance">
                More long-term hire is what steadies the year.
              </h2>
              <p className="mt-5 text-lg text-brand-text-2 leading-relaxed">
                Every vehicle you move onto a longer hire is one that&apos;s no longer sitting idle in the quiet months. The troughs lift. Your average utilisation climbs. And once your fleet earns more reliably across the year, adding vehicles stops being a risk and starts being a plan.
              </p>
              <p className="mt-4 text-brand-text-2 leading-relaxed">
                You probably win some long-term hires already. The question is whether you&apos;re winning enough of them — and whether the enquiries that could become long-term ones are being chased hard enough to land.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-card border border-brand-mid bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand-navy">
                What moving the mix does
              </h3>
              <CheckList
                className="mt-6"
                items={[
                  "Lifts the troughs in the quiet months",
                  "Climbs your average year-round utilisation",
                  "Turns fleet growth from a gamble into a plan",
                  "Makes every long-term enquiry worth chasing hard",
                ]}
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
