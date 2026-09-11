export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/avikrat/logo-avikrat.png"
        alt="AVIKRAT"
        width={64}
        height={64}
        className="h-10 w-auto"
        data-logo-immutable="true"
      />
      <span className="font-semibold tracking-[0.22em] text-ink" style={{ fontFamily: "var(--font-archivo), sans-serif" }}>
        AVIKRAT
      </span>
    </span>
  );
}
