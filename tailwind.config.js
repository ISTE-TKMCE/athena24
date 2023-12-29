/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'hero-bg' : '#43021C',
      'my-white' : '#ffffff',
      'my-black' : '#000000',
      'my-yellow' : '#E5C100',
    },
    extend: {
      fontSize: {
        '10xl': '72px',
        '12xl': '250px',
        '7xl': '10.5rem',
        '6xl': '4.75rem',
      },
    },
  },
  plugins: [],
}