import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-charcoal text-base hover:bg-black active:bg-black active:translate-y-px border border-charcoal uppercase tracking-[0.14em] text-[0.8125rem]",
  ghost:
    "border border-line bg-transparent text-charcoal hover:border-charcoal hover:bg-surface2 active:bg-surface2 active:translate-y-px uppercase tracking-[0.14em] text-[0.8125rem]",
  outline:
    "border border-line bg-surface text-ink hover:border-charcoal hover:text-charcoal active:text-charcoal active:translate-y-px uppercase tracking-[0.14em] text-[0.8125rem]",
} as const;

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: {
  href: string;
  onClick?: () => void;
  variant?: keyof typeof styles;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex h-11 md:h-[44px] items-center justify-center gap-2.5 rounded-sm px-6 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-charcoal ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-archivo), sans-serif" }}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href} onClick={onClick} style={{ fontFamily: "var(--font-archivo), sans-serif" }}>
      {children}
    </Link>
  );
}
