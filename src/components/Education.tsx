import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* ESIC */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="ESIC Business & Marketing School"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                ESIC BUSINESS & MARKETING SCHOOL - MADRID
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Master en Gaming & Esports Business Development
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Formación especializada en el ecosistema de gaming y esports, 
                  abarcando modelos de negocio, estrategias de monetización 
                  y desarrollo de marca en la industria del entretenimiento digital.
                </p>
                <p className="text-sm text-gray-500">FEB 2020 — ABR 2020</p>
              </div>
            </motion.div>
          </div>

          {/* The Valley */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Master en Digital Business (MDB+)
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Programa avanzado en transformación digital, estrategia de negocio 
                  digital, e-commerce y marketing digital. Una formación clave en la 
                  transición de ingeniería a liderazgo en marketing digital.
                </p>
                <p className="text-sm text-gray-500">OCT 2015 — JUL 2016</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="The Valley Digital Business School"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                THE VALLEY DIGITAL BUSINESS SCHOOL - MADRID
              </p>
            </motion.div>
          </div>

          {/* UPNA - Master */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Universidad Pública de Navarra"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                UNIVERSIDAD PÚBLICA DE NAVARRA - PAMPLONA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Master en Ingeniería de Materiales y Fabricación
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Especialización en ingeniería de materiales y procesos de fabricación 
                  avanzados, con aplicación directa en la industria aeroespacial 
                  y automoción.
                </p>
                <p className="text-sm text-gray-500">SEP 2006 — JUN 2007</p>
              </div>
            </motion.div>
          </div>

          {/* UPNA - Grado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Ingeniería Mecánica
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Formación base en ingeniería mecánica que sentó las bases del 
                  pensamiento analítico, resolución de problemas y rigor técnico 
                  que Ignacio aplica hoy al marketing y la estrategia digital.
                </p>
                <p className="text-sm text-gray-500">SEP 2000 — SEP 2004</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Universidad Pública de Navarra Campus"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                UNIVERSIDAD PÚBLICA DE NAVARRA - PAMPLONA
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
