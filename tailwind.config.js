module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: (theme) => ({
        'brand-color': '#4c3398',
        'getir-color': '#dbdbff',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300',
        'gray-dark': '#3e3e3e',
      }),
      backgroundImage: (theme) => ({
        'mobile-background':
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      }),
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1232px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
