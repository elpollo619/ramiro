import { useMemo, useState } from 'react'
import './VirtualAssistant.css'

const WHATSAPP_NUMBER = '41765683445'
const EMAIL_ADDRESS = 'amayabernservices@gmail.com'

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function getTexts(language) {
  const t = {
    de: {
      assistant: 'Assistent',
      subtitle: 'Virtueller Assistent',
      welcome:
        'Hallo 👋 Wie kann ich Ihnen helfen? Sie können auch das Offertenformular ausfüllen, direkt an amayabernservices@gmail.com schreiben oder per WhatsApp Kontakt aufnehmen.',
      placeholder: 'Ihre Nachricht schreiben...',
      send: 'Senden',
      form: 'Formular öffnen',
      whatsapp: 'WhatsApp öffnen',
      quick1: 'Fensterreinigung',
      quick2: 'Allgemeine Reinigung',
      quick3: 'Catering / Paella',
      quick4: 'Kontakt',
      quick5: 'Preise',
      quick6: 'Bern und Umgebung',
      fallback:
        'Gerne helfe ich Ihnen weiter. Sie können das Offertenformular ausfüllen, direkt an amayabernservices@gmail.com schreiben oder per WhatsApp Kontakt aufnehmen.',
      windows:
        'Ramiro bietet Fensterreinigung innen und aussen an. Für eine passende Offerte können Sie direkt das Formular ausfüllen.',
      general:
        'Die allgemeine Reinigung umfasst Wohnungen, Häuser, Büros und Lokale. Mit dem Formular können Sie alle Angaben direkt senden.',
      stairs:
        'Treppenreinigung ist möglich für Eingänge, Böden, Geländer und gemeinschaftliche Bereiche. Für eine Offerte können Sie direkt das Formular ausfüllen.',
      garden:
        'Ramiro hilft auch bei Gartenpflege und allgemeinen Arbeiten im Aussenbereich. Schreiben Sie uns auch gerne per E-Mail oder WhatsApp.',
      moving:
        'Bei Umzügen hilft Ramiro praktisch und zuverlässig. Im Formular können Sie alle wichtigen Angaben für eine Offerte angeben.',
      catering:
        'Ramiro bietet Catering und hausgemachte Paellas für Familienfeiern, kleine Events und besondere Anlässe an. Sie können direkt das Formular ausfüllen oder per WhatsApp schreiben.',
      zone:
        'Der Service ist in Bern und Umgebung verfügbar. Schreiben Sie uns Ihre Ortschaft oder füllen Sie direkt das Formular aus.',
      contact:
        'Sie können das Formular ausfüllen, direkt an amayabernservices@gmail.com schreiben oder per WhatsApp an +41 76 568 34 45 Kontakt aufnehmen.',
      price:
        'Die Offerte ist unverbindlich. Der Preis hängt von der Art der Arbeit, der Grösse und dem Aufwand ab. Am besten füllen Sie das Formular mit allen Angaben aus.',
      whatsappPrefill:
        'Hallo, ich interessiere mich für Ihre Dienstleistungen.',
    },

    es: {
      assistant: 'Asistente',
      subtitle: 'Asistente virtual',
      welcome:
        'Hola 👋 ¿En qué puedo ayudarle? También puede rellenar el formulario de presupuesto, escribir directamente a amayabernservices@gmail.com o contactar por WhatsApp.',
      placeholder: 'Escriba su mensaje...',
      send: 'Enviar',
      form: 'Abrir formulario',
      whatsapp: 'Abrir WhatsApp',
      quick1: 'Limpieza de ventanas',
      quick2: 'Limpieza general',
      quick3: 'Catering / Paella',
      quick4: 'Contacto',
      quick5: 'Precios',
      quick6: 'Berna y alrededores',
      fallback:
        'Con gusto le ayudo. Puede rellenar el formulario, escribir directamente a amayabernservices@gmail.com o enviarnos un WhatsApp.',
      windows:
        'Ramiro ofrece limpieza de ventanas por dentro y por fuera. Para una oferta adecuada puede rellenar directamente el formulario.',
      general:
        'La limpieza general incluye viviendas, casas, oficinas y locales. Con el formulario puede enviar toda la información necesaria.',
      stairs:
        'La limpieza de escaleras incluye entradas, suelos, barandillas y zonas comunes. Para una oferta puede rellenar directamente el formulario.',
      garden:
        'Ramiro también ayuda con jardinería y trabajos generales en espacios exteriores. También puede escribirnos por correo o WhatsApp.',
      moving:
        'En mudanzas, Ramiro ofrece ayuda práctica y fiable. En el formulario puede indicar todos los datos importantes para la oferta.',
      catering:
        'Ramiro ofrece catering y paellas caseras para reuniones familiares, pequeños eventos y ocasiones especiales. Puede rellenar el formulario o escribir por WhatsApp.',
      zone:
        'El servicio está disponible en Berna y alrededores. Puede escribirnos su localidad o rellenar directamente el formulario.',
      contact:
        'Puede rellenar el formulario, escribir directamente a amayabernservices@gmail.com o contactar por WhatsApp al +41 76 568 34 45.',
      price:
        'El presupuesto es sin compromiso. El precio depende del tipo de trabajo, el tamaño y el esfuerzo necesario. Lo mejor es rellenar el formulario con toda la información.',
      whatsappPrefill:
        'Hola, estoy interesado en sus servicios.',
    },

    pt: {
      assistant: 'Assistente',
      subtitle: 'Assistente virtual',
      welcome:
        'Olá 👋 Em que posso ajudar? Também pode preencher o formulário de orçamento, escrever directamente para amayabernservices@gmail.com ou contactar por WhatsApp.',
      placeholder: 'Escreva a sua mensagem...',
      send: 'Enviar',
      form: 'Abrir formulário',
      whatsapp: 'Abrir WhatsApp',
      quick1: 'Limpeza de janelas',
      quick2: 'Limpeza geral',
      quick3: 'Catering / Paella',
      quick4: 'Contacto',
      quick5: 'Preços',
      quick6: 'Berna e arredores',
      fallback:
        'Com todo o gosto ajudo. Pode preencher o formulário, escrever directamente para amayabernservices@gmail.com ou mandar mensagem por WhatsApp.',
      windows:
        'O Ramiro oferece limpeza de janelas por dentro e por fora. Para um orçamento adequado, pode preencher directamente o formulário.',
      general:
        'A limpeza geral inclui apartamentos, casas, escritórios e espaços comerciais. Com o formulário pode enviar toda a informação necessária.',
      stairs:
        'A limpeza de escadas inclui entradas, pisos, corrimões e zonas comuns. Para um orçamento, pode preencher directamente o formulário.',
      garden:
        'O Ramiro também ajuda com jardinagem e trabalhos gerais em espaços exteriores. Também pode escrever por e-mail ou WhatsApp.',
      moving:
        'Nas mudanças, o Ramiro oferece apoio prático e fiável. No formulário pode indicar todos os dados importantes para o orçamento.',
      catering:
        'O Ramiro oferece catering e paellas caseiras para festas de família, pequenos eventos e ocasiões especiais. Pode preencher o formulário ou escrever por WhatsApp.',
      zone:
        'O serviço está disponível em Berna e arredores. Pode escrever a sua localidade ou preencher directamente o formulário.',
      contact:
        'Pode preencher o formulário, escrever directamente para amayabernservices@gmail.com ou contactar pelo WhatsApp para +41 76 568 34 45.',
      price:
        'O orçamento é sem compromisso. O preço depende do tipo de trabalho, do tamanho e do esforço necessário. O melhor é preencher o formulário com toda a informação.',
      whatsappPrefill:
        'Olá, estou interessado nos seus serviços.',
    },

    en: {
      assistant: 'Assistant',
      subtitle: 'Virtual assistant',
      welcome:
        'Hello 👋 How can I help you? You can also fill out the quote form, write directly to amayabernservices@gmail.com or contact us on WhatsApp.',
      placeholder: 'Write your message...',
      send: 'Send',
      form: 'Open form',
      whatsapp: 'Open WhatsApp',
      quick1: 'Window cleaning',
      quick2: 'General cleaning',
      quick3: 'Catering / Paella',
      quick4: 'Contact',
      quick5: 'Prices',
      quick6: 'Bern and surrounding area',
      fallback:
        'I will gladly help you. You can fill out the quote form, write directly to amayabernservices@gmail.com or contact us on WhatsApp.',
      windows:
        'Ramiro offers window cleaning inside and outside. For a suitable quote, you can fill out the form directly.',
      general:
        'General cleaning includes apartments, houses, offices and commercial spaces. With the form you can send all the necessary information.',
      stairs:
        'Stair cleaning includes entrances, floors, railings and shared areas. For a quote, you can fill out the form directly.',
      garden:
        'Ramiro also helps with gardening and general outdoor work. You can also write by email or WhatsApp.',
      moving:
        'For moving jobs, Ramiro offers practical and reliable help. In the form you can include all important details for the quote.',
      catering:
        'Ramiro offers catering and homemade paellas for family gatherings, small events and special occasions. You can fill out the form or write on WhatsApp.',
      zone:
        'The service is available in Bern and surrounding areas. You can write your location or fill out the form directly.',
      contact:
        'You can fill out the form, write directly to amayabernservices@gmail.com or contact WhatsApp at +41 76 568 34 45.',
      price:
        'The quote is non-binding. The price depends on the type of work, the size and the effort required. The best option is to fill out the form with all details.',
      whatsappPrefill:
        'Hello, I am interested in your services.',
    },

    fr: {
      assistant: 'Assistant',
      subtitle: 'Assistant virtuel',
      welcome:
        'Bonjour 👋 Comment puis-je vous aider ? Vous pouvez aussi remplir le formulaire de devis, écrire directement à amayabernservices@gmail.com ou nous contacter par WhatsApp.',
      placeholder: 'Écrivez votre message...',
      send: 'Envoyer',
      form: 'Ouvrir le formulaire',
      whatsapp: 'Ouvrir WhatsApp',
      quick1: 'Nettoyage des fenêtres',
      quick2: 'Nettoyage général',
      quick3: 'Catering / Paella',
      quick4: 'Contact',
      quick5: 'Prix',
      quick6: 'Berne et environs',
      fallback:
        'Je vous aide volontiers. Vous pouvez remplir le formulaire, écrire directement à amayabernservices@gmail.com ou nous contacter par WhatsApp.',
      windows:
        'Ramiro propose le nettoyage des fenêtres à l’intérieur et à l’extérieur. Pour un devis adapté, vous pouvez remplir directement le formulaire.',
      general:
        'Le nettoyage général comprend les appartements, maisons, bureaux et locaux. Avec le formulaire, vous pouvez envoyer toutes les informations nécessaires.',
      stairs:
        'Le nettoyage des escaliers comprend les entrées, sols, rampes et espaces communs. Pour un devis, vous pouvez remplir directement le formulaire.',
      garden:
        'Ramiro aide aussi pour le jardinage et les travaux généraux à l’extérieur. Vous pouvez aussi écrire par e-mail ou WhatsApp.',
      moving:
        'Pour les déménagements, Ramiro propose une aide pratique et fiable. Dans le formulaire, vous pouvez indiquer tous les détails importants pour le devis.',
      catering:
        'Ramiro propose du catering et des paellas maison pour les fêtes de famille, petits événements et occasions spéciales. Vous pouvez remplir le formulaire ou écrire sur WhatsApp.',
      zone:
        'Le service est disponible à Berne et dans les environs. Vous pouvez nous indiquer votre localité ou remplir directement le formulaire.',
      contact:
        'Vous pouvez remplir le formulaire, écrire directement à amayabernservices@gmail.com ou contacter WhatsApp au +41 76 568 34 45.',
      price:
        'Le devis est sans engagement. Le prix dépend du type de travail, de la taille et du temps nécessaire. Le mieux est de remplir le formulaire avec toutes les informations.',
      whatsappPrefill:
        'Bonjour, je suis intéressé par vos services.',
    },

    it: {
      assistant: 'Assistente',
      subtitle: 'Assistente virtuale',
      welcome:
        'Ciao 👋 Come posso aiutarla? Può anche compilare il modulo di preventivo, scrivere direttamente a amayabernservices@gmail.com oppure contattarci su WhatsApp.',
      placeholder: 'Scriva il suo messaggio...',
      send: 'Inviare',
      form: 'Aprire modulo',
      whatsapp: 'Aprire WhatsApp',
      quick1: 'Pulizia finestre',
      quick2: 'Pulizia generale',
      quick3: 'Catering / Paella',
      quick4: 'Contatto',
      quick5: 'Prezzi',
      quick6: 'Berna e dintorni',
      fallback:
        'La aiuto volentieri. Può compilare il modulo, scrivere direttamente a amayabernservices@gmail.com oppure contattarci su WhatsApp.',
      windows:
        'Ramiro offre pulizia finestre interna ed esterna. Per un preventivo adatto, può compilare direttamente il modulo.',
      general:
        'La pulizia generale include appartamenti, case, uffici e locali commerciali. Con il modulo può inviare tutte le informazioni necessarie.',
      stairs:
        'La pulizia scale include ingressi, pavimenti, corrimano e aree comuni. Per un preventivo può compilare direttamente il modulo.',
      garden:
        'Ramiro aiuta anche con giardinaggio e lavori generali esterni. Può anche scriverci via e-mail o WhatsApp.',
      moving:
        'Per i traslochi, Ramiro offre un aiuto pratico e affidabile. Nel modulo può indicare tutti i dettagli importanti per il preventivo.',
      catering:
        'Ramiro offre catering e paelle fatte in casa per feste di famiglia, piccoli eventi e occasioni speciali. Può compilare il modulo oppure scrivere su WhatsApp.',
      zone:
        'Il servizio è disponibile a Berna e dintorni. Può indicarci la sua località oppure compilare direttamente il modulo.',
      contact:
        'Può compilare il modulo, scrivere direttamente a amayabernservices@gmail.com oppure contattare WhatsApp al +41 76 568 34 45.',
      price:
        'Il preventivo è senza impegno. Il prezzo dipende dal tipo di lavoro, dalle dimensioni e dall’impegno necessario. La cosa migliore è compilare il modulo con tutte le informazioni.',
      whatsappPrefill:
        'Ciao, sono interessato ai vostri servizi.',
    },
  }

  return t[language] || t.de
}

function getAssistantReply(message, language) {
  const text = normalizeText(message)
  const t = getTexts(language)

  if (
    text.includes('fenster') ||
    text.includes('ventana') ||
    text.includes('janela') ||
    text.includes('window') ||
    text.includes('fenetre') ||
    text.includes('finestra')
  ) {
    return t.windows
  }

  if (
    text.includes('reinigung') ||
    text.includes('limpieza general') ||
    text.includes('limpeza geral') ||
    text.includes('general cleaning') ||
    text.includes('nettoyage') ||
    text.includes('pulizia') ||
    text.includes('office') ||
    text.includes('oficina') ||
    text.includes('buro')
  ) {
    return t.general
  }

  if (
    text.includes('treppe') ||
    text.includes('escalera') ||
    text.includes('escada') ||
    text.includes('stairs') ||
    text.includes('escalier') ||
    text.includes('scala')
  ) {
    return t.stairs
  }

  if (
    text.includes('garten') ||
    text.includes('jardin') ||
    text.includes('jardim') ||
    text.includes('garden') ||
    text.includes('giardino')
  ) {
    return t.garden
  }

  if (
    text.includes('umzug') ||
    text.includes('mudanza') ||
    text.includes('mudancas') ||
    text.includes('moving') ||
    text.includes('demenagement') ||
    text.includes('trasloco')
  ) {
    return t.moving
  }

  if (
    text.includes('catering') ||
    text.includes('paella') ||
    text.includes('evento') ||
    text.includes('event') ||
    text.includes('evenement')
  ) {
    return t.catering
  }

  if (
    text.includes('bern') ||
    text.includes('region') ||
    text.includes('umgebung') ||
    text.includes('zona') ||
    text.includes('area') ||
    text.includes('environs') ||
    text.includes('dintorni')
  ) {
    return t.zone
  }

  if (
    text.includes('kontakt') ||
    text.includes('contacto') ||
    text.includes('contact') ||
    text.includes('telefone') ||
    text.includes('telefon') ||
    text.includes('email') ||
    text.includes('mail') ||
    text.includes('contatto')
  ) {
    return t.contact
  }

  if (
    text.includes('preis') ||
    text.includes('price') ||
    text.includes('precio') ||
    text.includes('preco') ||
    text.includes('offerte') ||
    text.includes('presupuesto') ||
    text.includes('orcamento') ||
    text.includes('prix') ||
    text.includes('preventivo')
  ) {
    return t.price
  }

  return t.fallback
}

function VirtualAssistant({ language = 'de' }) {
  const t = useMemo(() => getTexts(language), [language])

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [
    { sender: 'assistant', text: t.welcome },
  ])

  const resetChatForLanguage = () => {
    setMessages([{ sender: 'assistant', text: t.welcome }])
    setInput('')
  }

  const handleSend = (customText) => {
    const finalText = (customText || input).trim()
    if (!finalText) return

    const reply = getAssistantReply(finalText, language)

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: finalText },
      { sender: 'assistant', text: reply },
    ])

    setInput('')
  }

  const openWhatsapp = () => {
    const text = encodeURIComponent(t.whatsappPrefill)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <>
      <button
        className="va-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t.assistant}
        type="button"
      >
        <span className="va-fab-icon">💬</span>
        <span>{t.assistant}</span>
      </button>

      {isOpen && (
        <div className="va-panel">
          <div className="va-header">
            <div className="va-header-copy">
              <strong>Amaya Bern Services</strong>
              <p>{t.subtitle}</p>
            </div>

            <button className="va-close" onClick={() => setIsOpen(false)} type="button">
              ×
            </button>
          </div>

          <div className="va-quick-actions">
            <button type="button" onClick={() => handleSend(t.quick1)}>{t.quick1}</button>
            <button type="button" onClick={() => handleSend(t.quick2)}>{t.quick2}</button>
            <button type="button" onClick={() => handleSend(t.quick3)}>{t.quick3}</button>
            <button type="button" onClick={() => handleSend(t.quick4)}>{t.quick4}</button>
            <button type="button" onClick={() => handleSend(t.quick5)}>{t.quick5}</button>
            <button type="button" onClick={() => handleSend(t.quick6)}>{t.quick6}</button>
          </div>

          <div className="va-messages">
            {messages.map((msg, index) => (
              <div
                key={`${msg.sender}-${index}`}
                className={`va-message ${msg.sender === 'user' ? 'user' : 'assistant'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="va-cta-row">
            <a className="va-budget" href="/offerte">
              {t.form}
            </a>

            <button className="va-whatsapp" onClick={openWhatsapp} type="button">
              {t.whatsapp}
            </button>

            <a className="va-email" href={`mailto:${EMAIL_ADDRESS}`}>
              E-Mail
            </a>
          </div>

          <div className="va-language-reset">
            <button type="button" onClick={resetChatForLanguage}>
              {language === 'es'
                ? 'Actualizar idioma del chat'
                : language === 'pt'
                  ? 'Actualizar idioma do chat'
                  : language === 'en'
                    ? 'Refresh chat language'
                    : language === 'fr'
                      ? 'Actualiser la langue du chat'
                      : language === 'it'
                        ? 'Aggiorna lingua chat'
                        : 'Chatsprache aktualisieren'}
            </button>
          </div>

          <div className="va-input-area">
            <input
              type="text"
              value={input}
              placeholder={t.placeholder}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend()
              }}
            />
            <button onClick={() => handleSend()} type="button">
              {t.send}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default VirtualAssistant