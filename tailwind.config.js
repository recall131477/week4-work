module.exports = {
  purge: {
    enabled: true,
    content: ['./app/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#aa0601',
        secondary: '#650300',
        danger: '#9F1213',
        brown: '#5F3E2D',
        orange: '#B75929',
        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#f2f2f2',
          200: '#DCDCDC',
          300: '#6C6C6C',
          400: '#707070',
          500: '#555555',
          600: '#6C6C6C',
          700: '#0A0A0A'
        },
        blue: {
          100: '#DEE2E6',
          200: '#CED4DA',
          300: '#495057',
          400: '#373A3C',
          500: '#212529'
        }
      },
      fontSize: {
        'sm': '.875rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '2.625rem',
        '6xl': '3rem',
        '7xl': '4rem',
        '8xl': '4.5rem'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px'
      },
      spacing: {
        '7.5': '1.875rem',
        '15': '3.75rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
