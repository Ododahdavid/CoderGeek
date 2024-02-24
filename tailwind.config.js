/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['build/*.html'],
  theme: {
    extend: {
      colors: {
        'bcg-color-dark': "#16171B",
        'item-color-dark': "#222327",
        'button-color': "#454EFF",
        'custom-gray': '#e0e0e0'

      },
      backgroundImage: {
        'bcg-img': "url('../IMG/Coder-geek-Main-Header-image.png')"
      },
      boxShadow: {
        'custom-shadow': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        'custom-inset': 'inset 6px 6px 12px  , inset -6px -6px 12px #16171B'
      },
    },
  },
  plugins: [],
}

