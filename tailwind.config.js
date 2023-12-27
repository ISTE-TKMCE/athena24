/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'hero-bg' : '#43021C',
      'my-white' : '#ffffff'
    },
    extend: {
      fontSize: {
        '10xl': '72px',
        '12xl': '250px',
      },
    },
  },
  plugins: [],
}