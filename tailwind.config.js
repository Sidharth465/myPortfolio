import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        // Primary font for headings and display text
        Poppins: ["Poppins", "sans-serif"],
        // Secondary font for body text and UI elements
        Inter: ["Inter", "sans-serif"],
        // System font stack as fallback
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        // Custom font sizes for better typography hierarchy
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
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
      screens: {
        xs: "475px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
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
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        fadeInDown: "fadeInDown 0.6s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.6s ease-out forwards",
        fadeInRight: "fadeInRight 0.6s ease-out forwards",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
