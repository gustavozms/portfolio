import tailwindcssTypography from '@tailwindcss/typography';
import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		transitionTimingFunction: {
			DEFAULT: 'cubic-bezier(0.19, 1, 0.22, 1)'
		},
		transitionDuration: {
			DEFAULT: '250ms'
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1280px'
			}
		},
		fontFamily: {
			sans: [
				'Ubuntu Sans Variable',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			]
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ec1c24',
					50: '#fff1f2',
					100: '#ffe0e1',
					200: '#ffc6c8',
					300: '#ff9ea2',
					400: '#ff656b',
					500: '#fe353d',
					600: '#ec1c24',
					700: '#c60f16',
					800: '#a41016',
					900: '#871519',
					950: '#4a0508'
				},
				secondary: {
					DEFAULT: '#1E293B',
				}
			}
		}
	},
	plugins: [tailwindcssAnimate, tailwindcssTypography]
};