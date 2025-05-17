/* eslint-disable */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}", // Wildcard for all files
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
