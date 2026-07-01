import type { TocEntry } from "@/lib/guides";

/** The list of anchor links. */
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

/**
 * The guide's table of contents — rendered once, labelled "On this page".
 * Sits inline at the top on mobile (the layout grid stacks) and becomes a
 * sticky sidebar from `lg` upwards.
 */
export function GuideToc({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;
  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24">
      <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-brand-navy">
        On this page
      </p>
      <TocList entries={entries} />
    </nav>
  );
}
