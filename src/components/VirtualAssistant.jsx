import { useEffect, useMemo, useState } from 'react'
import './VirtualAssistant.css'

const WHATSAPP_NUMBER = '41765683445'

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
      welcome: 'Hallo 👋 Wie kann ich Ihnen helfen?',
      subtitle: 'Virtueller Assistent',
      placeholder: 'Ihre Nachricht schreiben...',
      send: 'Senden',
      budget: 'Offerte anfragen',
      whatsapp: 'WhatsApp öffnen',
      quick1: 'Fensterreinigung',
      quick2: 'Allgemeine Reinigung',
      quick3: 'Catering / Paella',
      quick4: 'Kontakt',
      quick5: 'Preise',
      quick6: 'Bern und Umgebung',
      fallback:
        'Gerne helfe ich Ihnen weiter. Schreiben Sie mir bitte kurz, welche Dienstleistung Sie brauchen und in welcher Region Sie sich befinden.',
      windows:
        'Ramiro bietet Fensterreinigung innen und aussen an. Die Arbeit wird sorgfältig und streifenfrei ausgeführt.',
      general:
        'Die allgemeine Reinigung umfasst Wohnungen, Häuser, Büros und Lokale. Ramiro arbeitet direkt, sauber und zuverlässig.',
      stairs:
        'Treppenreinigung ist möglich für Eingänge, Böden, Geländer und gemeinschaftliche Bereiche.',
      garden:
        'Ramiro unterstützt auch bei Gartenpflege und allgemeinen Arbeiten im Aussenbereich.',
      moving:
        'Bei Umzügen hilft Ramiro praktisch und zuverlässig beim Ablauf, Transport und bei weiteren Arbeiten rund um den Umzug.',
      catering:
        'Ramiro bietet Catering und hausgemachte Paellas für Familienfeiern, kleine Events und besondere Anlässe an.',
      zone:
        'Der Service ist in Bern und Umgebung verfügbar. Sie können Ihre Ortschaft gerne schreiben, damit wir prüfen können, ob der Einsatz möglich ist.',
      contact:
        'Sie können direkt Kontakt aufnehmen über das Kontaktformular, per WhatsApp oder telefonisch. Wenn Sie möchten, können Sie mir auch gleich Ihren Namen, Ort und die gewünschte Dienstleistung schreiben.',
      price:
        'Die Offerte ist unverbindlich. Der Preis hängt von der Art der Arbeit, der Grösse und dem Aufwand ab.',
      team:
        'Auch grössere Arbeiten sind möglich. Falls nötig, kann Ramiro ein zuverlässiges Team organisieren.',
      askData:
        'Damit ich Ihre Anfrage besser vorbereiten kann, schreiben Sie bitte: Name, Ort, gewünschte Dienstleistung und gewünschtes Datum.',
      budgetPrefill:
        'Hallo, ich möchte gerne eine unverbindliche Offerte anfragen.',
      whatsappPrefill:
        'Hallo, ich interessiere mich für Ihre Dienstleistungen.',
    },

    es: {
      assistant: 'Asistente',
      welcome: 'Hola 👋 ¿En qué puedo ayudarle?',
      subtitle: 'Asistente virtual',
      placeholder: 'Escriba su mensaje...',
      send: 'Enviar',
      budget: 'Solicitar presupuesto',
      whatsapp: 'Abrir WhatsApp',
      quick1: 'Limpieza de ventanas',
      quick2: 'Limpieza general',
      quick3: 'Catering / Paella',
      quick4: 'Contacto',
      quick5: 'Precios',
      quick6: 'Berna y alrededores',
      fallback:
        'Con gusto le ayudo. Escríbame qué servicio necesita y en qué zona se encuentra.',
      windows:
        'Ramiro ofrece limpieza de ventanas por dentro y por fuera, con cuidado y sin marcas.',
      general:
        'La limpieza general incluye viviendas, casas, oficinas y locales. Ramiro trabaja de forma directa, limpia y fiable.',
      stairs:
        'La limpieza de escaleras incluye entradas, suelos, barandillas y zonas comunes.',
      garden:
        'Ramiro también ayuda con jardinería y trabajos generales en espacios exteriores.',
      moving:
        'En mudanzas, Ramiro ofrece ayuda práctica y fiable con el proceso, transporte y otras tareas relacionadas.',
      catering:
        'Ramiro ofrece catering y paellas caseras para reuniones familiares, pequeños eventos y ocasiones especiales.',
      zone:
        'El servicio está disponible en Berna y alrededores. Puede escribir su localidad para comprobar si el servicio es posible.',
      contact:
        'Puede contactar directamente por el formulario de la web, por WhatsApp o por teléfono. Si quiere, también puede escribirme su nombre, la zona y el servicio que necesita.',
      price:
        'El presupuesto es sin compromiso. El precio depende del tipo de trabajo, el tamaño y el esfuerzo necesario.',
      team:
        'También es posible realizar trabajos grandes. Si hace falta, Ramiro puede organizar un equipo de confianza.',
      askData:
        'Para preparar mejor su solicitud, escriba por favor: nombre, localidad, servicio deseado y fecha aproximada.',
      budgetPrefill:
        'Hola, me gustaría solicitar un presupuesto sin compromiso.',
      whatsappPrefill:
        'Hola, estoy interesado en sus servicios.',
    },

    pt: {
      assistant: 'Assistente',
      welcome: 'Olá 👋 Em que posso ajudar?',
      subtitle: 'Assistente virtual',
      placeholder: 'Escreva a sua mensagem...',
      send: 'Enviar',
      budget: 'Pedir orçamento',
      whatsapp: 'Abrir WhatsApp',
      quick1: 'Limpeza de janelas',
      quick2: 'Limpeza geral',
      quick3: 'Catering / Paella',
      quick4: 'Contacto',
      quick5: 'Preços',
      quick6: 'Berna e arredores',
      fallback:
        'Com todo o gosto ajudo. Escreva qual o serviço que precisa e em que zona se encontra.',
      windows:
        'O Ramiro oferece limpeza de janelas por dentro e por fora, com cuidado e sem marcas.',
      general:
        'A limpeza geral inclui apartamentos, casas, escritórios e espaços comerciais. O Ramiro trabalha de forma directa, limpa e fiável.',
      stairs:
        'A limpeza de escadas inclui entradas, pisos, corrimões e zonas comuns.',
      garden:
        'O Ramiro também ajuda com jardinagem e trabalhos gerais em espaços exteriores.',
      moving:
        'Nas mudanças, o Ramiro oferece apoio prático e fiável com o processo, transporte e outras tarefas relacionadas.',
      catering:
        'O Ramiro oferece catering e paellas caseiras para festas de família, pequenos eventos e ocasiões especiais.',
      zone:
        'O serviço está disponível em Berna e arredores. Pode escrever a sua localidade para verificar se o serviço é possível.',
      contact:
        'Pode entrar em contacto directamente pelo formulário do site, por WhatsApp ou por telefone. Se quiser, também pode escrever o seu nome, a zona e o serviço que precisa.',
      price:
        'O orçamento é sem compromisso. O preço depende do tipo de trabalho, do tamanho e do esforço necessário.',
      team:
        'Também são possíveis trabalhos maiores. Se for necessário, o Ramiro pode organizar uma equipa de confiança.',
      askData:
        'Para preparar melhor o seu pedido, escreva por favor: nome, localidade, serviço desejado e data aproximada.',
      budgetPrefill:
        'Olá, gostaria de pedir um orçamento sem compromisso.',
      whatsappPrefill:
        'Olá, estou interessado nos seus serviços.',
    },

    en: {
      assistant: 'Assistant',
      welcome: 'Hello 👋 How can I help?',
      subtitle: 'Virtual assistant',
      placeholder: 'Write your message...',
      send: 'Send',
      budget: 'Request quote',
      whatsapp: 'Open WhatsApp',
      quick1: 'Window cleaning',
      quick2: 'General cleaning',
      quick3: 'Catering / Paella',
      quick4: 'Contact',
      quick5: 'Prices',
      quick6: 'Bern and nearby areas',
      fallback:
        'I am happy to help. Please tell me which service you need and in which area you are located.',
      windows:
        'Ramiro offers window cleaning inside and outside, with care and a streak-free result.',
      general:
        'General cleaning includes flats, houses, offices and business spaces. Ramiro works directly, cleanly and reliably.',
      stairs:
        'Stair cleaning includes entrances, floors, railings and shared areas.',
      garden:
        'Ramiro also helps with gardening and general outdoor work.',
      moving:
        'For moving jobs, Ramiro offers practical and reliable support with transport, organization and related tasks.',
      catering:
        'Ramiro offers catering and homemade paellas for family gatherings, small events and special occasions.',
      zone:
        'The service is available in Bern and nearby areas. You can send your town to check whether service is possible there.',
      contact:
        'You can contact us directly through the website form, by WhatsApp or by phone. You can also send me your name, area and the service you need.',
      price:
        'Quotes are free and without obligation. The price depends on the type of work, the size and the effort required.',
      team:
        'Larger jobs are also possible. If needed, Ramiro can organize a trusted team.',
      askData:
        'To prepare your request better, please write: name, town, desired service and preferred date.',
      budgetPrefill:
        'Hello, I would like to request a free quote.',
      whatsappPrefill:
        'Hello, I am interested in your services.',
    },

    fr: {
      assistant: 'Assistant',
      welcome: 'Bonjour 👋 Comment puis-je vous aider ?',
      subtitle: 'Assistant virtuel',
      placeholder: 'Écrivez votre message...',
      send: 'Envoyer',
      budget: 'Demander un devis',
      whatsapp: 'Ouvrir WhatsApp',
      quick1: 'Nettoyage de fenêtres',
      quick2: 'Nettoyage général',
      quick3: 'Catering / Paella',
      quick4: 'Contact',
      quick5: 'Prix',
      quick6: 'Berne et environs',
      fallback:
        'Je vous aide volontiers. Écrivez-moi simplement quel service vous souhaitez et dans quelle région vous vous trouvez.',
      windows:
        'Ramiro propose le nettoyage de fenêtres à l’intérieur et à l’extérieur, avec soin et sans traces.',
      general:
        'Le nettoyage général comprend appartements, maisons, bureaux et locaux. Ramiro travaille directement, proprement et de manière fiable.',
      stairs:
        'Le nettoyage d’escaliers comprend entrées, sols, rampes et espaces communs.',
      garden:
        'Ramiro aide aussi pour le jardin et les travaux généraux à l’extérieur.',
      moving:
        'Pour les déménagements, Ramiro propose une aide pratique et fiable pour l’organisation, le transport et d’autres tâches liées.',
      catering:
        'Ramiro propose du catering et des paellas maison pour fêtes de famille, petits événements et occasions spéciales.',
      zone:
        'Le service est disponible à Berne et dans les environs. Vous pouvez écrire votre localité pour vérifier si le service est possible.',
      contact:
        'Vous pouvez nous contacter directement via le formulaire du site, par WhatsApp ou par téléphone. Si vous voulez, vous pouvez aussi m’écrire votre nom, la région et le service souhaité.',
      price:
        'Le devis est sans engagement. Le prix dépend du type de travail, de la taille et de l’effort nécessaire.',
      team:
        'Les grands travaux sont aussi possibles. Si nécessaire, Ramiro peut organiser une équipe de confiance.',
      askData:
        'Pour mieux préparer votre demande, veuillez écrire : nom, localité, service souhaité et date souhaitée.',
      budgetPrefill:
        'Bonjour, je voudrais demander un devis sans engagement.',
      whatsappPrefill:
        'Bonjour, je suis intéressé par vos services.',
    },

    it: {
      assistant: 'Assistente',
      welcome: 'Ciao 👋 Come posso aiutarla?',
      subtitle: 'Assistente virtuale',
      placeholder: 'Scriva il suo messaggio...',
      send: 'Invia',
      budget: 'Richiedi preventivo',
      whatsapp: 'Apri WhatsApp',
      quick1: 'Pulizia finestre',
      quick2: 'Pulizia generale',
      quick3: 'Catering / Paella',
      quick4: 'Contatto',
      quick5: 'Prezzi',
      quick6: 'Berna e dintorni',
      fallback:
        'Sarò felice di aiutarla. Mi scriva quale servizio desidera e in quale zona si trova.',
      windows:
        'Ramiro offre la pulizia delle finestre interne ed esterne, con cura e senza aloni.',
      general:
        'La pulizia generale comprende appartamenti, case, uffici e locali. Ramiro lavora in modo diretto, pulito e affidabile.',
      stairs:
        'La pulizia delle scale comprende ingressi, pavimenti, corrimani e spazi comuni.',
      garden:
        'Ramiro aiuta anche con il giardino e con lavori generali negli spazi esterni.',
      moving:
        'Per i traslochi, Ramiro offre un aiuto pratico e affidabile con organizzazione, trasporto e altre attività collegate.',
      catering:
        'Ramiro offre catering e paella fatta in casa per feste di famiglia, piccoli eventi e occasioni speciali.',
      zone:
        'Il servizio è disponibile a Berna e dintorni. Può scrivere la sua località per verificare se il servizio è disponibile.',
      contact:
        'Può contattarci direttamente tramite il modulo del sito, via WhatsApp o per telefono. Se vuole, può anche scrivermi il suo nome, la zona e il servizio desiderato.',
      price:
        'Il preventivo è senza impegno. Il prezzo dipende dal tipo di lavoro, dalla dimensione e dall’impegno richiesto.',
      team:
        'Sono possibili anche lavori più grandi. Se necessario, Ramiro può organizzare un team affidabile.',
      askData:
        'Per preparare meglio la sua richiesta, scriva per favore: nome, località, servizio desiderato e data indicativa.',
      budgetPrefill:
        'Ciao, vorrei richiedere un preventivo senza impegno.',
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
    text.includes('nettoyage general') ||
    text.includes('pulizia generale') ||
    text.includes('office') ||
    text.includes('oficina') ||
    text.includes('buro') ||
    text.includes('bureau')
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
    text.includes('mudanca') ||
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
    text.includes('banquete')
  ) {
    return t.catering
  }

  if (
    text.includes('bern') ||
    text.includes('region') ||
    text.includes('umgebung') ||
    text.includes('zona') ||
    text.includes('area') ||
    text.includes('berne')
  ) {
    return t.zone
  }

  if (
    text.includes('kontakt') ||
    text.includes('contacto') ||
    text.includes('contact') ||
    text.includes('contacto') ||
    text.includes('telefone') ||
    text.includes('telefon') ||
    text.includes('email') ||
    text.includes('correo')
  ) {
    return t.contact
  }

  if (
    text.includes('preis') ||
    text.includes('price') ||
    text.includes('precio') ||
    text.includes('preco') ||
    text.includes('prix') ||
    text.includes('prezzo') ||
    text.includes('offerte') ||
    text.includes('presupuesto') ||
    text.includes('orcamento') ||
    text.includes('devis') ||
    text.includes('preventivo')
  ) {
    return t.price
  }

  if (
    text.includes('gross') ||
    text.includes('gros') ||
    text.includes('grande') ||
    text.includes('team') ||
    text.includes('equipe')
  ) {
    return t.team
  }

  if (
    text.includes('anfrage') ||
    text.includes('solicitud') ||
    text.includes('pedido') ||
    text.includes('request') ||
    text.includes('devis') ||
    text.includes('preventivo')
  ) {
    return t.askData
  }

  return t.fallback
}

function VirtualAssistant({ language = 'de' }) {
  const t = useMemo(() => getTexts(language), [language])

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([{ sender: 'assistant', text: t.welcome }])
    setInput('')
  }, [language, t.welcome])

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

  const openWhatsapp = (prefill) => {
    const text = encodeURIComponent(prefill)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  return (
    <>
      <button
        className="va-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t.assistant}
      >
        <span className="va-fab-icon">💬</span>
      </button>

      {isOpen && (
        <div className="va-panel">
          <div className="va-header">
            <div className="va-header-copy">
              <strong>Amaya Bern Services</strong>
              <p>{t.subtitle}</p>
            </div>

            <button
              className="va-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="va-quick-actions">
            <button onClick={() => handleSend(t.quick1)}>{t.quick1}</button>
            <button onClick={() => handleSend(t.quick2)}>{t.quick2}</button>
            <button onClick={() => handleSend(t.quick3)}>{t.quick3}</button>
            <button onClick={() => handleSend(t.quick4)}>{t.quick4}</button>
            <button onClick={() => handleSend(t.quick5)}>{t.quick5}</button>
            <button onClick={() => handleSend(t.quick6)}>{t.quick6}</button>
          </div>

          <div className="va-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`va-message ${msg.sender === 'user' ? 'user' : 'assistant'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="va-cta-row">
            <button
              className="va-budget"
              onClick={() => openWhatsapp(t.budgetPrefill)}
            >
              {t.budget}
            </button>

            <button
              className="va-whatsapp"
              onClick={() => openWhatsapp(t.whatsappPrefill)}
            >
              {t.whatsapp}
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
            <button onClick={() => handleSend()}>{t.send}</button>
          </div>
        </div>
      )}
    </>
  )
}

export default VirtualAssistant