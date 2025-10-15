export function Badge({ children, className = "" }) {
  return (
    <span className={`bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm ${className}`}>
      {children}
    </span>
  )
}
