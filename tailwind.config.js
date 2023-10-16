/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors:{
        mainBlackColor:"#303030",
        mainColor:"#49DEFF",
        mainParaColor:"#4E4E4E",
      },
      boxShadow: {
        inputShadow: "0px 4px 12px 0px rgba(190, 190, 190, 0.25)",
        box_shadow: "0px 5px 25px 0px rgba(190, 190, 190, 0.25);",
      },
    },
  },
  plugins: [],
}

