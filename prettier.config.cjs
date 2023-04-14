/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    trailingComma: "none",
    printWidth: 160,
    tabWidth: 4,
    bracketSameLine: true,
    bracketSpacing: true
};

module.exports = config;
