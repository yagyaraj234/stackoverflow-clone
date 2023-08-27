/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#DA680B",
        blue: "#0074CC",
        lightgray: "#B6BBC0",
        darkgray: "#91969b",
        offwhite: "#dbdbdb59",
      },
      fontSize: {
        xxs: "10px",
      },
      screens: {
        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
