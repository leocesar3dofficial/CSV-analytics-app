import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'node:dns'

// Force Node to use the address exactly as specified (IPv4)
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 5173,
    strictPort: true,
    host: '127.0.0.1', 
  },
  build: {
    outDir: 'dist',
  }
})