/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'bg-color': '#C3DCFF',
      'blue-background': '#0D0C2B',
      'base-russian': '#02061E',
      'mid-russia': '#35384B',
      'light-russia': '#676A78',
      'base-white': '#DDDEDF',
      'mid-white': '#e4e5e5',
      'light-white': '#ebebec',
      'base-royal': '#0065F5',
      'mid-royal': '#3384F7',
      'light-royal': '#66A3F9',
      'base-gold': '#DAA253',
      'mid-gold': '#E1B575',
      'light-gold': '#e9c798',
      'base-grey': '#79797e',
      'mid-grey': '#949498',
      'light-grey': '#aeaeb1',
      'base-dark': '#010416',
      'mid-dark': '#343645',
      'light-dark': '#676873',
    },
    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}