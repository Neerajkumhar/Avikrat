import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0px",
      sm: "0px",
      DEFAULT: "0px",
      md: "0px",
      lg: "0px",
      xl: "0px",
      "2xl": "0px",
      "3xl": "0px",
      full: "9999px",
    },
    extend: {
      colors: {
        base: "rgb(var(--bg-base) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        surface2: "rgb(var(--bg-surface-2) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        ink: "rgb(var(--text-primary) / <alpha-value>)",
        soft: "rgb(var(--text-secondary) / <alpha-value>)",
        faint: "rgb(var(--text-muted) / <alpha-value>)",
        charcoal: "rgb(var(--accent) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentSoft: "rgb(var(--accent-soft) / <alpha-value>)",
        cyan: "rgb(var(--text-primary) / <alpha-value>)",
        cyanBright: "rgb(var(--text-secondary) / <alpha-value>)",
        electric: "rgb(var(--accent-2) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-plex-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        eyebrow: "0.22em",
        architectural: "0.25em",
        nav: "0.14em",
      },
      maxWidth: {
        content: "75rem", // 1200px
        hero: "77.5rem", // 1240px max-width container
        wide: "80rem",  // 1280px
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", md: "2rem" },
      },
    },
  },
  plugins: [],
};

export default config;
