import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for ngrok, remove for production
  server: {
    host: true,
    allowedHosts: [
      "728e4fbadf95.ngrok-free.app"
    ]
  }
})
