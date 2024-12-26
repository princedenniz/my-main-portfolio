const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Add Poppins as a custom font
      },
    },
  },
  plugins: [],
}