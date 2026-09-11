"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { PROBLEM_IMAGES } from "@/lib/images";

export function ProblemHero() {
  return (
    <section aria-labelledby="problem-hero-title" className="relative pt-24 md:pt-32">
      <div className="container-content grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>The Long-Context Problem</Eyebrow>
          </motion.div>
          <motion.h1
            id="problem-hero-title"
            variants={fadeUp}
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            Context is getting longer.
            <br />
            <span className="text-electric">The cost comes with it.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-soft"
          >
            As context grows, conventional decoding continues carrying an expanding state
            through inference. KV-cache requirements and repeated attention cost increase,
            putting pressure on memory, latency, serving cost and GPUs.
          </motion.p>
        </motion.div>
        <div className="lg:sticky lg:top-28">
          <AvikratImage
            def={PROBLEM_IMAGES.hero}
            mode="aspect"
            aspectRatio="16 / 9"
            sizes="(max-width: 768px) 100vw, 50vw"
            parallax={16}
          />
        </div>
      </div>
    </section>
  );
}