const path = require("path");

const rootDir = __dirname

module.exports = {
    plugins: [
        require("tailwindcss")(path.resolve(rootDir, 'tailwind.config.js')),
        require("autoprefixer")({path: [rootDir]})
    ],
};
