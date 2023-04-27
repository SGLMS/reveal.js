/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sig.reveal/**/*.{html,js}"
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

