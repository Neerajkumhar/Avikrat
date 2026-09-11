"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { AppSectionShell } from "./AppSectionShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/Button";

const WORKLOADS = ["Long conversations", "Large documents", "Persistent sessions"];

export function EnterpriseSection() {
  return (
    <AppSectionShell
      label="01 / Enterprise Copilots"
      id="enterprise-title"
      title={
        <>
          Assistants that remember{' '}
          <span className="text-cyan">the session.</span>
        </>
      }
      copy="Enterprise copilots can operate across persistent conversations, large documents and long-running sessions. As context accumulates, maintaining the full history can become increasingly expensive."
      opportunity="Compact persistent state could provide another way to retain useful historical information while local decoding operates over a shorter recent window."
    >
      <AvikratImage
        def={APPS_IMAGES.enterprise}
        mode="aspect"
        aspectRatio="16 / 10"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-6 flex flex-wrap items-center justify-between gap-4"
      >
        <motion.ul variants={fadeUp} className="flex flex-wrap gap-2">
          {WORKLOADS.map((w) => (
            <li
              key={w}
              className="rounded-full border border-line bg-surface2/60 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-soft"
            >
              {w}
            </li>
          ))}
        </motion.ul>
        <motion.div variants={fadeUp}>
          <Button href="/technology">
            Explore the Technology <span aria-hidden="true">→</span>
          </Button>
        </motion.div>
      </motion.div>
    </AppSectionShell>
  );
}