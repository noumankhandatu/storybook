const defaultThemes = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Lobster', cursive", ...defaultThemes.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
