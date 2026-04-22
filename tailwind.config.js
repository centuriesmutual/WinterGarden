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
      void: "#000000",
      ink: "#070503",
      black: "#0A0806",
      deep: "#120E09",
      surface: "#18130C",
      panel: "#1F1810",
      sepia: "#2B211A",
      border: "#2A2118",
      "border-lit": "#3A2E22",
      paper: "#EFE8D8",
      "paper-dim": "#B8AD96",
      "paper-ghost": "#5A5142",
      "paper-shadow": "#342D22",
      gold: "#C9A961",
      "gold-dim": "#8A7644",
      "gold-deep": "#3E331B",
      "gold-ghost": "#1F1A0F",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0",
    },
    fontFamily: {
      display: ["var(--font-playfair)", "serif"],
      serif: ["var(--font-cormorant)", "serif"],
      body: ["var(--font-garamond)", "serif"],
    },
    extend: {
      borderColor: {
        DEFAULT: "#2A2118",
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
          "50%": { transform: "scale(1.6)", opacity: "0.55" },
        },
        "slow-pulse": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        candle: {
          "0%, 100%": { opacity: "0.9", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.02)" },
        },
      },
      animation: {
        grain: "grain 0.3s infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "slow-pulse": "slow-pulse 3s ease-in-out infinite",
        candle: "candle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
