/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "layouts/**/*.html",
        "content/**/*.html",
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
