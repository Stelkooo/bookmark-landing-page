/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      blue: '#5267DF',
      red: '#FA5959',
      navy: '#242A45',
      grey: '#9194A2',
    },
  },
  plugins: [],
};
