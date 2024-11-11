import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@library": path.resolve(__dirname, "src/library"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
