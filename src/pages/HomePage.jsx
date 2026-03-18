import { Link } from 'react-router-dom'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'

function HomePage() {
  return (
    <>
      <section className="hero">
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
              <Link to="/kontakt" className="button button-dark">
                Offerte anfragen
              </Link>

              <Link to="/dienstleistungen" className="button button-light">
                Dienstleistungen ansehen
              </Link>
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

      <section className="about-section">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">Über Ramiro</span>
            <h2>Persönlicher Service mit direktem Kontakt</h2>
            <p>
              Ramiro Amaya ist ein vielseitiger Dienstleister in Bern. Er hilft
              bei praktischen Arbeiten rund ums Haus, im Garten, beim Umzug und
              auch mit hausgemachten Speisen für Anlässe.
            </p>
            <Link to="/ueber-ramiro" className="button button-light">
              Mehr über Ramiro
            </Link>
          </div>

          <div className="about-box">
            <h3>Was Ramiro auszeichnet</h3>
            <ul>
              <li>Persönlicher und direkter Kontakt</li>
              <li>Zuverlässige Arbeitsweise</li>
              <li>Flexible Hilfe im Alltag</li>
              <li>Service in Bern und Umgebung</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-section">
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

          <div className="center-actions">
            <Link to="/dienstleistungen" className="button button-light">
              Alle Dienstleistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="food-section">
        <div className="container food-grid">
          <div className="food-copy">
            <span className="eyebrow">Catering & Comidas</span>
            <h2>Hausgemachte Speisen für Gruppen und Anlässe</h2>

            <p>
              Ramiro bereitet mit viel Sorgfalt hausgemachte Speisen für
              Geburtstage, Familienfeste, Treffen und kleinere Veranstaltungen
              zu.
            </p>

            <Link to="/catering" className="button button-light">
              Mehr zum Catering
            </Link>
          </div>

          <div className="food-box">
            <h3>Beispiele</h3>
            <ul>
              <li>Hausgemachte Speisen für Familienfeiern</li>
              <li>Essen für Gruppen und kleinere Events</li>
              <li>Kolumbianische Spezialitäten</li>
              <li>Spanische Gerichte</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default HomePage