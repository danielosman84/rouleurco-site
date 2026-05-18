import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#001B3D",
          "navy-mid": "#002A5C",
          blue: "#2563EB",
          "blue-hover": "#1D4ED8",
          "blue-light": "#EFF6FF",
          lightbg: "#F5F7FA",
          "off-white": "#F8FAFC",
          light: "#F1F5F9",
          mid: "#E2E8F0",
          text: "#0F172A",
          "text-2": "#334155",
          muted: "#64748B",
          amber: "#F59E0B",
          green: "#10B981",
          red: "#DC2626",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
        btn: "6px",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
