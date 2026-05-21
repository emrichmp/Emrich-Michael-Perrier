/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#0c0c0c',
          surface: '#141414',
          border: '#262626',
          accent: '#e8393a',
        },
        ink: {
          primary: '#f0f0f0',
          secondary: '#a0a0a0',
          muted: '#6b6b6b',
        },
      },
    },
  },
  plugins: [],
} 