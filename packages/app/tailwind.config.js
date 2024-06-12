/* eslint-disable no-undef */
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-overlay': 'rgba(41, 67, 69, 1)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: 'rgba(0, 39, 43, 1)',
            },
            default: {
              100: 'rgba(41, 67, 69, 1)',
              DEFAULT: 'rgba(62, 95, 99, 1)',
              200: 'rgba(62, 95, 99, 1)',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
};
