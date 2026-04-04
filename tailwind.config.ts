import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'infinite-scroll-desktop': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-176px * 8 - 2rem))' },
        },
        'infinite-scroll-mobile': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-120px * 8 - 1rem))' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll-desktop 30s linear infinite',
        'infinite-scroll-mobile': 'infinite-scroll-mobile 40s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;