export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" stroke="#22d3c5" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="8.5" stroke="#22d3c5" strokeWidth="1" opacity="0.4" />
        <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" stroke="#22d3c5" strokeWidth="1" opacity="0.35" />
      </svg>
      <span className="text-base font-semibold tracking-[0.18em] text-ink">
        AVIKRAT
      </span>
    </span>
  );
}
