export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 
                 bg-emerald-700 text-white p-4 z-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
    >
      Skip to main content
    </a>
  )
}