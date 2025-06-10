export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded px-4 py-2 font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
