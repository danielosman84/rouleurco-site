// pages/whatwedo.js
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Meta from "../components/Meta";

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Meta
        title="Services"
        description="Discover our services for the vehicle rental industry."
        canonical="https://www.rouleurco.com/services"
        image="/images/sales-leadership.png"
      />

      {/* Header */}
      <header className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0D1B2A]">Services</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          We help vehicle rental businesses scale faster with outsourced sales, proven systems, and dedicated support.
        </p>
      </header>

      {/* Services */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 mb-20">
        <Card>
          <CardContent className="p-6 text-center">
            <Image src="/images/sales-leadership.png" alt="Sales Leadership" width={80} height={80} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Sales Strategy & Execution</h2>
            <p>We become your sales engine — identifying opportunities, managing pipelines, and closing deals.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Image src="/images/lead-conversion.png" alt="Lead Conversion" width={80} height={80} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Inbound Lead Management</h2>
            <p>Never miss a lead. We handle inbound enquiries, qualify prospects, and convert them into hires.</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="bg-[#E9F1F7] py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#0D1B2A]">Ready to see the impact?</h3>
          <p className="mb-6 text-gray-700">Book a discovery call and let’s talk about how we can help grow your business.</p>
          <Button className="text-lg px-8 py-4 bg-[#00A6A6] hover:bg-[#008C8C] text-white">Book a Call</Button>
        </div>
      </section>
    </div>
  );
}
