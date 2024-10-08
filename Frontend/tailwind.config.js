/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "custom-pink": "#FF6400",
        "dark-pink": "#f0264b",
      },
    },
  },
  plugins: [],
};
