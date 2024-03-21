/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f1272a",
        secondary: "#ed8900",

      },
      container:{
        center: true,
        pedding: {
          DEFAULT : "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}

