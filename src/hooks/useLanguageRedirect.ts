import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function useLanguageRedirect() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
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
