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
        className="text-center"
      >
        <motion.h2
          id="apps-cta-title"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Build systems that can keep context{' '}
          <span className="text-cyan">without carrying all of it.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-soft">
          AVIKRAT is exploring a new approach to long-context inference built around compact
          persistent state and local decoding.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/technology">Explore the Technology</Button>
          <Button href={`mailto:${site.email}`} variant="ghost">
            Talk to AVIKRAT
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-faint">
          <a href={`mailto:${site.email}`} className="hover:text-cyan">{site.email}</a>
          <span aria-hidden="true">·</span>
          <a href={site.phoneHref} className="hover:text-cyan">{site.phone}</a>
        </motion.p>
      </motion.div>
    </section>
  );
}