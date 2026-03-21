import { useLanguage } from '../context/LanguageContext'

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      className="language-switcher"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      aria-label="Language switcher"
    >
      <option value="de">DE</option>
      <option value="fr">FR</option>
      <option value="it">IT</option>
      <option value="rm">RM</option>
      <option value="es">ES</option>
      <option value="en">EN</option>
      <option value="pt">PT</option>
    </select>
  )
}

export default LanguageSwitcher