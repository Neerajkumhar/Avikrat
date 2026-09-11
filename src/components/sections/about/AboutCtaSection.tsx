"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function AboutCtaSection() {
  return (
    <section aria-labelledby="about-cta-title" className="container-content py-28 md:py-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-sm border border-line bg-surface bg-grid-pattern px-6 py-20 text-center md:px-16 md:py-28"
      >
        <motion.p variants={fadeUp} className="eyebrow mb-3">
          COLLABORATION & RESEARCH INITIATIVES
        </motion.p>
        <motion.h2
          id="about-cta-title"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-[clamp(1.75rem,6.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-charcoal uppercase [text-wrap:balance]"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Let's build the next generation
          <br />
          of <span className="text-soft font-normal">AI infrastructure.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-soft font-normal">
          Interested in benchmarking, piloting, collaborating or evaluating AVIKRAT's architecture?
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