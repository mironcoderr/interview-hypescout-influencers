/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            // dark variant
            'transparent': 'transparent',
            'dark': '#050405',
            'gray': '#17181B',
            'border': '#323246',
            'primary': '#564FB1',
            'light': ' #FFFFFF',
            'text': '#637381',
            'chalk': '#202124',
            'focus': '#95B3CD',

            // light variant
            'lgray': '#F7F7FB',
            'lblack': '#000000',
            'ltext': '#202124',
            'ltitle': '#231F20',
            'llight': '#637381',
            'lborder': '#DBDBDB',
        },
        fontFamily: {
            primary: ['Sen', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}