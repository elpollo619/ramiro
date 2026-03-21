import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-badge" aria-label="Amaya Bern Services">
            <img
              src="/logo/logo-icon.png"
              alt="Amaya Bern Services"
              className="footer-brand-icon"
            />
          </Link>

          <p className="footer-text">
            {language === 'es'
              ? 'Servicio personal de limpieza, jardinería, mudanzas y catering en Berna y alrededores.'
              : language === 'pt'
                ? 'Serviço pessoal de limpeza, jardinagem, mudanças e catering em Berna e arredores.'
                : language === 'en'
                  ? 'Personal service for cleaning, gardening, moving and catering in Bern and nearby areas.'
                  : 'Persönlicher Service für Reinigung, Gartenpflege, Umzüge und Catering in Bern und Umgebung.'}
          </p>
        </div>

        <div className="footer-nav">
          <h4>
            {language === 'es'
              ? 'Navegación'
              : language === 'pt'
                ? 'Navegação'
                : language === 'en'
                  ? 'Navigation'
                  : 'Navigation'}
          </h4>

          <Link to="/ueber-ramiro">
            {language === 'es'
              ? 'Sobre Ramiro'
              : language === 'pt'
                ? 'Sobre Ramiro'
                : language === 'en'
                  ? 'About Ramiro'
                  : 'Über Ramiro'}
          </Link>

          <Link to="/dienstleistungen">
            {language === 'es'
              ? 'Servicios'
              : language === 'pt'
                ? 'Serviços'
                : language === 'en'
                  ? 'Services'
                  : 'Dienstleistungen'}
          </Link>

          <Link to="/catering">Catering</Link>

          <Link to="/kontakt">
            {language === 'es'
              ? 'Contacto'
              : language === 'pt'
                ? 'Contacto'
                : language === 'en'
                  ? 'Contact'
                  : 'Kontakt'}
          </Link>

          <Link to="/offerte">
            {language === 'es'
              ? 'Presupuesto'
              : language === 'pt'
                ? 'Orçamento'
                : language === 'en'
                  ? 'Quote'
                  : 'Offerte'}
          </Link>
        </div>

        <div className="footer-contact">
          <h4>
            {language === 'es'
              ? 'Contacto'
              : language === 'pt'
                ? 'Contacto'
                : language === 'en'
                  ? 'Contact'
                  : 'Kontakt'}
          </h4>

          <p>Bern und Umgebung</p>
          <a href="mailto:amayabernservices@gmail.com">
            amayabernservices@gmail.com
          </a>
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
    </footer>
  )
}

export default Footer