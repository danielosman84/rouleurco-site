import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className }: Props) {
  const wordColor = variant === "light" ? "text-white" : "text-brand-navy";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="RouleurCo home"
    >
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-blue font-display font-bold text-white",
          variant === "light" && "bg-white text-brand-navy"
        )}
        aria-hidden="true"
      >
        RC
      </span>
      <span
        className={cn(
          "font-display font-bold text-lg tracking-tight",
          wordColor
        )}
      >
        RouleurCo
      </span>
    </Link>
  );
}
