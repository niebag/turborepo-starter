import baseOptions from './prettier.config.base.js';
import tailwindcssOptions from './prettier.config.tailwindcss.js';

const basePlugins = baseOptions.plugins ?? [];
const tailwindcssPlugins = tailwindcssOptions.plugins ?? [];

/** @type {import('prettier').Config} */
const config = {
	/* Base options */
	plugins: [
		...basePlugins,
		...tailwindcssPlugins,
		/* add more plugins here */
	],

	/* Formatting rules */
	jsxSingleQuote: true, // Use single quotes in JSX.
	bracketSameLine: true, // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
};

export default config;