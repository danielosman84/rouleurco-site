import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** The subtle link text (an arrow is appended automatically). */
  label?: string;
  /** Where the tie-in points — defaults to the platform hub. */
  href?: string;
  /** "inline" sits quietly beside the prose; "footer" is the soft closing note. */
  variant?: "inline" | "footer";
  children: ReactNode;
};

// MDX wraps the tie-in text in a <p>, so reset that paragraph's default prose
// styling rather than nesting another <p> inside these callouts.
const resetChildP =
  "[&>p]:m-0 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-brand-text-2";

/**
 * A quiet, in-margin platform tie-in. Deliberately not a button or banner —
 * these carry the guides' only product mentions, kept soft and educational.
 */
export function TieIn({ label = "Find out more", href = "/features", variant = "inline", children }: Props) {
  const link = (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition hover:decoration-brand-blue"
    >
      {label}
      <Arrow />
    </Link>
  );

  if (variant === "footer") {
    return (
      <aside
        className={cn(
          "not-prose my-10 flex flex-col items-center gap-3 border-t border-brand-mid pt-8 text-center",
          "[&>p]:m-0 [&>p]:max-w-2xl [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:text-brand-text-2"
        )}
      >
        {children}
        {link}
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "not-prose my-7 flex flex-col items-start gap-2 rounded-r-card border-l-2 border-brand-blue bg-brand-blue-light/60 px-5 py-4 sm:my-8",
        resetChildP
      )}
    >
      <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] text-brand-blue/80">
        With RouleurCo
      </span>
      {children}
      {link}
    </aside>
  );
}

function Arrow() {
  return (
    <svg
      className="size-3.5"
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
  );
}
