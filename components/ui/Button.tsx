import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "ghost-white";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm",
  secondary:
    "bg-transparent text-brand-navy border border-brand-mid hover:border-brand-blue hover:text-brand-blue",
  ghost:
    "bg-transparent text-brand-navy hover:bg-brand-light",
  "ghost-white":
    "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-btn transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 min-h-[44px]";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: NativeButtonProps) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  children,
}: LinkProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
