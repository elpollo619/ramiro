import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const { language } = useLanguage()

  const serviceDetails = {
    'fensterreinigung': {
      de: {
        kicker: 'Dienstleistung',
        title: 'Fensterreinigung',
        intro:
          'Ich reinige Ihre Fenster, damit sie transparent und ohne Spuren bleiben. Ich arbeite sorgfältig und achte darauf, dass das Ergebnis wirklich sauber aussieht.',
        highlightLabel: 'Leistung',
        highlightTitle: 'Fensterreinigung',
        highlightText:
          'Saubere Fenster für mehr Licht, bessere Sicht und ein gepflegtes Erscheinungsbild.',
        whyTitle: 'Warum ist Fensterreinigung wichtig?',
        whyList: [
          'Saubere Fenster lassen mehr Licht in Ihre Räume.',
          'Fenster ohne Spuren wirken gepflegt und professionell.',
          'Sie verbessern das Gesamtbild von Haus, Wohnung oder Geschäft.',
        ],
        includedTitle: 'Was ist enthalten?',
        includedList: [
          'Innen und aussen',
          'Detaillierte Arbeit',
          'Professionelles Ergebnis',
        ],
        noteTitle: 'Persönlicher Hinweis',
        noteText:
          'Ich achte darauf, dass jedes Fenster wirklich sauber ist. Mehr Licht und ein besseres Bild für Ihren Raum.',
      },
      fr: {
        kicker: 'Service',
        title: 'Nettoyage de fenêtres',
        intro:
          'Je nettoie vos fenêtres pour qu’elles restent transparentes et sans traces. Je travaille avec soin pour que le résultat soit vraiment propre.',
        highlightLabel: 'Service',
        highlightTitle: 'Nettoyage de fenêtres',
        highlightText:
          'Des fenêtres propres pour plus de lumière, une meilleure vue et une image soignée.',
        whyTitle: 'Pourquoi le nettoyage de fenêtres est-il important ?',
        whyList: [
          'Des fenêtres propres laissent entrer plus de lumière.',
          'Des fenêtres sans traces donnent une impression soignée et professionnelle.',
          'Elles améliorent l’image générale de la maison, de l’appartement ou du commerce.',
        ],
        includedTitle: 'Qu’est-ce qui est inclus ?',
        includedList: ['Intérieur et extérieur', 'Travail détaillé', 'Résultat professionnel'],
        noteTitle: 'Remarque personnelle',
        noteText:
          'Je veille à ce que chaque fenêtre soit réellement propre. Plus de lumière et une meilleure image pour votre espace.',
      },
      it: {
        kicker: 'Servizio',
        title: 'Pulizia finestre',
        intro:
          'Pulisco le vostre finestre affinché restino trasparenti e senza aloni. Lavoro con cura per ottenere un risultato davvero pulito.',
        highlightLabel: 'Servizio',
        highlightTitle: 'Pulizia finestre',
        highlightText:
          'Finestre pulite per più luce, migliore visibilità e un aspetto curato.',
        whyTitle: 'Perché la pulizia delle finestre è importante?',
        whyList: [
          'Le finestre pulite lasciano entrare più luce.',
          'Finestre senza aloni danno un’impressione ordinata e professionale.',
          'Migliorano l’aspetto generale di casa, appartamento o attività.',
        ],
        includedTitle: 'Che cosa è incluso?',
        includedList: ['Interno ed esterno', 'Lavoro dettagliato', 'Risultato professionale'],
        noteTitle: 'Nota personale',
        noteText:
          'Faccio attenzione che ogni finestra sia davvero pulita. Più luce e un’immagine migliore per il vostro spazio.',
      },
      rm: {
        kicker: 'Servetsch',
        title: 'Nettegiar fanestras',
        intro:
          'Jau nettegiesch Vossas fanestras per ch’ellas restian transparentas e senza fastizs. Jau lavur cun quità per in resultat propi net.',
        highlightLabel: 'Servetsch',
        highlightTitle: 'Nettegiar fanestras',
        highlightText:
          'Fanestras netas per dapli glisch, meglra vista ed in aspect tgirà.',
        whyTitle: 'Pertge è nettegiar fanestras impurtant?',
        whyList: [
          'Fanestras netas laschan entrar dapli glisch.',
          'Fanestras senza fastizs paran tgiradas e professiunalas.',
          'Ellas megliereschan l’aspect general da chasa, abitaziun u affar.',
        ],
        includedTitle: 'Tge è cuntegnì?',
        includedList: ['Entaifer e dadora', 'Lavur detagliada', 'Resultat professiunal'],
        noteTitle: 'Remartga persunala',
        noteText:
          'Jau guard che mintga fanestra saja propi netta. Dapli glisch ed in meglier maletg per Voss spazi.',
      },
      es: {
        kicker: 'Servicio',
        title: 'Limpieza de ventanas',
        intro:
          'Limpio sus ventanas para que queden transparentes y sin marcas. Trabajo con cuidado para que el resultado se vea realmente limpio.',
        highlightLabel: 'Servicio',
        highlightTitle: 'Limpieza de ventanas',
        highlightText:
          'Ventanas limpias para más luz, mejor vista y una imagen cuidada.',
        whyTitle: '¿Por qué es importante la limpieza de ventanas?',
        whyList: [
          'Las ventanas limpias dejan entrar más luz.',
          'Las ventanas sin marcas se ven más cuidadas y profesionales.',
          'Mejoran la imagen general de la casa, vivienda o negocio.',
        ],
        includedTitle: '¿Qué incluye?',
        includedList: ['Interior y exterior', 'Trabajo detallado', 'Resultado profesional'],
        noteTitle: 'Nota personal',
        noteText:
          'Me fijo en que cada ventana quede realmente limpia. Más luz y una mejor imagen para su espacio.',
      },
      en: {
        kicker: 'Service',
        title: 'Window cleaning',
        intro:
          'I clean your windows so they stay clear and streak-free. I work carefully to make sure the final result looks truly clean.',
        highlightLabel: 'Service',
        highlightTitle: 'Window cleaning',
        highlightText:
          'Clean windows for more light, better views and a well-kept appearance.',
        whyTitle: 'Why is window cleaning important?',
        whyList: [
          'Clean windows let more light into your rooms.',
          'Streak-free windows look neat and professional.',
          'They improve the overall image of a house, flat or business.',
        ],
        includedTitle: 'What is included?',
        includedList: ['Inside and outside', 'Detailed work', 'Professional result'],
        noteTitle: 'Personal note',
        noteText:
          'I make sure every window is truly clean. More light and a better image for your space.',
      },
      pt: {
        kicker: 'Serviço',
        title: 'Limpeza de janelas',
        intro:
          'Limpo as suas janelas para que fiquem transparentes e sem marcas. Trabalho com cuidado para que o resultado fique realmente limpo.',
        highlightLabel: 'Serviço',
        highlightTitle: 'Limpeza de janelas',
        highlightText:
          'Janelas limpas para mais luz, melhor vista e uma imagem cuidada.',
        whyTitle: 'Porque é importante a limpeza de janelas?',
        whyList: [
          'Janelas limpas deixam entrar mais luz.',
          'Janelas sem marcas transmitem uma imagem cuidada e profissional.',
          'Melhoram a imagem geral da casa, apartamento ou negócio.',
        ],
        includedTitle: 'O que está incluído?',
        includedList: ['Interior e exterior', 'Trabalho detalhado', 'Resultado profissional'],
        noteTitle: 'Nota pessoal',
        noteText:
          'Tenho cuidado para que cada janela fique realmente limpa. Mais luz e uma melhor imagem para o seu espaço.',
      },
    },

    'allgemeine-reinigung': {
      de: {
        kicker: 'Dienstleistung',
        title: 'Allgemeine Reinigung',
        intro:
          'Ich kümmere mich persönlich um die Reinigung von Wohnungen, Häusern, Büros und Lokalen. Sauberkeit, Ordnung und Vertrauen stehen für mich an erster Stelle.',
        highlightLabel: 'Leistung',
        highlightTitle: 'Allgemeine Reinigung',
        highlightText:
          'Saubere Räume für mehr Wohlbefinden, Ordnung und einen guten Eindruck.',
        whyTitle: 'Warum ist allgemeine Reinigung wichtig?',
        whyList: [
          'Saubere Räume schaffen Wohlbefinden und Ordnung.',
          'Eine gepflegte Umgebung macht einen professionellen Eindruck.',
          'Regelmässige Reinigung hilft, den Wert von Räumen zu erhalten.',
        ],
        includedTitle: 'Was ist enthalten?',
        includedList: [
          'Wohnungen und Häuser',
          'Büros und Geschäftsräume',
          'Regelmässige oder einmalige Einsätze',
        ],
        noteTitle: 'Persönlicher Hinweis',
        noteText:
          'Ich arbeite zuverlässig und diskret, damit Ihr Raum sauber, angenehm und gepflegt bleibt.',
      },
      fr: {
        kicker: 'Service',
        title: 'Nettoyage général',
        intro:
          'Je m’occupe personnellement du nettoyage des appartements, maisons, bureaux et locaux. Propreté, ordre et confiance sont essentiels pour moi.',
        highlightLabel: 'Service',
        highlightTitle: 'Nettoyage général',
        highlightText:
          'Des espaces propres pour plus de bien-être, d’ordre et une bonne impression.',
        whyTitle: 'Pourquoi le nettoyage général est-il important ?',
        whyList: [
          'Des espaces propres apportent bien-être et ordre.',
          'Un environnement soigné donne une impression professionnelle.',
          'Un nettoyage régulier aide à préserver la valeur des espaces.',
        ],
        includedTitle: 'Qu’est-ce qui est inclus ?',
        includedList: [
          'Appartements et maisons',
          'Bureaux et locaux commerciaux',
          'Interventions régulières ou ponctuelles',
        ],
        noteTitle: 'Remarque personnelle',
        noteText:
          'Je travaille de manière fiable et discrète afin que votre espace reste propre, agréable et soigné.',
      },
      it: {
        kicker: 'Servizio',
        title: 'Pulizia generale',
        intro:
          'Mi occupo personalmente della pulizia di appartamenti, case, uffici e locali. Pulizia, ordine e fiducia sono per me fondamentali.',
        highlightLabel: 'Servizio',
        highlightTitle: 'Pulizia generale',
        highlightText:
          'Spazi puliti per maggiore benessere, ordine e una buona impressione.',
        whyTitle: 'Perché la pulizia generale è importante?',
        whyList: [
          'Gli spazi puliti creano benessere e ordine.',
          'Un ambiente curato trasmette un’impressione professionale.',
          'La pulizia regolare aiuta a mantenere il valore degli spazi.',
        ],
        includedTitle: 'Che cosa è incluso?',
        includedList: [
          'Appartamenti e case',
          'Uffici e locali commerciali',
          'Interventi regolari o singoli',
        ],
        noteTitle: 'Nota personale',
        noteText:
          'Lavoro in modo affidabile e discreto affinché il vostro spazio resti pulito, gradevole e curato.',
      },
      rm: {
        kicker: 'Servetsch',
        title: 'Nettegiar general',
        intro:
          'Jau ma occup persunalmain dal nettegiar d’abitaziuns, chasas, biro e locals. Netadad, urden e confidenza èn centralas per mai.',
        highlightLabel: 'Servetsch',
        highlightTitle: 'Nettegiar general',
        highlightText:
          'Spazis nets per dapli bainesser, urden ed in bun’impressiun.',
        whyTitle: 'Pertge è nettegiar general impurtant?',
        whyList: [
          'Spazis nets procuran per bainesser ed urden.',
          'In ambient tgirà fa ina impressiun professiunala.',
          'Nettegiar regular gida a mantegnair la valur dals spazis.',
        ],
        includedTitle: 'Tge è cuntegnì?',
        includedList: [
          'Abitaziuns e chasas',
          'Biro e locals commerzials',
          'Engaschis regulars u singuls',
        ],
        noteTitle: 'Remartga persunala',
        noteText:
          'Jau lavur en moda fidada e discreta per che Voss spazi restia net, agreabel e tgirà.',
      },
      es: {
        kicker: 'Servicio',
        title: 'Limpieza general',
        intro:
          'Me encargo personalmente de la limpieza de pisos, casas, oficinas y locales. La limpieza, el orden y la confianza son lo más importante para mí.',
        highlightLabel: 'Servicio',
        highlightTitle: 'Limpieza general',
        highlightText:
          'Espacios limpios para más bienestar, orden y una buena imagen.',
        whyTitle: '¿Por qué es importante la limpieza general?',
        whyList: [
          'Los espacios limpios crean bienestar y orden.',
          'Un entorno cuidado transmite una imagen profesional.',
          'La limpieza regular ayuda a mantener el valor de los espacios.',
        ],
        includedTitle: '¿Qué incluye?',
        includedList: [
          'Pisos y casas',
          'Oficinas y locales comerciales',
          'Servicios regulares o puntuales',
        ],
        noteTitle: 'Nota personal',
        noteText:
          'Trabajo de forma fiable y discreta para que su espacio se mantenga limpio, agradable y cuidado.',
      },
      en: {
        kicker: 'Service',
        title: 'General cleaning',
        intro:
          'I personally take care of cleaning flats, houses, offices and business spaces. Cleanliness, order and trust are my top priorities.',
        highlightLabel: 'Service',
        highlightTitle: 'General cleaning',
        highlightText:
          'Clean spaces for more comfort, order and a good impression.',
        whyTitle: 'Why is general cleaning important?',
        whyList: [
          'Clean spaces create comfort and order.',
          'A well-kept environment gives a professional impression.',
          'Regular cleaning helps maintain the value of a space.',
        ],
        includedTitle: 'What is included?',
        includedList: [
          'Flats and houses',
          'Offices and business spaces',
          'Regular or one-time visits',
        ],
        noteTitle: 'Personal note',
        noteText:
          'I work reliably and discreetly so your space stays clean, pleasant and well cared for.',
      },
      pt: {
        kicker: 'Serviço',
        title: 'Limpeza geral',
        intro:
          'Trato pessoalmente da limpeza de apartamentos, casas, escritórios e espaços comerciais. Limpeza, ordem e confiança são prioridades para mim.',
        highlightLabel: 'Serviço',
        highlightTitle: 'Limpeza geral',
        highlightText:
          'Espaços limpos para mais bem-estar, organização e uma boa imagem.',
        whyTitle: 'Porque é importante a limpeza geral?',
        whyList: [
          'Espaços limpos trazem bem-estar e organização.',
          'Um ambiente cuidado transmite uma imagem profissional.',
          'A limpeza regular ajuda a manter o valor dos espaços.',
        ],
        includedTitle: 'O que está incluído?',
        includedList: [
          'Apartamentos e casas',
          'Escritórios e espaços comerciais',
          'Serviços regulares ou pontuais',
        ],
        noteTitle: 'Nota pessoal',
        noteText:
          'Trabalho de forma fiável e discreta para que o seu espaço fique limpo, agradável e bem cuidado.',
      },
    },

    'treppenreinigung': {
      de: {
        kicker: 'Dienstleistung',
        title: 'Treppenreinigung',
        intro:
          'Ich reinige Treppenhäuser, Eingänge und gemeinschaftliche Bereiche sorgfältig und regelmässig. So bleibt alles sauber, sicher und gepflegt.',
        highlightLabel: 'Leistung',
        highlightTitle: 'Treppenreinigung',
        highlightText:
          'Saubere Eingänge und Treppen für einen guten ersten Eindruck.',
        whyTitle: 'Warum ist Treppenreinigung wichtig?',
        whyList: [
          'Treppenhäuser sind der erste Eindruck eines Gebäudes.',
          'Saubere Böden und Geländer wirken gepflegt und sicher.',
          'Regelmässige Reinigung sorgt für Ordnung in gemeinschaftlichen Bereichen.',
        ],
        includedTitle: 'Was ist enthalten?',
        includedList: [
          'Eingänge und Böden',
          'Geländer und Gemeinschaftsflächen',
          'Regelmässige oder punktuelle Reinigung',
        ],
        noteTitle: 'Persönlicher Hinweis',
        noteText:
          'Ich arbeite diskret und konstant, damit Bewohner und Besucher einen sauberen und angenehmen Eindruck haben.',
      },
      fr: {
        kicker: 'Service',
        title: 'Nettoyage d’escaliers',
        intro:
          'Je nettoie avec soin et régulièrement les cages d’escalier, entrées et espaces communs. Ainsi, tout reste propre, sûr et soigné.',
        highlightLabel: 'Service',
        highlightTitle: 'Nettoyage d’escaliers',
        highlightText:
          'Des entrées et escaliers propres pour une bonne première impression.',
        whyTitle: 'Pourquoi le nettoyage des escaliers est-il important ?',
        whyList: [
          'Les cages d’escalier sont la première impression d’un bâtiment.',
          'Des sols et rampes propres donnent une impression soignée et sûre.',
          'Un nettoyage régulier maintient l’ordre dans les espaces communs.',
        ],
        includedTitle: 'Qu’est-ce qui est inclus ?',
        includedList: [
          'Entrées et sols',
          'Rampes et espaces communs',
          'Nettoyage régulier ou ponctuel',
        ],
        noteTitle: 'Remarque personnelle',
        noteText:
          'Je travaille avec discrétion et constance pour que les habitants et visiteurs aient une impression propre et agréable.',
      },
      it: {
        kicker: 'Servizio',
        title: 'Pulizia scale',
        intro:
          'Pulisco con cura e regolarità vani scale, ingressi e spazi comuni. Così tutto resta pulito, sicuro e ben curato.',
        highlightLabel: 'Servizio',
        highlightTitle: 'Pulizia scale',
        highlightText:
          'Ingressi e scale puliti per una buona prima impressione.',
        whyTitle: 'Perché la pulizia delle scale è importante?',
        whyList: [
          'Le scale sono il primo impatto di un edificio.',
          'Pavimenti e corrimani puliti danno un’impressione curata e sicura.',
          'La pulizia regolare mantiene ordine negli spazi comuni.',
        ],
        includedTitle: 'Che cosa è incluso?',
        includedList: [
          'Ingressi e pavimenti',
          'Corrimani e spazi comuni',
          'Pulizia regolare o occasionale',
        ],
        noteTitle: 'Nota personale',
        noteText:
          'Lavoro con discrezione e continuità affinché abitanti e visitatori abbiano un’impressione pulita e piacevole.',
      },
      rm: {
        kicker: 'Servetsch',
        title: 'Nettegiar stgalas',
        intro:
          'Jau nettegiesch chasas da stgalas, entradas e spazis cuminaivels cun quità e regularitad. Uschia resta tut net, segir e tgirà.',
        highlightLabel: 'Servetsch',
        highlightTitle: 'Nettegiar stgalas',
        highlightText:
          'Entradas e stgalas netas per ina buna emprima impressiun.',
        whyTitle: 'Pertge è nettegiar stgalas impurtant?',
        whyList: [
          'Chasas da stgalas èn l’emprima impressiun d’in bajetg.',
          'Palantschieus e mauns curraintaziuns nets paran tgirads e segirs.',
          'Nettegiar regular procura per urden en spazis cuminaivels.',
        ],
        includedTitle: 'Tge è cuntegnì?',
        includedList: [
          'Entradas e palantschieus',
          'Mauns curraintaziuns e spazis cuminaivels',
          'Nettegiar regular u punctual',
        ],
        noteTitle: 'Remartga persunala',
        noteText:
          'Jau lavur discret e constant per che persunas che abitan u fan visita hajan ina buna impressiun netta ed agreabla.',
      },
      es: {
        kicker: 'Servicio',
        title: 'Limpieza de escaleras',
        intro:
          'Limpio escaleras, entradas y zonas comunes con cuidado y regularidad. Así todo se mantiene limpio, seguro y bien presentado.',
        highlightLabel: 'Servicio',
        highlightTitle: 'Limpieza de escaleras',
        highlightText:
          'Entradas y escaleras limpias para una buena primera impresión.',
        whyTitle: '¿Por qué es importante la limpieza de escaleras?',
        whyList: [
          'Las escaleras son la primera impresión de un edificio.',
          'Los suelos y barandillas limpias transmiten orden y seguridad.',
          'La limpieza regular mantiene el orden en las zonas comunes.',
        ],
        includedTitle: '¿Qué incluye?',
        includedList: [
          'Entradas y suelos',
          'Barandillas y zonas comunes',
          'Limpieza regular o puntual',
        ],
        noteTitle: 'Nota personal',
        noteText:
          'Trabajo de forma discreta y constante para que residentes y visitantes tengan una impresión limpia y agradable.',
      },
      en: {
        kicker: 'Service',
        title: 'Stair cleaning',
        intro:
          'I carefully and regularly clean staircases, entrances and shared areas. This keeps everything clean, safe and well maintained.',
        highlightLabel: 'Service',
        highlightTitle: 'Stair cleaning',
        highlightText:
          'Clean entrances and staircases for a strong first impression.',
        whyTitle: 'Why is stair cleaning important?',
        whyList: [
          'Staircases create the first impression of a building.',
          'Clean floors and railings look tidy and safe.',
          'Regular cleaning keeps shared areas in order.',
        ],
        includedTitle: 'What is included?',
        includedList: [
          'Entrances and floors',
          'Railings and shared spaces',
          'Regular or occasional cleaning',
        ],
        noteTitle: 'Personal note',
        noteText:
          'I work discreetly and consistently so residents and visitors have a clean and pleasant impression.',
      },
      pt: {
        kicker: 'Serviço',
        title: 'Limpeza de escadas',
        intro:
          'Faço a limpeza de escadas, entradas e zonas comuns com cuidado e regularidade. Assim tudo se mantém limpo, seguro e bem cuidado.',
        highlightLabel: 'Serviço',
        highlightTitle: 'Limpeza de escadas',
        highlightText:
          'Entradas e escadas limpas para uma boa primeira impressão.',
        whyTitle: 'Porque é importante a limpeza de escadas?',
        whyList: [
          'As escadas são a primeira impressão de um edifício.',
          'Pisos e corrimões limpos transmitem ordem e segurança.',
          'A limpeza regular mantém as zonas comuns organizadas.',
        ],
        includedTitle: 'O que está incluído?',
        includedList: [
          'Entradas e pisos',
          'Corrimões e zonas comuns',
          'Limpeza regular ou pontual',
        ],
        noteTitle: 'Nota pessoal',
        noteText:
          'Trabalho de forma discreta e constante para que moradores e visitantes tenham uma impressão limpa e agradável.',
      },
    },

    'gartenpflege': {
      de: {
        kicker: 'Dienstleistung',
        title: 'Gartenpflege',
        intro:
          'Ich helfe Ihnen, Ihren Garten oder Aussenbereich sauber, gepflegt und ordentlich zu halten. Ein schöner Garten macht das Zuhause angenehmer.',
        highlightLabel: 'Leistung',
        highlightTitle: 'Gartenpflege',
        highlightText:
          'Ordnung und Pflege für Ihren Garten und Ihre Aussenbereiche.',
        whyTitle: 'Warum ist Gartenpflege wichtig?',
        whyList: [
          'Ein gepflegter Garten wirkt einladend und angenehm.',
          'Regelmässige Pflege hilft, Ordnung und Sauberkeit zu erhalten.',
          'Aussenbereiche machen einen grossen Unterschied im Gesamtbild eines Hauses.',
        ],
        includedTitle: 'Was ist enthalten?',
        includedList: [
          'Allgemeine Gartenpflege',
          'Ordnung im Aussenbereich',
          'Regelmässige oder punktuelle Einsätze',
        ],
        noteTitle: 'Persönlicher Hinweis',
        noteText:
          'Ich arbeite ruhig und praktisch, damit Ihr Garten sauber und angenehm bleibt.',
      },
      fr: {
        kicker: 'Service',
        title: 'Entretien du jardin',
        intro:
          'Je vous aide à garder votre jardin ou espace extérieur propre, soigné et bien rangé. Un beau jardin rend la maison plus agréable.',
        highlightLabel: 'Service',
        highlightTitle: 'Entretien du jardin',
        highlightText:
          'Ordre et entretien pour votre jardin et vos espaces extérieurs.',
        whyTitle: 'Pourquoi l’entretien du jardin est-il important ?',
        whyList: [
          'Un jardin soigné donne une impression accueillante et agréable.',
          'Un entretien régulier aide à garder l’ordre et la propreté.',
          'Les espaces extérieurs changent beaucoup l’image générale d’une maison.',
        ],
        includedTitle: 'Qu’est-ce qui est inclus ?',
        includedList: [
          'Entretien général du jardin',
          'Ordre dans les espaces extérieurs',
          'Interventions régulières ou ponctuelles',
        ],
        noteTitle: 'Remarque personnelle',
        noteText:
          'Je travaille calmement et de manière pratique pour que votre jardin reste propre et agréable.',
      },
      it: {
        kicker: 'Servizio',
        title: 'Cura del giardino',
        intro:
          'Vi aiuto a mantenere il vostro giardino o spazio esterno pulito, curato e ordinato. Un bel giardino rende la casa più piacevole.',
        highlightLabel: 'Servizio',
        highlightTitle: 'Cura del giardino',
        highlightText:
          'Ordine e cura per il vostro giardino e gli spazi esterni.',
        whyTitle: 'Perché la cura del giardino è importante?',
        whyList: [
          'Un giardino curato dà un’impressione accogliente e piacevole.',
          'La manutenzione regolare aiuta a mantenere ordine e pulizia.',
          'Gli spazi esterni fanno una grande differenza nell’immagine generale della casa.',
        ],
        includedTitle: 'Che cosa è incluso?',
        includedList: [
          'Cura generale del giardino',
          'Ordine negli spazi esterni',
          'Interventi regolari o singoli',
        ],
        noteTitle: 'Nota personale',
        noteText:
          'Lavoro in modo tranquillo e pratico affinché il vostro giardino resti pulito e piacevole.',
      },
      rm: {
        kicker: 'Servetsch',
        title: 'Tgira dal curtin',
        intro:
          'Jau gid a mantegnair Voss curtin u spazi exteriur net, tgirà ed urdenà. In bel curtin renda la chasa pli agreabla.',
        highlightLabel: 'Servetsch',
        highlightTitle: 'Tgira dal curtin',
        highlightText:
          'Urden e tgira per Voss curtin e Voss spazis exteriurs.',
        whyTitle: 'Pertge è tgira dal curtin impurtanta?',
        whyList: [
          'In curtin tgirà para invitant ed agreabel.',
          'Tgira regulara gida a mantegnair urden e netadad.',
          'Spazis exteriurs fan ina gronda differenza per l’aspect general d’ina chasa.',
        ],
        includedTitle: 'Tge è cuntegnì?',
        includedList: [
          'Tgira generala dal curtin',
          'Urden en ils spazis exteriurs',
          'Engaschis regulars u singuls',
        ],
        noteTitle: 'Remartga persunala',
        noteText:
          'Jau lavur ruassaivel e pratic per che Voss curtin restia net ed agreabel.',
      },
      es: {
        kicker: 'Servicio',
        title: 'Jardinería',
        intro:
          'Le ayudo a mantener su jardín o espacio exterior limpio, cuidado y ordenado. Un jardín bonito hace que la casa sea más agradable.',
        highlightLabel: 'Servicio',
        highlightTitle: 'Jardinería',
        highlightText:
          'Orden y cuidado para su jardín y sus espacios exteriores.',
        whyTitle: '¿Por qué es importante la jardinería?',
        whyList: [
          'Un jardín cuidado transmite una imagen agradable y acogedora.',
          'El mantenimiento regular ayuda a conservar el orden y la limpieza.',
          'Los espacios exteriores cambian mucho la imagen general de una casa.',
        ],
        includedTitle: '¿Qué incluye?',
        includedList: [
          'Mantenimiento general del jardín',
          'Orden en el espacio exterior',
          'Servicios regulares o puntuales',
        ],
        noteTitle: 'Nota personal',
        noteText:
          'Trabajo de forma tranquila y práctica para que su jardín se mantenga limpio y agradable.',
      },
      en: {
        kicker: 'Service',
        title: 'Garden care',
        intro:
          'I help you keep your garden or outdoor space clean, neat and well maintained. A beautiful garden makes a home more pleasant.',
        highlightLabel: 'Service',
        highlightTitle: 'Garden care',
        highlightText:
          'Care and order for your garden and outdoor spaces.',
        whyTitle: 'Why is garden care important?',
        whyList: [
          'A well-kept garden feels welcoming and pleasant.',
          'Regular care helps maintain order and cleanliness.',
          'Outdoor areas make a big difference to the overall image of a home.',
        ],
        includedTitle: 'What is included?',
        includedList: [
          'General garden care',
          'Order in outdoor spaces',
          'Regular or one-time visits',
        ],
        noteTitle: 'Personal note',
        noteText:
          'I work calmly and practically so your garden stays clean and pleasant.',
      },
      pt: {
        kicker: 'Serviço',
        title: 'Jardinagem',
        intro:
          'Ajudo a manter o seu jardim ou espaço exterior limpo, cuidado e organizado. Um jardim bonito torna a casa mais agradável.',
        highlightLabel: 'Serviço',
        highlightTitle: 'Jardinagem',
        highlightText:
          'Ordem e cuidado para o seu jardim e os seus espaços exteriores.',
        whyTitle: 'Porque é importante a jardinagem?',
        whyList: [
          'Um jardim cuidado transmite uma imagem agradável e acolhedora.',
          'A manutenção regular ajuda a manter a organização e a limpeza.',
          'Os espaços exteriores fazem grande diferença na imagem geral da casa.',
        ],
        includedTitle: 'O que está incluído?',
        includedList: [
          'Manutenção geral do jardim',
          'Organização do espaço exterior',
          'Serviços regulares ou pontuais',
        ],
        noteTitle: 'Nota pessoal',
        noteText:
          'Trabalho de forma calma e prática para que o seu jardim fique limpo e agradável.',
      },
    },

    'umzugshilfe': {
      de: {
        kicker: 'Dienstleistung',
        title: 'Umzugshilfe',
        intro:
          'Ich unterstütze Sie praktisch bei Ihrem Umzug. So wird der Ablauf einfacher, ordentlicher und weniger stressig.',
        highlightLabel: 'Leistung',
        highlightTitle: 'Umzugshilfe',
        highlightText:
          'Praktische Unterstützung für einen ruhigeren und besser organisierten Umzug.',
        whyTitle: 'Warum ist Umzugshilfe wichtig?',
        whyList: [
          'Ein Umzug braucht Organisation und Unterstützung.',
          'Praktische Hilfe spart Zeit und reduziert Stress.',
          'Ein sauberer Ablauf sorgt für mehr Ruhe und Sicherheit.',
        ],
        includedTitle: 'Was ist enthalten?',
        includedList: [
          'Unterstützung beim Ablauf',
          'Praktische Hilfe beim Transport',
          'Zuverlässige und geordnete Arbeit',
        ],
        noteTitle: 'Persönlicher Hinweis',
        noteText:
          'Ich helfe ruhig und zuverlässig, damit Ihr Umzug so angenehm wie möglich wird.',
      },
      fr: {
        kicker: 'Service',
        title: 'Aide au déménagement',
        intro:
          'Je vous soutiens de manière pratique lors de votre déménagement. Cela rend l’organisation plus simple, plus ordonnée et moins stressante.',
        highlightLabel: 'Service',
        highlightTitle: 'Aide au déménagement',
        highlightText:
          'Une aide pratique pour un déménagement plus calme et mieux organisé.',
        whyTitle: 'Pourquoi l’aide au déménagement est-elle importante ?',
        whyList: [
          'Un déménagement demande de l’organisation et du soutien.',
          'Une aide pratique permet de gagner du temps et de réduire le stress.',
          'Un déroulement propre et structuré apporte plus de calme et de sécurité.',
        ],
        includedTitle: 'Qu’est-ce qui est inclus ?',
        includedList: [
          'Soutien dans l’organisation',
          'Aide pratique pour le transport',
          'Travail fiable et ordonné',
        ],
        noteTitle: 'Remarque personnelle',
        noteText:
          'J’aide avec calme et fiabilité afin que votre déménagement soit aussi agréable que possible.',
      },
      it: {
        kicker: 'Servizio',
        title: 'Aiuto trasloco',
        intro:
          'Vi sostengo in modo pratico durante il trasloco. Così il processo diventa più semplice, ordinato e meno stressante.',
        highlightLabel: 'Servizio',
        highlightTitle: 'Aiuto trasloco',
        highlightText:
          'Supporto pratico per un trasloco più tranquillo e meglio organizzato.',
        whyTitle: 'Perché l’aiuto al trasloco è importante?',
        whyList: [
          'Un trasloco richiede organizzazione e supporto.',
          'L’aiuto pratico fa risparmiare tempo e riduce lo stress.',
          'Un processo ordinato offre più tranquillità e sicurezza.',
        ],
        includedTitle: 'Che cosa è incluso?',
        includedList: [
          'Supporto nell’organizzazione',
          'Aiuto pratico nel trasporto',
          'Lavoro affidabile e ordinato',
        ],
        noteTitle: 'Nota personale',
        noteText:
          'Aiuto con calma e affidabilità affinché il vostro trasloco sia il più piacevole possibile.',
      },
      rm: {
        kicker: 'Servetsch',
        title: 'Agid tar midadas',
        intro:
          'Jau sustegn Vus praticamain durant la midada. Uschia daventa il process pli simpel, urdenà e main stressant.',
        highlightLabel: 'Servetsch',
        highlightTitle: 'Agid tar midadas',
        highlightText:
          'Sustegn pratic per ina midada pli ruassaivla e meglier organisada.',
        whyTitle: 'Pertge è agid tar midadas impurtant?',
        whyList: [
          'Ina midada dovra organisaziun e sustegn.',
          'Agid pratic spargna temp e reducescha stress.',
          'In process net ed urdenà procura per dapli ruaus e segirtad.',
        ],
        includedTitle: 'Tge è cuntegnì?',
        includedList: [
          'Sustegn tar l’organisaziun',
          'Agid pratic tar il transport',
          'Lavur fidada ed urdenada',
        ],
        noteTitle: 'Remartga persunala',
        noteText:
          'Jau gid ruassaivel e fidà per che Vossa midada daventia uschè agreabla sco pussaivel.',
      },
      es: {
        kicker: 'Servicio',
        title: 'Ayuda en mudanzas',
        intro:
          'Le apoyo de forma práctica durante su mudanza. Así el proceso resulta más sencillo, ordenado y con menos estrés.',
        highlightLabel: 'Servicio',
        highlightTitle: 'Ayuda en mudanzas',
        highlightText:
          'Apoyo práctico para una mudanza más tranquila y mejor organizada.',
        whyTitle: '¿Por qué es importante la ayuda en mudanzas?',
        whyList: [
          'Una mudanza necesita organización y apoyo.',
          'La ayuda práctica ahorra tiempo y reduce el estrés.',
          'Un proceso ordenado da más tranquilidad y seguridad.',
        ],
        includedTitle: '¿Qué incluye?',
        includedList: [
          'Apoyo en la organización',
          'Ayuda práctica en el transporte',
          'Trabajo fiable y ordenado',
        ],
        noteTitle: 'Nota personal',
        noteText:
          'Ayudo de forma tranquila y fiable para que su mudanza sea lo más agradable posible.',
      },
      en: {
        kicker: 'Service',
        title: 'Moving help',
        intro:
          'I provide practical support during your move. This makes the process easier, more organized and less stressful.',
        highlightLabel: 'Service',
        highlightTitle: 'Moving help',
        highlightText:
          'Practical support for a calmer and better organized move.',
        whyTitle: 'Why is moving help important?',
        whyList: [
          'A move requires organization and support.',
          'Practical help saves time and reduces stress.',
          'A clean, organized process brings more calm and safety.',
        ],
        includedTitle: 'What is included?',
        includedList: [
          'Support with organization',
          'Practical help with transport',
          'Reliable and orderly work',
        ],
        noteTitle: 'Personal note',
        noteText:
          'I help calmly and reliably so your move is as smooth and pleasant as possible.',
      },
      pt: {
        kicker: 'Serviço',
        title: 'Ajuda em mudanças',
        intro:
          'Dou apoio prático durante a sua mudança. Assim o processo torna-se mais simples, organizado e com menos stress.',
        highlightLabel: 'Serviço',
        highlightTitle: 'Ajuda em mudanças',
        highlightText:
          'Apoio prático para uma mudança mais calma e melhor organizada.',
        whyTitle: 'Porque é importante a ajuda em mudanças?',
        whyList: [
          'Uma mudança precisa de organização e apoio.',
          'A ajuda prática poupa tempo e reduz o stress.',
          'Um processo organizado traz mais tranquilidade e segurança.',
        ],
        includedTitle: 'O que está incluído?',
        includedList: [
          'Apoio na organização',
          'Ajuda prática no transporte',
          'Trabalho fiável e organizado',
        ],
        noteTitle: 'Nota pessoal',
        noteText:
          'Ajudo de forma calma e fiável para que a sua mudança seja o mais agradável possível.',
      },
    },

    'groessere-arbeiten': {
      de: {
        kicker: 'Dienstleistung',
        title: 'Grössere Arbeiten',
        intro:
          'Auch bei grösseren Aufträgen können Sie mich anfragen. Wenn nötig, organisiere ich ein zuverlässiges Team, damit die Arbeit gut und effizient ausgeführt wird.',
        highlightLabel: 'Leistung',
        highlightTitle: 'Grössere Arbeiten',
        highlightText:
          'Flexible Unterstützung für grössere Aufträge mit einem vertrauensvollen Team.',
        whyTitle: 'Warum ist das wichtig?',
        whyList: [
          'Auch grössere Arbeiten brauchen Vertrauen und gute Organisation.',
          'Ein eingespieltes Team sorgt für einen ruhigeren Ablauf.',
          'So können auch umfangreichere Projekte sauber und effizient erledigt werden.',
        ],
        includedTitle: 'Was ist möglich?',
        includedList: [
          'Unterstützung bei grösseren Projekten',
          'Organisation eines zuverlässigen Teams',
          'Persönliche Begleitung und direkter Kontakt',
        ],
        noteTitle: 'Persönlicher Hinweis',
        noteText:
          'Auch wenn ein Auftrag grösser ist, bleibe ich Ihr direkter Ansprechpartner und achte auf saubere Arbeit.',
      },
      fr: {
        kicker: 'Service',
        title: 'Travaux plus importants',
        intro:
          'Vous pouvez aussi me contacter pour des mandats plus importants. Si nécessaire, j’organise une équipe fiable pour que le travail soit bien réalisé et efficacement.',
        highlightLabel: 'Service',
        highlightTitle: 'Travaux plus importants',
        highlightText:
          'Une aide flexible pour des travaux plus grands avec une équipe de confiance.',
        whyTitle: 'Pourquoi est-ce important ?',
        whyList: [
          'Les travaux plus grands demandent aussi de la confiance et une bonne organisation.',
          'Une équipe bien coordonnée permet un déroulement plus calme.',
          'Ainsi, même des projets plus importants peuvent être réalisés proprement et efficacement.',
        ],
        includedTitle: 'Qu’est-ce qui est possible ?',
        includedList: [
          'Soutien pour des projets plus grands',
          'Organisation d’une équipe fiable',
          'Suivi personnel et contact direct',
        ],
        noteTitle: 'Remarque personnelle',
        noteText:
          'Même pour un mandat plus important, je reste votre interlocuteur direct et je veille à un travail propre.',
      },
      it: {
        kicker: 'Servizio',
        title: 'Lavori più grandi',
        intro:
          'Potete contattarmi anche per incarichi più grandi. Se necessario, organizzo un team affidabile affinché il lavoro venga svolto bene ed efficientemente.',
        highlightLabel: 'Servizio',
        highlightTitle: 'Lavori più grandi',
        highlightText:
          'Supporto flessibile per incarichi più grandi con un team di fiducia.',
        whyTitle: 'Perché è importante?',
        whyList: [
          'Anche i lavori più grandi richiedono fiducia e buona organizzazione.',
          'Un team ben coordinato garantisce uno svolgimento più tranquillo.',
          'Così anche i progetti più ampi possono essere svolti in modo pulito ed efficiente.',
        ],
        includedTitle: 'Che cosa è possibile?',
        includedList: [
          'Supporto per progetti più grandi',
          'Organizzazione di un team affidabile',
          'Accompagnamento personale e contatto diretto',
        ],
        noteTitle: 'Nota personale',
        noteText:
          'Anche se l’incarico è più grande, resto il vostro referente diretto e controllo che il lavoro sia pulito.',
      },
      rm: {
        kicker: 'Servetsch',
        title: 'Lavurs pli grondas',
        intro:
          'Era per incumbensas pli grondas pudais Vus ma contactar. Sche necessari, organis jau in team fidà per che la lavur vegnia fatga bain ed effizientamain.',
        highlightLabel: 'Servetsch',
        highlightTitle: 'Lavurs pli grondas',
        highlightText:
          'Sustegn flexibel per incumbensas pli grondas cun in team da confidenza.',
        whyTitle: 'Pertge è quai impurtant?',
        whyList: [
          'Era lavurs pli grondas dovran confidenza e buna organisaziun.',
          'In team bain coordinà procura per in process pli ruassaivel.',
          'Uschia pon era projects pli gronds vegnir exequids net ed effizientamain.',
        ],
        includedTitle: 'Tge è pussaivel?',
        includedList: [
          'Sustegn per projects pli gronds',
          'Organisaziun d’in team fidà',
          'Accumpagnament persunal e contact direct',
        ],
        noteTitle: 'Remartga persunala',
        noteText:
          'Era sche l’incumbensa è pli gronda, rest jau Voss partenari direct e guard per ina lavur netta.',
      },
      es: {
        kicker: 'Servicio',
        title: 'Trabajos más grandes',
        intro:
          'También puede consultarme para trabajos más grandes. Si hace falta, organizo un equipo de confianza para que el trabajo se realice bien y de forma eficiente.',
        highlightLabel: 'Servicio',
        highlightTitle: 'Trabajos más grandes',
        highlightText:
          'Apoyo flexible para trabajos grandes con un equipo de confianza.',
        whyTitle: '¿Por qué es importante?',
        whyList: [
          'Los trabajos grandes también necesitan confianza y buena organización.',
          'Un equipo bien coordinado permite un proceso más tranquilo.',
          'Así también los proyectos más amplios pueden realizarse de forma limpia y eficiente.',
        ],
        includedTitle: '¿Qué es posible?',
        includedList: [
          'Apoyo en proyectos más grandes',
          'Organización de un equipo de confianza',
          'Seguimiento personal y contacto directo',
        ],
        noteTitle: 'Nota personal',
        noteText:
          'Aunque el trabajo sea más grande, sigo siendo su contacto directo y me aseguro de que todo se haga bien.',
      },
      en: {
        kicker: 'Service',
        title: 'Larger jobs',
        intro:
          'You can also contact me for larger jobs. If needed, I can organize a reliable team so the work is done well and efficiently.',
        highlightLabel: 'Service',
        highlightTitle: 'Larger jobs',
        highlightText:
          'Flexible support for larger projects with a trusted team.',
        whyTitle: 'Why is this important?',
        whyList: [
          'Larger jobs also require trust and good organization.',
          'A coordinated team creates a calmer workflow.',
          'This allows even bigger projects to be completed cleanly and efficiently.',
        ],
        includedTitle: 'What is possible?',
        includedList: [
          'Support for larger projects',
          'Organization of a reliable team',
          'Personal guidance and direct contact',
        ],
        noteTitle: 'Personal note',
        noteText:
          'Even when a project is larger, I remain your direct contact and make sure the work is done properly.',
      },
      pt: {
        kicker: 'Serviço',
        title: 'Trabalhos maiores',
        intro:
          'Também me pode contactar para trabalhos maiores. Se for necessário, organizo uma equipa de confiança para que o trabalho seja feito de forma eficiente e com qualidade.',
        highlightLabel: 'Serviço',
        highlightTitle: 'Trabalhos maiores',
        highlightText:
          'Apoio flexível para trabalhos maiores com uma equipa de confiança.',
        whyTitle: 'Porque é importante?',
        whyList: [
          'Os trabalhos maiores também exigem confiança e boa organização.',
          'Uma equipa coordenada permite um processo mais tranquilo.',
          'Assim, até projetos maiores podem ser realizados de forma limpa e eficiente.',
        ],
        includedTitle: 'O que é possível?',
        includedList: [
          'Apoio em projetos maiores',
          'Organização de uma equipa de confiança',
          'Acompanhamento pessoal e contacto directo',
        ],
        noteTitle: 'Nota pessoal',
        noteText:
          'Mesmo que o trabalho seja maior, continuo a ser o seu contacto directo e garanto que tudo seja bem feito.',
      },
    },
  }

  const currentService =
    serviceDetails[serviceSlug]?.[language] || serviceDetails[serviceSlug]?.de

  if (!currentService) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="page-card">
            <h2>Service not found</h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="service-detail-modern">
      <div className="container">
        <div className="service-detail-hero">
          <div className="service-detail-copy">
            <span className="modern-kicker">{currentService.kicker}</span>
            <h1>{currentService.title}</h1>
            <p>{currentService.intro}</p>

            <div className="service-detail-actions">
              <Link to="/kontakt" className="modern-primary-button">
                {language === 'fr'
                  ? 'Demander maintenant'
                  : language === 'it'
                    ? 'Richiedi ora'
                    : language === 'rm'
                      ? 'Dumandar ussa'
                      : language === 'es'
                        ? 'Solicitar ahora'
                        : language === 'en'
                          ? 'Request now'
                          : language === 'pt'
                            ? 'Pedir agora'
                            : 'Jetzt anfragen'}
              </Link>

              <Link to="/dienstleistungen" className="modern-secondary-button">
                {language === 'fr'
                  ? 'Tous les services'
                  : language === 'it'
                    ? 'Tutti i servizi'
                    : language === 'rm'
                      ? 'Tut ils servetschs'
                      : language === 'es'
                        ? 'Todos los servicios'
                        : language === 'en'
                          ? 'All services'
                          : language === 'pt'
                            ? 'Todos os serviços'
                            : 'Alle Dienstleistungen'}
              </Link>
            </div>
          </div>

          <div className="service-detail-side">
            <div className="service-highlight-card">
              <span className="service-highlight-label">
                {currentService.highlightLabel}
              </span>
              <h3>{currentService.highlightTitle}</h3>
              <p>{currentService.highlightText}</p>
            </div>
          </div>
        </div>

        <div className="service-detail-grid">
          <div className="service-detail-card">
            <h2>{currentService.whyTitle}</h2>
            <ul className="modern-list">
              {currentService.whyList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-detail-card">
            <h2>{currentService.includedTitle}</h2>
            <ul className="modern-list">
              {currentService.includedList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-detail-wide-card">
          <h2>{currentService.noteTitle}</h2>
          <p>{currentService.noteText}</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailPage