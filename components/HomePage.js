import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import Script from "next/script";

export default function HomePage({ content }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      <header className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0D1B2A]">{content.hero.title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">{content.hero.subtitle}</p>
        <Button className="mt-6 text-lg px-8 py-4 bg-[#00A6A6] hover:bg-[#008C8C] text-white">{content.hero.ctaText}</Button>
      </header>

      <section id="services" className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-20">
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
          <Script src="https://js-eu1.hsforms.net/forms/embed/146309955.js" defer />
          <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id="c80e29c2-72ca-4e37-a45d-d8ecc1685efe"
            data-portal-id="146309955"
          ></div>
        </div>
      </section>
    </div>
  );
}
