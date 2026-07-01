export type FAQItem = { question: string; answer: string };

export function buildFAQSchema(items: FAQItem[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return JSON.stringify(schema);
}

export function buildOrganizationSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RouleurCo",
    url: "https://www.rouleurco.com",
    logo: "https://www.rouleurco.com/rouleurco-icon.png",
    sameAs: ["https://www.linkedin.com/company/rouleurco"],
  });
}

export function buildArticleSchema({
  headline,
  description,
  url,
}: {
  headline: string;
  description: string;
  url: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-GB",
    author: { "@type": "Organization", name: "RouleurCo", url: "https://www.rouleurco.com" },
    publisher: {
      "@type": "Organization",
      name: "RouleurCo",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rouleurco.com/rouleurco-icon.png",
      },
    },
  });
}

export function buildSoftwareApplicationSchema({
  name = "RouleurCo",
  description,
  url,
}: {
  name?: string;
  description: string;
  url: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android, macOS, Windows",
    description,
    url,
    offers: {
      "@type": "Offer",
      price: "250",
      priceCurrency: "GBP",
    },
  });
}
