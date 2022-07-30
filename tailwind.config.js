/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: 'hsl(30, 38%, 92%)',
        darkcyan: 'hsl(158, 36%, 37%)',
        darkblue: 'hsl(212, 21%, 14%)',
        grayishblue: 'hsl(228, 12%, 48%)'
      },
      fontFamily: {
        'Fraunces': ['Fraunces', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serrif']
      },
    },
  },
  plugins: [],
}
