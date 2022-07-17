/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
