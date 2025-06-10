import HomePage from '../components/HomePage';
import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'content.json');
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { content } };
}

export default function Index({ content }) {
  return <HomePage content={content} />;
}
