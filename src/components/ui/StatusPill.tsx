"use client";

export type StatusKind = "observed" | "validating" | "target";

export const STATUS_TEXT: Record<StatusKind, string> = {
  observed: "Available",
  validating: "Measurement pending",
  target: "Hypothesis",
};

const STATUS_CLASS: Record<StatusKind, string> = {
  observed: "border-cyan/50 bg-cyan/10 text-cyan",
  validating: "border-electric/50 bg-electric/10 text-electric",
  target: "border-line bg-surface2/60 text-faint",
};

export function StatusPill({
  kind,
  text,
  className = "",
}: {
  kind: StatusKind;
  text?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] ${STATUS_CLASS[kind]} ${className}`}
    >
      <span
        aria-hidden="true"
        className={
          kind === "observed"
            ? "h-1.5 w-1.5 rounded-full bg-cyan"
            : kind === "validating"
              ? "h-1.5 w-1.5 rounded-full bg-electric"
              : "h-1.5 w-1.5 rounded-full bg-faint"
        }
      />
      {text ?? STATUS_TEXT[kind]}
    </span>
  );
}