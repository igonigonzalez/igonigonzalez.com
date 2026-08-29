/**
 * Content negotiation for agents.
 *
 * A rewrite in vercel.json cannot do this: static files are matched before
 * rewrites, so `/` always resolves to index.html and the rule never fires.
 * Middleware runs before the filesystem, so it can.
 *
 * Anything that is not explicitly asking for Markdown falls through untouched,
 * so a browser request is never affected.
 */
export const config = { matcher: ['/', '/en'] }

const MARKDOWN: Record<string, string> = {
  '/': '/index.md',
  '/en': '/en/index.md',
}

export default function middleware(request: Request) {
  const accept = request.headers.get('accept') || ''

  // Only act on an explicit Markdown preference. Browsers send text/html first
  // and never name text/markdown, so they fall through.
  if (!accept.includes('text/markdown')) return

  const url = new URL(request.url)
  const target = MARKDOWN[url.pathname]
  if (!target) return

  url.pathname = target
  return new Response(null, {
    headers: {
      'x-middleware-rewrite': url.toString(),
      // Two different bodies for the same URL: the CDN must not mix them up.
      Vary: 'Accept',
    },
  })
}
