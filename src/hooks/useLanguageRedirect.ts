import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function useLanguageRedirect() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Only redirect on root path, and only once per session
    if (location.pathname !== '/') return
    if (sessionStorage.getItem('lang-redirected')) return

    const lang = navigator.language || (navigator as any).userLanguage || 'es'
    const isSpanish = lang.startsWith('es')

    sessionStorage.setItem('lang-redirected', '1')

    if (!isSpanish) {
      navigate('/en', { replace: true })
    }
  }, [location.pathname, navigate])
}
