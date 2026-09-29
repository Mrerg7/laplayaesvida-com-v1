/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#E8D5A3',
          400: '#C5A46E',
          500: '#B8944F',
        },
        tide: {
          500: '#1F6F8B',
          700: '#155A72',
        },
      },
      minHeight: {
        tap: '48px',
      },
      minWidth: {
        tap: '48px',
      },
    },
  },
  plugins: [],
};
