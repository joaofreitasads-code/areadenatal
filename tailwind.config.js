/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fbf7f4',
          100: '#f5ebe3',
          200: '#ebd9cb',
          300: '#dcbeaa',
          400: '#c59a7a',
          500: '#a67752',
          600: '#8c5e3c',
          700: '#6f472d',
          800: '#523421',
          900: '#382216',
          950: '#23140c',
        },
        beige: {
          50: '#fcfbf8',
          100: '#f7f4ed',
          200: '#eee6d8',
          300: '#dfd2bc',
          400: '#cebc9e',
          500: '#bc8f65',
          600: '#a5794f',
          700: '#855e3c',
          800: '#6b4b32',
          900: '#543b27',
          950: '#2d1f14',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
