import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
  return (
    <Link to={`/dienstleistungen/${service.slug}`} className="service-card-link">
      <article className="service-card">
        <div className="service-image">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="service-body">
          <h3>{service.title}</h3>
          <p>{service.shortDescription}</p>

          <span className="service-more">Mehr erfahren</span>
        </div>
      </article>
    </Link>
  )
}

export default ServiceCard