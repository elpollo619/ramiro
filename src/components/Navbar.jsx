import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" className="brand-modern">
          <img
            src="/logo/logo-icon.png"
            alt="Amaya Bern Services"
            className="brand-icon"
          />

          <div className="brand-text">
            <span className="brand-main-text">Amaya Bern</span>
            <span className="brand-sub-text">Services</span>
          </div>
        </Link>

        <nav className="nav-modern">
          <NavLink to="/ueber-ramiro">Über Ramiro</NavLink>
          <NavLink to="/dienstleistungen">Dienstleistungen</NavLink>
          <NavLink to="/catering">Catering</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>

        <a href="tel:+41000000000" className="button button-dark nav-call-button">
          Jetzt anrufen
        </a>
      </div>
    </header>
  )
}

export default Navbar