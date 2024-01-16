/** @type {import('prettier').Config} */
const config = {
	/* Base options */
	plugins: [
		'prettier-plugin-tailwindcss'
		/* add more TailwindCSS plugins here */
	],

	/* 'prettier-plugin-tailwindcss' options */
	tailwindConfig: './tailwind.config.ts', // Path to the Tailwind config file.
	tailwindFunctions: ['cn'] // List of custom function and tag names that contain classes.
};

export default config;