/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./constants.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                traditional: ['Cinzel', 'serif'],
                script: ['Great Vibes', 'cursive'],
                serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
            },
            colors: {
                maroon: {
                    DEFAULT: '#800000',
                    dark: '#4A0E0E',
                    deep: '#240306',
                },
                gold: {
                    DEFAULT: '#FFD700',
                    light: '#FFE57F',
                    dark: '#B8860B',
                },
                cream: '#FDF5E6',
            },
        },
    },
    plugins: [],
}
