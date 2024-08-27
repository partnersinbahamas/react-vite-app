import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
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
  plugins: [
    react(),
    Inspect(),
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
