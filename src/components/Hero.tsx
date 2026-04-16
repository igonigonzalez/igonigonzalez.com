import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-image.jpg"
          alt="Ignacio Goñi González"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-[1.05] tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-white">IGNACIO</span>
              <span className="mt-[0.06em] block text-white">GOÑI</span>
              <span className="block text-white">GONZÁLEZ</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              {t.hero.tagline}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
