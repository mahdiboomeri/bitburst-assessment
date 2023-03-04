/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'],
    },
    extend: {
      colors: {
        'chrome': '#EEEEEE',
        'light-gray': '#CCCCCC',
        'normal-gray': '#BBBBBB',
        'dark-gray': '#AAAAAA',
        'dark': '#121212',

        'dark-blue': '#005FBC',
        'normal-blue': '#0080FF',
        'light-blue': '#41A0FF',
      },
    },
  },
  plugins: [],
}
