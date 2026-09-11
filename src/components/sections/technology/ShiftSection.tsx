"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

export function ShiftSection() {
  return (
    <section aria-labelledby="shift-title" className="container-content scroll-mt-20 py-24 md:py-32">
      <SectionHeader
        id="shift-title"
        eyebrow="The Shift"
        title={
          <>
            What if long history
            <br />
            became <span className="text-cyan">state?</span>
          </>
        }
        copy={
          "AVIKRAT's approach is based on a simple architectural shift: process the long history globally, preserve the useful information in a compact persistent state, and use a short local token window for ongoing decoding."
        }
      />
      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <AvikratImage
            def={TECH_IMAGES.prefill}
            mode="aspect"
            aspectRatio="4 / 3"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="order-1 lg:order-2 space-y-5 text-base leading-relaxed text-soft"
        >
          <motion.p variants={fadeUp}>
            Instead of re-reading the full context at every step, the long history is read
            once by a global prefill and collapsed into a dense, fixed-size representation.
            The full original tokens are no longer carried forward — the state is.
          </motion.p>
          <motion.p variants={fadeUp}>
            Ongoing decoding then operates on that persistent state plus a short recent
            window, so the active working set stays bounded as the conversation grows.
          </motion.p>
          <motion.p variants={fadeUp} className="text-sm text-faint">
            This is a conceptual image of the intended architecture, not a measured
            model.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}