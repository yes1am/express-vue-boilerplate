module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/strongly-recommended"
  ],
  rules: {
  }
}