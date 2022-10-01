/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        orange: "#fb923c",
        secondary: "#64748b",
        dark: "#334155",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
