import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageContext'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Mentoring() {
  const { t } = useLanguage()

  return (
    <section id="mentoring" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">{t.mentoring.label}</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2 {...fadeInUp} className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24">
          {t.mentoring.title}
        </motion.h2>

        <div className="space-y-0">
          {t.mentoring.items.map((item, index) => (
            <motion.article
              key={item.organization}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-6 md:py-8 lg:py-10"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">{item.organization}</h3>
                  <p className="text-sm text-gray-600 mt-1 md:mt-2">{item.location}</p>
                  {item.context ? (
                    <p className="text-sm text-gray-500 mt-1 md:mt-2">{item.context}</p>
                  ) : null}
                  <p className="text-sm md:text-base text-gray-400 mt-1 md:mt-2">{item.role}</p>
                </div>
                <span className="text-sm text-gray-500 tracking-widest uppercase md:text-right shrink-0">{item.period}</span>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
