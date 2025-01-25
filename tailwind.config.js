/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './*/templates/*/*.html', 
    './*/templates/*/*/*.html', 
    './*/templates/*/*/*/*.html', 
    './*/*.py',
    './static/js/*.js', // Added this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
