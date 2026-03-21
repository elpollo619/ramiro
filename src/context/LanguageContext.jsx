import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const translations = {
  de: {
    nav: {
      about: 'Über Ramiro',
      services: 'Dienstleistungen',
      contact: 'Kontakt',
      call: 'Jetzt anrufen',
      quote: 'Offerte',
    },
  },
  es: {
    nav: {
      about: 'Sobre Ramiro',
      services: 'Servicios',
      contact: 'Contacto',
      call: 'Llamar ahora',
      quote: 'Presupuesto',
    },
  },
  pt: {
    nav: {
      about: 'Sobre Ramiro',
      services: 'Serviços',
      contact: 'Contacto',
      call: 'Ligar agora',
      quote: 'Orçamento',
    },
  },
  en: {
    nav: {
      about: 'About Ramiro',
      services: 'Services',
      contact: 'Contact',
      call: 'Call now',
      quote: 'Quote',
    },
  },
  fr: {
    nav: {
      about: 'À propos de Ramiro',
      services: 'Services',
      contact: 'Contact',
      call: 'Appeler',
      quote: 'Devis',
    },
  },
  it: {
    nav: {
      about: 'Su Ramiro',
      services: 'Servizi',
      contact: 'Contatto',
      call: 'Chiama ora',
      quote: 'Preventivo',
    },
  },
  rm: {
    nav: {
      about: 'Davart Ramiro',
      services: 'Servetschs',
      contact: 'Contact',
      call: 'Clamar ussa',
      quote: 'Offerta',
    },
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('de')

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language] || translations.de,
    }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}