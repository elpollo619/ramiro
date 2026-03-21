import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  const callLabel =
    t?.nav?.call ||
    (language === 'es'
      ? 'Llamar ahora'
      : language === 'pt'
        ? 'Ligar agora'
        : language === 'en'
          ? 'Call now'
          : 'Jetzt anrufen')

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand-icon-only" aria-label="Amaya Bern Services">
          <img
            src="/logo/logo-icon.png"
            alt="Amaya Bern Services"
            className="brand-icon-only-image"
          />
        </Link>

        <nav className="nav-modern">
          <NavLink to="/ueber-ramiro">
            {t?.nav?.about ||
              (language === 'es'
                ? 'Sobre Ramiro'
                : language === 'pt'
                  ? 'Sobre Ramiro'
                  : language === 'en'
                    ? 'About Ramiro'
                    : 'Über Ramiro')}
          </NavLink>

          <NavLink to="/dienstleistungen">
            {t?.nav?.services ||
              (language === 'es'
                ? 'Servicios'
                : language === 'pt'
                  ? 'Serviços'
                  : language === 'en'
                    ? 'Services'
                    : 'Dienstleistungen')}
          </NavLink>

          <NavLink to="/catering">Catering</NavLink>
          <NavLink to="/kontakt">
            {t?.nav?.contact ||
              (language === 'es'
                ? 'Contacto'
                : language === 'pt'
                  ? 'Contacto'
                  : language === 'en'
                    ? 'Contact'
                    : 'Kontakt')}
          </NavLink>
        </nav>

        <div className="nav-actions">
          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="it">IT</option>
            <option value="rm">RM</option>
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="pt">PT</option>
          </select>

          <a className="button button-dark nav-call-button" href="tel:+41765683445">
            {callLabel}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar