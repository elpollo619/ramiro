import { Link } from 'react-router-dom'
import SmartImage from '../components/SmartImage'
import { useLanguage } from '../context/LanguageContext'

function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <section className="hero-home">
        <div className="container hero-home-grid">
          <div className="hero-home-copy">
            <span className="modern-kicker">{t.home.kicker}</span>

            <h1>{t.home.title}</h1>

            <p>{t.home.intro1}</p>
            <p>{t.home.intro2}</p>

            <div className="hero-home-actions">
              <Link to="/kontakt" className="modern-primary-button">
                {t.common.requestNow}
              </Link>

              <Link to="/dienstleistungen" className="modern-secondary-button">
                {t.common.seeServices}
              </Link>
            </div>
          </div>

          <div className="hero-home-image">
            <SmartImage
              alt="Ramiro Amaya"
              className="hero-main-photo"
              sources={[
                '/about/ramiro-portrait.jpeg',
                '/ramiro-portrait.jpeg',
                '/images/about/ramiro-portrait.jpeg',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="section-head left">
            <span className="modern-kicker">{t.home.aboutKicker}</span>
            <h2>{t.home.aboutTitle}</h2>
            <p>{t.home.aboutText}</p>
          </div>

          <div className="trust-grid">
            <div className="trust-image">
              <SmartImage
                alt="Familie"
                className="trust-family-photo"
                sources={[
                  '/about/family.jpeg',
                  '/family.jpeg',
                  '/familia/family.jpeg',
                  '/images/about/family.jpeg',
                ]}
              />
            </div>

            <div className="trust-content page-card">
              <h3>{t.home.trustTitle}</h3>
              <p>{t.home.trustText1}</p>
              <p>{t.home.trustText2}</p>

              <Link to="/ueber-ramiro" className="modern-primary-button">
                {t.home.trustButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="modern-kicker">{t.home.servicesKicker}</span>
            <h2>{t.home.servicesTitle}</h2>
            <p>{t.home.servicesIntro}</p>
          </div>

          <div className="modern-services-grid">
            <Link to="/dienstleistungen/fensterreinigung" className="service-card-link">
              <article className="modern-service-card">
                <div className="modern-service-card-top">
                  <span className="modern-service-badge">{t.home.servicesKicker}</span>
                </div>
                <h2>{t.services.cards.windows.title}</h2>
                <p>{t.services.cards.windows.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </article>
            </Link>

            <Link to="/dienstleistungen/allgemeine-reinigung" className="service-card-link">
              <article className="modern-service-card">
                <div className="modern-service-card-top">
                  <span className="modern-service-badge">{t.home.servicesKicker}</span>
                </div>
                <h2>{t.services.cards.general.title}</h2>
                <p>{t.services.cards.general.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </article>
            </Link>

            <Link to="/dienstleistungen/gartenpflege" className="service-card-link">
              <article className="modern-service-card">
                <div className="modern-service-card-top">
                  <span className="modern-service-badge">{t.home.servicesKicker}</span>
                </div>
                <h2>{t.services.cards.garden.title}</h2>
                <p>{t.services.cards.garden.text}</p>
                <span className="modern-service-link">{t.common.readMore}</span>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="catering-preview-grid">
            <div className="catering-preview-image">
              <SmartImage
                alt="Catering"
                className="catering-preview-photo"
                sources={[
                  '/catering/catering-hero.jpeg',
                  '/catering-hero.jpeg',
                  '/hero/catering-hero.jpeg',
                  '/images/catering/catering-hero.jpeg',
                ]}
              />
            </div>

            <div className="catering-preview-copy">
              <span className="modern-kicker">{t.home.cateringKicker}</span>
              <h2>{t.home.cateringTitle}</h2>
              <p>{t.home.cateringText}</p>

              <Link to="/catering" className="modern-primary-button">
                {t.home.cateringButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage