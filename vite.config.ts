import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // build: {
  //   outDir: "dist",
  //   assetsDir: ".",
  //   rollupOptions: {
  //     output: {
  //       // evita di generare chunks in sotto-cartelle tipo "assets"
  //       chunkFileNames: "[name].[hash].js",
  //       entryFileNames: "[name].[hash].js",
  //       assetFileNames: "[name].[hash].[ext]",
  //     },
  //   },
  // },
  server: {
    port: 3000,
  },
  plugins: [react(), tailwindcss()],
});
