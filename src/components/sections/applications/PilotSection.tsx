"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export function PilotSection() {
  return (
    <section aria-labelledby="pilot-title" className="container-content py-24 md:py-32 scroll-mt-20">
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
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,211,197,0.09), transparent 55%)" }}
        />
        <motion.p variants={fadeUp} className="eyebrow">
          Pilot Opportunity
        </motion.p>
        <motion.h2
          id="pilot-title"
          variants={fadeUp}
          className="mx-auto mt-4 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Explore where{' '}
          <span className="text-cyan">bounded context</span> could matter.
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-soft">
          We are interested in pilot opportunities involving long-context assistants,
          enterprise workflows and edge inference.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Discuss a Pilot</Button>
          <Button href="/benchmarks" variant="ghost">
            Collaborate on Benchmarks
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}