import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogAdmin() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', slug: '', content: '' });
  const router = useRouter();

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleChangePost = (index, field, value) => {
    const updated = [...posts];
    updated[index] = { ...updated[index], [field]: value };
    setPosts(updated);
  };

  const handleNewChange = (field, value) => {
    setNewPost(prev => ({ ...prev, [field]: value }));
  };

  const addPost = () => {
    if (!newPost.slug) return;
    setPosts([...posts, newPost]);
    setNewPost({ title: '', slug: '', content: '' });
  };

  const removePost = index => {
    const updated = [...posts];
    updated.splice(index, 1);
    setPosts(updated);
  };

  const savePosts = async () => {
    await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(posts),
    });
    alert('Posts saved');
  };

  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Admin</h1>
      <div className="grid gap-4 mb-6">
        {posts.map((post, i) => (
          <div key={i} className="border p-3 rounded">
            <input
              type="text"
              value={post.title}
              onChange={e => handleChangePost(i, 'title', e.target.value)}
              placeholder="Title"
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={post.slug}
              onChange={e => handleChangePost(i, 'slug', e.target.value)}
              placeholder="Slug"
              className="border p-2 w-full mb-2"
            />
            <textarea
              value={post.content}
              onChange={e => handleChangePost(i, 'content', e.target.value)}
              placeholder="Content"
              className="border p-2 w-full mb-2"
              rows="4"
            />
            <button
              onClick={() => removePost(i)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2">Add New Post</h2>
      <div className="border p-3 rounded mb-4">
        <input
          type="text"
          value={newPost.title}
          onChange={e => handleNewChange('title', e.target.value)}
          placeholder="Title"
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          value={newPost.slug}
          onChange={e => handleNewChange('slug', e.target.value)}
          placeholder="Slug"
          className="border p-2 w-full mb-2"
        />
        <textarea
          value={newPost.content}
          onChange={e => handleNewChange('content', e.target.value)}
          placeholder="Content"
          className="border p-2 w-full mb-2"
          rows="4"
        />
        <button
          onClick={addPost}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Add Post
        </button>
      </div>
      <button onClick={savePosts} className="bg-blue-500 text-white p-2 rounded mr-2">Save</button>
      <button onClick={logout} className="bg-gray-500 text-white p-2 rounded">Log Out</button>
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
