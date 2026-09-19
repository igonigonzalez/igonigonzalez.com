import { es } from '@/i18n/es'
import { en } from '@/i18n/en'
import type { Locale } from '@/i18n/types'
import { DOMAIN } from './structuredData'

const COPY = {
  es: {
    pages: 'Páginas',
    optional: 'Opcional',
    home: 'Portafolio principal en español: experiencia, formación, mentorías, publicaciones y charlas.',
    homeMd: 'La misma página en Markdown.',
    alt: 'English version of the portfolio.',
    yamato: 'Consultora de marketing independiente fundada por Ignacio.',
    newsletter: 'Newsletter diaria sobre marketing, IA y emprendimiento.',
  },
  en: {
    pages: 'Pages',
    optional: 'Optional',
    home: 'Main portfolio in English: experience, education, mentoring, writing and talks.',
    homeMd: 'The same page in Markdown.',
    alt: 'Versión en español del portafolio.',
    yamato: 'Independent marketing consultancy founded by Ignacio.',
    newsletter: 'Daily newsletter on marketing, AI and entrepreneurship (Spanish).',
  },
} as const

/** Short entry point for agents. Generated from the site dictionaries. */
export function buildLlms(locale: Locale): string {
  const t = locale === 'en' ? en : es
  const c = COPY[locale]
  const self = locale === 'en' ? '/en' : '/'
  const alt = locale === 'en' ? '/' : '/en'
  const selfMd = locale === 'en' ? '/en/index.md' : '/index.md'

  return [
    `# ${t.meta.title}`,
    '',
    `> ${t.meta.description}`,
    '',
    t.about.paragraph1,
    '',
    `## ${c.pages}`,
    '',
    `- [${t.meta.title}](${self}): ${c.home}`,
    `- [Markdown](${selfMd}): ${c.homeMd}`,
    `- [${locale === 'en' ? 'Español' : 'English'}](${alt}): ${c.alt}`,
    `- [llms-full.txt](/llms-full.txt): ${locale === 'en' ? 'Full profile in one file.' : 'Perfil completo en un solo fichero.'}`,
    '',
    `## ${c.optional}`,
    '',
    `- [YAMATO](https://yamato.digital): ${c.yamato}`,
    `- [Pulso Diario](https://pulsodiario.igonigonzalez.com): ${c.newsletter}`,
    '',
  ].join('\n')
}

/** Everything an agent could need about Ignacio, in one file. */
export function buildLlmsFull(markdownEs: string, markdownEn: string): string {
  return [
    '# Ignacio Goñi González — llms-full',
    '',
    `> ${es.meta.description}`,
    '',
    `Canonical: ${DOMAIN}/ · English: ${DOMAIN}/en`,
    '',
    '---',
    '',
    markdownEs,
    '',
    '---',
    '',
    markdownEn,
    '',
  ].join('\n')
}
