import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

type Props = {
  eyebrow?: string;
  heading: string;
  subtext: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: string;
};

export function CtaBanner({
  eyebrow = "Get started",
  heading,
  subtext,
  primary,
  secondary,
  note,
}: Props) {
  return (
    <section className="bg-brand-navy py-20 sm:py-24 text-white">
      <div className="container-rc max-w-3xl text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-3 text-white/60">
            <span className="h-px w-7 bg-white/30" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.12em]">
              {eyebrow}
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-balance">
            {heading}
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed text-balance">
            {subtext}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={primary.href} variant="primary" size="lg">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="ghost-white" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
          {note && (
            <p className="mt-5 text-sm text-white/55">{note}</p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
