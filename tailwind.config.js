/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-header': 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
      },
    },
  },
  plugins: [],
};
