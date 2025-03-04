import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws', // Gunakan WebSocket Secure jika Cloudflare aktif
      host: 'dev.frontend.bksdev.my.id',
      // clientPort: 443 // Pastikan menggunakan port HTTPS
    }
  }
});