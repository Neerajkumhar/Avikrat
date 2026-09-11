"use client";

import { motion } from "framer-motion";

export function TransformDiagram({ className = "" }: { className?: string }) {
  // 7 parallel lines entering from left, curving upward, converging into a solid pillar
  const lineYPositions = [140, 160, 180, 200, 220, 240, 260];

  return (
    <div className={`relative w-full overflow-hidden rounded-sm border border-line bg-surface p-6 md:p-8 ${className}`}>
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Technical Header Readout */}
      <div className="relative z-10 flex items-center justify-between border-b border-line pb-3.5 mb-5 font-mono text-[0.7rem] uppercase tracking-widest text-faint">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-charcoal animate-pulse" />
          SYSTEM ARCHITECTURE · TRANSFORM ENGINE
        </span>
        <span className="hidden sm:inline">STATE: COMPACT_PERSISTENT</span>
        <span>0x4F2 / R-INFERENCE</span>
      </div>

      {/* SVG Canvas for Visual DNA Animation (Aspect Ratio ~1.1 / 1) */}
      <div className="relative z-10 aspect-[1.12/1] w-full">
        <svg
          viewBox="0 0 700 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Subtle horizontal baseline guides */}
          <line x1="30" y1="340" x2="670" y2="340" stroke="rgb(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="30" y1="120" x2="670" y2="120" stroke="rgb(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Vertical grid lines */}
          <line x1="140" y1="50" x2="140" y2="450" stroke="rgb(var(--border))" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="380" y1="50" x2="380" y2="450" stroke="rgb(var(--border))" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="550" y1="50" x2="550" y2="450" stroke="rgb(var(--border))" strokeWidth="1" strokeDasharray="2 4" />

          {/* 7 Parallel Streams curving into unified structure */}
          {lineYPositions.map((y, index) => {
            const d = `M 30 ${y} C 180 ${y}, 290 ${y - 45}, 380 ${80 + index * 14} L ${470 + index * 7} ${350 + index * 3}`;
            const delay = index * 0.08;
            const opacity = 0.45 + (index / 7) * 0.5;

            return (
              <g key={index}>
                <motion.path
                  d={d}
                  stroke="rgb(var(--accent))"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeOpacity={opacity}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Active pulse particle moving along each stream */}
                <motion.circle
                  r="3.5"
                  fill="rgb(var(--accent))"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cx: [30, 200, 380],
                    cy: [y, y - 20, 80 + index * 14],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: delay * 1.5,
                    ease: "easeInOut",
                  }}
                />
              </g>
            );
          })}

          {/* Converged Solid Leg Pillar (Mirrors Logo Right Diagonal Leg) */}
          <motion.path
            d="M 380 80 L 590 390 H 490 L 350 140 Z"
            fill="rgb(var(--accent))"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          />

          {/* Diagram Stage Labels */}
          <text x="40" y="320" fill="rgb(var(--text-muted))" fontSize="11" fontFamily="var(--font-plex-mono)" letterSpacing="0.1em">
            01. UNBOUNDED CONTEXT STREAM
          </text>

          <text x="260" y="60" fill="rgb(var(--text-muted))" fontSize="11" fontFamily="var(--font-plex-mono)" letterSpacing="0.1em">
            02. COMPRESSION WAVE
          </text>

          <text x="470" y="425" fill="rgb(var(--text-primary))" fontSize="11" fontFamily="var(--font-plex-mono)" fontWeight="600" letterSpacing="0.1em">
            03. PERSISTENT STRUCTURE
          </text>

          {/* Precision Crosshairs (+) */}
          <g stroke="rgb(var(--text-muted))" strokeWidth="1">
            <line x1="375" y1="80" x2="385" y2="80" />
            <line x1="380" y1="75" x2="380" y2="85" />

            <line x1="585" y1="390" x2="595" y2="390" />
            <line x1="590" y1="385" x2="590" y2="395" />
          </g>
        </svg>
      </div>

      {/* Footer Specification Bar */}
      <div className="relative z-10 mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 md:grid-cols-4 font-mono text-[0.7rem]">
        <div>
          <span className="block text-faint uppercase">STREAMS</span>
          <span className="font-semibold text-charcoal">7 DENSE PATHS</span>
        </div>
        <div>
          <span className="block text-faint uppercase">DEFORMATION</span>
          <span className="font-semibold text-charcoal">CUBIC VECTOR</span>
        </div>
        <div>
          <span className="block text-faint uppercase">TRANSFORM</span>
          <span className="font-semibold text-charcoal">CONST-MEMORY</span>
        </div>
        <div>
          <span className="block text-faint uppercase">RESOLUTION</span>
          <span className="font-semibold text-charcoal">STRUCTURED KVC</span>
        </div>
      </div>
    </div>
  );
}
