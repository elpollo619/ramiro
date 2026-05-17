# Amaya Bern Services — Master Plan

## Contexto

Web pública de Amaya Bern Services (amayabern.ch), negocio de
servicios en Bern operado por Ramiro Amaya: Reinigung, Gartenpflege,
Umzugshilfe y Catering. Cris (hijo) mantiene la web.

Objetivo global: conseguir clientes nuevos, optimizando primero
la web (SEO técnico + SEO local) y luego activando Google Ads.

## Decisiones ya tomadas

- Email canónico: **info@amayabern.ch** (operativo en Infomaniak).
- Dirección legal: Sägestrasse 10, 3097 Liebefeld (Köniz, BE, CH).
- Teléfono: +41 76 568 34 45.
- Idiomas: se mantienen los 7 actuales (DE, FR, IT, RM, ES, EN, PT).
- Stack: React 18 + Vite, deploy GitHub Pages con dominio custom.
- Router objetivo: BrowserRouter (no HashRouter).
- Metadata: react-helmet-async.
- Prerender: vite-react-ssg.
- Sin Google Ads hasta terminar Lote D.

## Restricciones

- NO inventar datos (precios, años de experiencia, testimonios,
  certificaciones). Si falta dato, dejar TODO con comentario y
  preguntar.
- Copy público en alemán (Sie-Form, suizo-friendly).
- Comunicación conmigo en español.
- No introducir dependencias nuevas sin justificación.
- Commits atómicos por lote, rama por lote, no mergear sin
  confirmación mía.

---

## Lote A — Limpieza sin riesgo

**Objetivo:** corregir inconsistencias y datos inventados sin
tocar router ni build. Mergeable solo.

### Tareas

1. Quitar testimonios inventados (Sandra M., Thomas K., Miriam F.)
   de HomePage.jsx y de las 7 traducciones en translations.js.
   Reemplazar por sección "Warum Amaya?" con 3-4 bullets honestos:
   persönlicher Service, mehrsprachig DE/FR/ES, flexible Termine,
   eigene Anfahrt im Raum Bern. Traducir a los 7 idiomas.

2. Unificar NAP en TODOS los lugares:
   - index.html (JSON-LD), Footer, ContactPage, ImpressumPage,
     DatenschutzPage, QuoteRequestPage, ContactForm.
   - Email: info@amayabern.ch (eliminar amayabernservices@gmail.com).
   - Teléfono visible: +41 76 568 34 45.
   - Teléfono href: tel:+41765683445.

3. JSON-LD LocalBusiness en index.html:
   - @graph con subtipos: HousekeepingCleaningService,
     GardeningService, MovingCompany, CateringService.
   - address completa: streetAddress "Sägestrasse 10",
     postalCode "3097", addressLocality "Köniz",
     addressRegion "BE", addressCountry "CH".
   - geo: TODO con comentario hasta que Cris confirme coords.
   - QUITAR priceRange "$$" (inventado).
   - QUITAR aggregateRating/review (no hay reseñas reales).
   - Añadir image, logo, url.
   - openingHours: TODO con comentario.
   - areaServed array: Bern, Köniz, Liebefeld, Wabern, Bümpliz,
     Ostermundigen, Muri bei Bern, Belp, Worb, Ittigen, Zollikofen.

4. Limpieza de archivos:
   - Eliminar duplicados en public/: "family 2.jpeg",
     "catering-hero 2.jpeg", "ramiro-portrait 2.jpeg", .DS_Store,
     catering-*.jpeg duplicados en raíz de public/.
   - Borrar componentes huérfanos (confirmar con grep antes):
     Hero.jsx, ContactForm.jsx, Services.jsx, ServicesPreview.jsx,
     ServiceCard.jsx, FoodPreview.jsx.
   - Quitar dist/ del repo + añadir a .gitignore.
   - Borrar src/data/services.js si desincronizado y no usado.

5. Actualizar Datenschutzerklärung:
   - Añadir párrafo sobre Google Fonts CDN (transferencia EEUU,
     interés legítimo). En Lote C lo eliminaremos.
   - Añadir párrafo sobre Unsplash (imágenes externas).
   - Confirmar que Virtuelle Assistent es 100% local.

6. Quitar meta keywords de index.html.

### Salida del lote
Resumen en español: archivos tocados, decisiones donde había
opciones, TODOs pendientes.

---

## Lote B — Migración SEO crítica

**Objetivo:** que cada ruta tenga su propio HTML pre-renderizado
con title/meta/OG/canonical/JSON-LD propios, indexable sin JS.

**Prerequisito:** Lote A committed.

### Tareas

1. Instalar dependencias:
   - react-helmet-async
   - vite-react-ssg
   Verificar compatibilidad con react-router-dom v6.

2. Migrar HashRouter → BrowserRouter (o lo que requiera
   vite-react-ssg). Mantener estructura de rutas existente.

3. Configurar prerender de las 9 rutas estáticas + las 6 rutas
   dinámicas de servicios (slugs: fensterreinigung,
   allgemeine-reinigung, treppenreinigung, gartenpflege,
   umzugshilfe, grosse-arbeiten).

4. Integrar react-helmet-async:
   - Crear src/components/SEO.jsx reusable.
   - <SEO> en TODAS las páginas con title, description, canonical
     absoluto, og:* completo, twitter:* completo, html lang
     sincronizado con idioma activo.
   - Textos específicos por página en alemán (no inventar nada
     más allá del copy ya existente).
   - FIX: añadir <h1> en ContactPage.

5. og:image:
   - Crear public/og-image.jpg de 1200x630.
   - Si no hay asset listo, usar logo-main.png como placeholder
     con TODO.
   - /catering puede tener og:image específica.

6. JSON-LD por página:
   - Componente <LocalBusinessSchema /> renderizado en todas.
   - Schema Service adicional en /dienstleistungen y subpáginas.
   - ContactPoint en /kontakt.

7. Sitemap.xml completo:
   - Todas las rutas con lastmod, changefreq, priority.
   - URLs limpias (sin #).
   - Crear public/robots.txt con Sitemap declarado.

8. GitHub Pages:
   - Mantener public/CNAME.
   - 404.html generado (verificar si vite-react-ssg lo hace o si
     hay que crear copia de index.html).
   - Verificar que gh-pages -d dist sigue funcionando.

9. Vite config:
   - Probar quitar treeshake: false.
   - Si Rollup vuelve a colgarse, dejar con comentario y TODO
     para Lote C.

10. Verificación pre-merge:
    - npm run build sin errores.
    - dist/ con index.html por cada ruta.
    - Verificar manualmente con cat que dist/dienstleistungen/
      index.html tiene title/meta específicos.
    - Navegar todas las rutas en dev sin 404.
    - View source en cada página confirma title/canonical/JSON-LD
      correctos.

### Salida del lote
Resumen en español: versiones, cambios estructurales, rutas
verificadas, TODOs, comando exacto de deploy.

---

## Lote D — Landings para Werbung

**Objetivo:** crear landing pages específicas servicio+ciudad
optimizadas para conversión desde Google Ads.

**Prerequisito:** Lote B en producción.

### Landings a crear

Rutas nuevas:

- /reinigung-bern
- /umzugsreinigung-bern
- /gartenpflege-bern
- /catering-bern
- /reinigung-koeniz (opcional, decidir si Bern rinde primero)

### Estructura de cada landing

Cada landing es una página optimizada para una keyword + ciudad,
no un duplicado de /dienstleistungen/:slug. Diferencias:

1. **H1 con keyword exacta + ciudad:**
   "Reinigung in Bern – persönlich, zuverlässig, flexibel"

2. **Hero con CTA agresivo arriba:**
   - Botón principal: "Kostenlose Offerte anfordern" → /offerte
     con query params que pre-llenan el servicio.
   - Botón secundario: "Direkt anrufen +41 76 568 34 45".
   - Promesa visible: "Antwort innerhalb 24 Stunden".

3. **Sección "Was wir reinigen" (o equivalente por servicio):**
   - Lista visual de subservicios con iconos.
   - Cada uno con 1 frase corta.

4. **Sección "Ablauf" — 3 pasos:**
   - 1. Anfrage stellen
   - 2. Persönliche Beratung
   - 3. Termin und Ausführung

5. **Sección "Warum Amaya":**
   - Mismos 3-4 bullets del Lote A (mehrsprachig, persönlich,
     flexibel, eigene Anfahrt).

6. **Sección "Einzugsgebiet":**
   - Lista visible de las ciudades cubiertas.
   - "Auch in Ihrer Region? Fragen Sie nach."

7. **FAQ específica por servicio (4-6 preguntas):**
   - Ejemplo Reinigung: "Mit Abgabegarantie?",
     "Eigene Reinigungsmittel?", "Mindestdauer?", "Versichert?".
   - Cada respuesta corta, real, sin inventar.
   - Implementar como <FAQPage> JSON-LD también.

8. **Bloque de contacto al final:**
   - Form embebido reducido (Name, Phone, Service pre-seleccionado).
   - WhatsApp directo.

### SEO específico de landings

- H1 = keyword principal + ciudad.
- Title: "Reinigung Bern – persönlicher Service | Amaya Bern Services"
- Meta description: máx 155 chars con CTA + teléfono.
- Schema Service + LocalBusiness + FAQPage por landing.
- Imagen propia por landing (no Unsplash, no compartir con otras).
- URL limpia, sin slug compartido.

### Otras tareas

- Añadir parámetros UTM al form de /offerte (utm_source=google,
  utm_campaign=…) y a los CTAs de las landings, para tracking.
- Implementar tracking básico de eventos:
  - Form submit en /offerte.
  - Click en tel: y WhatsApp.
  - Decisión a tomar antes del lote: Google Analytics 4 o
    Plausible (DSG-friendly). Recomiendo Plausible self-host
    o Plausible.io de pago para no abrir consentimiento de
    cookies. **Cris decide antes del lote.**

### Salida del lote
- 4-5 landings funcionales.
- Tracking activo.
- Sitemap actualizado con las nuevas rutas.
- Documento aparte (CAMPAIGN_BRIEF.md) con keywords sugeridas y
  copy para anuncios — esto NO lo crea Claude Code, lo hago yo
  con Cris.

---

## Werbung (después de Lote D)

No es lote de código. Se hace en paralelo cuando D esté en producción.

### Componentes

1. **Google Business Profile (en marcha en paralelo):**
   - Quitar "– Reinigung Bern" del nombre.
   - Categorías secundarias completas.
   - Descripción optimizada.
   - 10+ fotos reales.
   - Servicios estructurados.
   - 5+ reseñas reales en primer mes.
   - 1 post semanal.

2. **Google Ads:**
   - Cuenta + facturación CHF.
   - Campaña por servicio (4 campañas: Reinigung, Umzug, Garten,
     Catering). NO una campaña genérica.
   - Geo-targeting: Bern + Köniz + 20 km radio.
   - Idioma: alemán.
   - Horario: solo Mo-Sa 07:00-20:00 (no anunciar de noche).
   - Presupuesto inicial sugerido: CHF 15-25/día por campaña
     durante 2 semanas de prueba. Después optimizar.
   - Cada campaña apunta a su landing específica del Lote D.
   - Extensions: Anruf, Standort (via GBP), Sitelinks.

3. **Conversiones:**
   - Form submit en /offerte como conversion principal.
   - Llamadas desde móvil como conversion secundaria.

4. **Optimización continua:**
   - Revisar search terms semanalmente.
   - Negativizar irrelevantes.
   - Pausar keywords con CPC > CHF 4 sin conversión.

---

## Lote C — Performance y a11y (POSPUESTO)

Postpuesto. Se hace después de que Werbung esté activa y haya
datos reales de conversión. Incluye:

- Imágenes WebP/AVIF + srcset.
- Self-host Manrope.
- Hreflang.
- Navbar móvil.
- Accesibilidad (labels, alt descriptivos, contraste, focus).
- Extraer copy de ServiceDetailPage a translations.js.
- Reducir bundle JS (treeshake).

No es bloqueante para conseguir clientes.

---

## Estado actual del plan

- [ ] Lote A — pendiente arrancar
- [ ] Lote B — pendiente
- [ ] Lote D — pendiente
- [ ] Werbung — en preparación paralela (GBP)
- [ ] Lote C — pospuesto
