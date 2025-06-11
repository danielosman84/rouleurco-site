export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0D1B2A] text-white text-center py-4">
      © {year} Rouleur Co. All rights reserved.
    </footer>
  );
}
