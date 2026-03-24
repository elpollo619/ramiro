import { Link } from 'react-router-dom'
import SmartImage from '../components/SmartImage'
import { useLanguage } from '../context/LanguageContext'
import { img } from '../utils/images'

function ServicesPage() {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <div className="container">
        <div className="modern-page-head">
          <span className="modern-kicker">{t.services.kicker}</span>
          <h1>{t.services.title}</h1>
          <p>{t.services.intro}</p>
        </div>

        <div className="services-image-grid">
          <Link to="/dienstleistungen/fensterreinigung" className="service-card-link">
            <article className="service-image-card">
              <SmartImage
                alt={t.services.cards.windows.title}
                className="service-card-image"
                sources={[
                  img('fenster-reinigung.jpeg'),
                  img('images/services/fenster-reinigung.jpeg'),
                ]}
              />
              <div className="service-card-content">
                <h2>{t.services.cards.windows.title}</h2>
                <p>{t.services.cards.windows.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </div>
            </article>
          </Link>

          <Link to="/dienstleistungen/allgemeine-reinigung" className="service-card-link">
            <article className="service-image-card">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                alt={t.services.cards.general.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h2>{t.services.cards.general.title}</h2>
                <p>{t.services.cards.general.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </div>
            </article>
          </Link>

          <Link to="/dienstleistungen/treppenreinigung" className="service-card-link">
            <article className="service-image-card">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80"
                alt={t.services.cards.stairs.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h2>{t.services.cards.stairs.title}</h2>
                <p>{t.services.cards.stairs.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </div>
            </article>
          </Link>

          <Link to="/dienstleistungen/gartenpflege" className="service-card-link">
            <article className="service-image-card">
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1400&q=80"
                alt={t.services.cards.garden.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h2>{t.services.cards.garden.title}</h2>
                <p>{t.services.cards.garden.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </div>
            </article>
          </Link>

          <Link to="/dienstleistungen/umzugshilfe" className="service-card-link">
            <article className="service-image-card">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"
                alt={t.services.cards.moving.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h2>{t.services.cards.moving.title}</h2>
                <p>{t.services.cards.moving.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </div>
            </article>
          </Link>

          <Link to="/dienstleistungen/groessere-arbeiten" className="service-card-link">
            <article className="service-image-card">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
                alt={t.services.cards.big.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <h2>{t.services.cards.big.title}</h2>
                <p>{t.services.cards.big.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
