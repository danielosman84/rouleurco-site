import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getAllGuides, getGuide, GUIDES_BASE_PATH } from "@/lib/guides";
import { GuideLayout } from "@/components/guides/GuideLayout";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

// Only the guides we know about — anything else 404s.
export const dynamicParams = false;

export function generateMetadata({ params }: { params: Params }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: `${GUIDES_BASE_PATH}/${guide.slug}`,
  });
}

export default function GuidePage({ params }: { params: Params }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  return <GuideLayout slug={params.slug} />;
}
