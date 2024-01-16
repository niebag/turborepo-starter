/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "@repo/eslint-config/base.js"
  ],
};

module.exports = config;
