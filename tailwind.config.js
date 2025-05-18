/* eslint-disable */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}", // Wildcard for all files
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        thin: ["Montserrat_100Thin"],
        light: ["Montserrat_300Light"],
        regular: ["Montserrat_400Regular"],
        medium: ["Montserrat_500Medium"],
        semiBold: ["Montserrat_600SemiBold"],
        bold: ["Montserrat_700Bold"],
      },
      colors: {
        brightYellow: "#eef860",
        richBlack: "##08080A",
        lightPurple: "#CBBEF7",
        darkGrey: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
