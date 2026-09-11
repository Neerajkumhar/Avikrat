# Graphite Instrument Visual Identity — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the AVIKRAT site from its legacy cyan/electric "dark instrument" look to the approved **Graphite** monochrome editorial identity — remapping tokens, building the figures library, migrating all 55 wired sections, and enforcing the two binding guardrails at the rendered-UI level.

**Architecture:** Token-first remap. The legacy color **token names stay** in `globals.css`/`tailwind.config.ts` (so the ~55 section components keep compiling unchanged) but their **values** are remapped to the warm-grayscale ramp. A new shared-primitives layer (Logo-PNG, Button, Card, Navbar, Footer, figures) carries the graphite look at the primitives level dash-outward, so section components inherit graphite styling *through* existing token classes. Then a **curated per-component pass** sweeps every section for hardcoded hex, radial glows, animated pings, and dark overlays that tokens can't reach, replacing imagery with the line-figure library. Finally a rendered-output guardrail sweep enforces grayscale at the painted-UI level.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, `framer-motion` (`MotionConfig reducedMotion="user"`), `next/font/google` (Archivo + IBM Plex Mono), React 19.

---

## File Structure

The rework is organized by responsibility. Order matters — each section depends on what precedes it:

| Layer | Path(s) | Responsibility |
|---|---|---|
| 1. Tokens | `src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx` | Grayscale ramp, fonts (Archivo/Plex Mono), base styles. **Values change, names stay.** |
| 2. Primitives | `src/components/ui/Logo.tsx`, `Button.tsx`, `Card.tsx`, `Navbar.tsx`, `Footer.tsx`, `src/components/layout/Navbar.tsx`, `Footer.tsx`, `AppShell.tsx`, `src/components/ui/Divider.tsx`, `Eyebrow.tsx`, `SectionHeader.tsx`, `StatusPill.tsx`, `PlaceholderPage.tsx` | Shared chrome — all rewritten to graphite, PNG logo. |
| 3. Figures | `src/components/figures/*` (new) | SVG line-figure library replacing webp/PNG imagery. |
| 4. Sections | `src/components/sections/**` (55 files) | Per-route curated pass: tokens + figure swaps + hardcode sweep. |
| 5. Sweep | (grep-level) | Guardrail verification at rendered output. |

**Key invariants carried from the spec, binding:**
- **G1 — Grayscale at rendered level:** no legacy cyan/electric/blue/purple may remain *visible* on screen, even where old token names are retained internally. Enforced by grepping rendered build output, not just source.
- **G2 — Logo immutability:** `public/images/avikrat/logo-avikrat.png` is treated as an immutable brand asset. It must never be recolored, filtered (no CSS `filter`, grayscale, duotone), reconstructed, distorted, cropped against its margins, or replaced — in any context. Rendered verbatim via `<img>`.

---

## Task 1: Token & font layer

**Files:** `src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx`

- [ ] **1.1** Rewrite `:root` token block in `globals.css`: keep legacy names (`--bg-base`, `--bg-surface`, `--bg-soft`, `--bg-faint`, `--text-primary`, `--text-inverse`, `--accent-cyan`, `--accent-cyanBright`, `--electric`, `--faint`, `--surface`, `--line`, `--ink`, `--soft`, `--line-faint`, `--hairline`), remap **values** to the spec §3.1 graphite ramp (base #0b0b0b-ish → wait, the spec is light graphite). Set per spec: warm off-white base, ivory surfaces, hairline borders, charcoal ink. Add `--font-archivo`, `--font-plex-mono`. Add base styles: selection, `:focus-visible` in charcoal, hairline `hr`.
- [ ] **1.2** `tailwind.config.ts`: remap `colors` so legacy class names (`cyan`, `cyanBright`, `electric`, `ink`, `soft`, `faint`, `surface`, `line`, `base`) resolve to graphite values; add `fontFamily` (`Archivo`, `IBM Plex Mono`); add letter-spacing token for the 0.18em eyebrow tracking; keep border radius + extend grids/maxWidth per spec.
- [ ] **1.3** `layout.tsx`: swap Inter/other fonts → Archivo + IBM Plex Mono via `next/font/google`; update `<body>` classes and `globals.css` base font variable; keep `MotionConfig reducedMotion="user"`; metadata/favicon JSON-LD unchanged. Commit.

---

## Task 2 — Shared primitives (graphite chrome)

**Files:**
- Modify: `src/components/ui/Logo.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/AppShell.tsx`, `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`, `src/components/ui/Divider.tsx`, `src/components/ui/Eyebrow.tsx`, `src/components/ui/SectionHeader.tsx`, `src/components/ui/StatusPill.tsx`, `src/components/ui/PlaceholderPage.tsx`
- Create: `src/components/ui/Logo.tsx` (rewrite in place)

### Step 2.1 — Rewrite `ui/Logo.tsx` (G2 binding: immutable PNG, no recolor/filter/scale/distort)

Replace the concentric-circle SVG `<svg>` mark with a verbatim `<img>` of the immutable brand PNG + neighboring Archivo wordmark lockup. **G2 guardrail:** the `<img>` must carry NO `filter`, `grayscale`, `saturate`, `opacity`, `hue-rotate`, or transform; no reconstruction; never recolored or replaced.

```tsx
import React from "react";

export function Logo({ as = "img" }: { as?: "img" }) {
  return (
    <img
      src="/images/avikrat/logo-avikrat.png"
      alt="AVIKRAT"
      width={64}
      height={64}
      className="h-10 w-auto"
      data-logo-immutable="true"
    />
  );
}
```

Verify: `grep -n "filter\|grayscale\|saturate\|hue-rotate" src/components/ui/Logo.tsx` → no matches. `grep -n "logo-avikrat.png" src/components/ui/Logo.tsx` → 1 match.

### Step 2.2 — Rewrite `Navbar.tsx` + `Footer.tsx`

- `Navbar`: transparent → adds hairline-bottom + light surface on scroll (`window.scrollY > 8`); uses `Logo` PNG; ghost/inline buttons; no ping/glow/dark backdrop; light text on scroll.
- `Footer`: light surface, hairline-top, `Logo` PNG, charcoal hover links.

### Step 2.3 — `Button.tsx`, `Card.tsx`, `Divider.tsx`, `Eyebrow.tsx`, `SectionHeader.tsx`, `StatusPill.tsx`, `PlaceholderPage.tsx`

Flat monochrome (per spec §3.3): primary = `bg-ink text-surface`; ghost = `border-line text-ink hover:border-ink`; `radius 4px`; **no glow/lift/shadows**. Card = surface + hairline, no lift. Divider/Eyebrow/SectionHeader get graphite colors (grayscale ramp via `currentColor`/token). StatusPill states = monochrome (observed=ink, validating=mid-graphite, etc.). Remove all cyan/electric token usage in these files.

Commit: `git commit -m "primitives: graphite palette for logo, nav, footer, buttons, cards"` — this is a **bundle**; commit once after review.

---

## Task 3 — Figures library (replaces webp imagery, G1-relevant)

**Files (create all):**
- `src/components/figures/FigureFrame.tsx` (primitive), then per spec §5's figure set by key:
  `PipelineFigure.tsx`, `EscalationFigure.tsx`, `ScalingFigure.tsx`, `StateFigure.tsx`, `CompareFigure.tsx`, `MetricFigure.tsx`, `ProcessFigure.tsx`, `TunnelFigure.tsx`, `LatencyFigure.tsx`, `FieldFigure.tsx`, barrel `src/components/figures/index.ts`.

### Step 3.1 — `FigureFrame.tsx` primitive

Token-driven SVG frame. `role="img"`, `aria-label` + `<desc>` from props, `viewBox`, hairline frame (stroke = `var(--line)`), optional corner label. Reads colors from CSS vars (no hardcoded hex). This is the shared skeleton all figures reuse.

### Step 3.2 — Implement each figure (~10 components)

Each maps to the spec §5 table: `PipelineFigure` (home/technology), `EscalationFigure` (problem/home), `ScalingFigure` (home/benchmarks), `StateFigure` (technology), `CompareFigure` (research), `MetricFigure` (benchmarks/research), `ProcessFigure` (technology/home), `TunnelFigure` (about/applications), `LatencyFigure` (benchmarks), `FieldFigure` (about/problem). Each = `<FigureFrame>` + parameterized line primitives (strokes via CSS vars, `currentColor`; **curved → structured** throughline).

Commit: `git commit -m "figures: add paramigure-set SVG figure library"` — commit once after review.

---

## Task 4 — Section migration (55 wired sections, by route)

**Pass rules per section (uniform, curated on every file):**
1. Token remap is already inherited from Task 1 — handle **hardcoded values** the tokens can't reach: any literal `#22d3c5`, `#04121a`, `#06080F`, radial gradient glows, `animate-ping` dots, `backdrop-blur` overlays, dark navy/cyan `bg-*` → convert to graphite tokens/hairlines.
2. Swap webp/PNG imagery → the mapped figure (spec §5 + §3.2 file table); reuse the image's `alt` text as the figure `<desc>`.
3. Curated visual pass: rounded → `rounded-sm`, remove glow/lift, enforce monochrome.
4. Never change copy, claims, `aria-*`, or `whileInView` motion params.

### Task 4a — home (8 sections)
`Hero.tsx`, `ProblemSection.tsx`, `ArchitectureSection.tsx`, `ScalingSection.tsx`, `ApplicationsSection.tsx`, `ProofSection.tsx`, `PartnerSection.tsx`, `FinalCtaSection.tsx` (all in `src/components/sections/home/`).

### Task 4b — technology (10)
`src/components/sections/technology/`: `TechnologyHero`, `PipelineSection`, `PrefillSection`, `StateSection`, `LocalMemorySection`, `LongMemorySection`, `GlobalPrefillSection`, `DecodeSection`, `NextTokenSection`, `TechCtaSection`.

### Task 4c — problem (4) + benchmarks (7)
Problem (`src/components/sections/problem/`): `ProblemHero`, `ProblemSection`, `MemorySection`, `DecodingSection`.
Benchmarks (`src/components/sections/benchmarks/`): `BenchHeroSection`, `MatrixSection`, `ContextScalingSection`, `PerplexitySection`, `SuccessSection`, `BenchCtaSection`, `CollaborateSection`.

### Task 4d — applications (7) + research (8)
Applications (`src/components/sections/applications/`): `ApplicationsHero`, `RealtimeSection`, `BeforeAfterSection`, `AgentSection`, `AppsCtaSection`, `CommonThreadSection`, `EdgeSection`.
Research (`src/components/sections/research/`): `ResearchHero`, `TrueVsPredictedSection`, `CompareSection`, `ResearchProcessSection`, `ErrorMetricsSection`, `CosineSection`, `CheckpointSection`, `ResearchCtaSection`.

### Task 4e — about (8) + contact (3)
About (`src/components/sections/about/`): `AboutHeroSection`, `AboutWhySection`, `AboutVision`, `AboutBuildSection`, `BuildPrincipleSection`, `ProofOfConceptSection`, `ProgressSection`, `AboutFinalStatement`.
Contact (`src/components/sections/contact/`): `ContactHero`, `ContactPageSection`, `ContactForm`.

After each subsection: `npm run typecheck` + `npm run build`; commit per subsection on review.

---

## Task 5 — Guardrail sweep (G1 + G2, rendered-output level)

- [ ] `grep -rn "#22d3c5\|#04121a\|#06080F\|cyan-\|electric\|animate-ping\|backdrop-blur" src/` → fix every rendered-visible hit.
- [ ] `grep -rn "filter\|grayscale\|saturate\|hue-rotate" src/components/ui/Logo.tsx src/components/layout/` → must be empty (G2).
- [ ] Rendered-UI check: build the site, grep the **built output** (`grep -rn "#22d3c5\|#04121a\|#06080F" .next/static/css/*.css`) → no legacy accent hex remains in shipped CSS.
- [ ] Logo immutability: confirm `logo-avikrat.png` rendered via `<img>` verbatim everywhere; no CSS filter on any logo container; favicon/app icon from PNG.

---

## Task 6 — Verification

- [ ] `npm run typecheck` green.
- [ ] `npm run build` green (all 8 routes compile).
- [ ] Grep built CSS for legacy accent hex → empty (G1 enforced at rendered level).
- [ ] Visual check desktop (1440) + mobile (390): light graphite, hairlines, no dark surfaces, figures framed, no overflow/orphans, no image breakage.
- [ ] Contrast spot-check (grayscale pairs ≥ 4.5:1, large ≥ 3:1).
- [ ] Reduced motion preserved (`MotionConfig reducedMotion="user"` untouched; no new transforms/pings).
- [ ] Logo: no filter/recolor; rendered verbatim.

Commit: ask user — do not auto-commit.
