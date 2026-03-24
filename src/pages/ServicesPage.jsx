import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { img } from '../utils/images'
import './ServicesPage.css'

/* ─────────────────────────────────────────
   Service data — image + icon + route
   Text comes from translations (t.services.cards)
───────────────────────────────────────── */
const SERVICE_META = [
  {
    key: 'windows',
    slug: 'fensterreinigung',
    icon: '🪟',
    imgSrc: null, // uses local image below
    imgLocal: true,
  },
  {
    key: 'general',
    slug: 'allgemeine-reinigung',
    icon: '🧹',
    imgSrc:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=75',
  },
  {
    key: 'stairs',
    slug: 'treppenreinigung',
    icon: '🏢',
    imgSrc:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=75',
  },
  {
    key: 'garden',
    slug: 'gartenpflege',
    icon: '🌿',
    imgSrc:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=75',
  },
  {
    key: 'moving',
    slug: 'umzugshilfe',
    icon: '📦',
    imgSrc:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=75',
  },
  {
    key: 'big',
    slug: 'grosse-arbeiten',
    icon: '👥',
    imgSrc:
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=900&q=75',
  },
]

function ServicesPage() {
  const { t } = useLanguage()
  const cards = t.services.cards

  return (
    <section className="services-page">
      <div className="container">

        {/* ── PAGE HEADER ── */}
        <div className="services-page-head">
          <span className="svc-kicker">{t.services.kicker}</span>
          <h1>{t.services.title}</h1>
          <p>{t.services.intro}</p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="svc-grid">
          {SERVICE_META.map((svc) => {
            const card = cards[svc.key]
            const imgSrc = svc.imgLocal
              ? img('fenster-reinigung.jpeg')
              : svc.imgSrc

            return (
              <Link
                key={svc.key}
                to={`/dienstleistungen/${svc.slug}`}
                className="svc-card"
                aria-label={card.title}
              >
                <img
                  src={imgSrc}
                  alt={card.title}
                  className="svc-card-img"
                  loading="lazy"
                />
                <div className="svc-card-body">
                  <span className="svc-card-icon" aria-hidden="true">
                    {svc.icon}
                  </span>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                  <span className="svc-card-btn">
                    {t.common.learnMore} →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* ── CTA BAND ── */}
        <div className="svc-cta-band">
          <div className="svc-cta-band-text">
            <h3>{t.services.ctaTitle}</h3>
            <p>{t.services.ctaText}</p>
          </div>
          <div className="svc-cta-band-actions">
            <Link to="/kontakt" className="svc-cta-primary">
              {t.common.requestNow}
            </Link>
            <a
              href="https://wa.me/41765683445"
              target="_blank"
              rel="noreferrer"
              className="svc-cta-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesPage
