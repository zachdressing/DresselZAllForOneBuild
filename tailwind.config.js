/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./pages/*.{html,js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        grey : '#555555'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

