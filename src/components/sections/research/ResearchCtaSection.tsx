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
        className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"
      >
        <h2
          id="research-cta-title"
          className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          These capabilities feed the{' '}
          <span className="text-cyan">validation framework.</span>
        </h2>
        <p className="text-base leading-relaxed text-soft">
          The next step is rigorous comparison against matched conventional decoding
          baselines across perplexity, latency, GPU memory and context-length scaling.
        </p>
        <Button href="/benchmarks">Explore the Benchmarks</Button>
      </motion.div>
    </section>
  );
}