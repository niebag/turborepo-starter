/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "@repo/eslint-config/.eslintrc.base.js"
  ],
};

module.exports = config;
