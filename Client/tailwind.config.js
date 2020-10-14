const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("./colors");

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      height: {
        viajePortada: "37.5rem",
        halfScreen: "50vh",
      }
    },
    colors,
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
