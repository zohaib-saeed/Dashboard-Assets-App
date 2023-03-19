/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#fff",
      iceberg: "#D8F3DC",
      nebula: "#B7E4C7",
      vistaBlue: "#95D5B2",
      paleTeal: "#74C69D",
      dustyTeal: "#40916C",
      everGlade: "#1B4332",
      cadetGrey: "#89A6C0",
      balticSea: "#282828",
      dustyGrey: "#969696",
      mirage: "#1E1E1E",
      onyx: "#111111",
      red: "#FF0000",
    },
    screens: {
      xxs: "390px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdl: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1350px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
