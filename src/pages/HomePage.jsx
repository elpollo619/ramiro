import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="services-modern-page">
      <div className="container">
        <div className="modern-page-head">
          <span className="modern-kicker">Bern und Umgebung</span>
          <h1>Reinigungs- und Unterhaltsservices in Bern</h1>
          <p>
            Ich arbeite persönlich, damit alles sauber, ordentlich und gut
            gemacht ist.
          </p>
        </div>

        <div className="service-detail-hero">
          <div className="service-detail-copy">
            <img
              src="/logo/logo-icon.png"
              alt="Amaya Bern Services"
              className="hero-icon"
            />

            <p>
              Ich heisse Ramiro Amaya und biete Reinigungs-, Unterhalts-,
              Garten- und Umzugshilfe in der Region Bern an.
            </p>

            <p>
              Ich arbeite direkt mit meinen Kunden, ohne Zwischenpersonen. So
              kann ich einen vertrauensvollen, pünktlichen und sauber
              ausgeführten Service bieten.
            </p>

            <p>
              Jede Arbeit erledige ich mit Verantwortung und viel Liebe zum
              Detail – so, als wäre es für mein eigenes Zuhause.
            </p>

            <div className="service-detail-actions">
              <Link to="/kontakt" className="modern-primary-button">
                Jetzt anfragen
              </Link>

              <Link to="/dienstleistungen" className="modern-secondary-button">
                Dienstleistungen ansehen
              </Link>
            </div>
          </div>

          <div className="service-detail-side">
            <div className="service-highlight-card">
              <span className="service-highlight-label">Leistungen</span>
              <h3>Alles aus einer Hand</h3>
              <p>
                Fensterreinigung, Treppenreinigung, allgemeine Reinigung,
                Gartenpflege, Umzugshilfe und Kochservice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage