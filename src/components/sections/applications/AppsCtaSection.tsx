"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function AppsCtaSection() {
  return (
    <section aria-labelledby="apps-cta-title" className="container-content py-24 md:py-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="rounded-sm border border-line bg-surface bg-grid-pattern p-10 md:p-16 text-center"
      >
        <motion.h2
          id="apps-cta-title"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-charcoal uppercase"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Build systems that keep context{' '}
          <span className="text-soft font-normal">without carrying all of it.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-soft font-normal">
          AVIKRAT is pioneering an architectural shift in long-context inference built around compact
          persistent hidden state and local decoding.
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