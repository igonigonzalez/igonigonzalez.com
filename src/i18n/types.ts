export type Locale = 'es' | 'en'

export interface Translations {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  nav: {
    about: string
    skills: string
    work: string
    education: string
    writing: string
    speaking: string
    menu: string
    close: string
  }
  hero: {
    tagline: string
  }
  about: {
    label: string
    imgCaption1: string
    paragraph1: string
    quote: string[]
    quoteCaption: string
    imgCaption2: string
    paragraph2: string
    imgCaption3: string
    paragraph3: string
  }
  skills: {
    label: string
    title: string
    list: string[]
  }
  work: {
    label: string
    title: string
    experiences: {
      title: string
      company: string
      location: string
      period: string
      description: string
    }[]
  }
  education: {
    label: string
    title: string
    items: {
      school: string
      caption: string
      degree: string
      description: string
      period: string
    }[]
  }
  writing: {
    label: string
    title: string
    articles: {
      title: string
      publication: string
      year: string
      link: string
    }[]
  }
  speaking: {
    label: string
    title: string
    talks: {
      title: string
      event: string
      year: string
      link: string
      type: string
    }[]
  }
  contact: {
    label: string
    title: string
    question: string
    cta: string
    directLabel: string
    footer: string
    location: string
    languageLabel: string
  }
}
