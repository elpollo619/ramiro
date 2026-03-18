function ContactForm() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="section-kicker">Kontakt</p>
          <h2>Jetzt unverbindlich anfragen</h2>
          <p>
            Schreiben Sie uns für eine Offerte oder rufen Sie direkt an. Wir
            helfen Ihnen gerne weiter und melden uns so schnell wie möglich.
          </p>

          <div className="contact-list">
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

          <button type="submit" className="btn btn-primary btn-full">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm