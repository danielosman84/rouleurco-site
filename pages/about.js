import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="bg-[#0D1B2A] text-white py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Rouleur Co.</div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/whatwedo" className="hover:underline">What We Do</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
        <Button className="bg-[#00A6A6] hover:bg-[#008C8C] text-white px-4 py-2 text-sm">Book a Call</Button>
      </nav>

      <header className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0D1B2A]">About Rouleur Co.</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          We are a team of sales professionals passionate about helping the vehicle rental industry grow.
        </p>
      </header>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-20">
        <div>
          <Image src="/images/sales-leadership.png" alt="Our Team" width={400} height={300} className="rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            At Rouleur Co., we combine industry knowledge with cutting edge sales techniques. Our mission is to accelerate your growth so you can focus on running your fleet.
          </p>
          <p>
            From establishing new pipelines to automating outreach, our dedicated team operates as an extension of your business.
          </p>
        </div>
      </section>
    </div>
  );
}
