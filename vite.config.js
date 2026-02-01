import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Crop Selection App',
        short_name: 'CropApp',
        description: 'Complete front end mobile app for crop selection',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Cache locale JSON and any pre-generated TTS mp3s for 48 hours
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/locales/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'locales-cache',
              expiration: { maxAgeSeconds: 48 * 60 * 60 }
            }
          },
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/tts/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'tts-cache',
              expiration: { maxAgeSeconds: 48 * 60 * 60 }
            }
          }
        ]
      }
    })
  ],
})
