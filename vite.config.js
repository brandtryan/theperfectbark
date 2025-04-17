import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url'; //this is needed for the alias

export default defineConfig({
	root: './', // Your root directory is where your index.html and package.json are.
	publicDir: 'static', // Or 'static', if you named it that
	build: {
		outDir: 'dist', // Output to the dist folder
	},
	server: {
		open: true, //open in browser automatically
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./', import.meta.url)), //create an alias for importing files
		},
	},
});
