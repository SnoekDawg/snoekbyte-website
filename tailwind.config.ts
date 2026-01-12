import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SnoekByte Brand Colors
        navy: {
          DEFAULT: "#0A1628",
          50: "#1E3A5F",
          100: "#162D4A",
          200: "#122438",
          300: "#0E1C2D",
          400: "#0A1628",
          500: "#070F1A",
          600: "#050B13",
          700: "#03070C",
          800: "#010305",
          900: "#000000",
        },
        circuit: {
          DEFAULT: "#4DC3E0",
          50: "#D4F1F8",
          100: "#C2EBF5",
          200: "#9EDFF0",
          300: "#7AD3EA",
          400: "#56C7E5",
          500: "#4DC3E0",
          600: "#24B4D6",
          700: "#1C8DA7",
          800: "#146678",
          900: "#0C3F49",
        },
        pike: {
          DEFAULT: "#5CB85C",
          50: "#C8E6C8",
          100: "#B9DFB9",
          200: "#9CD29C",
          300: "#7FC57F",
          400: "#62B862",
          500: "#5CB85C",
          600: "#48A448",
          700: "#3D7A3D",
          800: "#2C5A2C",
          900: "#1B3A1B",
        },
        // Functional colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "circuit-pattern": "url('/images/circuit-pattern.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0A1628 0%, #1E3A5F 50%, #0A1628 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(77, 195, 224, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(77, 195, 224, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-circuit": "0 0 20px rgba(77, 195, 224, 0.4)",
        "glow-pike": "0 0 20px rgba(92, 184, 92, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
