import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.ELECTRON == "true" ? './' : ".",
    server: {
        port: 30000,
        strictPort: true,
        https: false
    },
    plugins: [vue()]
})