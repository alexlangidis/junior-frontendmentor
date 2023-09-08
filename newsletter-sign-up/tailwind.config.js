/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("../app/images/icon-list.svg")',
      },
    }
  },
  plugins: [],
}