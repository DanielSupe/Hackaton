/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(200px, 200px))"
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      fontFamily:{
        body: ["Open Sans", "sans-serif"],
        title:["Timmana", "sans-serif"],
      },
    },
  },
  plugins: [],
}

