/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '1px',
      // => @media (min-width: 640px) { ... }

      'md': '500px',
      // => @media (min-width: 768px) { ... }

    },
    extends:{},
  },
  plugins: [],
}

