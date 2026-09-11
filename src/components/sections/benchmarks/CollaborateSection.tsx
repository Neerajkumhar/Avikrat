"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CollaborateSection() {
  return (
    <section aria-labelledby="bench-collab-title" className="container-content py-24 md:py-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center md:px-16 md:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.09), transparent 55%)" }}
        />
        <motion.p variants={fadeUp} className="eyebrow">
          12 / Collaborators
        </motion.p>
        <motion.h2
          id="bench-collab-title"
          variants={fadeUp}
          className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Help us measure{' '}
          <span className="text-cyan">the next step.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-soft">
          AVIKRAT is looking for benchmark collaborators to validate perplexity, latency and
          GPU memory at larger context lengths.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Collaborate on Benchmarks</Button>
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