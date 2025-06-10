import fs from 'fs';
import path from 'path';

const blogFile = path.join(process.cwd(), 'data', 'blog.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = JSON.parse(fs.readFileSync(blogFile, 'utf8'));
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ message: 'Failed to load posts' });
    }
  } else if (req.method === 'POST') {
    const cookies = {};
    if (req.headers.cookie) {
      req.headers.cookie.split(';').forEach(c => {
        const [key, value] = c.trim().split('=');
        cookies[key] = value;
      });
    }
    if (cookies.auth !== '1') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      fs.writeFileSync(blogFile, JSON.stringify(req.body, null, 2));
      res.status(200).json({ message: 'Posts updated' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to save posts' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
