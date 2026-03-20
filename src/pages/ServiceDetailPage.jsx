import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return (
      <section className="services-modern-page">
        <div className="container narrow">
          <div className="modern-page-head">
            <span className="modern-kicker">Dienstleistungen</span>
            <h1>Seite nicht gefunden</h1>
            <p>Diese Dienstleistung konnte nicht gefunden werden.</p>
          </div>

          <Link to="/dienstleistungen" className="modern-back-button">
            Zurück zu den Dienstleistungen
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="service-detail-modern">
      <div className="container">
        <div className="service-detail-hero">
          <div className="service-detail-copy">
            <span className="modern-kicker">Dienstleistung</span>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>

            <div className="service-detail-actions">
              <Link to="/kontakt" className="modern-primary-button">
                Jetzt anfragen
              </Link>
              <Link to="/dienstleistungen" className="modern-secondary-button">
                Alle Dienstleistungen
              </Link>
            </div>
          </div>

          <div className="service-detail-side">
            <div className="service-highlight-card">
              <span className="service-highlight-label">Leistung</span>
              <h3>{service.title}</h3>
              <p>{service.shortText}</p>
            </div>
          </div>
        </div>

        <div className="service-detail-grid">
          <div className="service-detail-card">
            <h2>{service.benefitsTitle}</h2>
            <ul className="modern-list">
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-detail-card">
            <h2>Was ist enthalten?</h2>
            <ul className="modern-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-detail-wide-card">
          <h2>Persönlicher Hinweis</h2>
          <p>{service.closing}</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailPage