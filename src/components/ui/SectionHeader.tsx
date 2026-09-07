import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/animations";
import { Eyebrow } from "./Eyebrow";

export function SectionHeader({
  id,
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
      >
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-relaxed text-soft">{copy}</p> : null}
    </motion.div>
  );
}
