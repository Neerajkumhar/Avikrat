import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-cyan text-[#04121a] hover:bg-cyanBright focus-visible:bg-cyanBright",
  ghost:
    "border border-line text-ink hover:border-cyan/60 hover:text-cyan",
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
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`;
  if (external) {
    return <a className={cls} href={href}>{children}</a>;
  }
  return <Link className={cls} href={href} onClick={onClick}>{children}</Link>;
}
