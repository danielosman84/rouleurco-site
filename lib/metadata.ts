import type { Metadata } from "next";

export const SITE_URL = "https://www.rouleurco.com";
export const SITE_NAME = "RouleurCo";
export const DEFAULT_OG_IMAGE = "/rouleurco-social-share.png";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const fullTitle = title.endsWith(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
