import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Rouleur Co.</h3>
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <nav className="space-y-2">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <p>Follow us:</p>
          {/* Add social links/icons here */}
        </div>
      </div>
    </footer>
  );
}
