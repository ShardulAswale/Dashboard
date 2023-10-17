import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/Dashboard/",
    server: {
      watch: {
        ignored: ["!**/node_modules/autopreview/**"],
      },
    },
    // The watched package must be excluded from optimization,
    // so that it can appear in the dependency graph and trigger hot reload.
    optimizeDeps: {
      exclude: ["autopreview"],
    },
  };

  if (command !== "serve") {
    config.base = "/Dashboard/";
  }

  return config;
});
