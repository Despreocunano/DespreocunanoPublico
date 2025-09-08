/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#c70036',
        secondary: '#667eea',
        accent: '#764ba2',
        lovio: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#c70036',
          600: '#b91c37',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#5f1a1a',
        }
      },
      fontFamily: {
        serif: ['serif'],
      },
    },
  },
  plugins: [],
}
