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
        // primary: "#D1FF1C", //greenish
        primary: "#8b5cf6",
        // secondary: "#A3C615", //yellowish
        secondary: "#ec4899",

        background: "#000000",

        neutralgray: "#A6A6A6",

        cardBg: "#3D3A3A",
      },
      backgroundImage: {
        linear:
          "linear-gradient(90deg, #D1FF1C 0%, #DBFF4E 37%, #EFFFB3 75%, #F4FFCC 100%)",

        // linear2: "linear-gradient(45deg, #E0FF67 0%, #EAFF9A 100%)", //yellowish
        linear2: "linear-gradient(to right, #8b5cf6, #ec4899)", //purple pink
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
