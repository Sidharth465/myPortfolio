/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Outfit", "system-ui", "sans-serif"],
        Poppins: ['"Playfair Display"', "Georgia", "serif"],
        Inter: ["Outfit", "sans-serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
        playfair: ['"Playfair Display"', "Georgia", "serif"],
      },
      colors: {
        primary: "#0066ff",
        secondary: "#3b82f6",
        background: "#050a14",
        neutralgray: "#94a3b8",
        cardBg: "#0a1220",
        electric: {
          DEFAULT: "#0066ff",
          soft: "#3b82f6",
          light: "#60a5fa",
          dim: "#1e3a8a",
        },
      },
      backgroundImage: {
        linear:
          "linear-gradient(90deg, #93c5fd 0%, #0066ff 50%, #1d4ed8 100%)",
        linear2:
          "linear-gradient(115deg, #bfdbfe 0%, #60a5fa 28%, #0066ff 62%, #1e40af 100%)",
      },
      boxShadow: {
        electric: "0 8px 32px rgba(0, 102, 255, 0.35)",
        "electric-lg": "0 16px 48px rgba(0, 102, 255, 0.45)",
        "electric-glow": "0 0 60px rgba(0, 102, 255, 0.4)",
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
        blink: {
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.06)" },
        },
        gridDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "56px 56px" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite",
        fadeInUp: "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        softPulse: "softPulse 8s ease-in-out infinite",
        gridDrift: "gridDrift 28s linear infinite",
      },
      transitionTimingFunction: {
        modern: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
