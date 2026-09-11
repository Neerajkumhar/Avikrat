"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvikratImage } from "@/components/ui/AvikratImage";
import { RESEARCH_IMAGES } from "@/lib/images";

export function CheckpointSection() {
  return (
    <section aria-labelledby="checkpoint-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <AvikratImage
          def={RESEARCH_IMAGES.checkpoint}
          mode="aspect"
          aspectRatio="4 / 3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="checkpoint-title"
            eyebrow="04 · Checkpoint Selection"
            title={
              <>
                Choosing when a persistent state{' '}
                <span className="text-cyan">is reliable.</span>
              </>
            }
            copy="Across longer histories, the simulator explores where and how the persistent state should be updated. Checkpoint selection — deciding when the compact representation is trustworthy enough to build on — is an open area of investigation."
          />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-faint">
            This area is under active exploration rather than settled results.
          </p>
        </div>
      </div>
    </section>
  );
}