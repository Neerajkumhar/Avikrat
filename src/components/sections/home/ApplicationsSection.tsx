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
    copy: "Persistent conversations and massive document repositories processed without re-reading context.",
    image: APPS_IMAGES.enterprise,
  },
  {
    title: "Edge AI Systems",
    copy: "Continuous long-context operation on memory-constrained edge hardware with flat memory overhead.",
    image: APPS_IMAGES.edge,
  },
  {
    title: "Agent Infrastructure",
    copy: "Long-running autonomous agent workflows maintaining a tight active window over historical state.",
    image: APPS_IMAGES.agent,
  },
  {
    title: "Real-Time Processing",
    copy: "Bounded memory keeps real-time multi-hour continuous streaming inputs practical and cost-effective.",
    image: APPS_IMAGES.realtime,
  },
];

export function ApplicationsSection() {
  return (
    <section aria-labelledby="apps-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="apps-title"
          eyebrow="04 · TARGET DOMAINS"
          title="Where constant memory wins."
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
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {APPS.map((app) => (
          <motion.article
            key={app.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-sm border border-line bg-surface transition-all duration-300 hover:border-charcoal hover:bg-surface2"
          >
            <AvikratImage
              def={app.image}
              mode="aspect"
              aspectRatio="4 / 3"
              sizes="(max-width: 768px) 100vw, 25vw"
              imgClassName="transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="relative p-6">
              <h3
                className="text-base font-bold text-charcoal uppercase tracking-tight"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                {app.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-soft font-normal">{app.copy}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}