import { useLanguage } from '../context/LanguageContext'

function ContactPage() {
  const { t } = useLanguage()

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
                info@amaya-allroundservice.ch
              </p>
              <p>
                <strong>{t.contact.phoneLabel}:</strong> +41 00 000 00 00
              </p>
              <p>{t.contact.region}</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder={t.contact.formName} />
            <input type="text" placeholder={t.contact.formContact} />
            <input type="text" placeholder={t.contact.formService} />
            <textarea rows="6" placeholder={t.contact.formMessage}></textarea>
            <button type="submit" className="modern-primary-button button-full">
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage