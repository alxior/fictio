/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#34356C",
        fictioRed: "#FA5781",
        fictioYellow: "#FDAE32",
        fictioBlue: "#2A69EA",
        darkGray: "#4B4B4B",
        lightGray: "#F5F5F5",
        footerGray: "#D1D1D1",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
