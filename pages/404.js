import Link from 'next/link';
import Meta from '../components/Meta';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <Meta title="Page Not Found" description="Sorry, we couldn\'t find that page." />
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </main>
  );
}
