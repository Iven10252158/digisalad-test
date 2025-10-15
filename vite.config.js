import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// Dynamically set base for GitHub Pages deployments
// - For repo pages: "/<repo>/"
// - For user/organization pages ("<user>.github.io"): "/"
const computeBase = () => {
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return '/'
  const name = repo.split('/')[1] || ''
  if (name.endsWith('.github.io')) return '/'
  return `/${name}/`
}

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: computeBase(),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
