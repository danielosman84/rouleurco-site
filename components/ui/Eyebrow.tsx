import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  variant?: "light" | "white";
  className?: string;
};

export function Eyebrow({ children, variant = "light", className }: Props) {
  const variantClasses =
    variant === "white"
      ? "text-white/80 bg-white/10 border-white/20"
      : "text-brand-blue bg-brand-blue-light border-brand-blue/20";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-display font-semibold uppercase tracking-[0.08em]",
        variantClasses,
        className
      )}
    >
      {children}
    </span>
  );
}
