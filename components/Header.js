import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Rouleur Co.</div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link
          href="/book"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
