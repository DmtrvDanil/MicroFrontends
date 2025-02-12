import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        todo_components: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
    checker({
      typescript: true,
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});