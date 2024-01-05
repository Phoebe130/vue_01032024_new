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

      sky: colors.sky,     // 更新 lightBlue 為 sky
      stone: colors.stone, // 更新 warmGray 為 stone
      neutral: colors.neutral, // 更新 trueGray 為 neutral
      gray: colors.gray,   // 更新 coolGray 為 gray
      slate: colors.slate, // 更新 blueGray 為 slate
    },
  },
  plugins: [],
}

