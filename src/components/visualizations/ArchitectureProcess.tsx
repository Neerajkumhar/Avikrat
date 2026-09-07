"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const STEPS = [
  {
    n: "01",
    title: "Global Prefill",
    copy: "Read the full history once.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14h10M14 14l-4-4M14 14l-4 4" stroke="#9ba3b5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="6" width="8" height="16" rx="2" stroke="#9ba3b5" strokeWidth="1.4" />
        <path d="M4 8h6M4 20h6" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Compact State",
    copy: "Persist a small learned memory.",
    accent: true,
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="6" fill="rgba(34,211,197,0.2)" stroke="#22d3c5" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="2" fill="#22d3c5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Local Decode",
    copy: "Use a short recent window.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="6" height="12" rx="1.5" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1" />
        <rect x="11" y="8" width="6" height="12" rx="1.5" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1" />
        <rect x="18" y="8" width="6" height="12" rx="1.5" fill="rgba(34,211,197,0.45)" stroke="#22d3c5" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Next Token",
    copy: "Generate efficiently.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 5l9 9-9 9-9-9z" fill="rgba(34,211,197,0.25)" stroke="#22d3c5" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ArchitectureProcess() {
  return (
    <div className="relative">
      <motion.div
        aria-hidden="true"
        className="absolute top-[52px] right-0 left-0 hidden h-px origin-left lg:block"
        style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(34,211,197,0.8))" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {STEPS.map((s) => (
          <motion.li
            key={s.n}
            variants={fadeUp}
            className={`relative flex flex-col gap-4 rounded-2xl border bg-surface p-6 ${
              s.accent ? "border-cyan/50" : "border-line"
            }`}
          >
            {s.accent ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(34,211,197,0.08), transparent 65%)" }}
              />
            ) : null}
            <span className="tech-label">{s.n}</span>
            <span className="text-cyan">{s.glyph}</span>
            <div>
              <h3 className={`text-lg font-semibold ${s.accent ? "text-cyan" : "text-ink"}`}>{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.copy}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
