import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#EDF4F1",
          100: "#D0E6DC",
          200: "#A1CCBA",
          300: "#72B397",
          400: "#439975",
          500: "#1E7A56",
          600: "#0F3D2E",
          700: "#0C3125",
          800: "#09251B",
          900: "#061912",
          950: "#030D09"
        },
        ink:     "#0B0F0E",
        muted:   "#6B7280",
        surface: "#F5F7F6",
        accent:  "#C6A96B"
      },
      boxShadow: {
        card:         "0 2px 12px -2px rgba(11,15,14,0.07), 0 1px 4px -1px rgba(11,15,14,0.04)",
        "card-hover": "0 8px 32px -4px rgba(11,15,14,0.14), 0 2px 8px -2px rgba(11,15,14,0.06)",
        "card-lg":    "0 20px 60px -12px rgba(11,15,14,0.22)"
      },
      borderRadius: {
        xl2:  "1rem",
        "3xl": "1.5rem"
      },
      fontFamily: {
        sans:    ["var(--font-sans)",    "'Inter'",  "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "'Sora'",   "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "soft-grid": "radial-gradient(circle at 1px 1px, rgba(15,61,46,0.07) 1px, transparent 0)",
        "hero-glow": "linear-gradient(145deg, #0F3D2E 0%, #0B0F0E 100%)"
      }
    }
  },
  plugins: []
};

export default config;
