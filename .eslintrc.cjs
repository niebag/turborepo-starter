/** @type {import("eslint").Linter.Config} */
const config = {
	ignorePatterns: ['apps/*', 'packages/*'], // This is the base configuration for this monorepo, so the apps and packages are ignored as they should have their own configuration.
	extends: ['@repo/eslint-config/base.js']
};

module.exports = config;
