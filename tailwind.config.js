/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       ...defaultColors,
       ...{
        Gray:'#323334',
      Red:'#D01C28',
      Yellow:' #FFEAAE',
      Purple:'#5F00D9'
       }
      },
     
    },
  },
  plugins: [],
}