import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
