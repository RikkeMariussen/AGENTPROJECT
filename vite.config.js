import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AGENTPROJECT/',
})

// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/AGENTPROJECT/',  // ← must match your GitHub repo name exactly
  // ...rest of your config
})