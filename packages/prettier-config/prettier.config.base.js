/** @type {import('prettier').Config} */
const config = {
	/* Base options */
	plugins: ['prettier-plugin-organize-imports'],

	/* Formatting rules */
	tabWidth: 4, // Specify the number of spaces per indentation-level.
	useTabs: true, // Indent lines with tabs instead of spaces
	semi: true, // Print semicolons at the ends of statements.
	singleQuote: true, // Use single quotes instead of double quotes.
	jsxSingleQuote: true, // Use single quotes in JSX.
	trailingComma: 'none', // Print trailing commas wherever possible.
	bracketSpacing: true, // Print spaces between brackets in object literals.
	bracketSameLine: true, // Put the `>` of a multi-line JSX element at the end of the last line instead of being alone on the next line.
	printWidth: 120, // Specify the line length that the printer will wrap on.
};

export default config;