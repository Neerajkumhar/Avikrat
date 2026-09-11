"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/animations";
import type { AvikratImageDef } from "@/lib/images";

type Mode = "fill" | "aspect";

export function AvikratImage({
  def,
  mode = "aspect",
  className = "",
  imgClassName = "",
  sizes,
  objectPosition = "center",
  aspectRatio,
  parallax = 0,
}: {
  def: AvikratImageDef;
  mode?: Mode;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  objectPosition?: string;
  aspectRatio?: string;
  parallax?: number;
}) {
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  const base = "relative overflow-hidden bg-surface";
  const inset = "border border-line";
  const containerCls = [base, mode === "fill" ? "h-full w-full" : inset, className].join(" ");

  const shellInner =
    mode === "aspect"
      ? { aspectRatio: aspectRatio ?? def.aspect ?? "4 / 3" }
      : undefined;

  const defaultSizes = mode === "aspect" ? "(max-width: 768px) 100vw, 50vw" : "100vw";
  const imgSizes = sizes ?? defaultSizes;

  const image = !failed ? (
    <Image
      src={def.src}
      alt={def.alt}
      fill={mode === "fill"}
      width={mode === "aspect" ? 1600 : undefined}
      height={mode === "aspect" ? 1200 : undefined}
      sizes={imgSizes}
      priority={def.priority}
      onError={() => setFailed(true)}
      className={"h-full w-full select-none object-cover " + imgClassName}
      style={{ objectPosition }}
    />
  ) : (
    <div
      role="img"
      aria-label={def.alt}
      className="flex h-full w-full items-center justify-center p-8 text-center"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, rgba(34,211,197,0.10), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(59,130,246,0.08), transparent 55%)",
      }}
    >
      <span className="max-w-xs text-sm text-faint">{def.alt}</span>
    </div>
  );

  const parallaxMotion =
    parallax > 0 ? (
      <motion.div
        className="absolute inset-0"
        style={{ y: reduceMotion ? 0 : parallaxY, scale: 1.12 }}
      >
        {image}
      </motion.div>
    ) : (
      image
    );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className={containerCls}
    >
      <div className="h-full w-full" style={shellInner}>
        {parallaxMotion}
      </div>
    </motion.div>
  );
}