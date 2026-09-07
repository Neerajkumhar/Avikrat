export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface ${
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
