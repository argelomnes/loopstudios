/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    screens: {
      xs: "365px",
      lg: "960px",
      xl: "1160px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        headline: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        sans: ["Alata", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: ["0.9375rem", "1.65"],
      },
      spacing: {
        5.5: "1.375rem",
        7.5: "1.875rem",
        32.25: "8.0625rem",
        34: "8.5rem",
        40.5: "10.125rem",
      },
    },
  },
  plugins: [],
};
