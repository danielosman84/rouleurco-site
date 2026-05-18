"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { stagger, fadeUp, VIEWPORT_ONCE } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
};

export function StaggerChildren({ children, className }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
