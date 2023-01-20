import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/[Sub directory name]/",
  build: {
    outDir: './dist/[Sub directory name]'
  }
})
