import { Link } from 'react-router-dom'
import { services } from '../data/services'

function ServicesPage() {
  return (
    <section className="services-modern-page">
      <div className="container">
        <div className="modern-page-head">
          <span className="modern-kicker">Dienstleistungen</span>
          <h1>Meine Dienstleistungen im Überblick</h1>
          <p>
            Persönliche Unterstützung in Bern und Umgebung für Reinigung,
            Fenster, Treppen, Garten, Umzüge und grössere Arbeiten.
          </p>
        </div>

        <div className="modern-services-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/dienstleistungen/${service.slug}`}
              className="modern-service-card"
            >
              <div className="modern-service-card-top">
                <span className="modern-service-badge">Service</span>
              </div>

              <h2>{service.title}</h2>
              <p>{service.shortText}</p>

              <div className="modern-service-link">
                Mehr erfahren <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage