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
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", md: "2.5rem" },
      },
    },
  },
  plugins: [],
};

export default config;
