/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./examples-tailwindcss/**/*.{html,js}",
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

