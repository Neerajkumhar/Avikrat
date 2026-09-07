"use client";

import { motion } from "framer-motion";
import {
  DiagramFrame,
  FlowLine,
  TokenDot,
  StageBox,
  cx,
} from "./diagram-primitives";

const HISTORY = [
  { x: 100, y: 86, o: 0.4 },
  { x: 165, y: 86, o: 0.55 },
  { x: 230, y: 86, o: 0.35 },
  { x: 295, y: 86, o: 0.6 },
  { x: 360, y: 86, o: 0.45 },
  { x: 425, y: 86, o: 0.5 },
  { x: 490, y: 86, o: 0.4 },
  { x: 100, y: 112, o: 0.5 },
  { x: 165, y: 112, o: 0.35 },
  { x: 230, y: 112, o: 0.6 },
  { x: 295, y: 112, o: 0.4 },
  { x: 360, y: 112, o: 0.55 },
  { x: 425, y: 112, o: 0.35 },
  { x: 490, y: 112, o: 0.5 },
];

const DECODE = [148, 195, 242, 289, 336, 383, 430];

export function HeroDiagram() {
  return (
    <DiagramFrame
      label="AVIKRAT decoding pipeline"
      description="Long history is read once in a global prefill, compressed into a compact hidden state of constant size, then used to decode tokens from a short local window: the next token."
    >
      {/* Long History */}
      <rect x="60" y="60" width="440" height="88" rx="16" stroke="#1c2233" strokeWidth="1" />
      <text x="60" y="84" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.14em" fill="#5c6474">LONG HISTORY</text>
      {HISTORY.map((t, i) => (
        <TokenDot key={i} x={t.x} y={t.y} color={`rgba(59,130,246,${t.o})`} pulse={2} r={3} />
      ))}

      {/* Streams into prefill */}
      <FlowLine d="M 120 148 Q 120 186 208 214" />
      <FlowLine d="M 280 148 L 280 214" speed={1.1} />
      <FlowLine d="M 440 148 Q 440 186 352 214" />

      {/* Global Prefill */}
      <StageBox x={190} y={214} w={180} h={72} label="GLOBAL PREFILL" sub="read once" active />

      {/* Stream to compact state */}
      <FlowLine d="M 280 286 L 280 330" color="rgba(34,211,197,0.7)" speed={1} />

      {/* Compact hidden state — cyan core */}
      <motion.circle
        cx={cx}
        cy={400}
        r={58}
        fill="rgba(34,211,197,0.08)"
        stroke="rgba(34,211,197,0.65)"
        strokeWidth="1.4"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx={cx}
        cy={400}
        r={26}
        fill="rgba(34,211,197,0.85)"
        animate={{ r: [26, 34, 26], opacity: [0.85, 0.4, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {[70, 92, 114].map((r, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={400}
          r={r}
          stroke="rgba(34,211,197,0.18)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
        />
      ))}
      <text x={cx} y={478} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="11" letterSpacing="0.14em" fill="#9ba3b5">COMPACT HIDDEN STATE</text>
      <text x={cx} y={496} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.1em" fill="#5c6474">constant size</text>

      {/* Stream to local decode */}
      <FlowLine d="M 280 458 L 280 512" color="rgba(34,211,197,0.7)" speed={1} />

      {/* Local decode window */}
      <rect x="122" y="512" width="316" height="64" rx="14" stroke="#1c2233" strokeWidth="1" />
      <text x="122" y="532" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.14em" fill="#5c6474">LOCAL DECODE</text>
      {DECODE.map((x, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.12 }}>
          <rect x={x} y={546} width="18" height="18" rx="5" fill={i === 6 ? "rgba(34,211,197,0.7)" : "rgba(59,130,246,0.28)"} stroke={i === 6 ? "rgba(34,211,197,0.8)" : "#1c2233"} strokeWidth="1" />
          <text x={x + 9} y={559} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" fill={i === 6 ? "#04121a" : "#5c6474"}>{i === 6 ? "▮" : ""}</text>
        </motion.g>
      ))}

      {/* Next token */}
      <motion.path
        d="M 280 620 l 14 12 l -14 12 l -14 -12 z"
        fill="rgba(34,211,197,0.9)"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "280px 632px", transformBox: "view-box" }}
      />
      <text x={cx} y={660} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="11" letterSpacing="0.14em" fill="#9ba3b5">NEXT TOKEN</text>
    </DiagramFrame>
  );
}
