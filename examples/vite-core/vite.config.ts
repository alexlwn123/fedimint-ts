import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [topLevelAwait(), wasm(), react()],
  optimizeDeps: {
    exclude: ['fedimint-web'],
  },
})
