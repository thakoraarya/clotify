/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // react
 "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#191414',
        'spotify-white': '#FFFFFF',
        'spotify-grey': '#B3B3B3',
   'clotify':'#E47981'
      },
      width: {
        '510': '510px',
      },
      height: {
        '728': '728px',
      }
    },
  },
  plugins: [],
}
