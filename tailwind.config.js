/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        text: '#EDEDED',
        muted: '#A0A0A0',
        border: '#222222',
      },
    },
  },
  plugins: [],
};
