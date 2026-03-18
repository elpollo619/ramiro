import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

function ServicesPage() {
  return (
    <section className="page-section">
      <div className="container">
        <span className="eyebrow">Dienstleistungen</span>
        <h1 className="page-title">Alles, was Ramiro mit den Händen macht</h1>

        <p className="page-intro">
          Praktische Unterstützung für Haus, Garten, Reinigung, Umzug und weitere Arbeiten in Bern und Umgebung.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage