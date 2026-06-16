import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import aboutEngineering from "@/assets/about-engineering.jpg";
import aboutMarketing from "@/assets/about-marketing.jpg";
import aboutNewsletter from "@/assets/about-newsletter.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">{t.about.label}</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <img src={aboutEngineering} alt="Industria aeronáutica" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" width={1200} height={800} />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">{t.about.imgCaption1}</p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="order-1 lg:order-2 flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{t.about.paragraph1}</p>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            <span className="text-white underline underline-offset-8">{t.about.quote[0]}</span>
            <br />
            {t.about.quote[1]}
            <br />
            {t.about.quote[2]}
            <br />{t.about.quote[3]}
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase whitespace-pre-line">
            {t.about.quoteCaption}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              {t.about.paragraph2[0]}
              <a
                href="https://yamato.digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white transition-colors"
              >
                YAMATO
              </a>
              {t.about.paragraph2[1]}
            </p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <img src={aboutMarketing} alt="Estrategia de marketing digital" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" width={1200} height={800} />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">{t.about.imgCaption2}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img src={aboutNewsletter} alt="Escribiendo Pulso Diario" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" width={1200} height={800} />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase whitespace-pre-line">{t.about.imgCaption3}</p>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{t.about.paragraph3}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
