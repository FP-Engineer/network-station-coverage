import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
	plugins: [
		react(),
		vanillaExtractPlugin(),
		nodePolyfills({
			exclude: [
				'fs', // Excludes the polyfill for `fs` and `node:fs`.
			],
			globals: {
				Buffer: true, // can also be 'build', 'dev', or false
				global: true,
				process: true,
			},
			// Whether to polyfill `node:` protocol imports.
			protocolImports: true,
		})
	],
	envDir: './environments',
	define: {
		'__dirname': JSON.stringify(__dirname)
	}
})

//export default ({ mode }) => {

//	const plugins = [
//		react(),
//		vanillaExtractPlugin()
//	];

//	if (mode === 'mock') {
//		plugins.push(nodePolyfills({
//			// To exclude specific polyfills, add them to this list.
//			exclude: [
//				'fs', // Excludes the polyfill for `fs` and `node:fs`.
//			],
//			// Whether to polyfill specific globals.
//			globals: {
//				Buffer: true, // can also be 'build', 'dev', or false
//				global: true,
//				process: true,
//			},
//			// Whether to polyfill `node:` protocol imports.
//			protocolImports: true,
//		}));
//	}

//	return defineConfig({
//		envDir: './environments',
//		plugins,
//	});
//};