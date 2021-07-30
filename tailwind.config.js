const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./index.html", "./js/script.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                xs: "365px",
                lg: "960px",
                xl: "1160px",
            },
            fontFamily: {
                headline: ["Josefin Sans", "sans-serif"],
                body: ["Alata", "sans-serif"],
            },
            fontSize: {
                base: ["0.9375rem", { lineHeight: "1.65" }],
            },
            colors: {
                teal: colors.teal,
                gray: colors.trueGray,
                "dark-gray": "hsl(0, 0%, 55%)",
                "very-dark-gray": "hsl(0, 0%, 41%)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
