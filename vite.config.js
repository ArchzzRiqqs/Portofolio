import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const BUILD_TS = new Date().toISOString()
const BUILD_DATE = BUILD_TS.slice(0, 10)

const buildMeta = () => ({
  name: 'build-meta',
  transformIndexHtml: (html) => html.replaceAll('__BUILD_DATE__', BUILD_TS),
  closeBundle() {
    const file = resolve('dist/sitemap.xml')
    if (!existsSync(file)) return
    const xml = readFileSync(file, 'utf8').replace(
      /<lastmod>.*?<\/lastmod>/g,
      `<lastmod>${BUILD_DATE}</lastmod>`
    )
    writeFileSync(file, xml)
  },
})

export default defineConfig({
  base: '/',
  plugins: [react(), buildMeta()],
})