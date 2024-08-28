import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import PluginCSV from './vite-plugin-csv';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'APP_',
  // publicDir: 'viteBuild', // allows to rename public folder on npm run build
  // sourcemap: true,
  // emptyOutDir: true,
  // outDir: 'build' // Ensure this matches the directory you're using in gh-pages
  build: {
    outDir: 'build' // Ensure this matches the directory you're using in gh-pages
  },
  server: { // you can change settings for preview as well 
    port: 7777, // change your local server port
    strictPort: true, // means that server port will never change. if server with the same port exist, it will throw an error.
    // open: '/api/carts', // lint witch must be opened after npm run dev
    headers: {
      "its-db-vite-project": "true",
    },
    proxy: { // redirecting requests that originate from your application to another server.
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react({jsxRuntime: 'classic'}),
    Inspect(),
    PluginCSV(),
    ViteImageOptimizer({
      jpeg: { quality: 80 },
      png: { quality: 80 },
    }),
  ],
  // rollupOptions: {
  //   output: {
  //     // preserveModules: true, // save the src map on build
  //   },
  // },
  resolve: {
    // aliases to reduce the file path
    alias: {
      'json': path.resolve(__dirname, './src/utils/json')
    }
  }
})
