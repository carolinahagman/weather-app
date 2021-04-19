module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: "#FC7E7E",
      },
    },
  },
  variants: {
    extend: {
      maxHeight: ["focus"],
    },
  },
  plugins: [],
};
