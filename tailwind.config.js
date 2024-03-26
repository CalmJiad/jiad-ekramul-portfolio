import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cute-font": ['"Cute Font"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "cormorant-sc": ['"Cormorant SC"', "serif"],
      },
    },
  },
  plugins: [daisyui],
};
