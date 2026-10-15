/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F1",
        "warm-white": "#FAFAF8",
        charcoal: "#1A1A1A",
        graphite: "#2C2C2C",
        stone: "#6B6B6B",
        ash: "#9A9A9A",
        border: "#E2DDD6",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
