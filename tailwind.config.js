/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#030303",
      deep: "#080808",
      surface: "#0E0E0E",
      panel: "#131313",
      border: "#1A1A1A",
      "border-lit": "#242424",
      white: "#EDF0EE",
      "white-dim": "#7A8C82",
      "white-ghost": "#2E3830",
      tiffany: "#81C5B8",
      "tiffany-dim": "#4A8C81",
      "tiffany-deep": "#1A3D38",
      "teal-ghost": "#0F2420",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0",
    },
    fontFamily: {
      display: ["var(--font-bebas)", "sans-serif"],
      serif: ["var(--font-cormorant)", "serif"],
      mono: ["var(--font-dm-mono)", "monospace"],
    },
    extend: {
      borderColor: {
        DEFAULT: "#1A1A1A",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -1%)" },
          "30%": { transform: "translate(1%, 1%)" },
          "50%": { transform: "translate(-1%, 1%)" },
          "70%": { transform: "translate(1%, -1%)" },
          "90%": { transform: "translate(-1%, 0)" },
        },
        "pulse-dot": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.6)", opacity: "0.6" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bar-grow": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        grain: "grain 0.3s infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "count-up": "count-up 0.6s ease-out forwards",
        "bar-grow": "bar-grow 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
