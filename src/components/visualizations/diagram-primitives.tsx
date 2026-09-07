"use client";

import { motion } from "framer-motion";

export const VIEW_W = 560;
export const cx = VIEW_W / 2;

export function DiagramFrame({
  label,
  description,
  children,
  viewBox = "0 0 560 700",
  className = "",
}: {
  label: string;
  description: string;
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={viewBox}
      className={`h-auto w-full ${className}`}
      fill="none"
      aria-describedby={undefined}
    >
      <desc>{description}</desc>
      {children}
    </svg>
  );
}

export function FlowLine({
  d,
  color = "rgba(34,211,197,0.4)",
  speed = 1.4,
  id,
}: {
  d: string;
  color?: string;
  speed?: number;
  id?: string;
}) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="4 12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ strokeDashoffset: [0, -32] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function TokenDot({
  x,
  y,
  r = 3.5,
  color = "rgba(59,130,246,0.55)",
  pulse = 0,
}: {
  x: number;
  y: number;
  r?: number;
  color?: string;
  pulse?: number;
}) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      animate={
        pulse ? { opacity: [0.25, 0.8, 0.25], y: [y - pulse, y + pulse, y - pulse] } : undefined
      }
      transition={
        pulse
          ? { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: (x + y) % 4 * 0.2 }
          : undefined
      }
    />
  );
}

export function StageBox({
  x,
  y,
  w,
  h,
  label,
  sub,
  active = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  active?: boolean;
}) {
  return (
    <>
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        stroke={active ? "rgba(34,211,197,0.55)" : "#1c2233"}
        strokeWidth="1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <text
        x={cx}
        y={y + h / 2 - (sub ? 4 : 0)}
        textAnchor="middle"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="11"
        letterSpacing="0.14em"
        fill="#9ba3b5"
      >
        {label}
      </text>
      {sub ? (
        <text
          x={cx}
          y={y + h / 2 + 13}
          textAnchor="middle"
          fontFamily="var(--font-inter), sans-serif"
          fontSize="9"
          letterSpacing="0.1em"
          fill="#5c6474"
        >
          {sub}
        </text>
      ) : null}
    </>
  );
}
