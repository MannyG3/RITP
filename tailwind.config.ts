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
        navy: "#002147",
        slate: "#334155",
        gold: "#D4AF37"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-roboto)", "Roboto", "sans-serif"]
      },
      maxWidth: {
        grid: "1280px"
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
};

export default config;
