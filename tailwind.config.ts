import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A3A6E",
          dark: "#0D1E38",
          deep: "#091629",
          light: "#254C8A"
        },
        crimson: {
          DEFAULT: "#C41E3A",
          hover: "#A81830",
          light: "#FDE8EB"
        },
        gold: {
          DEFAULT: "#D4A017",
          hover: "#B88A12",
          light: "#FDF8E7"
        },
        slate: {
          DEFAULT: "#334155",
          muted: "#64748B",
          light: "#94A3B8"
        },
        background: "#F8F9FA",
        surface: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Satoshi", "var(--font-jakarta)", "sans-serif"],
        heading: ["Satoshi", "var(--font-outfit)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      maxWidth: {
        grid: "1280px"
      },
      boxShadow: {
        card: "0 8px 32px rgba(13, 30, 56, 0.06)",
        cardHover: "0 16px 48px rgba(13, 30, 56, 0.12)",
        island: "0 12px 40px rgba(13, 30, 56, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
