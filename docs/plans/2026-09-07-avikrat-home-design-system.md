# AVIKRAT Website — Home Page + Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build AVIKRAT's global design system and production-quality Home page (Next.js 14/15, TypeScript, Tailwind, Framer Motion, custom SVG visualizations), plus scaffolded routes for the remaining pages.

**Architecture:** Next.js App Router. A single `layout.tsx` owns fonts, metadata, Navbar, Footer. The Home page composes 7 section components + final CTA. Four self-contained SVG visualization components (hero pipeline, problem diagram, architecture process, scaling graph) are driven by Framer Motion. Design tokens live in CSS variables referenced by Tailwind's `tailwind.config.ts`. Shared copy/contact data is single-sourced in `src/lib/site.ts`.

**Tech Stack:** Next.js ^15 (App Router), React 19, TypeScript, Tailwind CSS ^3.4, Framer Motion ^12, npm.

---

## File Structure Map

```
src/
  app/
    layout.tsx               # root layout: fonts, metadata, Navbar, Footer, JSON-LD
    page.tsx                 # home page composition (imports home sections)
    globals.css              # Tailwind + CSS design tokens + base styles
    technology/page.tsx      # scaffold route
    problem/page.tsx         # scaffold route
    solutions/page.tsx       # scaffold route
    applications/page.tsx    # scaffold route
    benchmarks/page.tsx      # scaffold route
    research/page.tsx        # scaffold route
    about/page.tsx           # scaffold route
    contact/page.tsx         # scaffold route
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    ui/
      Button.tsx
      Card.tsx
      Eyebrow.tsx
      SectionHeader.tsx
      Divider.tsx
      Logo.tsx
      PlaceholderPage.tsx
    visualizations/
      diagram-primitives.tsx     # TokenDot, FlowLine, DiagramFrame, token stream helpers
      HeroDiagram.tsx
      ProblemDiagram.tsx
      ArchitectureProcess.tsx
      ScalingGraph.tsx
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
  lib/
    site.ts                  # nav links, contact info, copy constants (single source of truth)
    animations.ts            # shared framer-motion variants + viewport config
config files: package.json, tsconfig.json, next.config.ts, postcss.config.mjs,
              tailwind.config.ts, .gitignore
```

Design rules enforced throughout:
- **No fabricated claims.** "90%" appears ONLY as "target: up to 90% lower long-context inference cost" and only on the scaling graph / where the spec allows. Check `src/lib/site.ts` for the canonical phrases.
- **Cyan = hidden state.** Context/history/traditional-path visuals use muted blue; the compact hidden state is always cyan.
- **Design tokens only.** No hardcoded hex colors in components — use Tailwind token classes (`bg-base`, `text-secondary`, `border-line`, `text-cyan`, `text-electric`, etc.).
- **Accessibility.** Every SVG diagram gets `role="img"` + `aria-label` + a visually-hidden prose description. `MotionConfig reducedMotion="user"` in layout root.
- **Incremental file writes.** Any file split across steps must be written one ~1000-token block per step.

---

## Task 1: Project scaffolding

**Files:**
- Create: `/home/tony/Desktop/AVIKRAT/package.json`
- Create: `/home/tony/Desktop/AVIKRAT/tsconfig.json`
- Create: `/home/tony/Desktop/AVIKRAT/next.config.ts`
- Create: `/home/tony/Desktop/AVIKRAT/postcss.config.mjs`
- Create: `/home/tony/Desktop/AVIKRAT/tailwind.config.ts`
- Create: `/home/tony/Desktop/AVIKRAT/.gitignore`
- Create: `/home/tony/Desktop/AVIKRAT/src/app/layout.tsx` (minimal placeholder for now)
- Create: `/home/tony/Desktop/AVIKRAT/src/app/globals.css` (minimal placeholder for now)
- Create: `/home/tony/Desktop/AVIKRAT/src/app/page.tsx` (minimal placeholder for now)

- [ ] **Step 1: package.json**

```json
{
  "name": "avikrat",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "framer-motion": "^12.0.0",
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}
```

- [ ] **Step 2: tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: next.config.ts**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 4: postcss.config.mjs**

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

- [ ] **Step 5: tailwind.config.ts** (tokens wired to CSS variables)

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        surface2: "var(--bg-surface-2)",
        line: "var(--border)",
        ink: "var(--text-primary)",
        soft: "var(--text-secondary)",
        faint: "var(--text-muted)",
        cyan: "var(--accent-cyan)",
        electric: "var(--accent-blue)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
      maxWidth: {
        content: "72rem",
        wide: "78rem",
      },
    },
  },
  plugins: [],
};

export default config;
```

Note: no default font-family override of `border`/`color` beyond what config adds; Tailwind base stays.

- [ ] **Step 6: .gitignore**

```
node_modules/
.next/
out/
*.tsbuildinfo
next-env.d.ts
.DS_Store
```

- [ ] **Step 7: Minimal placeholder app files** (replaced by real versions in later tasks)

`src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`src/app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

`src/app/page.tsx`:
```tsx
export default function Home() {
  return <main />;
}
```

- [ ] **Step 8: Install and verify**

```bash
npm install
npm run typecheck
npm run build
```

Expected: install succeeds; `next build` completes with no type errors. If `next-env.d.ts` is auto-generated, leave it (it's gitignored).

---

## Task 2: Design tokens and global styles

**Files:**
- Modify: `src/app/globals.css` (full rewrite)
- Modify: `tailwind.config.ts` (add container/typography helpers)

- [ ] **Step 1: Rewrite globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-base: #06080f;
  --bg-surface: #0b0f1a;
  --bg-surface-2: #101524;
  --border: #1c2233;
  --text-primary: #e8eaf0;
  --text-secondary: #9ba3b5;
  --text-muted: #5c6474;
  --accent-cyan: #22d3c5;
  --accent-blue: #3b82f6;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    background-color: var(--bg-base);
    color: var(--text-primary);
    font-feature-settings: "cv11", "cv02";
  }

  ::selection {
    background: rgba(34, 211, 197, 0.25);
    color: var(--text-primary);
  }

  :focus-visible {
    outline: 2px solid var(--accent-cyan);
    outline-offset: 2px;
    border-radius: 2px;
  }
}

@layer components {
  .container-content {
    @apply mx-auto w-full max-w-content px-6 md:px-10;
  }

  .eyebrow {
    @apply text-[0.75rem] font-medium uppercase tracking-eyebrow text-faint;
  }

  .tech-label {
    @apply text-[0.8125rem] tabular-nums text-soft;
  }

  .hairline {
    @apply h-px w-full border-0 bg-line;
  }

  .sr-description {
    @apply absolute -m-px h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
}
```

- [ ] **Step 2: Add container + grid helpers to tailwind.config.ts**

Replace the `maxWidth` block with:
```ts
      maxWidth: {
        content: "72rem",
        wide: "78rem",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", md: "2.5rem" },
      },
```

- [ ] **Step 3: Verify**

```bash
npm run typecheck && npm run build
```

Expected: builds clean. No component yet uses the new tokens; they take effect once tasks below add them.

---

## Task 3: Shared data + motion libs

**Files:**
- Create: `src/lib/site.ts`
- Create: `src/lib/animations.ts`

- [ ] **Step 1: src/lib/site.ts** (single source of truth for copy/nav/contact)

```ts
export const site = {
  name: "AVIKRAT",
  tagline: "AI infrastructure for constant-memory long-context inference.",
  email: "hello@avikrat.org",
  phone: "+91 8949207258",
  phoneHref: "tel:+918949207258",
};

export const nav = [
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const claimTarget = "target: up to 90% lower long-context inference cost";
```

- [ ] **Step 2: src/lib/animations.ts**

```ts
import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const viewport = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};
```

- [ ] **Step 3: Verify**

```bash
npm run typecheck
```

Expected: no errors. `import("framer-motion")` resolves.

---

## Task 4: UI primitives

**Files:**
- Create: `src/components/ui/Logo.tsx`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Eyebrow.tsx`
- Create: `src/components/ui/SectionHeader.tsx`
- Create: `src/components/ui/Divider.tsx`
- Create: `src/components/ui/Card.tsx`

- [ ] **Step 1: Logo.tsx** (SVG wordmark + mark)

```tsx
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" stroke="#22d3c5" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="8.5" stroke="#22d3c5" strokeWidth="1" opacity="0.4" />
        <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" stroke="#22d3c5" strokeWidth="1" opacity="0.35" />
      </svg>
      <span className="text-base font-semibold tracking-[0.18em] text-ink">
        AVIKRAT
      </span>
    </span>
  );
}
```

- [ ] **Step 2: Button.tsx**

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-cyan text-[#04121a] hover:bg-[#2de3d4] focus-visible:bg-[#2de3d4]",
  ghost:
    "border border-line text-ink hover:border-cyan/60 hover:text-cyan",
} as const;

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: {
  href: string;
  onClick?: () => void;
  variant?: keyof typeof styles;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`;
  if (external) {
    return <a className={cls} href={href}>{children}</a>;
  }
  return <Link className={cls} href={href} onClick={onClick}>{children}</Link>;
}
```

- [ ] **Step 3: Eyebrow.tsx**

```tsx
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
```

- [ ] **Step 4: SectionHeader.tsx**

```tsx
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
```

- [ ] **Step 5: Divider.tsx**

```tsx
export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`hairline ${className}`} />;
}
```

- [ ] **Step 6: Card.tsx** (base surface card with hover lift)

```tsx
export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface ${
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 7: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean. Components are unused so far except via later tasks.

---

## Task 5: Layout, Navbar, Footer

**Files:**
- Create: `src/components/layout/AppShell.tsx`
- Modify: `src/app/layout.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 0: AppShell.tsx** (client wrapper — `MotionConfig` is a client component and cannot be rendered in a server layout)

```tsx
"use client";

import { MotionConfig } from "framer-motion";

export function AppShell({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

- [ ] **Step 1: Rewrite layout.tsx** (Inter font, metadata, JSON-LD, AppShell)

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avikrat.org"),
  title: "AVIKRAT — Long context, without the growing cost",
  description:
    "AVIKRAT is building a new approach to long-context LLM inference using compact persistent hidden states and local decoding.",
  openGraph: {
    title: "AVIKRAT — Long context, without the growing cost",
    description:
      "AI infrastructure for constant-memory long-context inference.",
    url: "https://avikrat.org",
    siteName: "AVIKRAT",
    type: "website",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AVIKRAT",
  email: site.email,
  telephone: site.phone,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-base font-sans text-ink">
        <AppShell>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-[#04121a]"
          >
            Skip to content
          </a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <Navbar />
          {children}
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
```

Note: `next/font/google` downloads Inter at build time. If the build environment is offline, swap to a system font stack in `tailwind.config.ts` (`font-sans: ui-sans-serif, system-ui, ...`) and drop the `Inter` import — but the default build should fetch Inter successfully.

- [ ] **Step 2: Navbar.tsx** (fixed, transparent → blurred on scroll, mobile menu)

```tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="AVIKRAT home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="ghost">
            Work With Us
          </Button>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-all duration-200 ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-full bg-current transition-all duration-200 ${
                open ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-base md:hidden"
          >
            <div className="container-content flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-soft hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-cyan px-3 py-3 text-center text-sm font-medium text-[#04121a]"
              >
                Work With Us
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
```

- [ ] **Step 3: Footer.tsx**

```tsx
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { site, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-content py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-soft">
              {site.tagline}
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-soft">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cyan">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-cyan">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-[0.75rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© MMXXVI AVIKRAT.</p>
          <p>Statistical claims are targets, not measured production benchmarks.</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Temporary home page** so layout has content:

Modify `src/app/page.tsx`:
```tsx
export default function Home() {
  return <main id="main" />;
}
```

- [ ] **Step 5: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean build; home renders header + empty main + footer.

---

## Task 6: Scaffold routes

**Files:**
- Create: `src/components/ui/PlaceholderPage.tsx`
- Create: `src/app/{technology,problem,solutions,applications}/page.tsx`
- Create: `src/app/{benchmarks,research,about,contact}/page.tsx`

- [ ] **Step 1: PlaceholderPage.tsx**

```tsx
import Link from "next/link";
import { Eyebrow } from "./Eyebrow";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="container-content flex min-h-[70vh] flex-col items-start justify-center pt-32">
      <Eyebrow>Coming next</Eyebrow>
      <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-5 max-w-md text-soft">
        This page is being built as part of the site rollout. The technology, its
        validation, and where it applies are all described on the home page today.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan hover:text-[#2de3d4]"
      >
        Back to home
      </Link>
    </section>
  );
}
```

- [ ] **Step 2: One shared metadata helper** — create `src/lib/pageMeta.ts`:

```ts
import type { Metadata } from "next";

export function pageMeta(title: string, description: string): Metadata {
  return { title, description };
}
```

- [ ] **Step 3: 8 route files**, each with metadata via `pageMeta`:

Pattern (repeat for each route):
```tsx
import type { Metadata } from "next";
import { pageMeta } from "@/lib/pageMeta";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = pageMeta(
  "Technology | AVIKRAT",
  "The Hidden State Simulator — encoding long context into compact persistent state."
);

export default function TechnologyPage() {
  return <PlaceholderPage title="Technology / Hidden State Simulator" />;
}
```

Route → title/description pairs:
1. `/technology` — "Technology / Hidden State Simulator" / "The Hidden State Simulator — encoding long context into compact persistent state."
2. `/problem` — "The Long-Context Problem" / "Why standard LLM decoding grows expensive as context lengthens."
3. `/solutions` — "Solution / How It Works" / "How AVIKRAT keeps inference compute nearly constant as context grows."
4. `/applications` — "Applications" / "Where hidden-state inference applies: enterprise copilots, edge AI, agents, real-time systems."
5. `/benchmarks` — "Benchmarks & Validation" / "Current proof-of-concept validation: context slices, error metrics, similarity, checkpoints."
6. `/research` — "Research / Proof of Concept" / "A working simulator that predicts hidden-state structure and tracks validation behavior."
7. `/about` — "About AVIKRAT" / "The company building infrastructure for constant-memory long-context inference."
8. `/contact` — "Contact AVIKRAT" / "Talk to AVIKRAT about benchmarking, pilots, and strategic support."

Want `/` to also work as `/index`? It does by default in App Router.

- [ ] **Step 4: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean build; all 8 routes render header + placeholder + footer; `http://localhost:3000/technology` etc. resolve.

---

## Task 7: Diagram primitives

**Files:**
- Create: `src/components/visualizations/diagram-primitives.tsx`

- [ ] **Step 1: Create diagram-primitives.tsx**

```tsx
"use client";

import { motion } from "framer-motion";

export const VIEW_W = 560;
export const cx = VIEW_W / 2;

export function DiagramFrame({
  label,
  description,
  children,
  viewBox = "0 0 560 700",
  className = "",
}: {
  label: string;
  description: string;
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={viewBox}
      className={`h-auto w-full ${className}`}
      fill="none"
      aria-describedby={undefined}
    >
      <desc>{description}</desc>
      {children}
    </svg>
  );
}

export function FlowLine({
  d,
  color = "rgba(34,211,197,0.4)",
  speed = 1.4,
  id,
}: {
  d: string;
  color?: string;
  speed?: number;
  id?: string;
}) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="4 12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ strokeDashoffset: [0, -32] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function TokenDot({
  x,
  y,
  r = 3.5,
  color = "rgba(59,130,246,0.55)",
  pulse = 0,
}: {
  x: number;
  y: number;
  r?: number;
  color?: string;
  pulse?: number;
}) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={r}
      fill={color}
      animate={
        pulse ? { opacity: [0.25, 0.8, 0.25], y: [y - pulse, y + pulse, y - pulse] } : undefined
      }
      transition={
        pulse
          ? { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: (x + y) % 4 * 0.2 }
          : undefined
      }
    />
  );
}

export function StageBox({
  x,
  y,
  w,
  h,
  label,
  sub,
  active = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  active?: boolean;
}) {
  return (
    <>
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        stroke={active ? "rgba(34,211,197,0.55)" : "#1c2233"}
        strokeWidth="1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      <text
        x={cx}
        y={y + h / 2 - (sub ? 4 : 0)}
        textAnchor="middle"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="11"
        letterSpacing="0.14em"
        fill="#9ba3b5"
      >
        {label}
      </text>
      {sub ? (
        <text
          x={cx}
          y={y + h / 2 + 13}
          textAnchor="middle"
          fontFamily="var(--font-inter), sans-serif"
          fontSize="9"
          letterSpacing="0.1em"
          fill="#5c6474"
        >
          {sub}
        </text>
      ) : null}
    </>
  );
}
```

Note: `TokenDot`'s `pulse` animates the `y` attribute via framer-motion; SSR-safe because values are static in the first render.

- [ ] **Step 2: Verify**

```bash
npm run typecheck
```

Expected: no errors.

---

## Task 8: Hero — section + interactive diagram

**Files:**
- Create: `src/components/visualizations/HeroDiagram.tsx`
- Create: `src/components/sections/home/Hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: HeroDiagram.tsx — static skeleton + stages** (write in one step; file is content-heavy, split: skeleton here, animation layers next)

```tsx
"use client";

import { motion } from "framer-motion";
import {
  DiagramFrame,
  FlowLine,
  TokenDot,
  StageBox,
  cx,
} from "./diagram-primitives";

const HISTORY = [
  { x: 100, y: 86, o: 0.4 },
  { x: 165, y: 86, o: 0.55 },
  { x: 230, y: 86, o: 0.35 },
  { x: 295, y: 86, o: 0.6 },
  { x: 360, y: 86, o: 0.45 },
  { x: 425, y: 86, o: 0.5 },
  { x: 490, y: 86, o: 0.4 },
  { x: 100, y: 112, o: 0.5 },
  { x: 165, y: 112, o: 0.35 },
  { x: 230, y: 112, o: 0.6 },
  { x: 295, y: 112, o: 0.4 },
  { x: 360, y: 112, o: 0.55 },
  { x: 425, y: 112, o: 0.35 },
  { x: 490, y: 112, o: 0.5 },
];

const DECODE = [148, 195, 242, 289, 336, 383, 430];

export function HeroDiagram() {
  return (
    <DiagramFrame
      label="AVIKRAT decoding pipeline"
      description="Long history is read once in a global prefill, compressed into a compact hidden state of constant size, then used to decode tokens from a short local window: the next token."
    >
      {/* Long History */}
      <rect x="60" y="60" width="440" height="88" rx="16" stroke="#1c2233" strokeWidth="1" />
      <text x="60" y="84" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.14em" fill="#5c6474">LONG HISTORY</text>
      {HISTORY.map((t, i) => (
        <TokenDot key={i} x={t.x} y={t.y} color={`rgba(59,130,246,${t.o})`} pulse={2} r={3} />
      ))}

      {/* Streams into prefill */}
      <FlowLine d="M 120 148 Q 120 186 208 214" />
      <FlowLine d="M 280 148 L 280 214" speed={1.1} />
      <FlowLine d="M 440 148 Q 440 186 352 214" />

      {/* Global Prefill */}
      <StageBox x={190} y={214} w={180} h={72} label="GLOBAL PREFILL" sub="read once" active />

      {/* Stream to compact state */}
      <FlowLine d="M 280 286 L 280 330" color="rgba(34,211,197,0.7)" speed={1} />
    </DiagramFrame>
  );
}
```

- [ ] **Step 2: HeroDiagram.tsx — add compact state, local decode, next token, pulses**

Append inside `<DiagramFrame>`, after the final `FlowLine`:

```tsx
      {/* Compact hidden state — cyan core */}
      <motion.circle
        cx={cx}
        cy={400}
        r={58}
        fill="rgba(34,211,197,0.08)"
        stroke="rgba(34,211,197,0.65)"
        strokeWidth="1.4"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx={cx}
        cy={400}
        r={26}
        fill="rgba(34,211,197,0.85)"
        animate={{ r: [26, 34, 26], opacity: [0.85, 0.4, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {[70, 92, 114].map((r, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={400}
          r={r}
          stroke="rgba(34,211,197,0.18)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
        />
      ))}
      <text x={cx} y={478} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="11" letterSpacing="0.14em" fill="#9ba3b5">COMPACT HIDDEN STATE</text>
      <text x={cx} y={496} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.1em" fill="#5c6474">constant size</text>

      {/* Stream to local decode */}
      <FlowLine d="M 280 458 L 280 512" color="rgba(34,211,197,0.7)" speed={1} />

      {/* Local decode window */}
      <rect x="122" y="512" width="316" height="64" rx="14" stroke="#1c2233" strokeWidth="1" />
      <text x="122" y="532" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.14em" fill="#5c6474">LOCAL DECODE</text>
      {DECODE.map((x, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.12 }}>
          <rect x={x} y={546} width="18" height="18" rx="5" fill={i === 6 ? "rgba(34,211,197,0.7)" : "rgba(59,130,246,0.28)"} stroke={i === 6 ? "rgba(34,211,197,0.8)" : "#1c2233"} strokeWidth="1" />
          <text x={x + 9} y={559} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" fill={i === 6 ? "#04121a" : "#5c6474"}>{i === 6 ? "▮" : ""}</text>
        </motion.g>
      ))}

      {/* Next token */}
      <motion.path
        d="M 280 620 l 14 12 l -14 12 l -14 -12 z"
        fill="rgba(34,211,197,0.9)"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "280px 632px", transformBox: "view-box" }}
      />
      <text x={cx} y={660} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="11" letterSpacing="0.14em" fill="#9ba3b5">NEXT TOKEN</text>
```

Note: `transformBox: "view-box"` guarantees scale origin is the SVG coordinate space (browser support is broad; parent renders fine on all evergreen browsers).

- [ ] **Step 3: HeroSection — Hero.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { HeroDiagram } from "@/components/visualizations/HeroDiagram";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(34,211,197,0.07),transparent_55%)]" />
      <div className="container-content relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="eyebrow">
            AI INFRASTRUCTURE · LONG-CONTEXT INFERENCE
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="mt-6 text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tight text-ink"
          >
            Long context.
            <br />
            <span className="text-cyan">Without the growing cost.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            AVIKRAT is building a new approach to long-context LLM inference using compact
            persistent hidden states and local decoding.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/technology">Explore the Technology</Button>
            <Button href="/contact" variant="ghost">Work With Us</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          viewport={viewport}
          className="max-w-[560px] justify-self-center lg:justify-self-end"
        >
          <HeroDiagram />
        </motion.div>
      </div>
    </section>
  );
}
```

Hairline under hero + title html: The section ends with a `Divider` handled by `page.tsx` composition (see Task 15).

- [ ] **Step 4: Wire Hero into page.tsx**

```tsx
import { Hero } from "@/components/sections/home/Hero";

export default function Home() {
  return (
    <main id="main">
      <Hero />
    </main>
  );
}
```

- [ ] **Step 5: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; hero renders with animated pipeline. Manually confirm at `npm run dev` that tokens flow, the cyan core pulses, and there are no hydration warnings in the console.

---

## Task 9: Problem section + diagram

**Files:**
- Create: `src/components/visualizations/ProblemDiagram.tsx`
- Create: `src/components/sections/home/ProblemSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: ProblemDiagram.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { DiagramFrame } from "./diagram-primitives";

const CHAIN = [
  "CONTEXT LENGTH",
  "KV-CACHE GROWTH",
  "MEMORY TRAFFIC",
  "HIGHER COST · SLOWER DECODE",
];

const BARS = [
  { label: "1K", h: 26 },
  { label: "4K", h: 52 },
  { label: "16K", h: 104 },
  { label: "64K", h: 200 },
  { label: "256K", h: 320 },
];

const BAR_X = [60, 160, 260, 360, 460];
const BASELINE = 400;

export function ProblemDiagram() {
  return (
    <DiagramFrame
      label="Growth of standard decoding cost"
      description="As context length increases, the KV cache, memory traffic, and attention cost grow continuously, increasing cost and slowing decoding. Illustrative relationship, not measured data."
      viewBox="0 0 560 480"
    >
      {CHAIN.map((label, i) => (
        <g key={label}>
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <rect x={24 + i * 130} y={48} width={106} height={46} rx="10" stroke="#1c2233" strokeWidth="1" />
            <text
              x={24 + i * 130 + 53}
              y={72}
              textAnchor="middle"
              fontFamily="var(--font-inter), sans-serif"
              fontSize="8"
              letterSpacing="0.12em"
              fill="#9ba3b5"
            >
              {label.split(" · ").map((line) => line)}
            </text>
          </motion.g>
          {i < CHAIN.length - 1 ? (
            <path d={`M ${24 + i * 130 + 112} 71 l 10 0`} stroke="#5c6474" strokeWidth="1.4" markerEnd="none" />
          ) : null}
        </g>
      ))}

      <text x="24" y="140" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.14em" fill="#5c6474">
        KV-CACHE SIZE / MEMORY TRAFFIC
      </text>
      <line x1="24" y1={BASELINE} x2="536" y2={BASELINE} stroke="#1c2233" strokeWidth="1" />

      {BARS.map((b, i) => (
        <g key={b.label}>
          <motion.rect
            x={BAR_X[i] - 26}
            y={BASELINE}
            width="52"
            height={b.h}
            rx="6"
            fill="rgba(59,130,246,0.22)"
            stroke="rgba(59,130,246,0.55)"
            strokeWidth="1"
            initial={{ y: BASELINE, height: 0 }}
            whileInView={{ y: BASELINE - b.h, height: b.h }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <text x={BAR_X[i]} y={BASELINE - b.h - 10} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="10" tabularNums fill="#e8eaf0">
            {b.label}
          </text>
          <text x={BAR_X[i]} y={BASELINE + 22} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" fill="#5c6474">
            CTX
          </text>
        </g>
      ))}

      <motion.path
        d="M 34 388 C 140 360, 200 330, 260 288 C 330 236, 400 160, 520 96"
        stroke="rgba(59,130,246,0.6)"
        strokeWidth="1.6"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
      />
    </DiagramFrame>
  );
}
```

Note: the `CHAIN` text node renders a single line only when no " · " is present; with one it splits into two `<text>` siblings inside one `text` element which is invalid. Fix by rendering two explicit lines — see Step 1b.

- [ ] **Step 1b: Fix multi-line chip text**

Replace the chip text block in ProblemDiagram with:

```tsx
            <text
              x={24 + i * 130 + 53}
              y={70}
              textAnchor="middle"
              fontFamily="var(--font-inter), sans-serif"
              fontSize="8"
              letterSpacing="0.12em"
              fill="#9ba3b5"
            >
              {label.split(" · ")[0]}
            </text>
            {label.split(" · ")[1] ? (
              <text
                x={24 + i * 130 + 53}
                y={82}
                textAnchor="middle"
                fontFamily="var(--font-inter), sans-serif"
                fontSize="8"
                letterSpacing="0.12em"
                fill="#9ba3b5"
              >
                {label.split(" · ")[1]}
              </text>
            ) : null}
```

The chip `height=46` fits the two 8px lines at y 70/82.

- [ ] **Step 2: ProblemSection.tsx**

```tsx
"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProblemDiagram } from "@/components/visualizations/ProblemDiagram";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="problem-title"
            eyebrow="The Problem"
            title={
              <>
                Standard decoding
                <br />
                scales with <span className="text-electric">every token.</span>
              </>
            }
            copy="As context grows, standard decoding keeps expanding the KV cache. Attention cost and memory traffic climb with it — driving up cost and slowing decoding on every turn."
          />
          <p className="mt-6 text-xs text-faint">
            Illustrative relationship — not measured benchmark data.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6 md:p-10">
          <ProblemDiagram />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to page.tsx**

```tsx
import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ProblemSection />
    </main>
  );
}
```

- [ ] **Step 4: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; bars animate upward on scroll into view.

---

## Task 10: Architecture section + animated process

**Files:**
- Create: `src/components/visualizations/ArchitectureProcess.tsx`
- Create: `src/components/sections/home/ArchitectureSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: ArchitectureProcess.tsx** (4 HTML cards + drawing connector line)

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";

const STEPS = [
  {
    n: "01",
    title: "Global Prefill",
    copy: "Read the full history once.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14h10M14 14l-4-4M14 14l-4 4" stroke="#9ba3b5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="6" width="8" height="16" rx="2" stroke="#9ba3b5" strokeWidth="1.4" />
        <path d="M4 8h6M4 20h6" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Compact State",
    copy: "Persist a small learned memory.",
    accent: true,
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="6" fill="rgba(34,211,197,0.2)" stroke="#22d3c5" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="2" fill="#22d3c5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Local Decode",
    copy: "Use a short recent window.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="6" height="12" rx="1.5" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1" />
        <rect x="11" y="8" width="6" height="12" rx="1.5" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1" />
        <rect x="18" y="8" width="6" height="12" rx="1.5" fill="rgba(34,211,197,0.45)" stroke="#22d3c5" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Next Token",
    copy: "Generate efficiently.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 5l9 9-9 9-9-9z" fill="rgba(34,211,197,0.25)" stroke="#22d3c5" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ArchitectureProcess() {
  return (
    <div className="relative">
      <motion.div
        aria-hidden="true"
        className="absolute top-[52px] right-0 left-0 hidden h-px origin-left lg:block"
        style={{ background: "linear-gradient(90deg, rgba(59,130,246,0.5), rgba(34,211,197,0.8))" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {STEPS.map((s) => (
          <motion.li
            key={s.n}
            variants={fadeUp}
            className={`relative flex flex-col gap-4 rounded-2xl border bg-surface p-6 ${
              s.accent ? "border-cyan/50" : "border-line"
            }`}
          >
            {s.accent ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(34,211,197,0.08), transparent 65%)" }}
              />
            ) : null}
            <span className="tech-label">{s.n}</span>
            <span className="text-cyan">{s.glyph}</span>
            <div>
              <h3 className={`text-lg font-semibold ${s.accent ? "text-cyan" : "text-ink"}`}>{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.copy}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
}
```

- [ ] **Step 2: ArchitectureSection.tsx**

```tsx
"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArchitectureProcess } from "@/components/visualizations/ArchitectureProcess";

export function ArchitectureSection() {
  return (
    <section aria-labelledby="architecture-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="architecture-title"
        eyebrow="The Approach"
        title="An architecture built for persistent context."
        copy="History is encoded once into a small persistent state. Everything after that runs against a short local window — so the expensive part of a long conversation happens exactly once."
      />
      <div className="mt-14">
        <ArchitectureProcess />
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to page.tsx**

```tsx
import { ArchitectureSection } from "@/components/sections/home/ArchitectureSection";
// ... after ProblemSection
<ArchitectureSection />
```

- [ ] **Step 4: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; connector line draws left→right; cards stagger in; card 02 has cyan treatment.

---

## Task 11: Scaling section + comparison graph

**Files:**
- Create: `src/components/visualizations/ScalingGraph.tsx`
- Create: `src/components/sections/home/ScalingSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: ScalingGraph.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { DiagramFrame } from "./diagram-primitives";

export function ScalingGraph() {
  return (
    <div>
      <DiagramFrame
        label="Comparative scaling of inference cost"
        description="A conceptual comparison. Traditional inference cost rises steeply as context grows while hidden-state inference stays nearly flat. This is a positioning visualization, not measured benchmark data."
        viewBox="0 0 560 400"
      >
        {/* Axes */}
        <line x1="60" y1="40" x2="60" y2="320" stroke="#1c2233" strokeWidth="1" />
        <line x1="60" y1="320" x2="520" y2="320" stroke="#1c2233" strokeWidth="1" />
        {[320, 240, 160, 80].map((y) => (
          <line key={y} x1="60" y1={y} x2="520" y2={y} stroke="rgba(28,34,51,0.6)" strokeWidth="1" strokeDasharray="2 6" />
        ))}
        <text x="16" y="60" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.12em" fill="#5c6474" transform="rotate(-90 16 60)">
          COMPUTE / MEMORY
        </text>

        {/* X labels */}
        {["1K", "8K", "32K", "128K"].map((t, i) => (
          <text key={t} x={80 + i * 130} y={342} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="10" tabularNums fill="#5c6474">
            {t}
          </text>
        ))}
        <text x="280" y="368" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.12em" fill="#5c6474">
          CONTEXT LENGTH
        </text>

        {/* Traditional curve */}
        <motion.path
          d="M 70 300 C 150 285, 210 245, 260 200 C 320 145, 400 90, 505 58"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <path
          d="M 70 300 C 150 285, 210 245, 260 200 C 320 145, 400 90, 505 58 L 505 320 L 70 320 Z"
          fill="rgba(59,130,246,0.06)"
        />

        {/* Hidden-state line */}
        <motion.path
          d="M 70 305 L 505 296"
          stroke="#22d3c5"
          strokeWidth="2.4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Target annotation */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <rect x="150" y="90" width="252" height="44" rx="8" stroke="rgba(34,211,197,0.4)" strokeWidth="1" fill="rgba(34,211,197,0.06)" />
          <text x="160" y="110" fontFamily="var(--font-inter), sans-serif" fontSize="10" letterSpacing="0.05em" fill="#9ba3b5">
            Hidden-state inference: near-constant cost
          </text>
          <text x="160" y="124" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.05em" fill="#5c6474">
            target: up to 90% lower long-context inference cost
          </text>
        </motion.g>

        {/* Legend */}
        <g transform="translate(60, 384)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#3b82f6" strokeWidth="2" />
          <text x="24" y="3" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.1em" fill="#9ba3b5">TRADITIONAL</text>
          <line x1="110" y1="0" x2="128" y2="0" stroke="#22d3c5" strokeWidth="2.4" />
          <text x="134" y="3" fontFamily="var(--font-inter), sans-serif" fontSize="9" letterSpacing="0.1em" fill="#9ba3b5">HIDDEN-STATE</text>
        </g>
      </DiagramFrame>
      <p className="mt-4 text-center text-xs text-faint">
        Conceptual architecture / positioning visualization — not measured benchmark data.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: ScalingSection.tsx**

```tsx
"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScalingGraph } from "@/components/visualizations/ScalingGraph";

export function ScalingSection() {
  return (
    <section aria-labelledby="scaling-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <ScalingGraph />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            id="scaling-title"
            eyebrow="Scaling"
            title="Designed for flatter scaling."
            copy="Context grows. The cost baseline should stay. By reading history once into a compact persistent state, AVIKRAT aims to keep per-token compute and memory nearly constant as conversations get longer."
          />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-soft">
            This is a target of the architecture, not a published production benchmark.
            The working simulator is where that target gets tested.
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to page.tsx** after ArchitectureSection.

- [ ] **Step 4: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; both curves draw on scroll; target annotation uses exact "target: up to 90% lower long-context inference cost" wording.

---

## Task 12: Applications section ("Where it wins")

**Files:**
- Create: `src/components/sections/home/ApplicationsSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: ApplicationsSection.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const APPS = [
  {
    title: "Enterprise Copilots",
    copy: "Persistent conversations and large document sessions.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 5h20v13H10l-6 5V5z" stroke="#22d3c5" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 10h10M9 13h6" stroke="rgba(34,211,197,0.6)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Edge AI",
    copy: "Smaller persistent memory for constrained devices.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="16" height="16" rx="2" stroke="#22d3c5" strokeWidth="1.5" />
        <rect x="11" y="11" width="6" height="6" rx="1" fill="rgba(34,211,197,0.5)" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="rgba(34,211,197,0.5)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agent Infrastructure",
    copy: "Long-running workflows without exploding state cost.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="#22d3c5" strokeWidth="1.5" />
        <circle cx="19" cy="8" r="3" stroke="#22d3c5" strokeWidth="1.5" />
        <circle cx="14" cy="21" r="3.2" fill="rgba(34,211,197,0.18)" stroke="#22d3c5" strokeWidth="1.5" />
        <path d="M11 10.4 12.6 18M17 10.4 15.4 18" stroke="rgba(34,211,197,0.55)" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Real-Time Systems",
    copy: "Continuous context becomes practical when memory stays bounded.",
    glyph: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M3 14h4l3-8 4 14 3-9 2.5 3H25" stroke="#22d3c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ApplicationsSection() {
  return (
    <section aria-labelledby="apps-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          id="apps-title"
          eyebrow="Applications"
          title="Where it wins."
        />
        <Button href="/applications" variant="ghost" className="shrink-0">
          Explore Applications
        </Button>
      </div>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {APPS.map((app) => (
          <motion.li
            key={app.title}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-cyan/50"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(34,211,197,0.08), transparent 60%)" }}
            />
            <span className="text-cyan">{app.glyph}</span>
            <h3 className="mt-5 text-base font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
              {app.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-soft">{app.copy}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx** after ScalingSection.

- [ ] **Step 3: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; 4-col grid on desktop, 2-col tablet, 1-col mobile; hover brightens cyan accent.

---

## Task 13: Proof-of-concept section

**Files:**
- Create: `src/components/sections/home/ProofSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: ProofSection.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const CHECKS = [
  {
    label: "True vs Predicted Context Slices",
    copy: "Compares the simulated hidden state against the observed structure of the context.",
  },
  {
    label: "Error Metrics",
    copy: "Tracks how predicted state diverges from the reference across runs.",
  },
  {
    label: "Cosine Similarity",
    copy: "Measures structural alignment between prediction and reference.",
  },
  {
    label: "Checkpoint Selection",
    copy: "Determines which slices of context are worth persisting.",
  },
];

export function ProofSection() {
  return (
    <section aria-labelledby="proof-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            id="proof-title"
            eyebrow="Proof of Concept"
            title="From simulator to infrastructure."
            copy="A working simulator already predicts hidden-state structure and tracks validation behavior. It is the first step toward turning the architecture into production infrastructure."
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-soft">
            These are the evaluation dimensions the current system exercises, being prepared
            for larger-scale benchmarking.
          </p>
          <div className="mt-8">
            <Button href="/research">Explore the Research</Button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="rounded-2xl border border-line bg-surface p-6 md:p-8"
        >
          <p className="eyebrow">Current validation</p>
          <ul className="mt-6 divide-y divide-line">
            {CHECKS.map((c) => (
              <motion.li
                key={c.label}
                variants={fadeUp}
                className="flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span aria-hidden="true" className="relative mt-1.5 h-2 w-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-cyan/30" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-cyan/40 [animation-duration:3s]" />
                  <span className="absolute inset-[2px] rounded-full bg-cyan" />
                </span>
                <div>
                  <h3 className="text-[0.9375rem] font-medium text-ink">{c.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-soft">{c.copy}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx** after ApplicationsSection.

- [ ] **Step 3: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; validation panel rows stagger in with pulsing status dots. No fabricated metrics anywhere.

---

## Task 14: Partner / CTA cards section

**Files:**
- Create: `src/components/sections/home/PartnerSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: PartnerSection.tsx**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";

const OFFERS = [
  {
    title: "Benchmark Collaborators",
    copy: "Validate perplexity, latency and GPU memory at larger context lengths.",
  },
  {
    title: "Pilot Opportunities",
    copy: "Explore long-context assistants, enterprise workflows and edge inference.",
  },
  {
    title: "Strategic Support",
    copy: "Help turn the simulator into production infrastructure.",
  },
];

export function PartnerSection() {
  return (
    <section aria-labelledby="partner-title" className="container-content py-24 md:py-32 scroll-mt-20">
      <SectionHeader
        id="partner-title"
        eyebrow="Partners"
        title="Help us prove the next step."
        copy="AVIKRAT is looking for collaborators to validate the architecture at scale and partners to take it into real workloads."
      />
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {OFFERS.map((o) => (
          <motion.li key={o.title} variants={fadeUp}>
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-8 transition-colors duration-300 hover:border-cyan/50"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-cyan">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{o.copy}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan">
                Get in touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx** after ProofSection.

- [ ] **Step 3: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; three cards with arrow affordance to `/contact`.

---

## Task 15: Final CTA + home composition

**Files:**
- Create: `src/components/sections/home/FinalCtaSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: FinalCtaSection.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="cta-title" className="container-content py-28 md:py-40">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-20 text-center md:px-16 md:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,211,197,0.09), transparent 55%)" }}
        />
        <motion.h2
          id="cta-title"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-tight text-ink"
        >
          Build the next generation
          <br />
          of <span className="text-cyan">long-context AI.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-soft">
          AVIKRAT is developing infrastructure for AI systems that can carry more context
          without carrying the full computational burden.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${site.email}`} external>
            Talk to AVIKRAT
          </Button>
          <Button href="/technology" variant="ghost">
            Explore Technology
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-faint">
          <a href={`mailto:${site.email}`} className="hover:text-cyan">{site.email}</a>
          <span aria-hidden="true">·</span>
          <a href={site.phoneHref} className="hover:text-cyan">{site.phone}</a>
        </motion.p>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Compose final home page — page.tsx**

```tsx
import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ArchitectureSection } from "@/components/sections/home/ArchitectureSection";
import { ScalingSection } from "@/components/sections/home/ScalingSection";
import { ApplicationsSection } from "@/components/sections/home/ApplicationsSection";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { PartnerSection } from "@/components/sections/home/PartnerSection";
import { FinalCtaSection } from "@/components/sections/home/FinalCtaSection";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Divider className="container-content" />
      <ProblemSection />
      <ArchitectureSection />
      <Divider className="container-content" />
      <ScalingSection />
      <ApplicationsSection />
      <Divider className="container-content" />
      <ProofSection />
      <PartnerSection />
      <FinalCtaSection />
    </main>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npm run typecheck && npm run build
```

Expected: clean; full page composition renders hero → problem → architecture → scaling → applications → proof → partners → final CTA, with thin dividers between the major narrative beats.

---

## Task 16: Final quality pass

**Files:**
- Review: all of `src/`

- [ ] **Step 1: Adversarial edits pass**

Open every file under `src/` and check:
1. **Claim discipline** — grep for `90` — must appear ONLY in `docs/...`, the ScalingGraph annotation, and (if referenced) `lib/site.ts` `claimTarget`. No other fabricated numbers anywhere (`grep -rn "90\|%" src/` should return only the annotation and unaffected strings).
2. **Token classes** — no raw hex colors in components except `#04121a` (primary button text) and SVG stroke fills. Convert anything else to Tailwind tokens.
3. **Reduced motion** — MotionConfig in layout covers framer; the CSS `animate-ping` and stream loops are decorative. Acceptable.
4. **A11y** — every `section` has `aria-labelledby`; hero + all DiagramFrames have labels + desc; buttons have readable labels; mobile menu has `aria-expanded`.
5. **Responsive smoke test** — check any horizontal overflow at 360px and that hero diagram scales (it uses viewBox + w-full).

- [ ] **Step 2: grep + typecheck + build + prod run**

```bash
grep -rn "90\|lorem\|Lorem\|TODO\|FIXME" src/ || echo "clean"
npm run typecheck
npm run build
npm run start
```

Then curl `http://localhost:3000/` and one scaffold route; confirm 200s. Kill the server.

- [ ] **Step 3: Report**

Summarize what was built, note the claims-language guardrails, list scaffold routes, and recommend next steps (remaining pages, OG image, favicon).