"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";

const APPS = [
  {
    title: "Enterprise Copilots",
    copy: "Persistent conversations and large documents without re-reading the full history every step.",
    image: APPS_IMAGES.enterprise,
    alt: APPS_IMAGES.enterprise.alt,
  },
  {
    title: "Edge AI",
    copy: "Continuous context on constrained devices, with less persistent baggage to carry.",
    image: APPS_IMAGES.edge,
    alt: APPS_IMAGES.edge.alt,
  },
  {
    title: "Agent Infrastructure",
    copy: "Long-running workflows keep a short active window alongside a compact persistent state.",
    image: APPS_IMAGES.agent,
    alt: APPS_IMAGES.agent.alt,
  },
  {
    title: "Real-Time Systems",
    copy: "Bounded memory keeps continuous context practical without continuously growing state.",
    image: APPS_IMAGES.realtime,
    alt: APPS_IMAGES.realtime.alt,
  },
];

export function ApplicationsSection() {
  return (
    <section aria-labelledby="apps-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="apps-title"
          eyebrow="Applications"
          title="Where it wins."
        />
        <Button href="/applications" variant="ghost" className="shrink-0">
          Explore Applications
        </Button>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {APPS.map((app) => (
          <motion.article
            key={app.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-cyan/50"
          >
            <AvikratImage
              def={app.image}
              mode="aspect"
              aspectRatio="4 / 3"
              sizes="(max-width: 768px) 100vw, 25vw"
              imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="relative p-6 md:p-5">
              <h3 className="text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                {app.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{app.copy}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}