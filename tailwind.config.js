/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
