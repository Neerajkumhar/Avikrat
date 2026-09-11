# AVIKRAT — Graphite Instrument Visual Identity Rework

**Date:** 2026-09-11
**Status:** Approved draft (user-approved design direction; supersedes the dark/cyan system in `2026-09-07-avikrat-website-design.md`)
**Scope:** Full-site visual identity overhaul of the existing Next.js site (all 9 routes, shared components, figures)

---

## 1. Context & Goal

The site today ships a dark AI aesthetic: near-black navy base, teal/cyan accent,
glow radial gradients, pulsing dots, and ~30 dark cinematic AI-generated webp images.
The brand owner has issued a new visual direction: the site must read as a
**light, warm-grayscale, precise, editorial research instrument** — like a world-class
research laboratory / advanced technology company, not a futuristic AI startup site.

This spec converts that direction into a concrete token system, component rules,
and a migration strategy. The **AVIKRAT logo PNG** (`public/images/avikrat/logo-avikrat.png`,
1254×1254, RGB, near-white ground) is the brand anchor and is used **verbatim**
(via `<img>`) — no redesign, recolor, or distortion.

### Design brief (8 lines)

```
Purpose:    AVIKRAT's full site — communicate constant-memory long-context inference
            as research + infrastructure, with quiet confidence.
Audience:   Deep-tech partners, benchmark collaborators, researchers, engineers;
            desktop + mobile, skimming and reading.
Tone:       "Graphite Instrument" — Swiss Rationalist × Technical Broadsheet,
            rendered light. Precise, editorial, unemotional.
Reference:  The AVIKRAT mark (curved → deformed → transformed → structured),
            an instrument manufacturer's spec sheet.
Palette:    warm off-white base → soft gray surfaces → medium gray rules →
            graphite text → restrained charcoal emphasis. Full monochrome.
Type:       Archivo (geometric-engineered grotesque; display + body) +
            IBM Plex Mono (labels, metrics, annotations).
Memorable:  Line figures that bend then resolve into geometry — the logo's
            transformation drawn with SVG rulework across every section.
Restraint:  No color accent (ink is the accent). No rounded cards, no shadows,
            no gradients, no dark surfaces, no glow, no image-heavy AI visuals,
            no bouncy motion.
```

**Brand throughline:** the concept behind the mark — *curved → deformed →
transformed → structured* — must echo subtly in SVG figures: a flowing line that
resolves into geometry, never as decorative waves.

---

## 2. Aesthetic Direction

**Name:** Graphite Instrument
**Trait blend:** Swiss Rationalist (grid-absolute, typographic, one palette) dominant,
Technical Broadsheet (hairline rules, editorial density, no shadows) secondary.

Key characteristics enforced site-wide:

- Warm off-white as the dominant ground; pure white reserved for raised surfaces.
- Hierarchy via **typography and hairlines**, never shadow.
- Wide uppercase tracking on all labels/meta.
- One radius (4px), everywhere.
- Structural asymmetries (12-col editorial grid) with generous whitespace.
- All visualizations are **line-based SVG figures** drawn from design tokens.

---

## 3. Design Tokens

### 3.1 Color ramp (grayscale)

Tailwind is wired to `rgb(var(--token) / <alpha-value>)`, so tokens are stored as
space-separated RGB triplets in `src/app/globals.css`. Values are warm-weighted,
never pure black, never pure cool gray.

| Token | Value (RGB) | Role | Contrast on base |
|---|---|---|---|
| `--bg-base` | `246 245 242` (`#F6F5F2`) | Page ground | — |
| `--bg-surface` | `251 250 248` (`#FBFAF8`) | Raised surfaces (cards) | — |
| `--bg-surface-2` | `239 238 234` (`#EFEEEA`) | Secondary / tint surfaces | — |
| `--border` | `226 224 218` (`#E2E0DA`) | Hairlines, dividers | — |
| `--text-primary` (ink) | `38 38 36` (`#262624`) | Primary text | ≥ 12:1 |
| `--text-secondary` (soft) | `90 88 83` (`#5A5853`) | Body copy | ≥ 4.5:1 |
| `--text-muted` (faint) | `108 106 100` (`#6C6A64`) | Captions, meta, eyebrows | ≥ 4.5:1 |
| `--accent` (was cyan) | `30 30 28` (`#1E1E1C`) | High-priority emphasis, charcoal | ≥ 13:1 |
| `--accent-2` (was electric) | `74 72 68` (`#4A4844`) | Secondary emphasis, mid graphite | ≥ 7:1 |

Notes:

- `--accent-cyan` and `--accent-blue` are **renamed** to `--accent` / `--accent-2`
  in `globals.css`. Tailwind color names `cyan` and `electric` are **kept in
  `tailwind.config.ts` for the migration** (remapped to the new tokens) so ~100
  existing class usages convert mechanically; a final pass renames component-level
  emphasis classes to semantic names only where it aids clarity. `cyanBright` maps
  to a slightly softened charcoal `58 56 52`.
- `::selection` and `:focus-visible` use the charcoal accent instead of cyan.
- Contrast target: every foreground token passes 4.5:1 on its intended surface.

### 3.2 Typography

- **Display + body:** Archivo (Google Fonts, via `next/font`), loaded as
  `--font-archivo`. Weights 400–700. Character: geometric, engineered, mechanical.
- **Mono labels/metrics/annotations:** IBM Plex Mono (Google Fonts, `--font-plex-mono`).
- **Wordmark:** Archivo, uppercase, `0.22em` tracking in charcoal — mirrors the
  PNG lockup where the image isn't used.
- **Scale:** modular ratio 1.25 on a 1rem base.
  - H1 (hero): `clamp(2.5rem, 6vw, 4.5rem)`, weight 650, leading 1.02, `-0.01em`
  - H2 (section): `clamp(1.75rem, 3.5vw, 2.75rem)`, weight 600, leading 1.08
  - H3: `1.15rem`, weight 600
  - Body: `1rem–1.0625rem`, weight 400, leading 1.7
  - Eyebrow/meta: `0.6875rem`, IBM Plex Mono, uppercase, `0.18em` tracking, faint
  - Technical label: `0.8125rem`, IBM Plex Mono, `tabular-nums`, soft
- All numeric values use `font-variant-numeric: tabular-nums` (`tabular-nums`).

### 3.3 Space

4px base unit: `--space-3xs: 0.25rem` … `--space-3xl: 7rem` (0.25, 0.5, 0.75, 1,
1.5, 2, 3, 4.5, 7). Section rhythm `clamp(4.5rem, 9vw, 7.5rem)`. Content max width
`72rem`, hero up to `78rem`.

### 3.4 Form

- `--radius: 0.25rem` (4px) — the only radius value in the system.
- `--shadow: none`; cards use `1px solid var(--line)` borders on `--bg-surface`.
- Interactive surfaces darken their border on hover (from `line` toward `accent-2`),
  no lift, no glow.

### 3.5 Motion

- Durations: `--dur-fast: 160ms`, `--dur: 320ms`, `--dur-slow: 650ms`.
- Easings: `cubic-bezier(0.16, 1, 0.3, 1)` (out) and step-free linear for line draws.
- Language of motion = **transformation**: SVG `pathLength` line-draws, rules that
  resolve into structure. Reveals via `whileInView`, once, `-80px` margin.
- `MotionConfig reducedMotion="user"` retained. Removed: `animate-ping`, pulsing
  dots, continuous particle drift, parallax, glow fades, bouncing reveals.
- No decorative scroll effects; motion below the ~1s cap and unhurried.

---

## 4. Logo & Lockup

- `Logo.tsx` becomes: `<img>` of `logo-avikrat.png` + neighboring Archivo wordmark
  where a lockup is drawn in code. Used in Navbar, Footer, and hero component.
- `favicon`/`app-icon`: icon from the PNG asset (Next `app/icon` route or `metadata.icons`).
- The old concentric-circle SVG mark is retired.
- **Logo immutability (binding guardrail):** the AVIKRAT mark is always treated
  as an immutable brand asset. It must never be recolored, filtered (no CSS
  `filter`/duotone/grayscale), recolored, reconstructed, distorted, cropped
  against its margins, or replaced by any other mark (code-drawn or otherwise)
  anywhere on the site.
- Do not distort, crop against its margins, or recolor. Its near-white ground
  already matches the new surface tones.

---

## 5. Figures Library (replaces webp imagery)

New `src/components/figures/` — token-driven SVG line figures. All use a shared
`FigureFrame` primitive (SVG `role="img"` + `aria-label` + `<desc>`, viewBox,
hairline frame, optional corner label) and read colors from CSS variables via
`currentColor`/CSS-variable strokes — no hardcoded hex.

Planned figure set (~10 parameterized components reused across routes):

| Figure | Purpose | Primary consumers |
|---|---|---|
| `PipelineFigure` | long history → prefill → compact state → local decode → next token | home, technology |
| `EscalationFigure` | context → KV cache → memory traffic → cost chain | problem, home |
| `ScalingFigure` | traditional rising vs hidden-state flat curves (labeled conceptual) | home, benchmarks |
| `StateFigure` | compact persistent core, concentric structures | technology |
| `CompareFigure` | true vs predicted / divergence | research |
| `MetricFigure` | bars/error metrics, horizon rules | benchmarks, research |
| `ProcessFigure` | numbered step chain (the 4-stage architecture) | technology, home |
| `TunnelFigure` | long-running constant flow | about, applications |
| `LatencyFigure` | timing / latency lanes | benchmarks |
| `FieldFigure` | streams converging to order | about, problem |

Design rule for all figures: begin with a **curved/organic form that resolves into
rigid geometry** (per the brand throughline). No decorative waves.

`src/lib/images.ts` (webp registry) and `AvikratImage.tsx` graphic usage are
replaced; sections now render figure components. Webp assets remain on disk but
leave `ALL_IMAGES` / section imports. Existing descriptive `alt` strings are reused
as SVG `<desc>` text.

---

## 6. Component & Route Migration Scope

**Tokens-first** (`globals.css` + `tailwind.config.ts` + `layout.tsx` fonts) so the
cascade converts most class usage. Then a curated pass per component for glows,
pings, dark overlays, and hardcoded hex.

### Shared
- `Layout.tsx` (AppShell): fonts swap to Archivo + Plex Mono; body classes updated.
- `Navbar`, `Footer`: hairline surfaces on light, logo PNG, ghost/inline buttons.
- `Button`: flat, 4px radius, ink solid + bordered variants; rename cyan refs.
- `Card`: surface + border; hover darkens border (remove lift).
- `SectionHeader`, `Eyebrow`, `Divider`, `StatusPill`, `PlaceholderPage`: recolor;
  StatusPill states become monochrome (observed=ink, validating=mid graphite,
  target=faint+surface2).
- `Logo`: PNG-based.
- `AvikratImage`: no longer used by sections (or retired).

### Pages / sections (all routes)
- `home` (Hero, Problem, Architecture, Scaling, Applications, Proof, Partner,
  FinalCta): figures swap in; hero becomes a light editorial composition (no
  full-bleed dark image, no dark overlays).
- `technology`, `problem`, `applications`, `benchmarks`, `research`, `about`,
  `contact`: same token pass + figure replacements. Contact manipulates no images
  today; verify.

### Content rules preserved (unchanged from prior spec)
- Claims discipline: no fabricated benchmark numbers; the 90% claim only as
  "target: up to 90% lower …" ; scaling figures labeled "Conceptual …
  not measured benchmark data."
- Metadata, JSON-LD, nav, site copy (`src/lib/site.ts`) unchanged.
- Accessibility: semantic landmarks, focus visibility, ARIA labels + `<desc>` on
  all figures, reduced-motion.

---

## 7. Migration Mechanics

1. Rewrite `globals.css` tokens + base + component classes.
2. Rewrite `tailwind.config.ts` colors (keep `cyan`/`electric` names temporarily).
3. Swap fonts in `layout.tsx` (`Archivo` + `IBM_Plex_Mono` via `next/font/google`).
4. Update shared UI components.
5. Build figures library; replace `AvikratImage`/webp usage section by section.
6. Curated pass over remaining hardcoded hex / gradients / pings / dark overlays
   (list of known locations captured during exploration: `Home/Hero.tsx` overlays,
   `AboutFinalStatement` gradient, `ProofSection` ping, `StatusPill`/`SuccessSection`
   chart colors, `WhyItMatters` radial glows, etc.).
7. Typecheck + build + visual verification (1440px & 390px screenshots).

---

## 8. Verification

- `npm run typecheck` passes.
- `npm run build` passes.
- Render review at desktop (1440px) and mobile (390px): no overflow, no orphaned
  headings, no low-contrast text, figures legible and framed.
- Grep check: no `#22d3c5`, dark overlay hex (`#06080F`, `#04121a`), or `animate-ping`
  remain in `src`.
- All emphasised contrast pairs ≥ 4.5:1 (large text ≥ 3:1).

---

## 9. Non-Goals

- No content/copy changes beyond what the redesign requires (claims, nav, contact).
- No new routes, no CMS, no analytics.
- No redesign of the logo or the class of SVG figures beyond the brand throughline.
- No deletion of webp files from disk (only from usage) unless requested separately.
- No dark mode in this pass.