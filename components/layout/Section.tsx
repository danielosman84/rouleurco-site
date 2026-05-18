import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  id?: string;
  variant?: "light" | "white" | "dark";
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
};

const variantClasses = {
  light: "bg-brand-lightbg text-brand-text",
  white: "bg-white text-brand-text",
  dark: "bg-brand-navy text-white",
};

export function Section({
  children,
  id,
  variant = "white",
  className,
  containerClassName,
  as: Tag = "section",
}: Props) {
  return (
    <Tag
      id={id}
      className={cn(
        "py-16 sm:py-20 md:py-24",
        variantClasses[variant],
        className
      )}
    >
      <div className={cn("container-rc", containerClassName)}>{children}</div>
    </Tag>
  );
}
