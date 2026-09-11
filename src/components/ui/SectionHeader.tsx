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
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 text-[clamp(1.75rem,6.5vw,3.25rem)] font-bold leading-[1.07] tracking-tight text-charcoal uppercase [text-wrap:balance]"
        style={{ fontFamily: "var(--font-archivo), sans-serif" }}
      >
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-soft font-normal">
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}
