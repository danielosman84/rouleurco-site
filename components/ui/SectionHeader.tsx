import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type Props = {
  eyebrow?: string;
  heading: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  lead,
  align = "center",
  variant = "light",
  className,
}: Props) {
  const alignClasses =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const headingColor = variant === "dark" ? "text-white" : "text-brand-navy";
  const leadColor = variant === "dark" ? "text-white/80" : "text-brand-text-2";

  return (
    <div className={cn("flex flex-col gap-4 max-w-3xl", alignClasses, className)}>
      {eyebrow && (
        <Eyebrow variant={variant === "dark" ? "white" : "light"}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-display font-bold text-balance leading-[1.1]",
          headingColor
        )}
      >
        {heading}
      </h2>
      {lead && (
        <p className={cn("text-lg leading-relaxed text-balance", leadColor)}>
          {lead}
        </p>
      )}
    </div>
  );
}
