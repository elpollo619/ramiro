import './LegalPage.css'

function ImpressumPage() {
  return (
    <section className="legal-section">
      <div className="container legal-container">
        <div className="legal-header">
          <span className="legal-kicker">Rechtliches</span>
          <h1>Impressum</h1>
        </div>

        <div className="legal-card">
          <h2>Angaben gemäss Schweizer Recht</h2>

          <div className="legal-block">
            <h3>Unternehmensbezeichnung</h3>
            <p>Amaya Bern Services</p>
          </div>

          <div className="legal-block">
            <h3>Inhaber</h3>
            <p>[Vorname Nachname des Inhabers]</p>
          </div>

          <div className="legal-block">
            <h3>Adresse</h3>
            <p>
              [Strasse und Hausnummer]<br />
              [PLZ] Bern<br />
              Schweiz
            </p>
          </div>

          <div className="legal-block">
            <h3>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+41765683445">+41 76 568 34 45</a><br />
              E-Mail: <a href="mailto:info@amayabern.ch">info@amayabern.ch</a>
            </p>
          </div>

          <div className="legal-block">
            <h3>Unternehmensform</h3>
            <p>Einzelunternehmen</p>
          </div>

          <div className="legal-block">
            <h3>UID (Unternehmens-Identifikationsnummer)</h3>
            <p>[CHE-XXX.XXX.XXX] – sofern vorhanden</p>
          </div>
        </div>

        <div className="legal-card">
          <h2>Haftungsausschluss</h2>

          <div className="legal-block">
            <h3>Inhalt der Website</h3>
            <p>
              Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
              Amaya Bern Services übernimmt jedoch keine Gewähr für die
              Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
              Informationen. Die Nutzung der Inhalte erfolgt auf eigene Gefahr
              des Nutzers.
            </p>
          </div>

          <div className="legal-block">
            <h3>Externe Links</h3>
            <p>
              Diese Website kann Links zu externen Webseiten enthalten, auf
              deren Inhalt Amaya Bern Services keinen Einfluss hat. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
              Rechtsverstösse erkennbar.
            </p>
          </div>
        </div>

        <div className="legal-card">
          <h2>Urheberrecht</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte und Werke
            unterliegen dem Schweizer Urheberrecht. Jede Vervielfältigung,
            Bearbeitung, Verbreitung oder Verwertung ausserhalb der Grenzen des
            Urheberrechts bedarf der ausdrücklichen schriftlichen Zustimmung von
            Amaya Bern Services.
          </p>
        </div>

        <p className="legal-note">
          Stand: {new Date().getFullYear()} · Bei Fragen:{' '}
          <a href="mailto:info@amayabern.ch">info@amayabern.ch</a>
        </p>
      </div>
    </section>
  )
}

export default ImpressumPage
