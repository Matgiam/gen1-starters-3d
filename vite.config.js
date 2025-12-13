import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gen1-starters-3d/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
