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
    fontFamily: {
      sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      display: [
        "var(--font-inter)",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      serif: ["var(--font-inter)", "ui-sans-serif", "sans-serif"],
      body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      borderColor: {
        DEFAULT: "#2A2118",
      },
      borderRadius: {
        none: "0",
        sm: "6px",
        DEFAULT: "10px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
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
      },
      animation: {
        grain: "grain 0.3s infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
