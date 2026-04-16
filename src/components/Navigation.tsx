import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLanguage } from '@/i18n/LanguageContext'
import { cn } from '@/lib/utils'

const socialLinks = [
  { label: 'YAMATO', href: 'https://yamato.digital/' },
  { label: 'Newsletter', href: 'https://pulsodiario.igonigonzalez.com' },
]

export function Navigation() {
  const activeSection = useActiveSection()
  const { t, locale } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'work', label: t.nav.work },
    { id: 'education', label: t.nav.education },
    { id: 'writing', label: t.nav.writing },
    { id: 'speaking', label: t.nav.speaking },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start md:hidden">
        <div className="relative">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-sm text-white mix-blend-difference">
            {mobileMenuOpen ? t.nav.close : t.nav.menu}
          </button>
          <div className={cn('flex flex-col items-start gap-3 mt-6 transition-all duration-300', mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none')}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn('text-sm text-white mix-blend-difference transition-all duration-300 relative py-1', 'hover:opacity-60', activeSection === item.id && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white')}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-6 justify-end">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <nav className="hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10">
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn('text-sm text-white mix-blend-difference transition-all duration-300 relative py-1', 'hover:opacity-60', activeSection === item.id && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white')}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
