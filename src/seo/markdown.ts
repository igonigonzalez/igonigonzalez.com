import { es } from '@/i18n/es'
import { en } from '@/i18n/en'
import type { Locale } from '@/i18n/types'
import { DOMAIN } from './structuredData'

const LABELS: Record<Locale, Record<string, string>> = {
  es: { about: 'Sobre mí', contact: 'Contacto', altLang: 'English version' },
  en: { about: 'About', contact: 'Contact', altLang: 'Versión en español' },
}

/**
 * The page as Markdown, built from the same dictionaries the UI renders, so it
 * cannot drift out of sync with the site.
 */
export function buildMarkdown(locale: Locale): string {
  const t = locale === 'en' ? en : es
  const l = LABELS[locale]
  const altUrl = locale === 'en' ? `${DOMAIN}/` : `${DOMAIN}/en`
  const out: string[] = []

  out.push(`# ${t.meta.title}`, '', `> ${t.meta.description}`, '')

  out.push(`## ${l.about}`, '')
  out.push(t.about.paragraph1, '')
  out.push(t.about.paragraph2.join('YAMATO'), '')
  out.push(t.about.paragraph3, '')

  out.push(`## ${t.skills.title}`, '')
  t.skills.list.forEach((s) => out.push(`- ${s}`))
  out.push('')

  out.push(`## ${t.work.title.replace('\n', ' ')}`, '')
  t.work.experiences.forEach((e) => {
    out.push(`### ${e.title} — ${e.company}`, '', `${e.location} · ${e.period}`, '', e.description, '')
  })

  out.push(`## ${t.education.title}`, '')
  t.education.items.forEach((e) => {
    out.push(`### ${e.degree}`, '', `${e.school} · ${e.period}`, '', e.description, '')
  })

  out.push(`## ${t.writing.title}`, '')
  t.writing.articles.forEach((a) => {
    const link = a.link && a.link !== '#' ? ` — ${a.link}` : ''
    out.push(`- ${a.title} (${a.publication}, ${a.year})${link}`)
  })
  out.push('')

  out.push(`## ${t.speaking.title}`, '')
  t.speaking.talks.forEach((s) => out.push(`- ${s.title} (${s.event}, ${s.year})`))
  out.push('')

  out.push(`## ${l.contact}`, '', t.contact.location, '', `[${l.altLang}](${altUrl})`, '')

  return out.join('\n')
}
