const defaultTheme = require('tailwindcss/defaultTheme');

// @ts-check
/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Montserrat']
        },
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
    },
    variants: {},
    plugins: [],

};
