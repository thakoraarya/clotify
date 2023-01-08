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
        'clotify-primary': '#E47981',
        'clotify-secondry': '#E57373',
        'clotify-one': '#EF9A9A',
        'clotify-tw0': '#F44336',
        'clotify-three': '#D32F2F',

      },
      width: {
        '510': '510px',
        '52': '200px',
      },
      height: {
        '728': '728px',
        '15': '60px'
      },
      padding: {
        '2.5': '10px',

      }
    },
  },
  plugins: [],
}
