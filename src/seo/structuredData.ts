import { es } from '@/i18n/es'
import { en } from '@/i18n/en'
import type { Locale } from '@/i18n/types'

export const DOMAIN = 'https://igonigonzalez.com'

/**
 * Every profile linked from the site, so a model can resolve the identity by
 * cross-referencing them. Keep in sync with Contact.tsx.
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

const NEWSLETTER_DESCRIPTION: Record<Locale, string> = {
  es: 'Newsletter diaria sobre marketing, estrategia, IA y emprendimiento.',
  en: 'Daily newsletter on marketing, strategy, AI and entrepreneurship.',
}

/**
 * Published pieces, keyed by the URL that appears in the dictionaries.
 *
 * Credit is transcribed from the source, never assumed: `authors` are the people
 * the publisher credits, and Ignacio is listed as `contributor` unless a source
 * bylines him. Getting this wrong would state something the publisher does not.
 * Anything not listed here stays out of the graph.
 */
const PIECES: Record<
  string,
  {
    type: string
    publisher?: string
    series?: { type: string; name: string }
    datePublished: string
    authors?: string[]
    contributor: boolean
  }
> = {
  'https://theconversation.com/por-que-es-tan-relevante-la-demanda-de-the-new-york-times-contra-openai-y-microsoft-por-usar-sus-contenidos-sin-permiso-221079':
    {
      type: 'Article',
      publisher: 'The Conversation',
      datePublished: '2024-01-25',
      authors: ['Sara Cabañas Area'],
      contributor: true,
    },
  'https://www.cmmedia.es/play/radio/808-radio/ok-6.html': {
    type: 'RadioEpisode',
    publisher: 'Castilla-La Mancha Media',
    series: { type: 'RadioSeries', name: 'Generador de Ideas 808' },
    datePublished: '2024',
    authors: ['Sara Cabañas Area'],
    contributor: true,
  },
  'https://open.spotify.com/episode/2VF7KrEvkW3b1S4dtIvIzW': {
    type: 'PodcastEpisode',
    datePublished: '2024-02-06',
    contributor: true,
  },
}

/** Institutions, deduplicated and never translated: a proper name is a proper name. */
function institutions() {
  const seen = new Set<string>()
  const out: { '@type': string; name: string }[] = []
  for (const item of es.education.items) {
    if (seen.has(item.school)) continue
    seen.add(item.school)
    out.push({ '@type': 'CollegeOrUniversity', name: item.school })
  }
  return out
}

/**
 * Pieces the site links, typed from PIECES. Titles keep the original Spanish:
 * a real work has one name, and translating it would point two different titles
 * at the same URL.
 */
function publications(personId: string) {
  const linked = [...es.writing.articles, ...es.speaking.talks].filter(
    (item) => item.link && item.link !== '#' && item.link !== NEWSLETTER_URL
  )

  return linked
    .map((item) => {
      const meta = PIECES[item.link]
      if (!meta) return null
      const node: Record<string, unknown> = {
        '@type': meta.type,
        name: item.title,
        url: item.link,
        datePublished: meta.datePublished,
        inLanguage: 'es',
      }
      if (meta.authors) {
        node.author = meta.authors.map((name) => ({ '@type': 'Person', name }))
      }
      if (meta.contributor) node.contributor = { '@id': personId }
      if (meta.publisher) {
        node.publisher = { '@type': 'Organization', name: meta.publisher }
      }
      if (meta.series) {
        node.partOfSeries = { '@type': meta.series.type, name: meta.series.name }
      }
      return node
    })
    .filter(Boolean)
}

/**
 * A linked graph instead of a bare Person: the person, the company he runs and
 * the newsletter he writes, tied together by @id so a model can tell they are
 * the same entity. The Person keeps one canonical @id and url across both
 * languages; only the human-readable strings change per locale.
 */
export function buildStructuredData(locale: Locale) {
  const t = locale === 'en' ? en : es
  const personId = `${DOMAIN}/#person`
  const orgId = `${YAMATO_URL}#organization`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Ignacio Goñi González',
        alternateName: 'Goñi',
        url: `${DOMAIN}/`,
        mainEntityOfPage: locale === 'en' ? `${DOMAIN}/en` : `${DOMAIN}/`,
        image: `${DOMAIN}/ignacio-goni.jpg`,
        jobTitle: JOB_TITLE[locale],
        description: t.meta.description,
        knowsLanguage: ['es', 'en'],
        workLocation: { '@type': 'Place', name: es.contact.location },
        knowsAbout: t.skills.list,
        alumniOf: institutions(),
        worksFor: { '@id': orgId },
        sameAs: PROFILES,
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
      ...publications(personId),
    ],
  }
}
