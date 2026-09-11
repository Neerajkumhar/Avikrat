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
      className={`rounded-sm border border-line bg-surface p-6 md:p-8 ${
        interactive
          ? "transition-all duration-200 hover:border-charcoal hover:bg-surface2"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
