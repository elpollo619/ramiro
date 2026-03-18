function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Service in Bern und Umgebung</span>

          <h1>Praktische Hilfe für Alltag, Haus, Garten und Anlässe</h1>

          <p>
            Amaya Allroundservice Bern unterstützt Privatpersonen und kleine
            Unternehmen mit Reinigung, Gartenarbeiten, Umzügen, Transport und
            hausgemachten Speisen für Gruppen und Events.
          </p>

          <div className="hero-actions">
            <a href="#kontakt" className="button button-dark">
              Offerte anfragen
            </a>

            <a href="#services" className="button button-light">
              Dienstleistungen ansehen
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">Unsere Bereiche</div>

          <ul className="hero-list">
            <li>Reinigung</li>
            <li>Gartenservice</li>
            <li>Umzug & Transport</li>
            <li>Catering & Comidas</li>
          </ul>

          <p className="hero-card-text">
            Persönlich, flexibel und zuverlässig – direkter Kontakt mit Ramiro
            Amaya.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero