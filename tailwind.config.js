/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'picton-blue': {
        50: '#f0f7ff',
        100: '#e0eefe',
        200: '#bbdefc',
        300: '#7fc2fa',
        400: '#3da5f5',
        500: '#1289e5',
        600: '#056bc4',
        700: '#06559e',
        800: '#094883',
        900: '#0e3e6c',
        950: '#092748',
      },
      'piction-red': {
        100: '#ff0000',
      },
      extend: {
        backgroundImage: {
          'rainbow-gradient':
            'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
        },
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
