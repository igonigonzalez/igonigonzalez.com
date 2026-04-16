import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/i18n/LanguageContext'

const DOMAIN = 'https://igonigonzalez.com'

export function SEOHead() {
  const { locale, t, altLocale, altPath } = useLanguage()

  const currentUrl = locale === 'es' ? DOMAIN + '/' : DOMAIN + '/en'
  const altUrl = altLocale === 'es' ? DOMAIN + '/' : DOMAIN + '/en'

  return (
    <Helmet>
      <html lang={locale} />
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="es" href={DOMAIN + '/'} />
      <link rel="alternate" hrefLang="en" href={DOMAIN + '/en'} />
      <link rel="alternate" hrefLang="x-default" href={DOMAIN + '/'} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f7f42f3e-7742-4095-9c74-8d07dca9e734" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.ogTitle} />
      <meta name="twitter:description" content={t.meta.ogDescription} />
      <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f7f42f3e-7742-4095-9c74-8d07dca9e734" />
    </Helmet>
  )
}
