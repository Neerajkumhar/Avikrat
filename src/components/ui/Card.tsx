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
      className={`rounded border border-line bg-surface ${
        interactive
          ? "transition-colors duration-200 hover:border-ink"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
