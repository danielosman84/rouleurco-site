import Link from 'next/link';

export default function HomePage({ content }) {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gray-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {content.hero.title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {content.hero.subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/book" className="bg-white text-black px-6 py-3 rounded-md text-lg">
            Get Started
          </Link>
          <Link href="/case-studies" className="underline text-lg text-white">
            View Case Studies
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How We Help</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Lead Conversion', text: 'Turn inbound leads into high-quality hires.' },
            { title: 'CRM Automation', text: 'Streamline follow-ups and win more business.' },
            { title: 'PPC Management', text: 'Run targeted ads that drive measurable ROI.' },
          ].map((service) => (
            <div key={service.title} className="border p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">TSP Vehicle Solutions</h3>
            <p className="text-gray-700 mb-2">+48% increase in converted leads in 90 days</p>
            <Link href="/case-studies/tsp" className="text-blue-600 underline">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to grow your fleet business?</h2>
        <Link href="/book" className="bg-white text-black px-6 py-3 rounded-md text-lg inline-block">
          Book a Free Discovery Call
        </Link>
      </section>
    </main>
  );
}
