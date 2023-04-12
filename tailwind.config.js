/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#242F40',
        secondary: "#162a00",
        tertiary: "#E5E5E5",
        accent: "#A379C9",
      }
    },
  },
  plugins: [],
}

