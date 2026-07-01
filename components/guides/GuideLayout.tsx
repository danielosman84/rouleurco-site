import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { PageHero } from "@/components/sections/PageHero";
import {
  buildToc,
  extractFaqs,
  getGuide,
  getRelatedGuides,
  readGuideSource,
  GUIDES_BASE_PATH,
} from "@/lib/guides";
import { SITE_URL } from "@/lib/metadata";
import { buildArticleSchema, buildFAQSchema } from "@/lib/faqSchema";
import { mdxComponents } from "./mdx-components";
import { GuideTocSidebar, GuideTocMobile } from "./GuideTableOfContents";
import { RelatedGuides } from "./RelatedGuides";

export async function GuideLayout({ slug }: { slug: string }) {
  const guide = getGuide(slug);
  if (!guide) return null;

  const source = readGuideSource(slug);
  const toc = buildToc(source);
  const faqs = extractFaqs(source);
  const related = getRelatedGuides(slug);
  const url = `${SITE_URL}${GUIDES_BASE_PATH}/${slug}`;

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [[remarkGfm, { singleTilde: false }]],
      },
    },
  });

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: GUIDES_BASE_PATH },
          { label: guide.title },
        ]}
        eyebrow={guide.eyebrow}
        heading={guide.title}
        lead={guide.standfirst}
      />

      <section className="bg-white py-14 sm:py-16">
        <div className="container-rc">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
            <div className="hidden lg:block">
              <GuideTocSidebar entries={toc} />
            </div>
            <article className="min-w-0 lg:max-w-[42rem]">
              <GuideTocMobile entries={toc} />
              {content}
            </article>
          </div>
        </div>
      </section>

      <RelatedGuides guides={related} />

      {/* JSON-LD rendered as plain server-side <script> so it's in the initial
          HTML (better for search/answer-engine crawlers than deferred scripts). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: buildArticleSchema({
            headline: guide.title,
            description: guide.description,
            url,
          }),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildFAQSchema(faqs) }}
        />
      )}
    </>
  );
}
