import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',  // Allows Vite to bind to all network interfaces (for external access)
    port: process.env.PORT || 3000, // Use the PORT environment variable on Render
  },
});
