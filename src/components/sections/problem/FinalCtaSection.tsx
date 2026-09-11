"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="cta-title" className="container-content py-24 md:py-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-sm border border-line bg-surface bg-grid-pattern px-6 py-20 text-center md:px-16 md:py-28"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-3">
          ARCHITECTURAL SHIFT
        </motion.p>
        <motion.h2
          id="cta-title"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Long-context AI needs a{' '}
          <span className="text-soft font-normal">different scaling story.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal">
          AVIKRAT is pioneering compact persistent state as a new architectural baseline for
          long-context inference.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/technology">Explore Technology</Button>
          <Button href={`mailto:${site.email}`} variant="ghost">
            Talk to AVIKRAT
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-wider text-faint">
          <a href={`mailto:${site.email}`} className="hover:text-charcoal transition-colors">{site.email}</a>
          <span aria-hidden="true">·</span>
          <a href={site.phoneHref} className="hover:text-charcoal transition-colors">{site.phone}</a>
        </motion.p>
      </motion.div>
    </section>
  );
}