"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { TransformDiagram } from "@/components/ui/TransformDiagram";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex flex-col justify-center overflow-hidden bg-base pt-12 pb-10 md:pt-16 md:pb-14"
    >
      {/* Background Architectural Grid (Subtle, Structural) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="container-content relative z-10 w-full">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-10 lg:gap-14">

          {/* Left Column: Editorial Statement */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-[580px]">
            <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
              AI INFRASTRUCTURE · CONSTANT-MEMORY ARCHITECTURE
            </motion.p>

            <motion.h1
              id="hero-title"
              variants={fadeUp}
              className="mt-4 text-[clamp(42px,4.0vw,64px)] font-bold leading-[0.95] tracking-tight text-charcoal uppercase md:mt-5"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              Long Context.
              <br />
              Without the
              <br />
              <span className="text-soft font-normal">Growing Cost.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[560px] text-[15px] md:text-[17px] leading-[1.6] text-soft font-normal md:mt-5"
              style={{ fontFamily: "var(--font-archivo), sans-serif" }}
            >
              AVIKRAT is building a new paradigm for long-context LLM inference using compact
              persistent hidden states and local decoding — transforming linear context complexity into constant memory.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3.5 md:mt-7">
              <Button href="/technology">Explore Technology</Button>
              <Button href="/contact" variant="ghost">Work With Us</Button>
            </motion.div>

            {/* Metrics Row: Tighter Spacing, Research Instrumentation Style */}
            <motion.div variants={fadeUp} className="mt-5 grid grid-cols-3 gap-4 border-t border-line pt-4 md:mt-6">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-faint">KV-CACHE DECAY</span>
                <span className="font-mono text-xs md:text-sm font-semibold text-charcoal">O(1) MEMORY</span>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-faint">CONTEXT LIMIT</span>
                <span className="font-mono text-xs md:text-sm font-semibold text-charcoal">UNBOUNDED</span>
              </div>
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-widest text-faint">INFERENCE COST</span>
                <span className="font-mono text-xs md:text-sm font-semibold text-charcoal">FLAT BASELINE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Technical Figure Instrument Panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full self-center"
          >
            <TransformDiagram />
          </motion.div>

        </div>
      </div>
    </section>
  );
}