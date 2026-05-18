import type { ReactNode } from "react";

export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-3xl mx-auto
        [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h2]:mt-12 [&_h2]:mb-4
        [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-brand-navy [&_h3]:mt-8 [&_h3]:mb-3
        [&_p]:text-brand-text-2 [&_p]:leading-relaxed [&_p]:my-4
        [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ul]:marker:text-brand-blue
        [&_li]:my-1.5 [&_li]:text-brand-text-2 [&_li]:leading-relaxed
        [&_strong]:text-brand-navy
        [&_a]:text-brand-blue [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-blue-hover
      "
    >
      {children}
    </div>
  );
}
