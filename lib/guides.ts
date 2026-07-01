import fs from "node:fs";
import path from "node:path";

/**
 * The educational guide series. Content for each guide lives as editable MDX in
 * `content/guides/<slug>.mdx`; the customer-facing titles, SEO copy and the
 * hero standfirst live here so they stay typed and in one place. Order controls
 * the sequence in the `/guides` index and the "related guides" cross-links.
 */
export type GuideMeta = {
  slug: string;
  order: number;
  /** Short category label shown in the hero eyebrow and index card. */
  eyebrow: string;
  /** Customer-facing H1 / hero heading and index card title. */
  title: string;
  /** One-line index card summary. */
  summary: string;
  /** SEO <title> (RouleurCo is appended automatically). */
  seoTitle: string;
  /** Meta description, drawn from the guide intro. */
  description: string;
  /** Italic standfirst that opens the guide — used as the hero lead. */
  standfirst: string;
  /** Where the quiet, in-margin platform tie-ins point. */
  tieInHref: string;
};

export const GUIDES_BASE_PATH = "/guides";

export const GUIDES: GuideMeta[] = [
  {
    slug: "google-business-profile",
    order: 1,
    eyebrow: "Local Visibility",
    title: "Getting your Google Business Profile right",
    summary:
      "Claim it, verify it, and fill it in properly — the first thing a local hire customer sees, and often the one that decides who they call.",
    seoTitle: "Google Business Profile for Vehicle Hire Firms",
    description:
      "A plain-English walkthrough to claiming, verifying and optimising your Google Business Profile — the first thing a local hire customer sees. Worth twenty minutes.",
    standfirst:
      "A plain-English walkthrough for independent vehicle rental operators. No jargon, no upsell — just how to set it up properly and why it's worth twenty minutes of your time.",
    tieInHref: "/features",
  },
  {
    slug: "posting-consistently",
    order: 2,
    eyebrow: "Staying Visible",
    title: "Posting consistently, without it eating your week",
    summary:
      "Not about going viral — about showing up regularly enough that the business checking you out sees a yard that's clearly open and busy.",
    seoTitle: "Posting Consistently on Social for Vehicle Hire",
    description:
      "Show up regularly enough that the business checking you out sees a yard that's clearly open and busy. A practical guide to posting consistently without it eating your week.",
    standfirst:
      "A plain-English guide for independent vehicle rental operators. Not about going viral — about showing up regularly enough that the local business checking you out sees a yard that's clearly open and busy.",
    tieInHref: "/features",
  },
  {
    slug: "ppc-and-paid-ads",
    order: 3,
    eyebrow: "Paid Advertising",
    title: "PPC and paid ads: the honest guide",
    summary:
      "What paid ads really cost an independent, where the money leaks, and how to run Google and Meta properly if you decide to.",
    seoTitle: "Google Ads & PPC for Vehicle Hire: An Honest Guide",
    description:
      "What paid ads really cost a vehicle rental firm, where the money leaks, and how to run Google and Meta properly if you decide to. An honest guide for independent operators.",
    standfirst:
      "An honest guide to paid advertising for independent vehicle rental operators. What it really costs, where the money leaks, and how to do it properly if you decide to — written by people who'd rather tell you the truth than sell you a campaign.",
    tieInHref: "/features",
  },
  {
    slug: "flexi-and-long-term-hire",
    order: 4,
    eyebrow: "Growing Your Fleet",
    title: "Adding flexi and long-term hire",
    summary:
      "The growth it unlocks, who actually wants it, how to price and win it, and the few things to watch so it's done safely.",
    seoTitle: "Flexi & Long-Term Vehicle Hire: An Operator's Guide",
    description:
      "Adding flexi and long-term hire to a daily fleet: the growth it unlocks, who wants it, how to price and win it, and the insurance points to get right. A guide for operators.",
    standfirst:
      "A plain-English guide for daily-hire operators on adding flexi and long-term hire — the growth it unlocks, who actually wants it, how to price and win it, and the few things to watch so it's done safely.",
    tieInHref: "/features",
  },
];

export function getAllGuides(): GuideMeta[] {
  return [...GUIDES].sort((a, b) => a.order - b.order);
}

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** The other guides in the series, in order — for the related-guides footer. */
export function getRelatedGuides(slug: string): GuideMeta[] {
  return getAllGuides().filter((g) => g.slug !== slug);
}

const CONTENT_DIR = path.join(process.cwd(), "content", "guides");

export function readGuideSource(slug: string): string {
  return fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
}

/** Slugify heading text into a stable anchor id (shared by headings + ToC). */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type TocEntry = { id: string; text: string };

/**
 * Build a table of contents from the guide's top-level (##) headings, read
 * straight from the MDX source so it always matches the rendered headings.
 * Fenced code blocks are skipped so stray "##" inside them can't leak in.
 */
export function buildToc(source: string): TocEntry[] {
  const lines = source.split(/\r?\n/);
  const entries: TocEntry[] = [];
  let inFence = false;
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = /^##\s+(?!#)(.+?)\s*$/.exec(line);
    if (match) {
      const text = stripInlineMarkdown(match[1]);
      entries.push({ id: slugifyHeading(text), text });
    }
  }
  return entries;
}

export type FaqItem = { question: string; answer: string };

/**
 * Extract the "Common questions" Q&A from the MDX source for FAQPage JSON-LD.
 * Convention in every guide: an `## Common questions` heading, then repeating
 * `**Question?**` lines each followed by one answer paragraph.
 */
export function extractFaqs(source: string): FaqItem[] {
  const lines = source.split(/\r?\n/);
  const start = lines.findIndex((l) => /^##\s+Common questions\s*$/i.test(l));
  if (start === -1) return [];

  const faqs: FaqItem[] = [];
  let question: string | null = null;
  let answer: string[] = [];

  const flush = () => {
    if (question && answer.length) {
      faqs.push({
        question: stripInlineMarkdown(question),
        answer: stripInlineMarkdown(answer.join(" ").trim()),
      });
    }
    question = null;
    answer = [];
  };

  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^##\s+/.test(line) || /^---\s*$/.test(line)) break; // next section
    const q = /^\*\*(.+?)\*\*\s*$/.exec(line.trim());
    if (q) {
      flush();
      question = q[1];
    } else if (line.trim()) {
      answer.push(line.trim());
    }
  }
  flush();
  return faqs;
}

/** Strip the inline markdown we use (bold, italic, links) down to plain text. */
function stripInlineMarkdown(input: string): string {
  return input
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/(?<!\*)\*(?!\*)([^*]+)\*(?!\*)/g, "$1") // italics
    .replace(/`([^`]+)`/g, "$1") // code
    .replace(/\\([\[\]])/g, "$1") // unescape \[ \]
    .replace(/\s+/g, " ")
    .trim();
}
