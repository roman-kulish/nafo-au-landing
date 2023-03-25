const path = require("path");

const rootDir = path.resolve(__dirname, '..', '..')
const theme = path.basename(__dirname)

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    path.resolve(rootDir, "themes", theme, "layouts/**/*.html"),
    path.resolve(rootDir, "content/**/layouts/**/*.html"),
    path.resolve(rootDir, "layouts/**/*.html"),
    path.resolve(rootDir, "content/**/*.html")
  ],
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
