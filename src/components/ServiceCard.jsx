function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-image-wrap">
        <img src={service.image} alt={service.title} />
      </div>

      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </article>
  )
}

export default ServiceCard