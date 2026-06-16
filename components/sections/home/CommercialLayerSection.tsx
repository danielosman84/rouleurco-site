import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckList } from "@/components/ui/CheckList";
import { FadeUp } from "@/components/motion/FadeUp";

export function CommercialLayerSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-rc">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <Eyebrow>The commercial layer</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] text-balance">
              RouleurCo isn&apos;t a fleet system, and it isn&apos;t trying to replace one.
            </h2>
            <p className="mt-5 text-lg text-brand-text-2 leading-relaxed">
              Your fleet software runs the vehicles. Your inbox holds the emails. Neither one is making sure the long-term enquiry gets chased, or telling you which channel your hires come from. That&apos;s the commercial side — and it&apos;s the half of the business that decides whether you grow.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 max-w-4xl mx-auto">
          <FadeUp>
            <div className="h-full rounded-card border border-brand-mid bg-brand-lightbg p-7">
              <h3 className="font-display text-lg font-bold text-brand-navy">
                What you already have
              </h3>
              <p className="mt-1 text-sm text-brand-muted">Keep it — RouleurCo sits alongside it.</p>
              <CheckList
                className="mt-5"
                items={[
                  "Fleet software that runs the vehicles",
                  "An inbox that holds the emails",
                ]}
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="h-full rounded-card border border-brand-blue bg-white p-7 ring-1 ring-brand-blue/20 shadow-lg">
              <h3 className="font-display text-lg font-bold text-brand-navy">
                What RouleurCo runs — the commercial layer
              </h3>
              <p className="mt-1 text-sm text-brand-muted">The part that wins the work.</p>
              <CheckList
                className="mt-5"
                items={[
                  "Every enquiry captured and chased",
                  "Every quote followed up until you get an answer",
                  "Every hire's source tracked, so you grow what works",
                ]}
              />
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <p className="mt-12 text-center font-display text-xl sm:text-2xl font-bold text-brand-navy text-balance max-w-2xl mx-auto">
            Keep what runs your fleet.{" "}
            <span className="text-brand-blue">RouleurCo runs the part that wins the work.</span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
