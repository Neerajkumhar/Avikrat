"use client";

import { motion } from "framer-motion";
import { DiagramFrame } from "./diagram-primitives";

export function ScalingGraph() {
  return (
    <div>
      <DiagramFrame
        label="Comparative scaling of inference cost"
        description="A conceptual comparison. Traditional inference cost rises steeply as context grows while hidden-state inference stays nearly flat. This is a positioning visualization, not measured benchmark data."
        viewBox="0 0 560 400"
      >
        {/* Axes */}
        <line x1="60" y1="40" x2="60" y2="320" stroke="#1c2233" strokeWidth="1" />
        <line x1="60" y1="320" x2="520" y2="320" stroke="#1c2233" strokeWidth="1" />
        {[320, 240, 160, 80].map((y) => (
          <line key={y} x1="60" y1={y} x2="520" y2={y} stroke="rgba(28,34,51,0.6)" strokeWidth="1" strokeDasharray="2 6" />
        ))}
        <text x="16" y="60" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.12em" fill="#5c6474" transform="rotate(-90 16 60)">
          COMPUTE / MEMORY
        </text>

        {/* X labels */}
        {["1K", "8K", "32K", "128K"].map((t, i) => (
          <text key={t} x={80 + i * 130} y={342} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="10" style={{ fontVariantNumeric: "tabular-nums" }} fill="#5c6474">
            {t}
          </text>
        ))}
        <text x="280" y="368" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.12em" fill="#5c6474">
          CONTEXT LENGTH
        </text>

        {/* Traditional curve */}
        <motion.path
          d="M 70 300 C 150 285, 210 245, 260 200 C 320 145, 400 90, 505 58"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <path
          d="M 70 300 C 150 285, 210 245, 260 200 C 320 145, 400 90, 505 58 L 505 320 L 70 320 Z"
          fill="rgba(59,130,246,0.06)"
        />

        {/* Hidden-state line */}
        <motion.path
          d="M 70 305 L 505 296"
          stroke="#22d3c5"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Target annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <rect x="150" y="90" width="252" height="44" rx="8" stroke="rgba(34,211,197,0.4)" strokeWidth="1" fill="rgba(34,211,197,0.06)" />
          <text x="160" y="110" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.05em" fill="#9ba3b5">
            Hidden-state inference: near-constant cost
          </text>
          <text x="160" y="124" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.05em" fill="#5c6474">
            target: up to 90% lower long-context inference cost
          </text>
        </motion.g>

        {/* Legend */}
        <g transform="translate(60, 384)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#3b82f6" strokeWidth="2" />
          <text x="24" y="3" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.1em" fill="#9ba3b5">TRADITIONAL</text>
          <line x1="110" y1="0" x2="128" y2="0" stroke="#22d3c5" strokeWidth="2.4" />
          <text x="134" y="3" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.1em" fill="#9ba3b5">HIDDEN-STATE</text>
        </g>
      </DiagramFrame>
      <p className="mt-4 text-center text-xs text-faint">
        Conceptual architecture / positioning visualization — not measured benchmark data.
      </p>
    </div>
  );
}
