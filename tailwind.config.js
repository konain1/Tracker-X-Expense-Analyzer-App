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
        Bright_Yellow: "#eef860",
        Rich_Black: "##08080A",
        Light_Purple: "#CBBEF7",
        Dark_Grey: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
