import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n/LanguageContext'
import { Linkedin, Instagram, Youtube, Github, Mail } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.53V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/igonigonzalez', Icon: Linkedin },
  { label: 'X', href: 'https://x.com/igonigonzalez', Icon: XIcon },
  { label: 'Instagram', href: 'https://instagram.com/igonigonzalez', Icon: Instagram },
  { label: 'TikTok', href: 'https://tiktok.com/@igonigonzalez', Icon: TikTokIcon },
  { label: 'YouTube', href: 'https://youtube.com/@igonigonzalez', Icon: Youtube },
  { label: 'GitHub', href: 'https://github.com/igonigonzalez', Icon: Github },
  { label: 'Email', href: 'mailto:ignacio@yamato.digital', Icon: Mail },
]


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}



const contacts = [
  { label: 'YAMATO DIGITAL', link: 'https://yamato.digital' },
  { label: 'PULSO DIARIO', link: 'https://pulsodiario.igonigonzalez.com' },
]

export function Contact() {

  const { t, locale, altPath, altLocale } = useLanguage()
  const questionLines = t.contact.question.split('\n')

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">{t.contact.label}</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          {t.contact.title}
        </motion.h2>

        <motion.div {...fadeInUp} className="w-full h-px bg-gray-700 mb-12 lg:mb-16" />

        <motion.div {...fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            {questionLines.map((line, i) => (
              <span key={i}>{line}{i < questionLines.length - 1 && <br />}</span>
            ))}
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">{t.contact.cta}</p>
        </motion.div>

        <div className="space-y-0 max-w-2xl">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <span className="text-sm text-gray-400 tracking-widest">{contact.label}</span>
              <span className="text-gray-500 group-hover:text-white transition-colors">↗</span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        <motion.div {...fadeInUp} className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">{t.contact.directLabel}</p>
          <div className="flex items-center gap-6 md:gap-8">
            {socialLinks.map((social) => {
              const { Icon } = social
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-500 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
        </motion.div>


        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 relative flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">{t.contact.footer}</p>

          {/* Language Selector - Centered */}
          <div className="flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
            <Link
              to="/"
              className={`text-xs uppercase tracking-widest transition-colors ${locale === 'es' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
            >
              ES
            </Link>
            <span className="text-gray-700">|</span>
            <Link
              to="/en"
              className={`text-xs uppercase tracking-widest transition-colors ${locale === 'en' ? 'text-white' : 'text-gray-600 hover:text-gray-400'}`}
            >
              EN
            </Link>
          </div>

          <p className="text-xs text-gray-600">{t.contact.location}</p>
        </motion.footer>
      </div>
    </section>
  )
}
