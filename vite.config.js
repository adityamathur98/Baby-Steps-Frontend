import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',  // Binds to all interfaces (external access)
    port: process.env.PORT || 3000, // Uses the dynamic port from Render
    allowedHosts: ['baby-steps-frontend.onrender.com'],  // Allow requests from this frontend URL
  },
});
