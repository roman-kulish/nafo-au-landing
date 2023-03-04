module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: [],
    })
  ],
};
