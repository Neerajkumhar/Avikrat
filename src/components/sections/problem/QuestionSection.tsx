"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export function QuestionSection() {
  return (
    <section aria-labelledby="question-title" className="relative overflow-hidden py-32 md:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(34,211,197,0.08), transparent 60%)" }}
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          The Question
        </motion.p>
        <motion.h2
          id="question-title"
          variants={fadeUp}
          className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          What if the full history didn&apos;t have to travel{' '}
          <span className="text-soft">with every token?</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan/60" />
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-cyan" />
          <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan/60" />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-12 text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium leading-snug tracking-tight text-ink"
        >
          What if useful history could become a{' '}
          <span className="text-cyan">compact state?</span>
        </motion.h3>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-12"
        >
          <Button href="/technology">
            See the AVIKRAT approach <span aria-hidden="true">→</span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}