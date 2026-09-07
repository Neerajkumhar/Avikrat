# AVIKRAT Website — Design Specification

**Date:** 2026-09-07
**Status:** Approved draft
**Product:** AVIKRAT — hidden-state long-context LLM inference infrastructure company

---

## 1. Purpose

Build the official website for AVIKRAT, a deep-tech AI infrastructure company
developing the **Hidden State Simulator** for long-context LLM inference.

The site must feel like a premium, cutting-edge AI research/infrastructure
company — closer to the visual quality of a world-class AI lab or advanced
computing company than a generic SaaS landing page.

The immediate deliverable is the **global design system + Home page** built to
production quality. Remaining pages are scaffolded with routes but not built
out.

---

## 2. Positioning & Claims Discipline

### Core claims (allowed, from pitch deck)

- AVIKRAT encodes long conversation/history **once** into a compact hidden
  state, then decodes using a short **local** token window rather than
  repeatedly processing the entire growing context.
- Targets reducing long-context inference cost.
- Addresses KV-cache growth bottlenecks.
- Keeps compute **nearly constant** as context length increases.
- Compact persistent state + local decoding.
- Enables more efficient long-running AI systems.
- A working **proof of concept** already predicts hidden-state structure and
  tracks validation behavior (context slices, error metrics, cosine
  similarity, checkpoint selection).

### Claim language rules (mandatory)

- **Never** present "90% cost reduction" as a proven fact. Always qualify:
  - "Target: up to 90% lower inference cost"
  - "Designed to target up to 90% lower long-context inference cost"
- **Never** present fabricated benchmark numbers anywhere.
- Scaling charts in Section 4 must be labeled **"Conceptual architecture /
  positioning visualization, not measured benchmark data."**
- No invented customers, investors, team members, partnerships, or
  testimonials.
- No placeholder lorem ipsum. No fake statistics.
- Phone number uses `+91 8949207258`, email `hello@avikrat.org`.

---

## 3. Tech Stack

- **Next.js 14+** (App Router, TypeScript) — SSG-friendly static export for
  SEO, with client components for interactivity.
- **Tailwind CSS** — styling and design tokens.
- **Framer Motion** — scroll-driven reveals, hover states, transitions.
- **Custom SVG** — all technical visualizations (no stock images, no 3D lib).
- **npm** — package manager.

---

## 4. Design System

### 4.1 Color tokens

| Token | Hex | Role |
|---|---|---|
| `--bg-base` | `#06080f` | Primary near-black navy background |
| `--bg-surface` | `#0b0f1a` | Elevated surfaces / cards |
| `--bg-surface-2` | `#101524` | Hover / secondary surfaces |
| `--border` | `#1c2233` | Hairline technical dividers |
| `--text-primary` | `#e8eaf0` | Off-white headings |
| `--text-secondary` | `#9ba3b5` | Body text |
| `--text-muted` | `#5c6474` | Captions / labels |
| `--accent-cyan` | `#22d3c5` | Primary accent (teal/cyan) |
| `--accent-blue` | `#3b82f6` | Secondary accent (electric blue) |

Derived alphas: cyan/blue used at 10–20% as glows and subtle fills.

Design principle: **cyan = the hidden state / what AVIKRAT builds.**
Where the diagram visualizes the growing context, use muted blue; the compact
hidden state is always cyan. This creates an instant visual language.

### 4.2 Typography

- **Font:** Inter (headings + body), loaded via `next/font`. Fallback stack:
  system sans. Tabular numerals for technical labels.
- Scale (desktop):
  - H1 (hero): `clamp(2.75rem, 6vw, 4.75rem)`, weight 650, tight leading
  - H2 (section): `clamp(2rem, 4vw, 3rem)`, weight 600
  - H3 (subsection): `1.25rem`, weight 600
  - Body: `1rem–1.0625rem`, weight 400, `1.7` line-height
  - Label/eyebrow: `0.75rem`, uppercase, letterspaced `0.14em`, `text-muted`
  - Technical/label: `0.8125rem`, `tabular-nums`, `text-secondary`

Editorial principle: large confident headings with generous vertical
whitespace. Asymmetric layouts. Thin dividers.

### 4.3 Spacing & layout

- Content max width: `1200px` (`max-w-6xl`), hero up to `1280px`.
- Section vertical rhythm: `clamp(5rem, 10vw, 8rem)`.
- Grid: 12-col on desktop, collapsing gracefully. Asymmetric offsets (content
  shifted off-center) in alternating sections.
- Cards: `border-radius: 12–16px`, subtle `1px` border, minimal elevation.
  No drop shadows — use borders + subtle radial background instead.

### 4.4 Motion system (Framer Motion)

Reusable variants in `lib/animations`:

- `fadeUp` — opacity 0→1, y 24→0, duration 0.7, ease `cubic-bezier(0.16,1,0.3,1)`
- `stagger` — parent container staggering children by 80ms
- `reveal` — clip/scale reveal for diagrams
- `flowDash` — animated stroke-dashoffset for flowing "context stream"
  lines in SVG diagrams
- `hoverLift` — cards lift 4px + border brightens + subtle cyan glow

Scroll-driven: `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
for reveals. Parallax used sparingly (hero visual only, subtle translate).

Duration discipline: nothing bouncy, nothing slower than ~1s base.

### 4.5 Accessibility & SEO

- Semantic HTML: `header`, `nav`, `main`, `section` with `aria-labelledby`,
  `footer`.
- Focus-visible rings in cyan on interactive elements.
- `prefers-reduced-motion` → disable all Framer Motion animation.
- Skip-to-content link.
- Title/meta-per-page, OG image, JSON-LD `Organization` schema on home.
- Color contrast: text-primary on bg-base qualifies AAA; text-secondary AA.
- All diagrams provide `aria-label` + an accessible text alternative
  (visually-hidden description of what the diagram conveys).

---

## 5. Site Map

| Route | Status |
|---|---|
| `/` | **Build now** |
| `/technology` | Scaffold route + placeholder title only |
| `/problem` | Scaffold route + placeholder title only |
| `/solutions` | Scaffold route + placeholder title only |
| `/applications` | Scaffold route + placeholder title only |
| `/benchmarks` | Scaffold route + placeholder title only |
| `/research` | Scaffold route + placeholder title only |
| `/about` | Scaffold route + placeholder title only |
| `/contact` | Scaffold route + placeholder title only |

Scaffold pages render the shared Navbar + a minimal centered "coming next"
panel. They must not be broken or empty-feeling, but content is deferred.
Navbar links to scaffold pages must work.

---

## 6. Home Page Architecture

Global: `Navbar` (fixed, transparent → blurred dark on scroll) + `Footer`
shared across all routes.

### Section 1 — Hero

- **Eyebrow:** `AI INFRASTRUCTURE · LONG-CONTEXT INFERENCE`
- **H1:** "Long context. / Without the growing cost."
- **Supporting:** "AVIKRAT is building a new approach to long-context LLM
  inference using compact persistent hidden states and local decoding."
- **CTAs:** `Explore the Technology` (primary → `/technology`) and
  `Work With Us` (secondary → `/contact`).
- **Visual (`HeroDiagram`):** vertical pipeline
  `Long History → Global Prefill → Compact Hidden State → Local Decode →
  Next Token`.
  - The **context stream** enters as a wide array of muted blue tokens/
    particles, converges through prefill into a **single compact cyan state**
    (glowing core), which feeds a **short local decode window**, emitting one
    bright next-token at the bottom.
  - Animated: streaming tokens (`flowDash` on paths + drifting token dots),
    the cyan core pulses and rotates slowly, the local window scrolls a few
    recent tokens. Subtle particle background.
  - As the page scrolls, hero visual parallaxes slightly (max 30px).
  - Layout: asymmetric — headline left, visual right on desktop; stacked on
    mobile.

### Section 2 — The long-context problem

- **Eyebrow:** `THE PROBLEM`
- **H2:** "Standard decoding scales with every token."
- Short copy: standard decoding continuously expands the KV cache; attention
  cost and memory traffic grow as context grows → higher cost, slower
  decoding, ballooning memory.
- **Visual (`ProblemDiagram`):** chain
  `Context length → KV cache growth → Memory traffic → Higher cost / slower
  decoding` rendered as a horizontal escalation with an animated rising bar
  chart behind it (bars extend as context length label grows 1K → 8K → 32K →
  128K). Emphasize the *growth* with the metric-muted labels and a rising
  monotonic line.
- High visual, low text.

### Section 3 — Architecture: persistent context

- **Eyebrow:** `THE APPROACH`
- **H2:** "An architecture built for persistent context."
- **Visual (`ArchitectureProcess`):** four animated steps, horizontal on
  desktop / vertical on mobile, connected by flowing line:
  1. **Global Prefill** — "Read the full history once."
  2. **Compact State** — "Persist a small learned memory."
  3. **Local Decode** — "Use a short recent window."
  4. **Next Token** — "Generate efficiently."
  - Steps reveal sequentially on scroll into view. Step 2 (Compact State)
    rendered larger / cradled in a cyan ring to emphasize the persistent core.

### Section 4 — Flatter scaling

- **Eyebrow:** `SCALING`
- **H2:** "Designed for flatter scaling."
- **Visual (`ScalingGraph`):** conceptual SVG line chart, x = context length,
  y = cost/compute per token or memory.
  - Traditional inference: rising curve.
  - Hidden-state inference: flat/low curve.
  - **Mandatory label:** "Conceptual architecture / positioning visualization
    — not measured benchmark data."
  - Optional annotation near flat line: "target: up to 90% lower
    long-context inference cost" (labeled as target, per claim rules).
  - Lines draw in via stroke animation on scroll; flat line is cyan, rising
    line is muted blue.
- **Copy:** "Context grows. The cost baseline should stay."

### Section 5 — Where it wins

- **Eyebrow:** `APPLICATIONS`
- **H2:** "Where it wins."
- **Four cards** (grid 4 → 2 → 1):
  1. **Enterprise Copilots** — persistent conversations and large document
     sessions.
  2. **Edge AI** — smaller persistent memory for constrained devices.
  3. **Agent Infrastructure** — long-running workflows without exploding
     state cost.
  4. **Real-Time Systems** — continuous context becomes more practical when
     memory stays bounded.
  - Cards: icon, title, one-line description. Hover: lift + cyan border +
  subtle glow. Subtle technical glyphs (grid, waveform) as card background.

### Section 6 — From simulator to infrastructure

- **Eyebrow:** `PROOF OF CONCEPT`
- **H2:** "From simulator to infrastructure."
- **Copy:** "A working simulator already predicts hidden-state structure and
  tracks validation behavior."
- **Validation panel** (grid of 4 itemized capabilities, no numbers):
  - True vs predicted context slices
  - Error metrics
  - Cosine similarity
  - Checkpoint selection
- **Muted action label** beneath: these are current evaluation dimensions,
  being prepared for larger-scale benchmarking.
- **CTA:** `Explore the Research` → `/research`.

### Section 7 — Help us prove the next step

- **Eyebrow:** `PARTNERS`
- **H2:** "Help us prove the next step."
- **Three CTA cards:**
  1. **Benchmark Collaborators** — "Validate perplexity, latency and GPU
     memory at larger context lengths."
  2. **Pilot Opportunities** — "Explore long-context assistants, enterprise
     workflows and edge inference."
  3. **Strategic Support** — "Help turn the simulator into production
     infrastructure."
  - Distinct visual treatment: slightly larger, borders attract attention,
  arrow link affordance to `/contact`.

### Section 8 — Final CTA

- **H2:** "Build the next generation of long-context AI."
- **Text:** "AVIKRAT is developing infrastructure for AI systems that can
  carry more context without carrying the full computational burden."
- **Buttons:** `Talk to AVIKRAT` (`mailto:hello@avikrat.org`) and
  `Explore Technology` (`/technology`).
- **Contact block:** `hello@avikrat.org` · `+91 8949207258`.

### Footer (all pages)

- Wordmark: **AVIKRAT**
- Tagline: "AI infrastructure for constant-memory long-context inference."
- Nav: Technology / Applications / Research / About / Contact (mapping to
  scaffold routes).
- Email `hello@avikrat.org`, phone `+91 8949207258`.
- Small print line: "© MMXXVI AVIKRAT." + claim-disclaimer microcopy if
  needed.

---

## 7. Component Architecture

```
src/
  app/
    layout.tsx             # fonts, metadata, Navbar, Footer
    page.tsx               # home sections composition
    (pages)/...            # scaffold routes
    globals.css            # tokens + base styles
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      home/
        Hero.tsx
        ProblemSection.tsx
        ArchitectureSection.tsx
        ScalingSection.tsx
        ApplicationsSection.tsx
        ProofSection.tsx
        PartnerSection.tsx
        FinalCtaSection.tsx
    ui/
      Button.tsx
      Card.tsx
      Eyebrow.tsx
      SectionHeader.tsx
      Divider.tsx
      Logo.tsx
      PlaceholderPage.tsx
    visualizations/
      HeroDiagram.tsx
      ProblemDiagram.tsx
      ArchitectureProcess.tsx
      ScalingGraph.tsx
      Shared primitives (TokenDot, FlowLine) in one file
  lib/
    animations.ts          # variants + viewport config
    site.ts                # nav links, contact constants (single source)
  public/
    og-image ... # not required now; skip generation
```

Design rule: each section is a component owning `section` element +
`aria-labelledby` header. Sections do not know about pages. Home page
composes them.

---

## 8. Technical Constraints

- Responsive from 360px → 1600px. Desktop-first build, mobile adapts.
- Sections stack correctly; diagrams scale width via `viewBox` + `width
  100%`.
- No external font downloads beyond `next/font` self-hosted Inter.
- No image dependencies — everything is SVG/CSS.
- Lighthouse-friendly: minimal JS (diagrams are SVG + Framer Motion, no heavy
  libs), semantic HTML, meta content.
- `prefers-reduced-motion` respected globally via MotionConfig.

---

## 9. Success Criteria (home page)

1. Renders without errors in npm dev + production build.
2. All content copy matches positioning section (no fabricated numbers).
3. Diagrams communicate visually at a glance; labels + alt text present.
4. Design tokens centralized; no hardcoded hex scattered in components.
5. Navbar + Footer functional on all routes; scaffold pages not broken.
6. Lightweight: no unused deps, no banner JS > ~150KB gzip, no FOUT.
7. Accessible: semantic landmarks, focus states, ARIA labels on diagrams,
   reduced-motion toggle.
8. SEO: per-page metadata, Organization JSON-LD on home.

---

## 10. Non-Goals (this phase)

- Building out content for technology/problem/solutions/applications/
  benchmarks/research/about/contact pages (scaffold only).
- Blog, docs, case studies.
- Analytics, marketing automation, forms backend.
- OG image generation (deferred).
- Multi-language (i18n).