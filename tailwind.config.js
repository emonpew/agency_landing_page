/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFBD6D",
        green: "#2ED573",
        watermelon: "#FF4757",
        purple: "#4F55DD",
        blue: "#75B9F4",
        "dark-grey": "#373F41",
        "light-grey": "#737B7D",
        primary: "#F73C6B",
        secondary: "#3C64B1",
      },
      fontFamily: {
        muli: ["Muli"],
        muliSemiBold: ["Muli-SemiBold"],
        muliBold: ["Muli-Bold"],
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      height: {
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};
