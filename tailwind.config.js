module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#101010",
      },
      keyframes: {
        right: {
          '0%': {
            opacity: '100%',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '100%',
            transform: 'translateX(-50%)',
          },
        },
        left: {
          '0%': {
            opacity: '1%',
            transform: 'translateX(-200%)',
          },
          '100%': {
            opacity: '100%',
            transform: 'translateX(-50%)',
          },
        },
      },
    },
  },
  plugins: [],
};
