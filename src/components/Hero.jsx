function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="container hero-content">
          <p className="hero-kicker">Zuverlässiger Service in Bern und Umgebung</p>

          <h1>Praktische Hilfe für Haus, Alltag und Events</h1>

          <p className="hero-text">
            Amaya Allroundservice Bern unterstützt Privatpersonen und kleine
            Unternehmen mit Reinigung, Gartenarbeit, Umzügen, Transport und
            hausgemachten Speisen.
          </p>

          <div className="hero-buttons">
            <a href="#kontakt" className="btn btn-primary">
              Offerte anfragen
            </a>

            <a href="#services" className="btn btn-secondary">
              Dienstleistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero