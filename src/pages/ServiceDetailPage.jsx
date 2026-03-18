import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return (
      <section className="page-section">
        <div className="container narrow">
          <span className="eyebrow">Dienstleistungen</span>
          <h1 className="page-title">Seite nicht gefunden</h1>

          <div className="page-card">
            <p>Diese Dienstleistung wurde nicht gefunden.</p>
            <Link to="/dienstleistungen" className="button button-light">
              Zurück zu den Dienstleistungen
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section">
      <div className="container">
        <span className="eyebrow">Dienstleistung</span>
        <h1 className="page-title">{service.title}</h1>
        <p className="page-intro">{service.intro}</p>

        <div className="page-card">
          <img
            src={service.image}
            alt={service.title}
            style={{ borderRadius: '18px', marginBottom: '24px', maxHeight: '420px', objectFit: 'cover' }}
          />

          <h2>Was dazugehört</h2>

          <ul className="check-list">
            {service.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/kontakt" className="button button-dark">
              Jetzt anfragen
            </Link>

            <Link to="/dienstleistungen" className="button button-light">
              Zurück zu allen Dienstleistungen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailPage