/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightcyan: "#e5fcff",
        dodgerblue: "#0473da",
        white: "#fff",
        darkslateblue: "#001a49",
        red: "#ff0000",
        skyblue: {
          "100": "#66e2fa",
          "200": "rgba(102, 226, 250, 0.43)",
        },
        black: "#000",
        cornflowerblue: "#3da2ff",
        deepskyblue: "#58b8ff",
        turquoise: "#66e5cf",
        teal: "#047481",
        cadetblue: "#14acc7",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      "3xs": "10px",
      mini: "15px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
