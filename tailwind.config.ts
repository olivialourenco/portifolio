import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: "#18181b",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        accent: "#3f3f46",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        surface: "0 0 0 1px rgba(63, 63, 70, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
