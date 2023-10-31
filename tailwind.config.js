/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E5631',
        inputGrey: '#ECECEC',
        switchGrey: '#D9D9D9',
        textGrey: '#4E4B4B'
      },
    },
  },
  plugins: [],
}

