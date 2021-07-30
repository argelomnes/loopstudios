const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./index.html', './js/script.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                xs: '365px',
                lg: '960px',
                xl: '1160px',
            },
            fontFamily: {
                headline: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
                sans: ['Alata', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: ['0.9375rem', { lineHeight: '1.65' }],
            },
            colors: {
                gray: colors.trueGray,
                'dark-gray': 'hsl(0, 0%, 55%)',
                'very-dark-gray': 'hsl(0, 0%, 41%)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
