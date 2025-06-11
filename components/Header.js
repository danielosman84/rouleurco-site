import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" scroll className="text-xl font-bold">
          Rouleur Co.
        </Link>

        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

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

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        className={`${open ? 'block' : 'hidden'} md:hidden bg-white border-b shadow-sm`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link href="/services" className="block" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link href="/case-studies" className="block" onClick={() => setOpen(false)}>
            Case Studies
          </Link>
          <Link href="/about" className="block" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
