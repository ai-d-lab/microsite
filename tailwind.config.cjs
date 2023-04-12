/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  blue: {
				950: '#39FF14',
			  },
			}
		  },
		},
	plugins: [
		require('@tailwindcss/line-clamp'),
	],
}
