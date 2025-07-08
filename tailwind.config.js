/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        goldGradient: "goldGradient 3s ease infinite",
        greenGradient: "greenGradient 3s ease infinite",
        metallicShine: "metallicShine 4s linear infinite",
        shimmerBackground: 'shimmerBackground 15s linear infinite',
      },
      keyframes: {
        goldGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        greenGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        metallicShine: { // ✅ ADD THIS
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
         shimmerBackground: {
        '0%': { backgroundPosition: '0% 50%' },
        '100%': { backgroundPosition: '100% 50%' },
      },
      },
    },
  },
  plugins: [],
};


