/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, ts, jsx, js}'],
  theme: {
    extend: {
      height: {
        headerMobile: 72 / 16 + 'rem',
        headerDesktop: 101 / 16 + 'rem',
      },
      width: {
        headerMobile: 72 / 16 + 'rem',
        headerDesktop: 101 / 16 + 'rem',
      },
      colors: {
        purple: {
          light: '#9277FF',
          DEFAULT: '#7C5DFA',
        },
        dark: {
          background: '#131625',
        },
        light: {
          background: '#F8F8FB',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
