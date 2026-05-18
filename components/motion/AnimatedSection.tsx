"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

type Props = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
  delay?: number;
};

export function AnimatedSection({
  children,
  variants = fadeUp,
  className,
  as = "div",
  delay = 0,
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
