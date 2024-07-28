import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // publicDir: 'viteBuild', // allows to rename public folder on npm run build
  build: {
    outDir: 'build' // Ensure this matches the directory you're using in gh-pages
  },
  plugins: [
    react(),
    Inspect(),
  ],
  resolve: {
    // aliases to reduce the file path
    alias: {
      'json': path.resolve(__dirname, './src/utils/json')
    }
  }
})
