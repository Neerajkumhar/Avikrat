"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export function ResearchCtaSection() {
  return (
    <section aria-labelledby="research-cta-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center rounded-sm border border-line bg-surface p-10 md:p-14"
      >
        <p className="eyebrow">RESEARCH FRAMEWORK INTEGRATION</p>
        <h2
          id="research-cta-title"
          className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          These capabilities feed the{' '}
          <span className="text-soft font-normal">validation framework.</span>
        </h2>
        <p className="text-base leading-relaxed text-soft font-normal">
          The next phase executes rigorous empirical comparisons against matched conventional decoding
          baselines across perplexity, latency, GPU memory footprint and sequence scaling.
        </p>
        <Button href="/benchmarks">Explore Benchmarks</Button>
      </motion.div>
    </section>
  );
}