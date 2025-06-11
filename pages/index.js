import HomePage from '../components/HomePage';
import Meta from '../components/Meta';
export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { content } };
}

export default function Index({ content }) {
  return (
    <>
      <Meta
        title="Home"
        description="Rouleur Co. helps vehicle hire businesses grow with expert outbound sales, lead nurturing and strategy."
        canonical="https://www.rouleurco.com/"
        image="/images/sales-leadership.png"
      />
      <HomePage content={content} />
    </>
  );
}
