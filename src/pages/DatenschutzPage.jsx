import './LegalPage.css'

function DatenschutzPage() {
  return (
    <section className="legal-section">
      <div className="container legal-container">
        <div className="legal-header">
          <span className="legal-kicker">Rechtliches</span>
          <h1>Datenschutzerklärung</h1>
          <p className="legal-intro">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie darüber, welche Daten bei der Nutzung dieser
            Website erhoben und wie sie verwendet werden.
          </p>
        </div>

        <div className="legal-card">
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            Amaya Bern Services<br />
            [Strasse und Hausnummer]<br />
            [PLZ] Bern, Schweiz<br />
            E-Mail: <a href="mailto:info@amayabern.ch">info@amayabern.ch</a>
          </p>
        </div>

        <div className="legal-card">
          <h2>2. Hosting und technische Infrastruktur</h2>
          <p>
            Diese Website wird auf den Servern von GitHub Pages (GitHub Inc.,
            88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet.
            Beim Aufruf dieser Website können technische Daten wie IP-Adresse,
            Browsertyp, Betriebssystem und Zugriffszeit in den Serverlogs von
            GitHub verarbeitet werden. Diese Verarbeitung liegt im
            Verantwortungsbereich von GitHub. Weitere Informationen finden Sie
            in der Datenschutzerklärung von GitHub (github.com/site/privacy).
          </p>
        </div>

        <div className="legal-card">
          <h2>3. Kontaktformulare und Anfragen</h2>
          <p>
            Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren,
            werden die von Ihnen angegebenen Daten (z. B. Name, E-Mail-Adresse,
            Nachricht, Telefonnummer) zur Bearbeitung Ihrer Anfrage gespeichert
            und verwendet.
          </p>
          <p>
            Die Übermittlung der Formulardaten erfolgt über den Dienst
            FormSubmit (formsubmit.co), der die Daten per E-Mail an uns
            weiterleitet. Eine darüber hinausgehende Speicherung oder
            Weitergabe an Dritte findet nicht statt.
          </p>
          <p>
            Die angegebenen Daten werden ausschliesslich für die Bearbeitung
            Ihrer Anfrage verwendet und nach Abschluss der Kommunikation
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </div>

        <div className="legal-card">
          <h2>4. Kontakt per E-Mail oder Telefon</h2>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden die
            übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert. Diese
            Daten werden nicht an Dritte weitergegeben und nach Abschluss des
            Anliegens gelöscht.
          </p>
        </div>

        <div className="legal-card">
          <h2>5. WhatsApp</h2>
          <p>
            Diese Website enthält einen Link zum WhatsApp-Dienst (Meta Platforms
            Ireland Ltd.). Wenn Sie diesen Link anklicken, verlassen Sie unsere
            Website und es gelten die Datenschutzbestimmungen von WhatsApp/Meta.
            Wir empfehlen, die entsprechenden Datenschutzhinweise von Meta zu
            lesen.
          </p>
        </div>

        <div className="legal-card">
          <h2>6. Cookies und lokale Speicherung</h2>
          <p>
            Diese Website verwendet keine Tracking-Cookies und kein
            Analyse-Tool (z. B. Google Analytics). Im lokalen Speicher Ihres
            Browsers (localStorage) wird lediglich Ihre Sprachpräferenz
            gespeichert, damit die Website bei Ihrem nächsten Besuch in der
            gewählten Sprache erscheint. Diese Information verlässt Ihr Gerät
            nicht.
          </p>
        </div>

        <div className="legal-card">
          <h2>7. Rechte der betroffenen Personen</h2>
          <p>
            Gemäss dem Schweizer Datenschutzgesetz (DSG) sowie der europäischen
            Datenschutz-Grundverordnung (DSGVO), sofern anwendbar, haben Sie
            folgende Rechte:
          </p>
          <ul className="legal-list">
            <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung Ihrer Daten</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte wenden Sie sich bitte an:{' '}
            <a href="mailto:info@amayabern.ch">info@amayabern.ch</a>
          </p>
        </div>

        <div className="legal-card">
          <h2>8. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
            anzupassen, um sie an geänderte Rechtslage oder bei Änderungen des
            Dienstes anzupassen. Es gilt jeweils die aktuelle, auf dieser Seite
            veröffentlichte Version.
          </p>
        </div>

        <p className="legal-note">
          Stand: {new Date().getFullYear()} · Fragen zum Datenschutz:{' '}
          <a href="mailto:info@amayabern.ch">info@amayabern.ch</a>
        </p>
      </div>
    </section>
  )
}

export default DatenschutzPage
