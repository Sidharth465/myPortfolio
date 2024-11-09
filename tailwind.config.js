/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#144679",
        secondary: "#1C9CEA",
        ocean: "#1C9CEA",
        cardbackground: "#1D1D1D",
        background: "#000000",
        crystalblue: "#6AB5B9",
        neutralgray: "#A6A6A6",
        hoverborder: "#C17CEB ",
        borderbg: "#DB2E7A",
      },
      backgroundImage: {
        linear:
          "linear-gradient(90deg, #515ECF 0%, #C53184 37%, #F3673A 75%, #DB2E7A 100%)",
        linear2: "linear-gradient(45deg, #FA5252 0%, #DD2476 100%)",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        erasing: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
      animation: {
        typing: "typing 3s steps(20, end) forwards",
        erasing: "erasing 3s steps(20, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};
