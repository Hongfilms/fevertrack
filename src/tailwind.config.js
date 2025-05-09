// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#B4E4C8',
        accentOrange: '#F7C59F',
        feverRed: '#FF6B6B',
        softBlue: '#A8D5E2',
        backgroundGray: '#F9F9F9',
      },
      fontFamily: {
        sans: ['"Nunito"', '"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [],
}