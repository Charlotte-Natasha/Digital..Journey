/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ['"Great Vibes"', 'cursive'], // Quotes needed for font names with spaces
      },
    },
  },
  plugins: [
    require('autoprefixer')
  ],
  screens: {
    sm: { min: '375px', max: '767px' },
    md: { min: '768px', max: '991px' },
    lg: { min: '992px', max: '1199px' },
    xl: { min: '1200px' },
  },
};
