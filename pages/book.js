import Meta from '../components/Meta';

export default function Book() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-center">
      <Meta
        title="Book a Call"
        description="Schedule a discovery call with Rouleur Co."
        canonical="https://www.rouleurco.com/book"
        image="/images/sales-leadership.png"
      />
      <h1 className="text-4xl font-bold mb-4">Book a Discovery Call</h1>
      <p className="text-lg mb-8">We’d love to learn more about your business. Use the form below to book a time that works for you.</p>
      <a href="https://calendly.com" className="bg-black text-white px-6 py-3 rounded inline-block">Book via Calendly</a>
    </main>
  );
}
