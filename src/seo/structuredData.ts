import { es } from '@/i18n/es'
import { en } from '@/i18n/en'
import type { Locale } from '@/i18n/types'

export const DOMAIN = 'https://igonigonzalez.com'

/**
 * Every profile linked from the site, so a model can resolve the identity
 * by cross-referencing them. Keep in sync with Contact.tsx.
 */
const PROFILES = [
  'https://www.linkedin.com/in/igonigonzalez/',
  'https://x.com/igonigonzalez',
  'https://www.instagram.com/igonigonzalez/',
  'https://www.youtube.com/@igonigonzalez',
  'https://tiktok.com/@igonigonzalez',
  'https://github.com/igonigonzalez',
]

const YAMATO_URL = 'https://yamato.digital'
const NEWSLETTER_URL = 'https://pulsodiario.igonigonzalez.com'

const JOB_TITLE: Record<Locale, string> = {
  es: 'CMO y estratega de marketing digital y growth',
  en: 'CMO and digital marketing & growth strategist',
}

const EXPERTISE: Record<Locale, string[]> = {
  es: es.skills.list,
  en: en.skills.list,
}

/**
 * How to type a published piece, keyed by host. Anything in `writing.articles`
 * with a real link and a known host joins the graph automatically, so filling in
 * the remaining links is all it takes to grow it.
 */
const PUBLISHERS: Record<string, { type: string; publisher?: string }> = {
  'theconversation.com': { type: 'Article', publisher: 'The Conversation' },
  'www.cmmedia.es': { type: 'RadioEpisode', publisher: 'CMMedia' },
  'open.spotify.com': { type: 'PodcastEpisode' },
}

const NEWSLETTER_DESCRIPTION: Record<Locale, string> = {
  es: 'Newsletter diaria sobre marketing, estrategia, IA y emprendimiento.',
  en: 'Daily newsletter on marketing, strategy, AI and entrepreneurship.',
}

/**
 * A linked graph instead of a bare Person: the person, the company he runs and
 * the newsletter he writes, tied together by @id so a model can tell they are
 * the same entity.
 */
export function buildStructuredData(locale: Locale) {
  const t = locale === 'en' ? en : es
  const pageUrl = locale === 'en' ? `${DOMAIN}/en` : `${DOMAIN}/`
  const personId = `${DOMAIN}/#person`
  const orgId = `${YAMATO_URL}#organization`

  const alumniOf = t.education.items.map((item) => ({
    '@type': 'CollegeOrUniversity',
    name: item.school,
  }))

  const publications = t.writing.articles
    .filter((a) => a.link && a.link !== '#' && a.link !== NEWSLETTER_URL)
    .map((a) => {
      const host = a.link.replace(/^https?:\/\//, '').split('/')[0]
      const known = PUBLISHERS[host]
      if (!known) return null
      return {
        '@type': known.type,
        name: a.title,
        url: a.link,
        datePublished: a.year,
        inLanguage: 'es',
        author: { '@id': personId },
        ...(known.publisher
          ? { publisher: { '@type': 'Organization', name: known.publisher } }
          : {}),
      }
    })
    .filter(Boolean)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Ignacio Goñi González',
        alternateName: 'Goñi',
        url: pageUrl,
        image: `${DOMAIN}/ignacio-goni.jpg`,
        jobTitle: JOB_TITLE[locale],
        description: t.meta.description,
        inLanguage: locale,
        knowsLanguage: ['es', 'en'],
        homeLocation: { '@type': 'Place', name: t.contact.location },
        knowsAbout: EXPERTISE[locale],
        alumniOf,
        worksFor: { '@id': orgId },
        sameAs: PROFILES,
        ...(publications.length ? { subjectOf: publications.map((p) => p.url) } : {}),
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'YAMATO',
        url: YAMATO_URL,
        founder: { '@id': personId },
      },
      {
        '@type': 'Blog',
        '@id': `${NEWSLETTER_URL}#newsletter`,
        name: 'Pulso Diario',
        url: NEWSLETTER_URL,
        description: NEWSLETTER_DESCRIPTION[locale],
        inLanguage: 'es',
        author: { '@id': personId },
      },
      ...publications,
    ],
  }
}
