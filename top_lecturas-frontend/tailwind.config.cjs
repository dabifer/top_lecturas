/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#471AA0',
            primaryHover: '#6535D5',
        }
    },
  },
  plugins: [],
  darkMode: 'class',
}
