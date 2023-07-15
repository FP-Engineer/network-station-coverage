import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default ({ mode }) => {

	const plugins = [
		react(),
		vanillaExtractPlugin(),
	];
	const options = {};

	if (mode === 'mock') {
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
		...options,
	});
}