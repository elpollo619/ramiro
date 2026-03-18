import { services } from '../data/services'
import ServiceCard from './ServiceCard'

function ServicesPreview() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Dienstleistungen</span>
          <h2>Alles, was Ramiro mit den Händen macht</h2>
          <p>
            Praktische Unterstützung für Haus, Garten, Reinigung, Umzug und
            weitere Arbeiten in Bern und Umgebung.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview