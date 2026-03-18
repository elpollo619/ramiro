import { services } from '../data/services'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Unsere Dienstleistungen</p>
          <h2>Persönlicher Service für Bern und Umgebung</h2>
          <p>
            Flexibel, sorgfältig und zuverlässig. Wir helfen dort, wo im Alltag
            praktische Unterstützung gefragt ist.
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

export default Services