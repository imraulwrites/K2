/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.5rem',
      },

      margin: {
        DEFAULT: '1rem',
        md: '1rem',
        lg: '1rem',
      },
    },

    screens: {
      sm: '540px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1496px',
      '3xl': '1600px',
    },

    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
