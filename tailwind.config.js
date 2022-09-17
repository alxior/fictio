/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      boxShadow: {
        fictio: "0 4px 8px 0px rgba(171,171,171,0.25)",
      },
      screens: {
        "2xl": "1280px"
      },
      colors: {
        darkBlue: "#34356C",
        fictioRed: "#FA5781",
        fictioYellow: "#FDAE32",
        fictioBlue: "#2A69EA",
        darkGray: "#4B4B4B",
        lightGray: "#F5F5F5",
        footerGray: "#D1D1D1",
        footerBg: "#171435",
        lightOrange: "#FFF4EA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
