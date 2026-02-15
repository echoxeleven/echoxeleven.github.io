import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/", // Important: set correct base path
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
  },
  server: {
    port: 5173,
    strictPort: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});