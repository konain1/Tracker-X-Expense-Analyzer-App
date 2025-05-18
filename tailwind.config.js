/* eslint-disable */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}", // Wildcard for all files
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
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
