const path = require("node:path");

const rootDir = path.resolve(__dirname, '..', '..')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        path.resolve(rootDir, "themes", path.basename(__dirname), "layouts/**/*.html"),
        path.resolve(rootDir, "content/**/layouts/**/*.html"),
        path.resolve(rootDir, "layouts/**/*.html"),
        path.resolve(rootDir, "content/**/*.html"),
        path.resolve(rootDir, "node_modules/flowbite/**/*.js"),
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
    plugins: [
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
};
