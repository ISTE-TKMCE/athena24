/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-bg' : '#43021C',
        'my-white' : '#ffffff',
        'my-black' : '#000000',
        'my-yellow' : '#E5C100',
      },

      fontSize: {
        '10xl': '72px',
        '12xl': '250px',
      },
    },
  },
  plugins: [],
}
