import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/i18n/LanguageContext'
import { buildStructuredData, DOMAIN } from '@/seo/structuredData'

export function SEOHead() {
  const { locale, t, altLocale, altPath } = useLanguage()

  const currentUrl = locale === 'es' ? DOMAIN + '/' : DOMAIN + '/en'
  const altUrl = altLocale === 'es' ? DOMAIN + '/' : DOMAIN + '/en'
  const structuredData = buildStructuredData(locale)
  const markdownUrl = locale === 'es' ? DOMAIN + '/index.md' : DOMAIN + '/en/index.md'

  return (
    <Helmet>
      <html lang={locale} />
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Markdown alternate, for agents that ask for it */}
      <link rel="alternate" type="text/markdown" href={markdownUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="es" href={DOMAIN + '/'} />
      <link rel="alternate" hrefLang="en" href={DOMAIN + '/en'} />
      <link rel="alternate" hrefLang="x-default" href={DOMAIN + '/'} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ignacio Goñi González" />
      <meta property="og:locale" content={locale === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:locale:alternate" content={altLocale === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:title" content={t.meta.ogTitle} />
      <meta property="og:description" content={t.meta.ogDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${DOMAIN}/ignacio-goni-gonzalez-marketing-growth.jpg`} />
      <meta property="og:image:alt" content={t.meta.ogTitle} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.ogTitle} />
      <meta name="twitter:description" content={t.meta.ogDescription} />
      <meta name="twitter:image" content={`${DOMAIN}/ignacio-goni-gonzalez-marketing-growth.jpg`} />
      <meta name="twitter:image:alt" content={t.meta.ogTitle} />

      {/* Structured data, per language */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
