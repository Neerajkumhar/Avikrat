"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const AUDIENCES = [
  {
    title: "AI Infrastructure Teams",
    copy: "Serving long-context models at scale.",
    link: "/technology",
    label: "Explore the architecture",
  },
  {
    title: "Enterprise AI Teams",
    copy: "Building persistent copilots and document workflows.",
    link: "/technology",
    label: "Explore the architecture",
  },
  {
    title: "Agent Builders",
    copy: "Maintaining long-running context across multi-step workflows.",
    link: "/technology",
    label: "Explore the architecture",
  },
  {
    title: "Edge / Systems Teams",
    copy: "Working within constrained memory and compute environments.",
    link: "/contact",
    label: "Talk to AVIKRAT",
  },
] as const;

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-2xl"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          Who This Is For
        </motion.p>
        <motion.h2
          id="audience-title"
          variants={fadeUp}
          className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Built for the teams{' '}
          <span className="text-cyan">solving this problem.</span>
        </motion.h2>
      </motion.div>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid gap-5 sm:grid-cols-2"
      >
        {AUDIENCES.map((a) => (
          <motion.li key={a.title} variants={fadeUp}>
            <Link
              href={a.link}
              className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-cyan/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <div>
                <span
                  aria-hidden="true"
                  className="mb-4 block h-1 w-8 rounded-full bg-gradient-to-r from-cyan to-electric"
                />
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{a.copy}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan">
                {a.label} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}