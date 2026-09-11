export function Logo({
  className = "",
  showText = true,
  size = "md",
}: {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-7",
    md: "h-9 md:h-10",
    lg: "h-11 md:h-12",
  };

  const textSizes = {
    sm: "text-xs tracking-[0.24em]",
    md: "text-sm md:text-[0.9375rem] tracking-[0.26em]",
    lg: "text-base md:text-lg tracking-[0.28em]",
  };

  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/images/avikrat/logo-avikrat.png"
        alt="AVIKRAT"
        width={80}
        height={80}
        className={`${sizes[size]} w-auto object-contain mix-blend-multiply`}
        data-logo-immutable="true"
      />
      {showText && (
        <span
          className={`font-bold uppercase text-charcoal ${textSizes[size]}`}
          style={{ fontFamily: "var(--font-archivo), sans-serif" }}
        >
          AVIKRAT
        </span>
      )}
    </span>
  );
}
