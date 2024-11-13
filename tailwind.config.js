import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], // Use Poppins as the default sans-serif font
      },
      colors: {
        primary: "#144679",
        secondary: "#1C9CEA",
        ocean: "#1C9CEA",
        cardbackground: "#313131",
        background: "#000000",
        crystalblue: "#6AB5B9",
        neutralgray: "#A6A6A6",
        borderbg: "#DB2E7A",
        hoverborder: "#C17CEB",
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
        rotateForward: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        rotateBackward: {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        spread: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" }, // Start scaling from the top
          "100%": { transform: "scaleY(1)", transformOrigin: "top" }, // End at full height
        },
        extendX: {
          "0%": { transform: "scale(0)", transformOrigin: "left" },
          "100%": { transform: "scale(100%)", transformOrigin: "left" },
        },
      },
      animation: {
        typing: "typing 3s steps(20, end) forwards",
        erasing: "erasing 3s steps(20, end) forwards",
        blink: "blink 0.7s step-end infinite",
        rotateForward: "rotateForward 0.2s ease-out forwards",
        rotateBackward: "rotateBackward 0.2s ease-out forwards",
        spread: "spread 0.5s ease-out forwards",
        extendX: "extendX  0.5s ease-out forwards ",
      },
    },
  },
  plugins: [],
};
