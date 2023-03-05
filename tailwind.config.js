/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      body: ["Advent Pro", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
