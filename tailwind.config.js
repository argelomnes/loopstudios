const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
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
            spacing: {
                // 5.5: "1.375rem",
                // 32.25: "8.0625rem",
                // 34: "8.5rem",
                // 40.5: "10.125rem",
                // note: decided to do this inline instead since these were only used once
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
