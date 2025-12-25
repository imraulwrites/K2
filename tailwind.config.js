/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
      },
    },

    screens: {
      sm: '540px',
      md: '768px',
      lg: '1200px',
    },

    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
