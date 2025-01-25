import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "todo-components",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/components/List",
        "./Input": "./src/components/Input",
      },
      // exposes: {
      //   "./List": "./src/components/List/List.component.tsx",
      //   "./Input": "./src/components/Input/Input.component.tsx",
      // },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});