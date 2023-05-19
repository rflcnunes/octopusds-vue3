import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./lib/octopus.js', import.meta.url)), // Arquivo principal da sua biblioteca
      name: 'Octopus', // Nome da sua biblioteca
      fileName: (format) => `octopus.${format}.js` // Nome do arquivo de saída
    },
    rollupOptions: {
      // Opções de configuração do Rollup
      // Aqui você pode configurar plugins adicionais, opções de empacotamento, etc.
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
