import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasmPack from 'vite-plugin-wasm-pack'

export default defineConfig({
  plugins: [
    wasmPack(
      [resolve(__dirname, '../fedimint-client-wasm')],
      ['fedimint-client-wasm'],
    ),
    dts({ include: ['lib'] }),
    topLevelAwait(),
  ],
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    target: ['esnext'],
    // lib: {
    //   entry: resolve(__dirname, "lib/index.ts"),
    //   formats: ["es"],
    //   // entry: "lib/index.ts",
    //   // name: "@fedimint/fedimint-client-ts",
    //   // fileName: "index",
    // },

    copyPublicDir: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  server: {
    fs: {
      allow: [''],
    },
    cors: false,
  },
  preview: {},
  base: '/fedimint-ts/',
})
