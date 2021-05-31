module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
    },
    colors: {
      blue: {
        DEFAULT: '#2BD0D0',
      },
      purple: {
        darker: '#34313D',
        dark: '#3A3054',
        DEFAULT: '#4B3F6B',
        light: '#9E9AA8',
        lighter: '#EFF1F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
