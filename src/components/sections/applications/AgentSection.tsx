"use client";

import { AppSectionShell } from "./AppSectionShell";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { APPS_IMAGES } from "@/lib/images";

export function AgentSection() {
  return (
    <AppSectionShell
      label="03 / Agent Infrastructure"
      id="agents-title"
      title={
        <>
          Long-running agents need memory that{' '}
          <span className="text-cyan">scales differently.</span>
        </>
      }
      copy="Agents can operate across many steps, tools and interactions. Long-running workflows naturally accumulate context, making state management increasingly important."
      opportunity="AVIKRAT is exploring whether compact persistent state can keep long-running histories available alongside a short active window — so agents can continue without re-reading everything."
    >
      <AvikratImage
        def={APPS_IMAGES.agent}
        mode="aspect"
        aspectRatio="4 / 3"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </AppSectionShell>
  );
}