/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'vercel-blue': '#0070f3',
        'vercel-cyan': '#79ffe1',
        'vercel-gray': {
          50: '#fafafa',
          100: '#eaeaea',
          200: '#999999',
          700: '#333333',
          800: '#111111',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
}