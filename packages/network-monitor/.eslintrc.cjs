const rules = {
	ON: 2,
	OFF: 0,
	WARN: 1
};

module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react-refresh',
	],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'indent': [rules.ON, 'tab']
	}
};