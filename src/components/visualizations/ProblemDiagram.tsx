"use client";

import { motion } from "framer-motion";
import { DiagramFrame } from "./diagram-primitives";

const CHAIN = [
  "CONTEXT LENGTH",
  "KV-CACHE GROWTH",
  "MEMORY TRAFFIC",
  "HIGHER COST · SLOWER DECODE",
];

const BARS = [
  { label: "1K", h: 26 },
  { label: "4K", h: 52 },
  { label: "16K", h: 104 },
  { label: "64K", h: 200 },
  { label: "256K", h: 320 },
];

const BAR_X = [60, 160, 260, 360, 460];
const BASELINE = 400;

export function ProblemDiagram() {
  return (
    <DiagramFrame
      label="Growth of standard decoding cost"
      description="As context length increases, the KV cache, memory traffic, and attention cost grow continuously, increasing cost and slowing decoding. Illustrative relationship, not measured data."
      viewBox="0 0 560 480"
    >
      {CHAIN.map((label, i) => (
        <g key={label}>
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <rect x={24 + i * 130} y={48} width={106} height={46} rx="10" stroke="#1c2233" strokeWidth="1" />
            <text
              x={24 + i * 130 + 53}
              y={70}
              textAnchor="middle"
              fontFamily="var(--font-inter), sans-serif"
              fontSize="8"
              letterSpacing="0.12em"
              fill="#9ba3b5"
            >
              {label.split(" · ")[0]}
            </text>
            {label.split(" · ")[1] ? (
              <text
                x={24 + i * 130 + 53}
                y={82}
                textAnchor="middle"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="8"
                letterSpacing="0.12em"
                fill="#9ba3b5"
              >
                {label.split(" · ")[1]}
              </text>
            ) : null}
          </motion.g>
          {i < CHAIN.length - 1 ? (
            <path d={`M ${24 + i * 130 + 112} 71 l 10 0`} stroke="#5c6474" strokeWidth="1.4" markerEnd="none" />
          ) : null}
        </g>
      ))}

      <text x="24" y="140" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.14em" fill="#5c6474">
        KV-CACHE SIZE / MEMORY TRAFFIC
      </text>
      <line x1="24" y1={BASELINE} x2="536" y2={BASELINE} stroke="#1c2233" strokeWidth="1" />

      {BARS.map((b, i) => (
        <g key={b.label}>
          <motion.rect
            x={BAR_X[i] - 26}
            y={BASELINE}
            width="52"
            height={b.h}
            rx="6"
            fill="rgba(59,130,246,0.22)"
            stroke="rgba(59,130,246,0.55)"
            strokeWidth="1"
            initial={{ y: BASELINE, height: 0 }}
            whileInView={{ y: BASELINE - b.h, height: b.h }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <text
            x={BAR_X[i]}
            y={BASELINE - b.h - 10}
            textAnchor="middle"
            fontFamily="var(--font-inter), sans-serif"
            fontSize="10"
            style={{ fontVariantNumeric: "tabular-nums" }}
            fill="#e8eaf0"
          >
            {b.label}
          </text>
          <text x={BAR_X[i]} y={BASELINE + 22} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" fill="#5c6474">
            CTX
          </text>
        </g>
      ))}

      <motion.path
        d="M 34 388 C 140 360, 200 330, 260 288 C 330 236, 400 160, 520 96"
        stroke="rgba(59,130,246,0.6)"
        strokeWidth="1.6"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
      />
    </DiagramFrame>
  );
}
