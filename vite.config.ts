import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
  base: "/interactive-credit-card-form/",
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
      less: {
        rootpath: "http://localhost:5173/interactive-credit-card-form/",
      },
    },
  },
});