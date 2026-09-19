export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="9" className="fill-brand-600" />
      <path
        d="M10 21.5C10 15 14.5 10 21 9.2c.7 6.5-3.4 11.6-9.6 12.6"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 21.5c0-3.3 1.6-5.8 4-7.3" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}
