import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default async ({ mode }) => {

	const plugins = [
		react(),
		vanillaExtractPlugin(),
	];
	const options = {};

	if (mode === 'mock') {

		const { nodePolyfills } = await import('vite-plugin-node-polyfills');

		plugins.push(
			nodePolyfills({
				exclude: [
					'fs',
				],
				globals: {
					Buffer: true,
					global: true,
					process: true,
				},
				protocolImports: true,
			})
		);

		Object.assign(options, {
			define: {
				'__dirname': JSON.stringify(__dirname)
			}
		});
	}

	return defineConfig({
		plugins,
		envDir: './environments',
		server: {
			host: true,
			port: 8001,
		},
		resolve: {
			alias: [
				{
					find: './runtimeConfig',
					replacement: './runtimeConfig.browser', // ensures browser compatible version of AWS JS SDK is used
				},
			]
		},
		...options,
	});
}