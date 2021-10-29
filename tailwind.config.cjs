const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			}
		}
	},

	plugins: [
		require('daisyui'),
	]
};

module.exports = config;
