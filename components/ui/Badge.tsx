import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "amber" | "blue" | "navy" | "green" | "red" | "white";

const toneClasses: Record<Tone, string> = {
  amber: "bg-brand-amber/15 text-brand-amber border-brand-amber/30",
  blue: "bg-brand-blue-light text-brand-blue border-brand-blue/20",
  navy: "bg-brand-navy text-white border-brand-navy",
  green: "bg-brand-green/15 text-brand-green border-brand-green/30",
  red: "bg-brand-red/10 text-brand-red border-brand-red/30",
  white: "bg-white text-brand-navy border-brand-mid",
};

type Props = {
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

export function Badge({ tone = "blue", className, children }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-display font-semibold uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
