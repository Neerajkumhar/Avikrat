"use client";

import { BenchMarkShell } from "./BenchMarkShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { BENCH_IMAGES } from "@/lib/images";

export function ContextScalingSection() {
  return (
    <BenchMarkShell
      index="07"
      label="Benchmark 04"
      title="Context-length scaling"
      sub="Test what happens as history gets longer."
      copy="Move through conceptual context stages and watch the architecture respond. Whether resource pressure stays bounded as context grows is an open question awaiting measurement."
    >
      <AvikratImage
        def={BENCH_IMAGES.contextScaling}
        mode="aspect"
        aspectRatio="16 / 10"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <p className="mt-4 text-center text-xs text-faint">
        Conceptual image — no scaling measurements are shown.
      </p>
    </BenchMarkShell>
  );
}