import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    fetch('https://formsubmit.co/ajax/amayabernservices@gmail.com', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true)
        form.reset()
      })
      .catch(() => {
        // fallback: open mailto
        window.location.href = 'mailto:amayabernservices@gmail.com'
      })
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="modern-kicker">{t.contact.kicker}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.intro}</p>

            <div className="contact-details">
              <p>{t.contact.direct}</p>
              <p>
                <strong>{t.contact.emailLabel}:</strong>{' '}
                <a href="mailto:amayabernservices@gmail.com">
                  amayabernservices@gmail.com
                </a>
              </p>
              <p>
                <strong>{t.contact.phoneLabel}:</strong>{' '}
                <a href="tel:+41765683445">+41 76 568 34 45</a>
              </p>
              <p>
                <a
                  href="https://wa.me/41765683445"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-link"
                >
                  WhatsApp
                </a>
              </p>
              <p>{t.contact.region}</p>
            </div>
          </div>

          {submitted ? (
            <div className="contact-success page-card">
              <span style={{ fontSize: '2.5rem' }}>✓</span>
              <h3>{t.contact.successTitle || 'Nachricht gesendet!'}</h3>
              <p>
                {t.contact.successText ||
                  'Ich melde mich so schnell wie möglich bei Ihnen.'}
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Neue Kontaktanfrage – Amaya Bern Services"
              />

              <input
                type="text"
                name="name"
                placeholder={t.contact.formName}
                required
              />
              <input
                type="text"
                name="contact"
                placeholder={t.contact.formContact}
                required
              />
              <input
                type="text"
                name="service"
                placeholder={t.contact.formService}
              />
              <textarea
                rows="6"
                name="message"
                placeholder={t.contact.formMessage}
                required
              ></textarea>
              <button type="submit" className="modern-primary-button button-full">
                {t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactPage
