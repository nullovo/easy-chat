import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },

  css: {
    //* 预编译支持less
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        math: "always",
        relativeUrls: true,
      },
    },
  },
});
