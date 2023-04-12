/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alex: ['Alex Brush', 'alex', 'cursive']
      },
      colors: {
        primary: '#242F40',
        secondary: '#162a00',
        tertiary: '#E5E5E5',
        accent: '#A379C9'
      },
      backgroundImage: {
        main: "url('../../public/images/bg-main.webp')",
        hero: "url('../../public/images/flowers.webp')",
        guest: "url('../../public/images/flower1.webp')"
      }
    }
  }
};
