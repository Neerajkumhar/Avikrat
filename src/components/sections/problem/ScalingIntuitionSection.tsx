"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { TECH_IMAGES } from "@/lib/images";

const CURVE =
  "M 70 300 C 170 260, 250 190, 330 120 C 400 62, 460 40, 500 34";

export function ScalingIntuitionSection() {
  const [p, setP] = useState(0.4);

  const markerX = 70 + p * 430;
  const yAtX =
    p < 0.3
      ? 300 - p * 160
      : p < 0.7
      ? 300 - 48 - (p - 0.3) * 130
      : 300 - 100 - (p - 0.7) * 66;

  const readouts = [
    { label: "Context Length", v: p, color: "bg-electric/80" },
    { label: "KV Cache", v: Math.min(1, p * 1.15), color: "bg-electric/70" },
    { label: "Memory Traffic", v: Math.min(1, p * 1.3), color: "bg-cyan/70" },
    { label: "Serving Pressure", v: Math.min(1, p * 1.45), color: "bg-cyan/80" },
  ];

  return (
    <section aria-labelledby="scaling-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">The Scaling Intuition</p>
          <h2
            id="scaling-title"
            className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
          >
            As context grows, the system{' '}
            <span className="text-electric">carries more</span> with every step.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-soft">
            Drag the marker along the axis to see how the different pressures respond as
            context lengthens.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-10">
          <AvikratImage
            def={TECH_IMAGES.state}
            mode="aspect"
            aspectRatio="4 / 3"
            sizes="100%"
            className="mb-8"
          />
          <div className="mt-6">
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(p * 100)}
              onChange={(e) => setP(Number(e.target.value) / 100)}
              aria-label="Context-length marker position"
              className="w-full accent-cyan mb-4"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {readouts.map((r) => (
              <div key={r.label} className="rounded-xl border border-line bg-surface px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-faint">{r.label}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <div
                    className={`h-full rounded-full ${r.color}`}
                    style={{ width: `${Math.max(4, Math.round(r.v * 100))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-faint">
            Conceptual architecture visualization — not measured benchmark data.
          </p>
        </div>
      </div>
    </section>
  );
}