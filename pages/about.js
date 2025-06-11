import { Button } from "../components/ui/button";
import Image from "next/image";
import Meta from "../components/Meta";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Meta
        title="About"
        description="Learn more about Rouleur Co."
        canonical="https://www.rouleurco.com/about"
        image="/images/sales-leadership.png"
      />

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
