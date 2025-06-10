import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

export default function HomePage({ content }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation Header */}
      <nav className="bg-[#0D1B2A] text-white py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">Rouleur Co.</div>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="/whatwedo" className="hover:underline">What We Do</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="/login" className="hover:underline">Admin</a></li>
        </ul>
        <Button className="bg-[#00A6A6] hover:bg-[#008C8C] text-white px-4 py-2 text-sm">Book a Call</Button>
      </nav>

      <header className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0D1B2A]">{content.hero.title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">{content.hero.subtitle}</p>
        <Button className="mt-6 text-lg px-8 py-4 bg-[#00A6A6] hover:bg-[#008C8C] text-white">{content.hero.ctaText}</Button>
      </header>

      <section id="services" className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mb-20">
        <Card>
          <CardContent className="p-6 text-center">
            <Image src="/images/sales-leadership.png" alt="Expert Sales Leadership" width={80} height={80} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Expert Sales Leadership</h2>
            <p>We take a consultative approach, understanding your business and aligning sales efforts to your goals.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Image src="/images/lead-conversion.png" alt="Lead Conversion" width={80} height={80} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Lead Conversion</h2>
            <p>Convert more enquiries into hires. We implement proven workflows to close deals faster and more efficiently.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Image src="/images/crm-automation.png" alt="CRM & Automation" width={80} height={80} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">CRM & Automation</h2>
            <p>Streamline your sales pipeline with HubSpot integrations, automations, and reporting tailored to your business.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-[#E9F1F7] py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#0D1B2A]">Let’s grow your fleet, together.</h3>
          <p className="mb-6 text-gray-700">We're already working with forward-thinking vehicle hire companies. Ready to join them?</p>
          <Button className="text-lg px-8 py-4 bg-[#00A6A6] hover:bg-[#008C8C] text-white">Get Started</Button>
        </div>
      </section>

      <section id="contact" className="bg-white py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-6 text-[#0D1B2A]">Contact Us</h3>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              className="border border-gray-300 p-3 rounded"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="border border-gray-300 p-3 rounded"
            ></textarea>
            <Button type="submit" className="w-full text-lg py-3 bg-[#0D1B2A] hover:bg-[#1E2A3A] text-white">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
