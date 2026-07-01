import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { GUIDES_BASE_PATH } from "@/lib/guides";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function RelatedGuides({ guides }: { guides: GuideMeta[] }) {
  if (guides.length === 0) return null;
  return (
    <section className="bg-brand-lightbg py-16 sm:py-20">
      <div className="container-rc">
        <Eyebrow>Keep reading</Eyebrow>
        <h2 className="mt-4 font-display text-2xl font-bold text-brand-navy sm:text-3xl">
          More guides in this series
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`${GUIDES_BASE_PATH}/${guide.slug}`}
                className="group flex h-full flex-col rounded-card border border-brand-mid bg-white p-6 transition hover:border-brand-blue hover:shadow-md"
              >
                <span className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-blue">
                  {guide.eyebrow}
                </span>
                <span className="mt-3 font-display text-lg font-bold leading-snug text-brand-navy">
                  {guide.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-brand-text-2">
                  {guide.summary}
                </span>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-blue">
                  Read the guide
                  <svg
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
