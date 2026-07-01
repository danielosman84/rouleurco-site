import Link from "next/link";
import type { GuideMeta } from "@/lib/guides";
import { GUIDES_BASE_PATH } from "@/lib/guides";

type Props = {
  guide: GuideMeta;
  /**
   * Heading level for the card title, so the card can sit under different
   * section headings without breaking the page's heading hierarchy. Defaults
   * to "h2" — the level used on the /guides index.
   */
  titleAs?: "h2" | "h3";
};

const titleClasses =
  "mt-4 font-display text-xl font-bold leading-snug text-brand-navy sm:text-2xl";

/**
 * The guide index card — the exact card style used on the /guides listing,
 * extracted so it can be reused elsewhere (e.g. the Growth Check page) without
 * duplicating the markup. The whole card is the link.
 */
export function GuideCard({ guide, titleAs = "h2" }: Props) {
  return (
    <Link
      href={`${GUIDES_BASE_PATH}/${guide.slug}`}
      className="group flex h-full flex-col rounded-card border border-brand-mid bg-white p-7 transition hover:border-brand-blue hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-sm font-bold tabular-nums text-brand-blue">
          {String(guide.order).padStart(2, "0")}
        </span>
        <span className="font-display text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
          {guide.eyebrow}
        </span>
      </div>
      {titleAs === "h3" ? (
        <h3 className={titleClasses}>{guide.title}</h3>
      ) : (
        <h2 className={titleClasses}>{guide.title}</h2>
      )}
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-brand-text-2">
        {guide.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-blue">
        Read the guide
        <svg
          className="size-4 transition-transform group-hover:translate-x-0.5"
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
  );
}
