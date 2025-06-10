import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'blog.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
