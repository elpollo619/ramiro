import SmartImage from '../components/SmartImage'
import { useLanguage } from '../context/LanguageContext'

function CateringPage() {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <div className="container">
        <div className="modern-page-head">
          <span className="modern-kicker">{t.catering.kicker}</span>
          <h1>{t.catering.title}</h1>
          <p>{t.catering.intro}</p>
        </div>

        <div className="catering-hero-block">
          <SmartImage
            alt={t.catering.altHero}
            className="catering-hero-image"
            sources={[
              '/catering/catering-hero.jpeg',
              '/catering-hero.jpeg',
              '/hero/catering-hero.jpeg',
              '/images/catering/catering-hero.jpeg',
            ]}
          />
        </div>

        <div className="page-card catering-intro-card">
          <h2>{t.catering.cardTitle}</h2>
          <p>{t.catering.p1}</p>
          <p>{t.catering.p2}</p>
        </div>

        <div className="gallery-grid gallery-grid-catering">
          <div className="gallery-item large">
            <SmartImage
              alt="Catering 1"
              sources={[
                '/catering/catering-1.jpeg',
                '/catering-1.jpeg',
                '/images/catering/catering-1.jpeg',
              ]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering 2"
              sources={[
                '/catering/catering-2.jpeg',
                '/catering-2.jpeg',
                '/images/catering/catering-2.jpeg',
              ]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering 3"
              sources={[
                '/catering/catering-3.jpeg',
                '/catering-3.jpeg',
                '/images/catering/catering-3.jpeg',
              ]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering 4"
              sources={[
                '/catering/catering-4.jpeg',
                '/catering-4.jpeg',
                '/images/catering/catering-4.jpeg',
              ]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering 5"
              sources={[
                '/catering/catering-5.jpeg',
                '/catering-5.jpeg',
                '/images/catering/catering-5.jpeg',
              ]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering 6"
              sources={[
                '/catering/catering-6.jpeg',
                '/catering-6.jpeg',
                '/images/catering/catering-6.jpeg',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CateringPage