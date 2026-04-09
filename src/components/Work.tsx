import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Founder & Chief Everything Officer',
    company: 'YAMATO',
    location: 'Madrid, España',
    period: '2024 — PRESENTE',
    description: 'Launched and scaled a boutique CMO-as-a-Service agency. Delivered tailored marketing strategies combining AI, data, and growth-focused communication. Booked over 750 hours of CMO consultancy in the first 18 months.',
    skills: ['CMO-as-a-Service', 'Strategic Consulting', 'AI & Data', 'Growth Marketing', 'Partnerships'],
  },
  {
    title: 'Founder & Chief Writer Officer',
    company: 'Pulso Diario',
    location: 'Internet',
    period: '2024 — PRESENTE',
    description: 'Created and grew a daily newsletter with 2,500+ subscribers sharing insights on marketing, entrepreneurship, AI and personal development. Achieved consistent high open & click-through rates with concise, action-driven content.',
    skills: ['Newsletter Growth', 'Copywriting', 'Content Strategy', 'LinkedIn', 'Audience Building'],
  },
  {
    title: 'CMO',
    company: 'Clibrain AI',
    location: 'Madrid, España',
    period: 'JUL 2023 — ENE 2024',
    description: 'Led marketing for Spain\'s first LLM startup, positioning Clibrain as a national AI leader within months. Built entire marketing infrastructure and represented the brand in media, hackathons, and industry events.',
    skills: ['AI Startups', 'Brand Strategy', 'Go-to-Market', 'Product Marketing', 'Public Speaking'],
  },
  {
    title: 'CMO',
    company: 'Clidrive',
    location: 'Madrid, España',
    period: 'NOV 2022 — JUL 2023',
    description: 'Launched full paid media strategy driving €1M in revenue within 3 months. Achieved profitability in 6 months through data-driven growth for a B2C car subscription startup leveraging AI.',
    skills: ['Paid Media', 'B2C Growth', 'Performance Marketing', 'CRO', 'Data-Driven Strategy'],
  },
  {
    title: 'Global Digital Marketing Manager',
    company: 'Streamloots',
    location: 'Madrid, España',
    period: 'DIC 2021 — NOV 2022',
    description: 'Led global digital marketing for a creator monetization platform. Spearheaded U.S. market entry, owned CRM strategy end-to-end, and launched automated lifecycle campaigns improving retention.',
    skills: ['Global Marketing', 'CRM', 'Creator Economy', 'International Expansion', 'Lifecycle Marketing'],
  },
  {
    title: 'Global Digital Marketing Manager',
    company: 'Loewe Perfumes',
    location: 'Madrid, España',
    period: '2018 — 2021',
    description: 'Scaled online revenue from €30K to €1.5M/year through full-funnel campaigns. Opened key international markets (U.S., Mexico, UAE) and coordinated 10+ external agencies within LVMH\'s global ecosystem.',
    skills: ['Luxury Marketing', 'E-commerce', 'LVMH', 'International Markets', 'Brand Strategy'],
  },
  {
    title: 'Paid Media Director',
    company: 'Product School',
    location: 'Madrid — San Francisco',
    period: '2016 — 2018',
    description: 'Led global paid media strategy for a fast-growing EdTech company. Scaled acquisition campaigns across Google, Facebook, and LinkedIn Ads, contributing to expansion to 15+ campuses worldwide.',
    skills: ['EdTech', 'Paid Media', 'Google Ads', 'Facebook Ads', 'LinkedIn Ads'],
  },
  {
    title: 'Digital Project Manager',
    company: 'JOT Internet Media',
    location: 'Madrid, España',
    period: '2012 — 2016',
    description: 'Led digital business initiatives focused on high-efficiency user acquisition via SEM and Social Ads. Managed large-scale performance campaigns targeting North America, Europe, and Oceania with six-figure monthly budgets.',
    skills: ['SEM', 'Performance Marketing', 'Data Analysis', 'Campaign Management', 'Google Analytics'],
  },
  {
    title: 'Mechanical Engineer',
    company: 'MTorres',
    location: 'Pamplona, España',
    period: '2005 — 2012',
    description: 'Designed mechanical systems for high-precision automation used by Airbus, Boeing, Northrop Grumman, and Embraer. Built a foundation in engineering rigor and systems thinking later applied to marketing.',
    skills: ['Aerospace', 'CAD', 'Mechanical Design', 'R&D', 'Systems Engineering'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Trayectoria</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EXPERIENCIA<br />PROFESIONAL
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
