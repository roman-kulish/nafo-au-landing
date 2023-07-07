/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "layouts/**/*.html",
        "content/**/*.html",
        "./src/**/*.js",
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
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('flowbite/plugin')
    ],
};
