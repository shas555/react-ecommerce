import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['dog_logo.png', 'icon-192.png', 'icon-512.png', 'banner.jpg', 'about-hero.png', 'webdesk.png', 'mobile.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,woff,woff2}'],
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/^\/api/],
      },
      manifest: {
        name: 'PawShop - Premium Pet Supplies',
        short_name: 'PawShop',
        description: 'Your ultimate premium pet supplies destination',
        theme_color: '#dc3545',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        lang: 'en',
        categories: ['shopping', 'lifestyle'],
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'webdesk.png',
            sizes: '1896x885',
            type: 'image/png',
            form_factor: 'wide',
            label: 'PawShop Desktop View'
          },
          {
            src: 'mobile.png',
            sizes: '276x578',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'PawShop Mobile View'
          }
        ]
      }
    })
  ]
})
