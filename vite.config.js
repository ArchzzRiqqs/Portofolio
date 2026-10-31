import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const injectBuildDate = () => ({
  name: 'inject-build-date',
  transformIndexHtml: (html) =>
    html.replaceAll('__BUILD_DATE__', new Date().toISOString()),
})

export default defineConfig({
  plugins: [react(), injectBuildDate()],
})