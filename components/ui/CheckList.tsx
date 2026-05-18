import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  items: ReactNode[];
  variant?: "default" | "white";
  className?: string;
};

export function CheckList({ items, variant = "default", className }: Props) {
  const itemColor =
    variant === "white" ? "text-white/90" : "text-brand-text-2";
  const checkColor =
    variant === "white" ? "text-white" : "text-brand-green";

  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <li key={i} className={cn("flex items-start gap-3", itemColor)}>
          <CheckIcon className={cn("mt-0.5 size-5 shrink-0", checkColor)} />
          <span className="text-[15px] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
