import { createContext, useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { es } from './es'
import { en } from './en'
import type { Locale, Translations } from './types'

interface LanguageContextValue {
  locale: Locale
  t: Translations
  basePath: string
  altPath: string
  altLocale: Locale
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'es',
  t: es,
  basePath: '/',
  altPath: '/en',
  altLocale: 'en',
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  const value = useMemo<LanguageContextValue>(() => {
    const isEnglish = location.pathname.startsWith('/en')
    return {
      locale: isEnglish ? 'en' : 'es',
      t: isEnglish ? en : es,
      basePath: isEnglish ? '/en' : '/',
      altPath: isEnglish ? '/' : '/en',
      altLocale: isEnglish ? 'es' : 'en',
    }
  }, [location.pathname])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
