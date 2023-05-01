module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#FFFFFF",
        light: "#F8F8F8",
        textGray: "#000000",
        primary: "#52D1B7",
        secondary: "#0B192E",
        tertiary: "#80868B",
        quaternary: "#F0FAFF",
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
