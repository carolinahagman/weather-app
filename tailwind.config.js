module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        peach: "#FEC2A0",
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
