import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base "/" is correct for custom domain (amayabern.ch) and any static host
  // If deploying to GitHub Pages at a subpath (e.g. /ramiro/), change to "/ramiro/"
  base: "/",
  build: {
    minify: "esbuild",
    reportCompressedSize: false,
    rollupOptions: {
      // Disable tree-shaking to avoid Rollup hanging on large object literals
      treeshake: false,
    },
  },
});
