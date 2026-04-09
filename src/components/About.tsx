import { motion } from "framer-motion";
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
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Sobre mí</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <img
              src={aboutEngineering}
              alt="Industria aeronáutica"
              className="w-full h-auto grayscale"
              loading="lazy"
              width={1200}
              height={800}
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">DE INGENIERO A CMO - MADRID / ESPAÑA</p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Soy Ignacio Goñi (la mayoría me llama Goñi). Empecé mi carrera diseñando componentes aeronáuticos. Pero en
              2012 descubrí el marketing digital — y me di cuenta de que era el campo perfecto para combinar lógica,
              creatividad y velocidad.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            <span className="text-white underline underline-offset-8">"DE INGENIERO A CMO.</span>
            <br />
            20 AÑOS CONVIRTIENDO
            <br />
            MARKETING EN MOTOR
            <br />
            DE CRECIMIENTO."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            FUNDADOR DE YAMATO
            <br />& PULSO DIARIO
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Desde entonces he liderado el crecimiento de startups, escalado marcas globales como Loewe Perfumes dentro
              del ecosistema LVMH, y dirigido marketing para la primera startup de LLM de España. Hoy soy el fundador de
              YAMATO: un partner de marketing para quienes quieren resultados, no vanidad.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
            <img
              src={aboutMarketing}
              alt="Estrategia de marketing digital"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              width={1200}
              height={800}
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">YAMATO DIGITAL - MADRID / ESPAÑA</p>
          </motion.div>
        </div>

        {/* Third Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src={aboutNewsletter}
              alt="Escribiendo Pulso Diario"
              className="w-full h-auto grayscale"
              loading="lazy"
              width={1200}
              height={800}
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              PULSO DIARIO - NEWSLETTER DIARIA
              <br />
              (2.500+ SUSCRIPTORES)
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }} className="flex items-center">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              También escribo Pulso Diario, una newsletter diaria leída por más de 2.500 suscriptores donde comparto
              ideas sobre marketing, estrategia, IA y emprendimiento sin el BS corporativo. Mi enfoque: convertir el
              marketing de un coste en una palanca de crecimiento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
