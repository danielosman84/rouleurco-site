export function Card({ children }) {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg">
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
