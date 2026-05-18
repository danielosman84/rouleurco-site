"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = { question: string; answer: string };

type Props = {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
};

export function Accordion({ items, className, defaultOpen }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);

  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={i}
            className={cn(
              "rounded-card border bg-white transition-colors",
              isOpen ? "border-brand-blue" : "border-brand-mid"
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-[44px]"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base font-semibold text-brand-navy">
                {item.question}
              </span>
              <span
                className={cn(
                  "inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-transform",
                  isOpen
                    ? "border-brand-blue bg-brand-blue text-white rotate-45"
                    : "border-brand-mid text-brand-text-2"
                )}
                aria-hidden="true"
              >
                <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-brand-text-2 leading-relaxed">
                {item.answer}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
