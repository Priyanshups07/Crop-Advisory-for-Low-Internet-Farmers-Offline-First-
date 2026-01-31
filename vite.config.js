import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*'],
      manifest: {
        name: 'Crop Advisory',
        short_name: 'AgroApp',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2e7d32',
        icons: []
      }
    })
  ]
})