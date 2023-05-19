import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

// Obtenha o caminho do diretório atual do módulo
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    lib: {
      // Também poderia ser um diretório ou
      // arranjo de vários pontos de entrada
      entry: resolve(__dirname, './lib/octopus.js'),
      name: 'Octopus',
      // as extensões apropriadas serão adicionadas
      fileName: 'octopus'
    },
    rollupOptions: {
      // certifica-te de expor as dependências que não devem
      // ser empacotadas na tua biblioteca
      external: ['vue'],
      output: {
        // Forneça as variáveis globais para utilizar na
        // construção UMD para as dependências expostas
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
