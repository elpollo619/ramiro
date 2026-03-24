import './AboutPage.css'
import SmartImage from '../components/SmartImage'
import { useLanguage } from '../context/LanguageContext'
import { img } from '../utils/images'

function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="about-kicker">{t.about.kicker}</span>
          <h1>{t.about.title}</h1>
          <p>{t.about.intro}</p>
        </div>

        <div className="about-hero-layout">
          <div className="about-hero-image">
            <SmartImage
              alt={t.about.altPortrait}
              className="about-main-photo"
              sources={[
                img('ramiro-portrait.jpeg'),
                img('images/about/ramiro-portrait.jpeg'),
                img('about/ramiro-portrait.jpeg'),
              ]}
            />
          </div>

          <div className="about-hero-text">
            {t.about.bio.slice(0, 2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {t.about.bio.length > 2 && (
          <div className="about-card">
            {t.about.bio.slice(2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="about-images">
          <SmartImage
            alt={t.about.altFamily}
            className="about-small-photo"
            sources={[
              img('family.jpeg'),
              img('images/about/family.jpeg'),
              img('familia/family.jpeg'),
              img('about/family.jpeg'),
            ]}
          />

          <SmartImage
            alt={t.about.altGranddaughter}
            className="about-small-photo"
            sources={[
              img('nieta.jpeg'),
              img('images/about/nieta.jpeg'),
              img('familia/nieta.jpeg'),
              img('about/nieta.jpeg'),
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
