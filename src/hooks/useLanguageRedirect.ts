import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Crawlers must never be redirected: Googlebot renders with an en-US locale and
// would otherwise be bounced from "/" (the x-default / Spanish canonical) to "/en".
const BOT_RE =
  /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora link preview|whatsapp|telegram|discord|linkedinbot|twitterbot|applebot|petalbot|yandex|duckduck|baidu|ia_archiver|gptbot|oai-searchbot|chatgpt-user|perplexity|claudebot|anthropic|ccbot|google-extended/i

export function useLanguageRedirect() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    if (BOT_RE.test(navigator.userAgent || '')) return
    if (sessionStorage.getItem('lang-redirected')) return

    const languages: string[] =
      (navigator.languages && navigator.languages.length
        ? Array.from(navigator.languages)
        : [navigator.language || (navigator as any).userLanguage || 'es'])

    const speaksSpanish = languages.some((l) => l.toLowerCase().startsWith('es'))

    sessionStorage.setItem('lang-redirected', '1')

    if (!speaksSpanish) {
      navigate('/en', { replace: true })
    }
  }, [location.pathname, navigate])
}
