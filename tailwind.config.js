// @ts-check
// @ts-ignore
/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B122A',
        secondary: '#0381FF',
        baseBg: '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
      maxWidth: {
        '1200px': '1200px',
        '960px': '960px',
        '720px': '720px',
      },
    },
  },
  plugins: [],
};

module.exports = config;
