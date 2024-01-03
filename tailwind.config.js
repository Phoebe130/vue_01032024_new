/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm':'520px',
      'tablet': '800px',
    },
    colors:{
      'main-deep':'#809865',
      ...colors,
    },
  },
  plugins: [],
}

