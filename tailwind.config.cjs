/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'logoSekolah': ['Righteous', 'cursive'],
        'fontHeading': ['Acme', 'sans-serif'],
        'fontFooter' : ['Sofia Sans Condensed', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
