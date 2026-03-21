import './AboutPage.css'
import SmartImage from '../components/SmartImage'
import { useLanguage } from '../context/LanguageContext'

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

        <div className="about-card">
          {t.about.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="about-main-image">
          <SmartImage
            alt={t.about.altPortrait}
            className="about-main-photo"
            sources={[
              '/about/ramiro-portrait.jpeg',
              '/ramiro-portrait.jpeg',
              '/images/about/ramiro-portrait.jpeg',
            ]}
          />
        </div>

        <div className="about-images">
          <SmartImage
            alt={t.about.altFamily}
            className="about-small-photo"
            sources={[
              '/about/family.jpeg',
              '/family.jpeg',
              '/familia/family.jpeg',
              '/images/about/family.jpeg',
            ]}
          />

          <SmartImage
            alt={t.about.altGranddaughter}
            className="about-small-photo"
            sources={[
              '/about/nieta.jpeg',
              '/nieta.jpeg',
              '/familia/nieta.jpeg',
              '/images/about/nieta.jpeg',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutPage