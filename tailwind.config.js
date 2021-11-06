module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        'brand-color': '#4c3398',

      }),
      colors: (theme) => ({
        'getir-color': '#dbdbff',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
