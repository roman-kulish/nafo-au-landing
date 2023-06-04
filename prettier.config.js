const pluginTailwind = require("prettier-plugin-tailwindcss");
const pluginGoTemplate = require("prettier-plugin-go-template");

module.exports = {
  plugins: [pluginGoTemplate],
  pluginSearchDirs: false,
  tailwindConfig: "./tailwind.config.js",
  semi: true,
  endOfLine: "lf",
  singleQuote: true,
  trailingComma: "es5",
  overrides: [
    {
      files: ["*.css"],
      options: {
        plugins: [pluginTailwind],
      },
    },
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
    {
      files: ["./content/**/*.html", "./layouts/**/*.html"],
      options: {
        plugins: [pluginGoTemplate, pluginTailwind],
      },
    },
  ],
};
