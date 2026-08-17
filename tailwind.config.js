/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f1ebdc",
        "paper-2": "#e8e0cc",
        ink: "#26251f",
        "ink-2": "rgba(38,37,31,0.52)",
        faint: "rgba(38,37,31,0.16)",
        hair: "rgba(38,37,31,0.22)",
        accent: "#c9a96e",
      },
      fontFamily: {
        grotesk: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
        hand: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
