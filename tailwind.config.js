/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        erik: "#FF0000",
      },

      maxWidth: {
        app: "700px",
      },
    },
  },
  plugins: [],
}
