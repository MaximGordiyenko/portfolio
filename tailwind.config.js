module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#101010",
      },
      animation: {
        slide: 'slide 3s ease-in-out forwards',
      },
      keyframes: {
        slide: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          '30%': {
            opacity: 0,
            transform: 'translateX(50%)',
          },
          '70%': {
            opacity: 0,
            transform: 'translateX(10%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(-50%)',
          },
        }
      }
    },
  },
  plugins: [],
};