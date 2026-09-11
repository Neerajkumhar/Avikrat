"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const MODULES = [
  {
    title: "Enterprise Copilots",
    copy: "Persistent conversations and large document sessions.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 5h20v13H10l-6 5V5z" stroke="#22d3c5" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 10h10M9 13h6" stroke="rgba(34,211,197,0.6)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Edge AI",
    copy: "Smaller persistent memory can be friendlier to constrained devices.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="9" width="16" height="10" rx="2" stroke="#22d3c5" strokeWidth="1.5" />
        <rect x="11" y="12" width="6" height="4" rx="1" fill="rgba(34,211,197,0.5)" />
        <path d="M14 2v6M14 20v6M2 14h5M21 14h5" stroke="rgba(34,211,197,0.5)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agent Infrastructure",
    copy: "Long-running workflows can remain active without exploding state cost.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="#22d3c5" strokeWidth="1.5" />
        <circle cx="19" cy="8" r="3" stroke="#22d3c5" strokeWidth="1.5" />
        <circle cx="14" cy="21" r="3.2" fill="rgba(34,211,197,0.18)" stroke="#22d3c5" strokeWidth="1.5" />
        <path d="M11 10.4 12.6 18M17 10.4 15.4 18" stroke="rgba(34,211,197,0.55)" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Real-Time Systems",
    copy: "Bounded memory can make continuous context more practical.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M3 14h4l3-8 4 14 3-9 2.5 3H25" stroke="#22d3c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyItMattersSection() {
  return (
    <section aria-labelledby="modules-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="modules-title"
        eyebrow="Applications"
        title="The opportunity is bigger than one model."
        copy="A bounded, persistent context opens up workloads where long-running or continuous state currently gets too expensive."
      />
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {MODULES.map((m) => (
          <motion.li
            key={m.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-cyan/50"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(34,211,197,0.08), transparent 60%)" }}
            />
            <span className="text-cyan">{m.glyph}</span>
            <h3 className="mt-5 text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
              {m.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-soft">{m.copy}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}