import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = path.resolve('dist')
const ssrEntry = path.resolve('dist-ssr/entry-server.js')

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const { render } = await import(pathToFileURL(ssrEntry).href)

const routes = [
  { url: '/', outFile: 'index.html' },
  { url: '/en', outFile: 'en/index.html' },
]

function injectHelmet(html, helmet) {
  if (!helmet) return html

  // Strip default title & description from the source template so Helmet wins.
  let out = html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')

  const headTags = [
    helmet.title?.toString() ?? '',
    helmet.meta?.toString() ?? '',
    helmet.link?.toString() ?? '',
  ].join('')

  out = out.replace('</head>', `${headTags}</head>`)

  const htmlAttrs = helmet.htmlAttributes?.toString() ?? ''
  if (htmlAttrs) {
    out = out.replace(/<html[^>]*>/i, `<html ${htmlAttrs}>`)
  }
  return out
}

for (const { url, outFile } of routes) {
  const { appHtml, helmet } = render(url)
  let page = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )
  page = injectHelmet(page, helmet)

  const outPath = path.join(distDir, outFile)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${url} -> ${path.relative('.', outPath)}`)
}

// Clean up SSR bundle so it doesn't ship.
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
