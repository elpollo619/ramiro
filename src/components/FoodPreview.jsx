function FoodPreview() {
  const foods = [
    'Hausgemachte Speisen für Familienfeiern',
    'Essen für Gruppen und kleinere Events',
    'Kolumbianische Spezialitäten',
    'Spanische Gerichte',
    'Paellas und weitere warme Speisen',
    'Persönliche Vorbereitung nach Absprache',
  ]

  return (
    <section id="food" className="food-section">
      <div className="container food-grid">
        <div className="food-copy">
          <span className="eyebrow">Catering & Comidas</span>
          <h2>Hausgemachte Speisen für Gruppen und Anlässe</h2>

          <p>
            Ramiro bereitet mit viel Sorgfalt hausgemachte Speisen für
            Geburtstage, Familienfeste, Treffen und kleinere Veranstaltungen
            zu.
          </p>

          <p>
            Dabei können kolumbianische und spanische Gerichte nach Absprache
            vorbereitet werden – einfach, ehrlich und mit persönlichem Service.
          </p>
        </div>

        <div className="food-box">
          <h3>Beispiele</h3>

          <ul>
            {foods.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FoodPreview