import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { img } from '../utils/images'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-badge" aria-label="Amaya Bern Services">
            <img
              src={img('logo-icon.png')}
              alt="Amaya Bern Services"
              className="footer-brand-icon"
            />
          </Link>

          <p className="footer-text">{t.footer?.description}</p>
        </div>

        <div className="footer-nav">
          <h4>{t.footer?.navigation}</h4>
          <Link to="/">Home</Link>
          <Link to="/ueber-ramiro">{t.nav?.about}</Link>
          <Link to="/dienstleistungen">{t.nav?.services}</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/kontakt">{t.nav?.contact}</Link>
          <Link to="/offerte">{t.common?.requestNow}</Link>
        </div>

        <div className="footer-contact">
          <h4>{t.footer?.contact}</h4>
          <p>Bern und Umgebung</p>
          <a href="mailto:info@amayabern.ch">info@amayabern.ch</a>
          <a href="tel:+41765683445">+41 76 568 34 45</a>
          <a
            href="https://wa.me/41765683445"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Amaya Bern Services. Alle Rechte vorbehalten.</p>
          <div className="footer-legal-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
