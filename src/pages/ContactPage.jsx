import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <span className="eyebrow">Kontakt</span>
        <h1 className="page-title">Kontakt aufnehmen</h1>
        <p className="page-intro">
          Schreiben Sie uns oder rufen Sie direkt an. Wir melden uns so schnell
          wie möglich.
        </p>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactPage