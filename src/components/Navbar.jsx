function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-main">Amaya</span>
          <span className="logo-sub">Allroundservice Bern</span>
        </a>

        <nav className="nav">
          <a href="#services">Dienstleistungen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a href="tel:+41000000000" className="nav-button">
          Jetzt anrufen
        </a>
      </div>
    </header>
  )
}

export default Navbar