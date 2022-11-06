module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        intro: "#dbebf1",
        textGray: "#696969",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      spartan: ["League Spartan", "sans-serif"],
      spectral: ["Spectral", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
