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
        // main: "url('../../public/images/bg-main.webp')",
        main: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        hero: "url('../../public/images/flowers.webp')",
        guest: "url('../../public/images/flower1.webp')"
      }
    }
  }
};
