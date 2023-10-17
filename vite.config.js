// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dashboard/'
})
=======
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
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
>>>>>>> parent of c8e5bdc (Deploy 3)
