/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

