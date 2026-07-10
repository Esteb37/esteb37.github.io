import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(() => {
  const base = process.env.BASE_PATH ?? "/";
  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          card: path.resolve(__dirname, "card/index.html"),
        },
      },
      target: "es2020",
      sourcemap: false,
    },
  };
});
