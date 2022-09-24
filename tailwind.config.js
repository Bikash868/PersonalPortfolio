const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'project1': "url('../src/Images/project1.jpg')"
    },
  },
  plugins: [],
}