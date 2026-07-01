import type { TocEntry } from "@/lib/guides";

/** The shared list of anchor links, reused by the desktop and mobile variants. */
function TocList({ entries }: { entries: TocEntry[] }) {
  return (
    <ul className="flex flex-col gap-1 border-l border-brand-mid">
      {entries.map((entry) => (
        <li key={entry.id}>
          <a
            href={`#${entry.id}`}
            className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm leading-snug text-brand-muted transition-colors hover:border-brand-blue hover:text-brand-navy"
          >
            {entry.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Sticky sidebar table of contents — desktop only. */
export function GuideTocSidebar({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-navy">
        On this page
      </p>
      <TocList entries={entries} />
    </nav>
  );
}

/** Collapsible table of contents — mobile only. */
export function GuideTocMobile({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <details className="mb-8 rounded-card border border-brand-mid bg-brand-lightbg lg:hidden">
      <summary className="cursor-pointer list-none px-5 py-3.5 font-display text-sm font-semibold text-brand-navy [&::-webkit-details-marker]:hidden">
        On this page
      </summary>
      <nav aria-label="On this page" className="px-5 pb-4">
        <TocList entries={entries} />
      </nav>
    </details>
  );
}
