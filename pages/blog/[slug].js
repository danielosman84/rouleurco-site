import fs from 'fs';
import path from 'path';

export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'blog.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const post = posts.find(p => p.slug === params.slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
