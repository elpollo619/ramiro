import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-badge">
            <img
              src="/logo/logo-icon.png"
              alt="Amaya Bern Services"
              className="footer-brand-icon"
            />
          </div>

          <h3 className="footer-title">Amaya Bern</h3>
          <span className="footer-sub">Services</span>

          <p className="footer-text">
            Persönlicher Service für Reinigung, Gartenpflege, Umzüge und
            Kochservice in Bern und Umgebung.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <Link to="/ueber-ramiro">Über Ramiro</Link>
          <Link to="/dienstleistungen">Dienstleistungen</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>

        <div className="footer-contact">
          <h4>Kontakt</h4>
          <p>Bern und Umgebung</p>
          <a href="mailto:info@amaya-allroundservice.ch">
            info@amaya-allroundservice.ch
          </a>
          <a href="tel:+41000000000">+41 00 000 00 00</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer