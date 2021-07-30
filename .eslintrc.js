module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "no-console": "error",
    },
}
