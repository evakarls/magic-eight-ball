module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '34': '8.5rem',
        '84': '21rem',
        '96': '24rem',
      },
      inset: {
        '-18': '-4.9rem',
      },
      colors: {
        'answer-blue': '#5aceff'
      },
      fontFamily: {
        custom: ['"Press Start 2P"', 'sans-serif'],
        jura: ['Jura', 'sans-serif']
      },
      backgroundImage: theme => ({
        'galaxy': "url('./assets/background.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
