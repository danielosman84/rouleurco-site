import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const [content, setContent] = useState({ hero: { title: '', subtitle: '', ctaText: '' } });
  const router = useRouter();

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent(prev => ({
      ...prev,
      hero: { ...prev.hero, [name]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content),
    });
    alert('Content updated');
  };

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <label className="flex flex-col">
          <span>Hero Title</span>
          <input
            type="text"
            name="title"
            value={content.hero.title}
            onChange={handleChange}
            className="border p-2"
          />
        </label>
        <label className="flex flex-col">
          <span>Hero Subtitle</span>
          <textarea
            name="subtitle"
            value={content.hero.subtitle}
            onChange={handleChange}
            className="border p-2"
          />
        </label>
        <label className="flex flex-col">
          <span>CTA Text</span>
          <input
            type="text"
            name="ctaText"
            value={content.hero.ctaText}
            onChange={handleChange}
            className="border p-2"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Log Out
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const cookies = {};
  if (req.headers.cookie) {
    req.headers.cookie.split(';').forEach(c => {
      const [key, value] = c.trim().split('=');
      cookies[key] = value;
    });
  }
  if (cookies.auth !== '1') {
    return { redirect: { destination: '/login', permanent: false } };
  }
  return { props: {} };
}
