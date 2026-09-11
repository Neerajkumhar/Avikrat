"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { HOME_IMAGES } from "@/lib/images";

export function BeforeAfterSection() {
  return (
    <section aria-labelledby="beforeafter-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="eyebrow">
            The Architectural Shift
          </motion.p>
          <motion.h2
            id="beforeafter-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            From growing history to{' '}
            <span className="text-cyan">persistent state.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-5 text-base leading-relaxed text-soft"
          >
            The same system environments share the same architectural question: can the
            history be carried as compact state instead of growing material?
          </motion.p>
        </div>
        <AvikratImage
          def={HOME_IMAGES.architecture}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <p className="mx-auto mt-4 max-w-3xl text-xs text-faint">
        Conceptual visualization — not measured data.
      </p>
    </section>
  );
}