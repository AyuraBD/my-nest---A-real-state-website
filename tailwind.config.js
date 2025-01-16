/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
    colors:{
      'white': '#ffffff',
      'main': '#155E95',
      'second': '#6A80B9',
      'third': '#F6C794',
      'fourth': '#FFF6B3',
    },
    fontFamily: {
      roboto: "Roboto", serif: "serif",
      playfair: "Playfair Display", serif: "serif",
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

