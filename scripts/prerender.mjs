import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = path.resolve('dist')
const ssrEntry = path.resolve('dist-ssr/entry-server.js')

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const { render, buildMarkdown, buildLlms, buildLlmsFull } = await import(
  pathToFileURL(ssrEntry).href
)

const routes = [
  { url: '/', outFile: 'index.html', locale: 'es', mdFile: 'index.md', llmsFile: 'llms.txt' },
  { url: '/en', outFile: 'en/index.html', locale: 'en', mdFile: 'en/index.md', llmsFile: 'en/llms.txt' },
]

function write(relPath, contents) {
  const outPath = path.join(distDir, relPath)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, contents)
  console.log(`wrote ${path.relative('.', outPath)}`)
}

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
    helmet.script?.toString() ?? '',
  ].join('')


  out = out.replace('</head>', `${headTags}</head>`)

  const htmlAttrs = helmet.htmlAttributes?.toString() ?? ''
  if (htmlAttrs) {
    out = out.replace(/<html[^>]*>/i, `<html ${htmlAttrs}>`)
  }
  return out
}

const markdown = {}

for (const { url, outFile, locale, mdFile, llmsFile } of routes) {
  const { appHtml, helmet } = render(url)
  let page = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )
  page = injectHelmet(page, helmet)

  write(outFile, page)

  // Same content, served as Markdown for agents that ask for it.
  markdown[locale] = buildMarkdown(locale)
  write(mdFile, markdown[locale])
  write(llmsFile, buildLlms(locale))
}

// One file with everything, generated from the same dictionaries as the site,
// so it cannot go stale when the copy changes.
write('llms-full.txt', buildLlmsFull(markdown.es, markdown.en))

// Clean up SSR bundle so it doesn't ship.
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
