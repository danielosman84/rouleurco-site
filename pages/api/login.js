export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.setHeader('Set-Cookie', 'auth=1; Path=/; HttpOnly');
    res.status(200).json({ message: 'Logged in' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
