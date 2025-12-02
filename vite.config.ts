import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./", // 🔥 Most important fix for Netlify white screen

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },

  build: {
    target: "esnext",
    outDir: "dist"  // 🔥 must be dist for Netlify
  },

  server: {
    port: 3000,
    open: true
  }
});
