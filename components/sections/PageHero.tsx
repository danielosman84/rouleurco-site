import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/motion/FadeUp";

type Crumb = { label: string; href?: string };

type Cta = { label: string; href: string; external?: boolean };

type Props = {
  crumbs?: Crumb[];
  eyebrow: string;
  heading: ReactNode;
  lead: ReactNode;
  badge?: { tone: "amber" | "blue" | "green"; label: string };
  cta?: Cta;
};

export function PageHero({ crumbs, eyebrow, heading, lead, badge, cta }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container-rc relative py-16 sm:py-20 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span aria-hidden="true" className="text-white/35">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <FadeUp>
          <div className="flex items-center gap-3">
            <Eyebrow variant="white">{eyebrow}</Eyebrow>
            {badge && <Badge tone={badge.tone}>{badge.label}</Badge>}
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
            {heading}
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed text-balance">
            {lead}
          </p>
        </FadeUp>

        {cta && (
          <FadeUp delay={0.15}>
            <div className="mt-8">
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-btn bg-brand-blue px-6 py-3 font-display font-semibold text-white shadow-md transition hover:bg-brand-blue-hover hover:shadow-lg"
                >
                  {cta.label}
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-btn bg-brand-blue px-6 py-3 font-display font-semibold text-white shadow-md transition hover:bg-brand-blue-hover hover:shadow-lg"
                >
                  {cta.label}
                </Link>
              )}
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
