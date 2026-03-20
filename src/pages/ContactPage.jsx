import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <>
      <section className="page-section">
        <div className="container narrow">
          <span className="eyebrow">Kontakt</span>
          <h1 className="page-title">Kontaktieren Sie mich</h1>

          <div className="page-card">
            <p>
              Benötigen Sie Hilfe bei Reinigung, Gartenarbeit oder Umzügen?
            </p>

            <p>
              Schreiben Sie mir oder rufen Sie mich an. Ich werde Ihnen so
              schnell wie möglich antworten.
            </p>

            <ul className="check-list">
              <li>Offerte ohne Verpflichtung</li>
              <li>Schnelle Antwort</li>
              <li>Direkte Betreuung</li>
            </ul>

            <p>Ich bin hier, um Ihnen zu helfen.</p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}

export default ContactPage