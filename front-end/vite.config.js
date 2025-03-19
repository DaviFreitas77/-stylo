import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acessar de qualquer IP
    allowedHosts: ['.ngrok-free.app'], // Libera o domínio do ngrok
  },
})
