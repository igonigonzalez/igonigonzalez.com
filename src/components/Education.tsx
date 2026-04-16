import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageContext'
import eduEsic from '@/assets/edu-esic.jpg'
import eduValley from '@/assets/edu-valley.jpg'
import eduUpnaMaster from '@/assets/edu-upna-master.jpg'
import eduUpnaGrado from '@/assets/edu-upna-grado.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const images = [eduEsic, eduValley, eduUpnaMaster, eduUpnaGrado]

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">{t.education.label}</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2 {...fadeInUp} className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24">
          {t.education.title}
        </motion.h2>

        <div className="space-y-16 lg:space-y-24">
          {t.education.items.map((item, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div key={item.degree} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                <motion.div {...fadeInUp} className={isReversed ? 'flex items-center lg:order-2' : ''}>
                  {isReversed ? (
                    <div>
                      <h3 className="text-xl lg:text-2xl font-light text-white mb-4">{item.degree}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">{item.description}</p>
                      <p className="text-sm text-gray-500">{item.period}</p>
                    </div>
                  ) : (
                    <>
                      <img src={images[index]} alt={item.school} className="w-full h-auto grayscale" loading="lazy" width={1200} height={800} />
                      <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">{item.caption}</p>
                    </>
                  )}
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: 0.2 }}
                  className={isReversed ? 'lg:order-1' : 'flex items-center'}
                >
                  {isReversed ? (
                    <>
                      <img src={images[index]} alt={item.school} className="w-full h-auto grayscale" loading="lazy" width={1200} height={800} />
                      <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">{item.caption}</p>
                    </>
                  ) : (
                    <div>
                      <h3 className="text-xl lg:text-2xl font-light text-white mb-4">{item.degree}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">{item.description}</p>
                      <p className="text-sm text-gray-500">{item.period}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
