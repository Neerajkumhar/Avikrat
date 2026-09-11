"use client";

import { AppSectionShell } from "./AppSectionShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";

export function EdgeSection() {
  return (
    <AppSectionShell
      label="02 / Edge AI"
      id="edge-title"
      title={
        <>
          More context.{' '}
          <span className="text-cyan">Less persistent baggage.</span>
        </>
      }
      copy="Constrained devices have limited memory and compute budgets. A smaller persistent state could be friendlier to environments where carrying a continuously growing history is difficult."
      opportunity="AVIKRAT is exploring whether compact persistent state can make continuous context more practical where resources are tight."
    >
      <AvikratImage
        def={APPS_IMAGES.edge}
        mode="aspect"
        aspectRatio="4 / 3"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </AppSectionShell>
  );
}