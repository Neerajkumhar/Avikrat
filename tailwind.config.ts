import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg-base) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        surface2: "rgb(var(--bg-surface-2) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        ink: "rgb(var(--text-primary) / <alpha-value>)",
        soft: "rgb(var(--text-secondary) / <alpha-value>)",
        faint: "rgb(var(--text-muted) / <alpha-value>)",
        cyan: "rgb(var(--accent-cyan) / <alpha-value>)",
        cyanBright: "rgb(var(--accent-cyan-bright) / <alpha-value>)",
        electric: "rgb(var(--accent-blue) / <alpha-value>)",
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
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", md: "2.5rem" },
      },
    },
  },
  plugins: [],
};

export default config;
