module.exports = {
	root: true,
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': ['warn'],
		'no-console': ['warn'],
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'comma-dangle': ['error', 'always-multiline'],
		'modules-newline/import-declaration-newline': 'warn',
		'modules-newline/export-declaration-newline': 'warn',
		'no-restricted-imports': [
			'error',
			{
				patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
			},
		],
	},
	globals: { React: 'writable' },
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'eslint:recommended',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 12,
	},
	plugins: [
		'react',
		'modules-newline',
	],
}
