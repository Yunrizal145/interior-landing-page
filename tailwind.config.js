/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'thumbnail': "url('./assets/images/thumbnail.png')",
      }
    },
  },
  plugins: [],
}

