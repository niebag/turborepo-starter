/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
      "plugin:@next/next/recommended",
      "@repo/eslint-config/eslint.base.cjs"
    ],
  };
  
  module.exports = config;