import SmartImage from '../components/SmartImage'
import { useLanguage } from '../context/LanguageContext'
import { img } from '../utils/images'

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
            sources={[img('images/catering/catering-hero.jpeg')]}
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
              alt="Paella und hausgemachte Speisen – Amaya Bern Services"
              sources={[img('images/catering/catering-1.jpeg')]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering für Familienfeier in Bern"
              sources={[img('images/catering/catering-2.jpeg')]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Paella-Zubereitung für Gruppen"
              sources={[img('images/catering/catering-3.jpeg')]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering-Event in Bern"
              sources={[img('images/catering/catering-4.jpeg')]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Hausgemachte Speisen für besondere Anlässe"
              sources={[img('images/catering/catering-5.jpeg')]}
            />
          </div>

          <div className="gallery-item">
            <SmartImage
              alt="Catering-Service in Bern und Umgebung"
              sources={[img('images/catering/catering-6.jpeg')]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CateringPage
