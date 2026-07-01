import Link from "next/link";
import type { ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import { slugifyHeading } from "@/lib/guides";
import { TieIn } from "./TieIn";

/** Flatten React children down to their plain text, for heading anchor ids. */
function getText(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getText).join("");
  if (typeof node === "object" && "props" in (node as never)) {
    return getText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2
      id={slugifyHeading(getText(children))}
      className="mt-14 mb-4 scroll-mt-28 font-display text-2xl font-bold leading-tight text-brand-navy sm:text-3xl"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={slugifyHeading(getText(children))}
      className="mt-10 mb-3 scroll-mt-28 font-display text-xl font-bold text-brand-navy"
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-5 text-[17px] leading-[1.75] text-brand-text-2">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-5 flex list-disc flex-col gap-2.5 pl-5 marker:text-brand-blue">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 flex list-decimal flex-col gap-2.5 pl-5 marker:font-semibold marker:text-brand-blue">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="pl-1 text-[17px] leading-[1.7] text-brand-text-2">{children}</li>
  ),
  a: ({ href = "#", children }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const className =
      "font-medium text-brand-blue underline decoration-brand-blue/30 underline-offset-2 transition hover:decoration-brand-blue";
    if (isInternal) {
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-brand-navy">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 rounded-r-card border-l-4 border-brand-blue/40 bg-brand-lightbg px-6 py-5 [&>p]:my-3 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>p]:text-brand-text-2">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-12 border-brand-mid" />,
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-card border border-brand-mid">
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-brand-navy text-white">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-3 font-display text-xs font-semibold uppercase tracking-wide">
      {children}
    </th>
  ),
  tr: ({ children }) => <tr className="border-t border-brand-mid even:bg-brand-lightbg/50">{children}</tr>,
  td: ({ children }) => (
    <td className="px-4 py-3 align-top text-brand-text-2">{children}</td>
  ),
  TieIn,
};
