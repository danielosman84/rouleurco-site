import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Meta from '../../components/Meta';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'caseStudies.json');
  const studies = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { studies } };
}

export default function CaseStudies({ studies }) {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <Meta
        title="Case Studies"
        description="Success stories from our clients"
        canonical="https://www.rouleurco.com/case-studies"
        image="/images/sales-leadership.png"
      />
      <h1 className="text-4xl font-bold mb-8 text-center">Case Studies</h1>
      <div className="space-y-8">
        {studies.map((study) => (
          <div key={study.slug} className="p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold mb-2">{study.title}</h2>
            <p className="text-gray-700 mb-2">{study.summary}</p>
            <Link href={`/case-studies/${study.slug}`} className="text-blue-600 underline">Read More →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
