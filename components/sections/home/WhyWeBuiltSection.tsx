import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

const steps = [
  {
    n: 1,
    title: "Worked inside vehicle rental — not just near it",
    body: "RouleurCo was built by someone with direct experience managing hire desks, handling enquiries, and seeing exactly where the gaps are.",
  },
  {
    n: 2,
    title: "Independent operators deserve enterprise-grade tools",
    body: "The big national chains have sophisticated systems. Independent businesses — who represent most of the market — are left with whatever they can cobble together.",
  },
  {
    n: 3,
    title: "Pre-configured for rental from day one",
    body: "Not a generic CRM you spend weeks adapting. RouleurCo arrives already set up for how rental companies work — pipelines, workflows, follow-ups included.",
  },
];

export function WhyWeBuiltSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-rc">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <FadeUp>
            <Eyebrow>Why We Built This</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] text-balance">
              Built by someone who has stood behind a hire desk.
            </h2>
            <p className="mt-5 text-lg text-brand-text-2 leading-relaxed">
              Enterprise rental companies have full technology stacks. Independent operators get generic CRM software designed for estate agents — loosely adapted for rental. Or spreadsheets. Or notepads.
            </p>
            <p className="mt-4 text-brand-text-2 leading-relaxed">
              The result is always the same: enquiries fall through the gaps, follow-ups get forgotten, and hires go to competitors — not because of price or fleet, but because of process.
            </p>

            <ol className="mt-8 flex flex-col gap-6 border-l-2 border-brand-mid pl-6">
              {steps.map((s) => (
                <li key={s.n} className="relative">
                  <span className="absolute -left-[31px] inline-flex size-7 items-center justify-center rounded-full bg-brand-blue text-white text-xs font-display font-bold">
                    {s.n}
                  </span>
                  <h3 className="font-display text-base font-bold text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-text-2 leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="secondary">
                Read the full story →
              </ButtonLink>
              <ButtonLink href="/compare" variant="secondary">
                RouleurCo vs The Alternatives →
              </ButtonLink>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="rounded-card border border-brand-mid bg-brand-lightbg p-8">
              <span
                className="font-display text-6xl leading-none text-brand-blue"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 text-lg leading-relaxed text-brand-navy text-balance">
                Most rental companies don&apos;t need more enquiries. They need a better way to handle the ones they already receive. The tools to do that have always existed — they&apos;ve just never been configured for rental.
              </blockquote>
              <div className="mt-5 pt-5 border-t border-brand-mid">
                <div className="font-display font-bold text-brand-navy">RouleurCo</div>
                <div className="text-xs text-brand-muted">Core belief</div>
              </div>
            </div>

            <div className="mt-5 rounded-card border border-brand-mid bg-white p-6">
              <Eyebrow>The mission</Eyebrow>
              <p className="mt-3 text-brand-text-2 leading-relaxed">
                Bring enterprise-level sales and automation tools to independent vehicle rental operators — without enterprise-level pricing or months of setup.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
