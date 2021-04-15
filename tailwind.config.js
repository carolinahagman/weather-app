module.exports = {
  purge:  ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'peach' : '#FEC2A0',
        'dark-pink' : '#DD5E89',
        'dark-peach' : '#F7BB97'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
