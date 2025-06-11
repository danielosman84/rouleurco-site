import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header>
      <nav className="bg-[#0D1B2A] text-white py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Rouleur Co.</div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <Link href="/whatwedo" className="hover:underline">
              What We Do
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <Button className="bg-[#00A6A6] hover:bg-[#008C8C] text-white px-4 py-2 text-sm">
          Book a Call
        </Button>
      </nav>
    </header>
  );
}
