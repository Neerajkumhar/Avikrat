"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="cta-title" className="container-content py-28 md:py-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-sm border border-line bg-surface bg-grid-pattern px-6 py-20 text-center md:px-16 md:py-28"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-4">
          07 · ADVANCED RESEARCH & COLLABORATION
        </motion.p>

        <motion.h2
          id="cta-title"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.06] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Build the next generation
          <br />
          of <span className="text-soft font-medium">long-context AI.</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-soft font-normal">
          AVIKRAT is developing computational architecture for AI systems that carry unlimited context
          without incurring the linear computational burden.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${site.email}`} external>
            Talk to AVIKRAT
          </Button>
          <Button href="/technology" variant="ghost">
            Explore Technology
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
