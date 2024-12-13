import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Proje kökünü src ile eşleştiriyoruz
    },
  },
  build: {
    rollupOptions: {
      external: [], // Gerekirse harici modülleri buraya ekleyin
    },
  },
});
