import { useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './QuoteRequestPage.css'

const FORM_EMAIL = 'amayabernservices@gmail.com'
const WHATSAPP_NUMBER = '41765683445'

const SERVICE_OPTIONS = [
  'windows',
  'general-cleaning',
  'stairs',
  'garden',
  'moving',
  'catering',
  'large-jobs',
]

function getText(language) {
  const content = {
    de: {
      kicker: 'Offerte',
      title: 'Offerte anfragen',
      intro:
        'Beschreiben Sie Ihre Arbeit möglichst genau. Mit den richtigen Angaben kann Ramiro Ihnen schneller eine passende und professionelle Offerte vorbereiten.',
      serviceLabel: 'Worum geht es?',
      servicePlaceholder: 'Dienstleistung auswählen',
      sendTitle: 'Direkt per E-Mail senden',
      note:
        'Nach dem Absenden geht Ihre Anfrage direkt an amayabernservices@gmail.com. Sie können auch Fotos mitschicken.',
      customerData: 'Kundendaten',
      workData: 'Angaben zur Arbeit',
      attachments: 'Fotos / Dateien',
      submit: 'Anfrage senden',
      mailDirect: 'Direkt E-Mail schreiben',
      whatsapp: 'WhatsApp schreiben',
      fields: {
        fullName: 'Vollständiger Name',
        phone: 'Telefon',
        email: 'E-Mail',
        address: 'Adresse des Einsatzortes',
        city: 'Ort / PLZ',
        preferredDate: 'Gewünschtes Datum',
        flexibleDate: 'Sind Sie flexibel beim Datum?',
        details: 'Zusätzliche Angaben',
        files: 'Fotos oder Dateien',
        apartmentRooms: 'Wie viele Zimmer hat die Wohnung?',
        apartmentBathrooms: 'Wie viele Badezimmer?',
        apartmentSize: 'Ungefähre Wohnfläche (m²)',
        cleaningType: 'Art der Reinigung',
        furnished: 'Ist die Wohnung möbliert?',
        windowsCount: 'Wie viele Fenster ungefähr?',
        windowsInsideOutside: 'Innen, aussen oder beides?',
        windowsFloor: 'Stockwerk / Zugang',
        windowsScreens: 'Mit Fensterläden / Rahmen / Screens?',
        stairsFloors: 'Wie viele Stockwerke / Treppenbereiche?',
        stairsFrequency: 'Einmalig oder regelmässig?',
        stairsExtras: 'Zusätzliche Bereiche',
        gardenSize: 'Ungefähre Gartengrösse',
        gardenTasks: 'Welche Gartenarbeiten sind nötig?',
        greenWaste: 'Grünabfall entsorgen?',
        movingFrom: 'Umzug von',
        movingTo: 'Umzug nach',
        movingVolume: 'Wohnungsgrösse / Umzugsvolumen',
        movingLift: 'Lift vorhanden?',
        movingPacking: 'Brauchen Sie Hilfe beim Packen / Reinigen?',
        cateringGuests: 'Wie viele Gäste?',
        cateringDate: 'Datum des Events',
        cateringType: 'Art des Events',
        cateringFood: 'Gewünschtes Essen / Paella-Art',
        cateringLocation: 'Ort des Events',
        largeJobType: 'Art der grösseren Arbeit',
        largeJobScope: 'Grösse / Umfang des Projekts',
        largeJobDeadline: 'Gibt es einen Termin oder eine Frist?',
      },
      serviceNames: {
        windows: 'Fensterreinigung',
        'general-cleaning': 'Allgemeine Reinigung',
        stairs: 'Treppenreinigung',
        garden: 'Gartenpflege',
        moving: 'Umzugshilfe',
        catering: 'Catering / Paella',
        'large-jobs': 'Grössere Arbeiten',
      },
      optionLabels: {
        yes: 'Ja',
        no: 'Nein',
        inside: 'Innen',
        outside: 'Aussen',
        both: 'Beides',
        oneTime: 'Einmalig',
        regular: 'Regelmässig',
        moveOut: 'Endreinigung / Umzugsreinigung',
        deep: 'Tiefenreinigung',
        regularCleaning: 'Normale Reinigung',
        family: 'Familienfeier',
        birthday: 'Geburtstag',
        business: 'Firmenanlass',
        privateEvent: 'Privater Anlass',
      },
    },

    es: {
      kicker: 'Presupuesto',
      title: 'Solicitar presupuesto',
      intro:
        'Describa el trabajo con el mayor detalle posible. Con la información correcta, Ramiro podrá preparar una oferta más rápida y profesional.',
      serviceLabel: '¿De qué se trata?',
      servicePlaceholder: 'Seleccione un servicio',
      sendTitle: 'Enviar directamente por correo',
      note:
        'Al enviar el formulario, la solicitud se manda directamente a amayabernservices@gmail.com. También puede adjuntar fotos.',
      customerData: 'Datos del cliente',
      workData: 'Datos del trabajo',
      attachments: 'Fotos / archivos',
      submit: 'Enviar solicitud',
      mailDirect: 'Escribir correo',
      whatsapp: 'Escribir por WhatsApp',
      fields: {
        fullName: 'Nombre completo',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        address: 'Dirección del trabajo',
        city: 'Ciudad / código postal',
        preferredDate: 'Fecha deseada',
        flexibleDate: '¿Tiene flexibilidad con la fecha?',
        details: 'Información adicional',
        files: 'Fotos o archivos',
        apartmentRooms: '¿Cuántas habitaciones tiene el apartamento?',
        apartmentBathrooms: '¿Cuántos baños?',
        apartmentSize: 'Superficie aproximada (m²)',
        cleaningType: 'Tipo de limpieza',
        furnished: '¿El apartamento está amueblado?',
        windowsCount: '¿Cuántas ventanas aproximadamente?',
        windowsInsideOutside: '¿Interior, exterior o ambos?',
        windowsFloor: 'Piso / acceso',
        windowsScreens: '¿Con persianas, marcos o screens?',
        stairsFloors: '¿Cuántos pisos / zonas de escalera?',
        stairsFrequency: '¿Servicio puntual o regular?',
        stairsExtras: 'Zonas adicionales',
        gardenSize: 'Tamaño aproximado del jardín',
        gardenTasks: '¿Qué trabajos de jardín necesita?',
        greenWaste: '¿Hay que retirar residuos verdes?',
        movingFrom: 'Mudanza desde',
        movingTo: 'Mudanza hacia',
        movingVolume: 'Tamaño de vivienda / volumen',
        movingLift: '¿Hay ascensor?',
        movingPacking: '¿Necesita ayuda con embalaje / limpieza?',
        cateringGuests: '¿Cuántos invitados?',
        cateringDate: 'Fecha del evento',
        cateringType: 'Tipo de evento',
        cateringFood: 'Comida deseada / tipo de paella',
        cateringLocation: 'Lugar del evento',
        largeJobType: 'Tipo de trabajo grande',
        largeJobScope: 'Tamaño / alcance del proyecto',
        largeJobDeadline: '¿Hay fecha límite o plazo?',
      },
      serviceNames: {
        windows: 'Limpieza de ventanas',
        'general-cleaning': 'Limpieza general',
        stairs: 'Limpieza de escaleras',
        garden: 'Jardinería',
        moving: 'Ayuda en mudanzas',
        catering: 'Catering / Paella',
        'large-jobs': 'Trabajos grandes',
      },
      optionLabels: {
        yes: 'Sí',
        no: 'No',
        inside: 'Interior',
        outside: 'Exterior',
        both: 'Ambos',
        oneTime: 'Puntual',
        regular: 'Regular',
        moveOut: 'Limpieza final / mudanza',
        deep: 'Limpieza profunda',
        regularCleaning: 'Limpieza normal',
        family: 'Reunión familiar',
        birthday: 'Cumpleaños',
        business: 'Evento de empresa',
        privateEvent: 'Evento privado',
      },
    },

    pt: {
      kicker: 'Orçamento',
      title: 'Pedir orçamento',
      intro:
        'Descreva o trabalho com o maior detalhe possível. Com a informação certa, o Ramiro pode preparar uma proposta mais rápida e profissional.',
      serviceLabel: 'De que se trata?',
      servicePlaceholder: 'Escolha um serviço',
      sendTitle: 'Enviar directamente por e-mail',
      note:
        'Depois de enviar, o pedido vai directamente para amayabernservices@gmail.com. Também pode anexar fotos.',
      customerData: 'Dados do cliente',
      workData: 'Dados do trabalho',
      attachments: 'Fotos / ficheiros',
      submit: 'Enviar pedido',
      mailDirect: 'Escrever e-mail',
      whatsapp: 'Escrever no WhatsApp',
      fields: {
        fullName: 'Nome completo',
        phone: 'Telefone',
        email: 'E-mail',
        address: 'Morada do trabalho',
        city: 'Localidade / código postal',
        preferredDate: 'Data desejada',
        flexibleDate: 'Tem flexibilidade na data?',
        details: 'Informações adicionais',
        files: 'Fotos ou ficheiros',
        apartmentRooms: 'Quantos quartos / divisões tem o apartamento?',
        apartmentBathrooms: 'Quantas casas de banho?',
        apartmentSize: 'Área aproximada (m²)',
        cleaningType: 'Tipo de limpeza',
        furnished: 'O apartamento está mobilado?',
        windowsCount: 'Quantas janelas aproximadamente?',
        windowsInsideOutside: 'Interior, exterior ou ambos?',
        windowsFloor: 'Andar / acesso',
        windowsScreens: 'Com portadas, caixilhos ou screens?',
        stairsFloors: 'Quantos andares / zonas de escada?',
        stairsFrequency: 'Serviço único ou regular?',
        stairsExtras: 'Zonas adicionais',
        gardenSize: 'Tamanho aproximado do jardim',
        gardenTasks: 'Que trabalhos de jardim são necessários?',
        greenWaste: 'É preciso retirar resíduos verdes?',
        movingFrom: 'Mudança de',
        movingTo: 'Mudança para',
        movingVolume: 'Tamanho da casa / volume',
        movingLift: 'Há elevador?',
        movingPacking: 'Precisa de ajuda para embalar / limpar?',
        cateringGuests: 'Quantos convidados?',
        cateringDate: 'Data do evento',
        cateringType: 'Tipo de evento',
        cateringFood: 'Comida desejada / tipo de paella',
        cateringLocation: 'Local do evento',
        largeJobType: 'Tipo de trabalho maior',
        largeJobScope: 'Tamanho / alcance do projecto',
        largeJobDeadline: 'Existe prazo ou data limite?',
      },
      serviceNames: {
        windows: 'Limpeza de janelas',
        'general-cleaning': 'Limpeza geral',
        stairs: 'Limpeza de escadas',
        garden: 'Jardinagem',
        moving: 'Ajuda em mudanças',
        catering: 'Catering / Paella',
        'large-jobs': 'Trabalhos maiores',
      },
      optionLabels: {
        yes: 'Sim',
        no: 'Não',
        inside: 'Interior',
        outside: 'Exterior',
        both: 'Ambos',
        oneTime: 'Único',
        regular: 'Regular',
        moveOut: 'Limpeza final / mudança',
        deep: 'Limpeza profunda',
        regularCleaning: 'Limpeza normal',
        family: 'Festa de família',
        birthday: 'Aniversário',
        business: 'Evento empresarial',
        privateEvent: 'Evento privado',
      },
    },

    en: {
      kicker: 'Quote',
      title: 'Request a quote',
      intro:
        'Describe the job as clearly as possible. With the right details, Ramiro can prepare a faster and more professional quote.',
      serviceLabel: 'What is the job about?',
      servicePlaceholder: 'Select a service',
      sendTitle: 'Send directly by email',
      note:
        'After submitting, the request goes directly to amayabernservices@gmail.com. You can also attach photos.',
      customerData: 'Customer details',
      workData: 'Job details',
      attachments: 'Photos / files',
      submit: 'Send request',
      mailDirect: 'Write email',
      whatsapp: 'Write on WhatsApp',
      fields: {
        fullName: 'Full name',
        phone: 'Phone',
        email: 'Email',
        address: 'Job address',
        city: 'Town / postal code',
        preferredDate: 'Preferred date',
        flexibleDate: 'Are you flexible with the date?',
        details: 'Additional details',
        files: 'Photos or files',
        apartmentRooms: 'How many rooms does the apartment have?',
        apartmentBathrooms: 'How many bathrooms?',
        apartmentSize: 'Approximate size (m²)',
        cleaningType: 'Cleaning type',
        furnished: 'Is the apartment furnished?',
        windowsCount: 'How many windows approximately?',
        windowsInsideOutside: 'Inside, outside or both?',
        windowsFloor: 'Floor / access',
        windowsScreens: 'With shutters, frames or screens?',
        stairsFloors: 'How many floors / stair areas?',
        stairsFrequency: 'One-time or regular service?',
        stairsExtras: 'Additional areas',
        gardenSize: 'Approximate garden size',
        gardenTasks: 'What garden work is needed?',
        greenWaste: 'Need green waste removal?',
        movingFrom: 'Moving from',
        movingTo: 'Moving to',
        movingVolume: 'Home size / moving volume',
        movingLift: 'Is there a lift?',
        movingPacking: 'Need help with packing / cleaning?',
        cateringGuests: 'How many guests?',
        cateringDate: 'Event date',
        cateringType: 'Event type',
        cateringFood: 'Desired food / paella type',
        cateringLocation: 'Event location',
        largeJobType: 'Type of larger job',
        largeJobScope: 'Size / project scope',
        largeJobDeadline: 'Is there a deadline?',
      },
      serviceNames: {
        windows: 'Window cleaning',
        'general-cleaning': 'General cleaning',
        stairs: 'Stair cleaning',
        garden: 'Gardening',
        moving: 'Moving help',
        catering: 'Catering / Paella',
        'large-jobs': 'Larger jobs',
      },
      optionLabels: {
        yes: 'Yes',
        no: 'No',
        inside: 'Inside',
        outside: 'Outside',
        both: 'Both',
        oneTime: 'One-time',
        regular: 'Regular',
        moveOut: 'Move-out / end cleaning',
        deep: 'Deep cleaning',
        regularCleaning: 'Regular cleaning',
        family: 'Family event',
        birthday: 'Birthday',
        business: 'Business event',
        privateEvent: 'Private event',
      },
    },
  }

  return content[language] || content.de
}

function QuoteRequestPage() {
  const { language } = useLanguage()
  const t = useMemo(() => getText(language), [language])
  const [service, setService] = useState('')

  const mailtoLink = `mailto:${FORM_EMAIL}`

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    language === 'es'
      ? 'Hola, quiero pedir un presupuesto.'
      : language === 'pt'
        ? 'Olá, quero pedir um orçamento.'
        : language === 'en'
          ? 'Hello, I would like to request a quote.'
          : 'Hallo, ich möchte gerne eine Offerte anfragen.'
  )}`

  return (
    <section className="quote-page">
      <div className="container narrow">
        <div className="quote-head">
          <span className="eyebrow">{t.kicker}</span>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>

        <div className="quote-card">
          <h2>{t.sendTitle}</h2>
          <p>{t.note}</p>

          <div className="quote-direct-actions">
            <a className="button button-light" href={mailtoLink}>
              {t.mailDirect}
            </a>
            <a
              className="button button-dark"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {t.whatsapp}
            </a>
          </div>

          <form
            className="quote-form"
            action={`https://formsubmit.co/${FORM_EMAIL}`}
            method="POST"
            encType="multipart/form-data"
          >
            <input type="hidden" name="_subject" value="Nueva solicitud de oferta - Amaya Bern Services" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.origin + '/kontakt'} />

            <div className="quote-field full">
              <label>{t.serviceLabel}</label>
              <select
                name="service_type"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">{t.servicePlaceholder}</option>
                {SERVICE_OPTIONS.map((item) => (
                  <option key={item} value={t.serviceNames[item]}>
                    {t.serviceNames[item]}
                  </option>
                ))}
              </select>
            </div>

            <div className="quote-section-title">{t.customerData}</div>

            <div className="quote-grid">
              <div className="quote-field">
                <label>{t.fields.fullName}</label>
                <input type="text" name="full_name" required />
              </div>

              <div className="quote-field">
                <label>{t.fields.phone}</label>
                <input type="text" name="phone" required />
              </div>

              <div className="quote-field">
                <label>{t.fields.email}</label>
                <input type="email" name="email" required />
              </div>

              <div className="quote-field">
                <label>{t.fields.city}</label>
                <input type="text" name="city_postcode" required />
              </div>

              <div className="quote-field full">
                <label>{t.fields.address}</label>
                <input type="text" name="address" required />
              </div>
            </div>

            <div className="quote-section-title">{t.workData}</div>

            <div className="quote-grid">
              <div className="quote-field">
                <label>{t.fields.preferredDate}</label>
                <input type="date" name="preferred_date" />
              </div>

              <div className="quote-field">
                <label>{t.fields.flexibleDate}</label>
                <select name="flexible_date">
                  <option value="">{t.servicePlaceholder}</option>
                  <option value={t.optionLabels.yes}>{t.optionLabels.yes}</option>
                  <option value={t.optionLabels.no}>{t.optionLabels.no}</option>
                </select>
              </div>
            </div>

            {service === t.serviceNames['general-cleaning'] && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.cleaningType}</label>
                  <select name="cleaning_type">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.deep}>{t.optionLabels.deep}</option>
                    <option value={t.optionLabels.moveOut}>{t.optionLabels.moveOut}</option>
                    <option value={t.optionLabels.regularCleaning}>{t.optionLabels.regularCleaning}</option>
                  </select>
                </div>

                <div className="quote-field">
                  <label>{t.fields.apartmentRooms}</label>
                  <input type="text" name="apartment_rooms" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.apartmentBathrooms}</label>
                  <input type="text" name="apartment_bathrooms" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.apartmentSize}</label>
                  <input type="text" name="apartment_size" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.furnished}</label>
                  <select name="furnished">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.yes}>{t.optionLabels.yes}</option>
                    <option value={t.optionLabels.no}>{t.optionLabels.no}</option>
                  </select>
                </div>
              </div>
            )}

            {service === t.serviceNames.windows && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.windowsCount}</label>
                  <input type="text" name="windows_count" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.windowsInsideOutside}</label>
                  <select name="windows_in_out">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.inside}>{t.optionLabels.inside}</option>
                    <option value={t.optionLabels.outside}>{t.optionLabels.outside}</option>
                    <option value={t.optionLabels.both}>{t.optionLabels.both}</option>
                  </select>
                </div>

                <div className="quote-field">
                  <label>{t.fields.windowsFloor}</label>
                  <input type="text" name="windows_floor_access" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.windowsScreens}</label>
                  <input type="text" name="windows_screens_frames" />
                </div>
              </div>
            )}

            {service === t.serviceNames.stairs && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.stairsFloors}</label>
                  <input type="text" name="stairs_floors" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.stairsFrequency}</label>
                  <select name="stairs_frequency">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.oneTime}>{t.optionLabels.oneTime}</option>
                    <option value={t.optionLabels.regular}>{t.optionLabels.regular}</option>
                  </select>
                </div>

                <div className="quote-field full">
                  <label>{t.fields.stairsExtras}</label>
                  <input type="text" name="stairs_extras" />
                </div>
              </div>
            )}

            {service === t.serviceNames.garden && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.gardenSize}</label>
                  <input type="text" name="garden_size" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.greenWaste}</label>
                  <select name="green_waste">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.yes}>{t.optionLabels.yes}</option>
                    <option value={t.optionLabels.no}>{t.optionLabels.no}</option>
                  </select>
                </div>

                <div className="quote-field full">
                  <label>{t.fields.gardenTasks}</label>
                  <textarea name="garden_tasks" rows="4" />
                </div>
              </div>
            )}

            {service === t.serviceNames.moving && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.movingFrom}</label>
                  <input type="text" name="moving_from" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.movingTo}</label>
                  <input type="text" name="moving_to" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.movingVolume}</label>
                  <input type="text" name="moving_volume" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.movingLift}</label>
                  <select name="moving_lift">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.yes}>{t.optionLabels.yes}</option>
                    <option value={t.optionLabels.no}>{t.optionLabels.no}</option>
                  </select>
                </div>

                <div className="quote-field full">
                  <label>{t.fields.movingPacking}</label>
                  <input type="text" name="moving_packing_cleaning" />
                </div>
              </div>
            )}

            {service === t.serviceNames.catering && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.cateringGuests}</label>
                  <input type="text" name="catering_guests" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.cateringDate}</label>
                  <input type="date" name="catering_date" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.cateringType}</label>
                  <select name="catering_type">
                    <option value="">{t.servicePlaceholder}</option>
                    <option value={t.optionLabels.family}>{t.optionLabels.family}</option>
                    <option value={t.optionLabels.birthday}>{t.optionLabels.birthday}</option>
                    <option value={t.optionLabels.business}>{t.optionLabels.business}</option>
                    <option value={t.optionLabels.privateEvent}>{t.optionLabels.privateEvent}</option>
                  </select>
                </div>

                <div className="quote-field">
                  <label>{t.fields.cateringLocation}</label>
                  <input type="text" name="catering_location" />
                </div>

                <div className="quote-field full">
                  <label>{t.fields.cateringFood}</label>
                  <textarea name="catering_food" rows="4" />
                </div>
              </div>
            )}

            {service === t.serviceNames['large-jobs'] && (
              <div className="quote-grid">
                <div className="quote-field">
                  <label>{t.fields.largeJobType}</label>
                  <input type="text" name="large_job_type" />
                </div>

                <div className="quote-field">
                  <label>{t.fields.largeJobDeadline}</label>
                  <input type="text" name="large_job_deadline" />
                </div>

                <div className="quote-field full">
                  <label>{t.fields.largeJobScope}</label>
                  <textarea name="large_job_scope" rows="4" />
                </div>
              </div>
            )}

            <div className="quote-field full">
              <label>{t.fields.details}</label>
              <textarea name="additional_details" rows="6" />
            </div>

            <div className="quote-section-title">{t.attachments}</div>

            <div className="quote-field full">
              <label>{t.fields.files}</label>
              <input type="file" name="attachment" multiple />
            </div>

            <button type="submit" className="button button-dark quote-submit">
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default QuoteRequestPage