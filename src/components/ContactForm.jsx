function ContactForm() {
  return (
    <section className="contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Kontakt</span>
          <h2>Kontaktieren Sie mich</h2>
          <p>
            Benötigen Sie Hilfe bei Reinigung, Gartenarbeit oder Umzügen?
          </p>

          <p>
            Schreiben Sie mir oder rufen Sie mich an. Ich werde Ihnen so
            schnell wie möglich antworten.
          </p>

          <div className="contact-details">
            <p>
              <strong>Name:</strong> Ramiro Amaya
            </p>
            <p>
              <strong>Region:</strong> Bern und Umgebung
            </p>
            <p>
              <strong>Telefon:</strong> +41 00 000 00 00
            </p>
            <p>
              <strong>E-Mail:</strong> info@amaya-allroundservice.ch
            </p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Telefon oder E-Mail" />
          <input type="text" placeholder="Gewünschter Service" />
          <textarea rows="6" placeholder="Nachricht"></textarea>

          <button type="submit" className="button button-dark button-full">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm