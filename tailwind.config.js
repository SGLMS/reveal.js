/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sig/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        'print' : { 'raw': 'print' },
      }
    },
  },
  plugins: [],
}

