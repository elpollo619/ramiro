import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import translations from '../i18n/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('site-language') || 'de'
  })

  useEffect(() => {
    localStorage.setItem('site-language', language)
  }, [language])

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