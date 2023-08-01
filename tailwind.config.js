/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans_pro: ['"Source Sans Pro"', 'sans-serif'],
        helvetica: ['"Helvetica"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
