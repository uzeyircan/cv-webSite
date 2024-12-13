import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Dosya uzantılarını kontrol edin
  },
  build: {
    rollupOptions: {
      external: [], // Gerekirse harici modülleri buraya ekleyin
    },
  },
});
