// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    css: {
      // Ensure CSS is processed
      preprocessorOptions: {
        scss: {
          additionalData: ``
        }
      }
    },
    ssr: {

    }
  },
});