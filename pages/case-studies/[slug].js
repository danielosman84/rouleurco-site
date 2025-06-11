import fs from 'fs';
import path from 'path';
import Meta from '../../components/Meta';

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'caseStudies.json');
  const studies = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = studies.map((s) => ({ params: { slug: s.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'caseStudies.json');
  const studies = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const study = studies.find((s) => s.slug === params.slug);
  return { props: { study } };
}

export default function CaseStudy({ study }) {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <Meta
        title={study.title}
        description={study.summary}
        canonical={`https://www.rouleurco.com/case-studies/${study.slug}`}
        image="/images/sales-leadership.png"
      />
      <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
      <p className="mb-6 text-gray-700">{study.body}</p>
    </main>
  );
}
