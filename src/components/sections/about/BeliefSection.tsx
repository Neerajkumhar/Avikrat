"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const BELIEFS = [
  "Context should be useful, not endlessly expensive.",
  "Memory should scale differently.",
  "Long-running AI needs better state management.",
  "Efficiency and useful context must coexist.",
];

export function BeliefSection() {
  return (
    <section aria-labelledby="belief-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <p id="belief-title" className="eyebrow">
        What We Believe
      </p>
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-10"
      >
        {BELIEFS.map((b) => (
          <motion.li
            key={b}
            variants={fadeUp}
            className="border-t border-line py-8 first:border-t-0 md:py-10"
          >
            <p className="text-[clamp(1.65rem,3.4vw,2.6rem)] font-semibold leading-[1.15] tracking-tight text-ink">
              {b}
            </p>
          </motion.li>
        ))}
      </motion.ul>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-faint">
        These are design principles guiding the architecture — not claims of
        measured results.
      </p>
    </section>
  );
}