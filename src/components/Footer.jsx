import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <NavLink to="/" className="brand">
          <span className="brand-main">Amaya</span>
          <span className="brand-sub">Allroundservice Bern</span>
        </NavLink>

        <nav className="nav">
          <NavLink to="/ueber-ramiro">Über Ramiro</NavLink>
          <NavLink to="/dienstleistungen">Dienstleistungen</NavLink>
          <NavLink to="/catering">Catering</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>

        <a href="tel:+41000000000" className="button button-dark">
          Jetzt anrufen
        </a>
      </div>
    </header>
  )
}

export default Navbar