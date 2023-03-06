/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      body: ["Sofia Sans", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
