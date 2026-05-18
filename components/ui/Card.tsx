import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "featured";
};

const variantClasses = {
  default: "bg-white border-brand-mid",
  dark: "bg-brand-navy-mid border-white/10 text-white",
  featured:
    "bg-white border-brand-blue ring-1 ring-brand-blue/20 shadow-lg",
};

export function Card({ children, className, variant = "default" }: Props) {
  return (
    <div
      className={cn(
        "rounded-card border p-6 transition-shadow duration-200",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
