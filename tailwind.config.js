/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-green': '#2d4a3e',
        'accent-green-light': '#3d5a4e',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
