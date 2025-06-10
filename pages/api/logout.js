export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  res.setHeader('Set-Cookie', 'auth=; Path=/; Max-Age=0; HttpOnly');
  res.status(200).json({ message: 'Logged out' });
}
