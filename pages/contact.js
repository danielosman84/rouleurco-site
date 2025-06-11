import Meta from '../components/Meta';

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <Meta
        title="Contact"
        description="Get in touch with Rouleur Co."
        canonical="https://www.rouleurco.com/contact"
        image="/images/sales-leadership.png"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg mb-8 text-center">Send us a message and we’ll get back to you soon.</p>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 max-w-md mx-auto">
        <input type="text" name="name" placeholder="Name" className="w-full border p-2" required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2" required />
        <textarea name="message" placeholder="Message" className="w-full border p-2" rows="5" required></textarea>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
      </form>
    </main>
  );
}
