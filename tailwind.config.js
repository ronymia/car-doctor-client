/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["'Inter', sans-serif"]
      },
      colors: {
        primary: "#FF3811",
        darkBlack: "#151515",
        lightGray: "#F3F3F3",
        success: "#6BB187",
        warning: "#DBAE59",
        error: "#AC3E31",
      }
    },
  },
  plugins: [require("daisyui")],
}
