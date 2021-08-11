module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // 18 Column Grid 
        '18': 'repeat(18, minmax(min-content, auto))',
      },
      gridTemplateRows: {
        // 9 Row Grid 
        '9': 'repeat(9, minmax(min-content, auto))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
