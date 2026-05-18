import { cn } from "@/lib/cn";

export type ComparisonCell =
  | { kind: "check"; text?: string }
  | { kind: "cross"; text?: string }
  | { kind: "partial"; text?: string }
  | { kind: "text"; text: string };

export type ComparisonRow = {
  feature: string;
  cells: ComparisonCell[];
};

type Props = {
  headers: string[];
  rows: ComparisonRow[];
  highlightColumn?: number;
};

export function ComparisonTable({ headers, rows, highlightColumn }: Props) {
  return (
    <div className="overflow-x-auto rounded-card border border-brand-mid bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-brand-mid bg-brand-lightbg">
            <th className="py-4 px-5 text-left font-display text-xs font-semibold uppercase tracking-wide text-brand-text-2">
              {headers[0]}
            </th>
            {headers.slice(1).map((h, i) => (
              <th
                key={i}
                className={cn(
                  "py-4 px-5 text-left font-display text-xs font-semibold uppercase tracking-wide",
                  highlightColumn === i + 1
                    ? "bg-brand-blue text-white"
                    : "text-brand-text-2"
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-brand-mid last:border-0">
              <td className="py-3.5 px-5 font-display font-semibold text-brand-navy text-sm">
                {row.feature}
              </td>
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "py-3.5 px-5 text-sm text-brand-text-2",
                    highlightColumn === ci + 1 && "bg-brand-blue-light"
                  )}
                >
                  <Cell cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cell({ cell }: { cell: ComparisonCell }) {
  if (cell.kind === "text") {
    return <span>{cell.text}</span>;
  }

  const iconColor =
    cell.kind === "check"
      ? "text-brand-green"
      : cell.kind === "cross"
      ? "text-brand-red"
      : "text-brand-amber";

  const symbol = cell.kind === "check" ? "✓" : cell.kind === "cross" ? "✕" : "~";

  return (
    <div className="flex items-start gap-2">
      <span
        className={cn(
          "inline-flex size-5 shrink-0 items-center justify-center rounded-full font-display font-bold text-xs mt-0.5",
          iconColor,
          cell.kind === "check"
            ? "bg-brand-green/15"
            : cell.kind === "cross"
            ? "bg-brand-red/10"
            : "bg-brand-amber/15"
        )}
        aria-hidden="true"
      >
        {symbol}
      </span>
      <span>{cell.text}</span>
    </div>
  );
}
