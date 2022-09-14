/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/**/*.{html,ejs,js}'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#222222',
            },
        },
    },
    plugins: [],
};
