/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        hansen: ["'Hanken Grotesk'", "sans-seriff"],
      },
      colors: {
        purplet: "#5C3FFA",
        purplec: "#4E37F5",
        purpleb: "#3E31EE",

        circlept: "#4927D3",
        circlepc: "#452FE3",
        circlepb: "#4734ED",

        purplelight: "#CCC1FE",
        mygray: "#A3A0A4",
      },
    },
  },
  plugins: [],
};
