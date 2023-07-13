module.exports = {
	preset: 'ts-jest',
	automock: false,
	testMatch: [
		'<rootDir>/src/**/*.spec.{ts,tsx}',
	],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'dist/',
		'main.tsx',
		'<rootDir>/src/types/',
	],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,ts,tsx,jsx}',
		'!<rootDir>/src/**/*.d.ts',
		'!<rootDir>/src/**/*.css.ts',
		'!<rootDir>/src/**/*.stories.*',
		'!<rootDir>/**/index.ts',
		'!<rootDir>/**/Constants.ts',
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['./jest.setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'\\.css\\.ts$': '@vanilla-extract/jest-transform',
	},
};