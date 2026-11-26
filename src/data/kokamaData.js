// Base de datos cultural y lingüística de Ikua (Pueblo Kukama-Kukamiria)
// Loreto, Amazonía Peruana
// Vocabulario y expresiones verificadas exclusivamente en:
// Vallejos Yopán, R. & Amías Murayari, R. (2015). Diccionario Kukama-Kukamiria * Castellano. AIDESEP / ISEPL / FORMABIAP.

export const languageStats = [
  { label: "Autoidentificados", value: "10,762", detail: "Censo Nacional 2017 — INEI · Perú" },
  { label: "En comunidades", value: "37,053", detail: "Estimado BDPI · Ministerio de Cultura del Perú" },
  { label: "Hablantes nativos", value: "1,185", detail: "Aprendieron Kukama como lengua materna en la infancia · Censo 2017 — INEI" },
  { label: "Estado lingüístico", value: "Seriamente en peligro", detail: "Clasificación oficial del Ministerio de Educación del Perú (MINEDU)" }
];

export const categoriesData = [
  {
    id: "numeros",
    title: "Wepe – Chunka",
    subtitle: "Los Números en Kukama-Kukamiria",
    icon: "🔢",
    badge: "1 al 10",
    description: "Aprende la numeración tradicional Kukama-Kukamiria registrada en el diccionario oficial (wepe, mukuika, mutsapɨrɨka, iruaka...).",
    color: "#2d6a4f",
    bgPattern: "jungle",
    count: "10 números"
  },
  {
    id: "alfabeto",
    title: "Kumitsa & Grafías",
    subtitle: "Alfabeto FORMABIAP y Saludos",
    icon: "🔤",
    badge: "Fonética y Saludos",
    description: "Conoce las 17 grafías oficiales (a, ch, e, i, ɨ, j, k, m, n, p, r, sh, t, ts, u, w, y) y los saludos cotidianos del diccionario.",
    color: "#8c5e3c",
    bgPattern: "earth",
    count: "16 términos"
  },
  {
    id: "animales",
    title: "Fauna Amazónica",
    subtitle: "Animales de la Selva y el Río",
    icon: "🐆",
    badge: "Biodiversidad",
    description: "Descubre los nombres auténticos del otorongo (aɨmanta), el bufeo (ipirawira), el paiche (iwatsu), la taricaya y aves amazónicas.",
    color: "#1b4332",
    bgPattern: "fauna",
    count: "8 animales"
  },
  {
    id: "naturaleza",
    title: "Ɨwɨrati & Uni",
    subtitle: "Naturaleza, Río y Comunidad",
    icon: "🌿",
    badge: "Cosmovisión",
    description: "Palabras esenciales del agua (uni), el río (parana), la canoa (ɨara), la casa (uka), el sol (kuarachi), la luna (yatsɨ) y los sabios (ikuan).",
    color: "#a06a42",
    bgPattern: "flora",
    count: "12 vocablos"
  }
];

export const numbersList = [
  { number: 1, kokama: "Wepe", phonetic: "[we-pe]", spanish: "Uno", usage: "Wepe ɨara (Una canoa)", note: "Se pronuncia igual que en la escritura práctica FORMABIAP" },
  { number: 2, kokama: "Mukuika", phonetic: "[mu-kwi-ka]", spanish: "Dos", usage: "Mukuika ritama (Dos comunidades)", note: "Forma estándar en el Diccionario Kukama-Kukamiria" },
  { number: 3, kokama: "Mutsapɨrɨka", phonetic: "[mu-tsa-pɨ-rɨ-ka]", spanish: "Tres", usage: "Mutsapɨrɨka arara (Tres guacamayos)", note: "Incluye la vocal central alta 'ɨ'" },
  { number: 4, kokama: "Iruaka", phonetic: "[i-ru-a-ka]", spanish: "Cuatro", usage: "Iruaka uka (Cuatro casas)", note: "Término numérico tradicional kukama" },
  { number: 5, kokama: "Pichka", phonetic: "[pich-ka]", spanish: "Cinco", usage: "Pichka kuarachi (Cinco días / soles)", note: "Registrado en el diccionario oficial (p. 169)" },
  { number: 6, kokama: "Tsukta", phonetic: "[tsuk-ta]", spanish: "Seis", usage: "Tsukta tarikaya (Seis taricayas)", note: "Inicia con el dígrafo 'ts' propio del alfabeto kukama" },
  { number: 7, kokama: "Kantsi", phonetic: "[kan-tsi]", spanish: "Siete", usage: "Kantsi yatsɨ (Siete lunas / meses)", note: "Registrado en el diccionario oficial" },
  { number: 8, kokama: "Putsa", phonetic: "[pu-tsa]", spanish: "Ocho", usage: "Putsa iwatsu (Ocho paiches)", note: "Registrado en el diccionario oficial" },
  { number: 9, kokama: "Itskun", phonetic: "[its-kun]", spanish: "Nueve", usage: "Itskun yapukita (Nueve remos)", note: "Registrado en el diccionario oficial" },
  { number: 10, kokama: "Chunka", phonetic: "[chun-ka]", spanish: "Diez", usage: "Chunka awa (Diez personas)", note: "También: mukuika chunka (20), wepe pacha (100), wepe waranka (1000)" }
];

export const alphabetList = [
  {
    letter: "A a",
    kokama: "Arara",
    meaning: "Guacamayo",
    phonetic: "[a-ra-ra]",
    category: "Vocal oral",
    example: "Arara pɨtani (guacamayo rojo) / Arara tsenepuka (guacamayo azul)"
  },
  {
    letter: "Ch ch",
    kokama: "Chunka",
    meaning: "Diez",
    phonetic: "[chun-ka]",
    category: "Consonante africada",
    example: "Mukuika chunka (Veinte)"
  },
  {
    letter: "E e",
    kokama: "Era kuemataka",
    meaning: "Buen día (saludo en cualquier momento del día)",
    phonetic: "[e-ra kwe-ma-ta-ka]",
    category: "Saludo frecuente",
    example: "Era na kuema (Buenos días) · Respuesta: Era ta kuema (H) / Era tsa kuema (M)"
  },
  {
    letter: "I i",
    kokama: "Ikua",
    meaning: "Saber, conocer, ser hábil",
    phonetic: "[i-kwa]",
    category: "Vocal oral",
    example: "Etse tseta ikua kumitsa kukama (Yo quiero aprender a hablar kukama)"
  },
  {
    letter: "Ɨ ɨ",
    kokama: "Ɨara",
    meaning: "Canoa",
    phonetic: "[ɨ-a-ra]",
    category: "Sexta vocal amazónica",
    example: "La 'ɨ' es una vocal central alta característica del Kukama-Kukamiria"
  },
  {
    letter: "J j",
    kokama: "Ajan",
    meaning: "Este / esta (demostrativo femenino)",
    phonetic: "[a-han]",
    category: "Consonante (uso específico)",
    example: "La grafía 'j' aparece en voces como 'ajan' y 'ajaminu' (en DM: ikian)"
  },
  {
    letter: "K k",
    kokama: "Kumitsa",
    meaning: "Hablar / lengua, idioma",
    phonetic: "[ku-mi-tsa]",
    category: "Consonante oclusiva",
    example: "Kukama aitsemekatun ini kumitsa (El kukama es nuestra verdadera lengua)"
  },
  {
    letter: "M m",
    kokama: "Maniawatipa na yuti",
    meaning: "¿Cómo estás?",
    phonetic: "[ma-nya-wa-ti-pa na yu-ti]",
    category: "Saludo frecuente",
    example: "Pregunta tradicional de saludo en la vida cotidiana"
  },
  {
    letter: "N n",
    kokama: "Ni mania",
    meaning: "Ahí bien (estoy bien)",
    phonetic: "[ni ma-nya]",
    category: "Respuesta de saludo",
    example: "Respuesta directa a 'Maniawatipa na yuti'"
  },
  {
    letter: "P p",
    kokama: "Parana",
    meaning: "Río",
    phonetic: "[pa-ra-na]",
    category: "Geografía fluvial",
    example: "Parana nuan (Río Amazonas)"
  },
  {
    letter: "R r",
    kokama: "Ritama",
    meaning: "Comunidad, pueblo",
    phonetic: "[ri-ta-ma]",
    category: "Vida comunitaria",
    example: "Las comunidades ribereñas de Loreto"
  },
  {
    letter: "Ts ts",
    kokama: "Tsaniuri",
    meaning: "Bienvenido (ven, pasa adelante)",
    phonetic: "[tsa-nyu-ri]",
    category: "Expresión de bienvenida",
    example: "Saludo hospitalario al recibir visitas en la casa (uka)"
  },
  {
    letter: "U u",
    kokama: "Uni",
    meaning: "Agua",
    phonetic: "[u-ni]",
    category: "Vocal oral",
    example: "Uni mama (Madre del agua / yacumama)"
  },
  {
    letter: "Y y",
    kokama: "Yutsurpaki",
    meaning: "Gracias",
    phonetic: "[yu-tsur-pa-ki]",
    category: "Expresión de gratitud",
    example: "También se usa 'Ainan ta' / 'Ainan etse' (gracias, hasta ahí nomás)"
  },
  {
    letter: "Frase",
    kokama: "Era na karuka",
    meaning: "Buenas tardes",
    phonetic: "[e-ra na ka-ru-ka]",
    category: "Saludo vespertino",
    example: "Respuesta: Era ta karuka (habla masculina) / Era tsa karuka (habla femenina)"
  },
  {
    letter: "Frase",
    kokama: "Ini tseta ikua kuatiaraka kukamapu",
    meaning: "Queremos aprender a escribir en kukama",
    phonetic: "[i-ni tse-ta i-kwa kwa-tya-ra-ka ku-ka-ma-pu]",
    category: "Expresión educativa",
    example: "Frase registrada en el Diccionario Kukama-Kukamiria (p. 108)"
  }
];

export const animalsList = [
  {
    id: "aimanta",
    kokama: "Aɨmanta / Yawara parawa",
    phonetic: "[a-ɨ-man-ta]",
    spanish: "Otorongo / Tigre (Jaguar)",
    scientific: "Panthera onca",
    category: "Felino amazónico",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
    description: "El felino más imponente de la Amazonía peruana, registrado en el diccionario como 'aɨmanta' y 'yawara parawa'.",
    lore: "En los relatos tradicionales del monte ('ɨwɨrati'), representa la fuerza y el respeto por la selva.",
    curiosity: "Nada con agilidad en los ríos amazónicos y se desplaza tanto en tierra como en orillas."
  },
  {
    id: "ipirawira",
    kokama: "Ipirawira pɨtani",
    phonetic: "[i-pi-ra-wi-ra pɨ-ta-ni]",
    spanish: "Bufeo Colorado (Delfín Rosado)",
    scientific: "Inia geoffrensis",
    category: "Fauna fluvial",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description: "El delfín de agua dulce de las cochas ('ɨpatsu') y caños ('tɨmatsa'). El diccionario distingue 'ipirawira pɨtani' (colorado) e 'ipirawira tsawe' (cenizo).",
    lore: "Figura central de los relatos fluviales amazónicos ('ɨmɨntsara') sobre los seres encantados del agua ('karuara').",
    curiosity: "Posee vértebras cervicales libres, lo que le permite girar la cabeza entre las raíces inundadas."
  },
  {
    id: "arara",
    kokama: "Arara",
    phonetic: "[a-ra-ra]",
    spanish: "Guacamayo",
    scientific: "Ara macao",
    category: "Ave amazónica",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    description: "Ave emblemática del dosel amazónico. El diccionario registra 'arara pɨtani' (guacamayo rojo) y 'arara tsenepuka' (guacamayo azul).",
    lore: "Vuela en parejas sobre los aguajales ('mɨrɨti') y las copas de los árboles altos ('ɨwɨra').",
    curiosity: "Su pico posee gran fuerza para abrir semillas y frutos duros de palmeras amazónicas."
  },
  {
    id: "iwatsu",
    kokama: "Iwatsu",
    phonetic: "[i-wa-tsu]",
    spanish: "Paiche (Gigante del Río)",
    scientific: "Arapaima gigas",
    category: "Pez de agua dulce",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "El pez de escamas más grande de los ríos y cochas amazónicas, nombrado 'iwatsu' en Kukama-Kukamiria.",
    lore: "Alimento fundamental y símbolo de abundancia en las cochas ('ɨpatsu') de Loreto.",
    curiosity: "Necesita salir a la superficie del agua ('uni') para respirar aire cada 15 a 20 minutos."
  },
  {
    id: "tarikaya",
    kokama: "Tarikaya / Puka",
    phonetic: "[ta-ri-ka-ya / pu-ka]",
    spanish: "Taricaya / Charapa",
    scientific: "Podocnemis unifilis / expansa",
    category: "Reptil fluvial",
    image: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
    description: "Tortugas acuáticas de las playas del Marañón y Ucayali ('tarikaya' y 'puka'; la tortuga terrestre motelo es 'yawati').",
    lore: "Las comunidades Kukama participan activamente en el cuidado y conservación de sus playas de anidación.",
    curiosity: "Sus nidadas en las playas de arena requieren protección frente a crecidas tempranas del río."
  },
  {
    id: "tapira",
    kokama: "Tapira",
    phonetic: "[ta-pi-ra]",
    spanish: "Sachavaca / Tapir",
    scientific: "Tapirus terrestris",
    category: "Mamífero del monte",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    description: "El mayor mamífero terrestre de la selva amazónica peruana, gran nadador y dispersor de semillas.",
    lore: "Habita en lo profundo del monte ('ɨwɨrati') y cruza con destreza quebradas y caños.",
    curiosity: "Su labio superior flexible funciona como una pequeña trompa para tomar hojas y frutos."
  },
  {
    id: "arawata",
    kokama: "Arawata",
    phonetic: "[a-ra-wa-ta]",
    spanish: "Mono Choro",
    scientific: "Lagothrix lagothricha",
    category: "Primate amazónico",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
    description: "Primate de cola prensil que habita las copas de los árboles. El diccionario también registra 'akɨkɨ' (mono coto) y 'kuwata' (maquisapa).",
    lore: "Acompaña el paisaje sonoro del bosque alto en las mañanas de la selva.",
    curiosity: "Su cola prensil puede sostener todo el peso de su cuerpo mientras se alimenta en las ramas."
  },
  {
    id: "piyakui",
    kokama: "Piyakui / Aratsari",
    phonetic: "[pi-ya-kwi / a-ra-tsa-ri]",
    spanish: "Tucán / Pinsha",
    scientific: "Ramphastos tucanus",
    category: "Ave frugívora",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
    description: "Reconocido por su pico grande y liviano. En el diccionario figuran 'piyakui' (tucán) y 'aratsari' (tucán pequeño / pinsha).",
    lore: "Dispersa semillas de frutos silvestres por toda la espesura del bosque.",
    curiosity: "Su pico contiene una red de vasos sanguíneos que ayuda a regular su temperatura corporal."
  }
];

export const natureList = [
  { kokama: "Uni", phonetic: "[u-ni]", spanish: "Agua", category: "Elemento vital", desc: "Base de la vida y del mundo fluvial del pueblo Kukama-Kukamiria." },
  { kokama: "Parana", phonetic: "[pa-ra-na]", spanish: "Río", category: "Geografía", desc: "Los grandes ríos amazónicos; 'parana nuan' designa al río Amazonas." },
  { kokama: "Ɨwɨrati", phonetic: "[ɨ-wɨ-ra-ti]", spanish: "Selva / Monte", category: "Territorio", desc: "El gran bosque que provee alimento, madera, plantas y refugio." },
  { kokama: "Kuarachi", phonetic: "[kwa-ra-chi]", spanish: "Sol / Cielo", category: "Astro", desc: "Luz y calor del día que acompaña las faenas de la chacra ('ku') y la pesca." },
  { kokama: "Yatsɨ", phonetic: "[ya-tsɨ]", spanish: "Luna / Mes", category: "Astro nocturno", desc: "Marca el paso de los meses y los ciclos de la naturaleza." },
  { kokama: "Uka", phonetic: "[u-ka]", spanish: "Casa", category: "Hogar", desc: "Espacio familiar donde se transmite la lengua y la memoria." },
  { kokama: "Ɨara", phonetic: "[ɨ-a-ra]", spanish: "Canoa", category: "Navegación", desc: "Embarcación tradicional impulsada con el remo ('yapukita')." },
  { kokama: "Mɨrɨti", phonetic: "[mɨ-rɨ-ti]", spanish: "Aguaje", category: "Flora amazónica", desc: "Palmera emblemática y fruto fundamental de la dieta amazónica." },
  { kokama: "Ɨwɨra", phonetic: "[ɨ-wɨ-ra]", spanish: "Árbol / Palo", category: "Flora", desc: "Ser del monte que sostiene la vida del bosque amazónico." },
  { kokama: "Tsumi", phonetic: "[tsu-mi]", spanish: "Curandero / Chamán", category: "Sabiduría", desc: "Especialista tradicional en curaciones y conocimiento espiritual." },
  { kokama: "Yutsurpaki", phonetic: "[yu-tsur-pa-ki]", spanish: "Gracias", category: "Gratitud", desc: "Palabra de agradecimiento registrada en el diccionario oficial." },
  { kokama: "Ikuan", phonetic: "[i-kwan]", spanish: "Sabio", category: "Conocimiento", desc: "Persona portadora de conocimiento ('ikua' = saber, conocer)." }
];

export const storiesData = [
  {
    id: "bufeo-colorado",
    title: "El Bufeo Colorado y los Seres del Agua",
    kokamaTitle: "Ipirawira pɨtani · Karuara",
    badge: "Relato Fluvial (Ɨmɨntsara)",
    river: "Río Marañón / Loreto",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    summary: "En los relatos tradicionales ('ɨmɨntsara'), el bufeo colorado ('ipirawira pɨtani') y los 'karuara' habitan las profundidades del río y las cochas.",
    kokamaExcerpt: "Ipirawira pɨtani · Parana · Ɨpatsu · Karuara · Ipira mama",
    spanishExcerpt: "Vocablos del relato en el diccionario: ipirawira pɨtani (bufeo colorado), parana (río), ɨpatsu (cocha), karuara (yacuruna), ipira mama (sirena).",
    fullStoryKokama: `Vocabulario auténtico del relato (Diccionario Kukama-Kukamiria):

• Ɨmɨntsara: cuento, relato tradicional.
• Ipirawira pɨtani: bufeo colorado (ipirawira tsawe = bufeo cenizo).
• Parana: río · Ɨpatsu: cocha · Tɨmatsa: caño, quebrada.
• Karuara: yacuruna, ser mítico que habita en las profundidades del agua.
• Ipira mama: sirena.
• Ɨara: canoa · Yapukita: remo.

Frase del diccionario:
"Kukama aitsemekatun ini kumitsa."
(El kukama es nuestra verdadera lengua.)`,
    fullStorySpanish: `En las curvas del río Marañón ('parana'), en las cochas ('ɨpatsu') y quebradas ('tɨmatsa'), habita el bufeo colorado ('ipirawira pɨtani').
La tradición oral ('ɨmɨntsara') de los abuelos Kukama-Kukamiria enseña que bajo las aguas existen seres espirituales como los 'karuara' (yacurunas) y la 'ipira mama' (sirena).
Quien navega en su canoa ('ɨara') con su remo ('yapukita') debe guardar respeto por el agua ('uni') y por la vida que habita en ella.`,
    moral: "Respetar las aguas ('uni'), las cochas ('ɨpatsu') y a los seres que habitan el río ('parana')."
  },
  {
    id: "yacumama",
    title: "La Yacumama, Madre de las Aguas",
    kokamaTitle: "Parana mama / Uni mama",
    badge: "Guardián de las Cochas",
    river: "Río Ucayali / Pacaya Samiria",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    summary: "La gran madre protectora de los ríos ('parana mama') y del agua ('uni mama'), ligada a la anaconda ('ɨwɨrati tsukuri') y al cuidado de los peces.",
    kokamaExcerpt: "Parana mama · Uni mama · Ɨwɨrati tsukuri · Iwatsu · Tarikaya",
    spanishExcerpt: "Vocablos del relato: parana mama / uni mama (yacumama), ɨwɨrati tsukuri (anaconda), iwatsu (paiche), tarikaya (taricaya).",
    fullStoryKokama: `Vocabulario auténtico del relato (Diccionario Kukama-Kukamiria):

• Parana mama / Uni mama: yacumama, madre del río y del agua.
• Tsukuri: boa constructora · Ɨwɨrati tsukuri: anaconda.
• Iwatsu: paiche · Kirimata: boquichico · Tsuri: doncella.
• Tarikaya: taricaya · Puka: charapa.
• Uni: agua · Parana: río.

Frase del diccionario:
"Etse tseta ikua kumitsa kukama."
(Yo quiero aprender a hablar kukama.)`,
    fullStorySpanish: `En las cochas profundas de la selva baja de Loreto descansa la 'parana mama' o 'uni mama' (la Yacumama, madre del agua).
En el imaginario amazónico, se asocia con la gran boa del agua o anaconda ('ɨwɨrati tsukuri') que protege el equilibrio de peces como el paiche ('iwatsu'), el boquichico ('kirimata'), la doncella ('tsuri') y las tortugas como la 'tarikaya' y la 'puka'.
Los mayores enseñan que debemos tomar del río solo lo necesario y cuidar la limpieza del agua ('uni').`,
    moral: "Cuidar los ríos y cochas tomando de la naturaleza solo lo necesario con respeto."
  },
  {
    id: "selva-viva",
    title: "El Monte y la Voz del Ayaymama",
    kokamaTitle: "Ɨwɨrati · Uruta",
    badge: "Tradición del Bosque",
    river: "Cuencas de Nauta y Requena",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    summary: "El canto nocturno del ave 'uruta' (ayaymama) en la espesura del monte ('ɨwɨrati') y la relación espiritual con los árboles ('ɨwɨra').",
    kokamaExcerpt: "Ɨwɨrati · Ɨwɨra · Uruta · Aɨmanta · Tapira",
    spanishExcerpt: "Vocablos del relato: ɨwɨrati (selva/monte), ɨwɨra (árbol), uruta (ayaymama), aɨmanta (otorongo), tapira (sachavaca).",
    fullStoryKokama: `Vocabulario auténtico del relato (Diccionario Kukama-Kukamiria):

• Ɨwɨrati: selva, monte · Ɨwɨra: árbol, palo.
• Uruta: ayaymama (ave nocturna amazónica).
• Aɨmanta: otorongo · Tapira: sachavaca.
• Amana: lluvia · Ɨwɨtu: viento, aire.
• Yatsɨ: luna · Tsetsu: estrella.

Frase del diccionario:
"Ini tseta ikua kuatiaraka kukamapu."
(Queremos aprender a escribir en kukama.)`,
    fullStorySpanish: `Cuando cae la noche bajo la luna ('yatsɨ') y las estrellas ('tsetsu'), resuena en lo alto de los árboles ('ɨwɨra') el canto melancólico del 'uruta' (ayaymama).
El monte ('ɨwɨrati') es hogar del otorongo ('aɨmanta'), la sachavaca ('tapira') y muchas aves que anuncian la lluvia ('amana') y el viento ('ɨwɨtu').
Escuchar sus sonidos es recordar los relatos ('ɨmɨntsara') transmitidos por las abuelas y los abuelos en cada comunidad ('ritama').`,
    moral: "El respeto por la selva ('ɨwɨrati') y por cada ser vivo que la habita."
  },
  {
    id: "sabiduria-comunidad",
    title: "La Minga y la Palabra de los Sabios",
    kokamaTitle: "Wayuri · Ikuan · Ritama",
    badge: "Vida Comunitaria",
    river: "Loreto, Perú",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    summary: "El trabajo colectivo ('wayuri') en la chacra ('ku') y la transmisión de la lengua por los sabios ('ikuan') en la comunidad ('ritama').",
    kokamaExcerpt: "Wayuri · Ikuan · Ritama · Ku · Kaitsuma · Yutsurpaki",
    spanishExcerpt: "Vocablos del relato: wayuri (minga), ikuan (sabio), ritama (comunidad), ku (chacra), kaitsuma (masato), yutsurpaki (gracias).",
    fullStoryKokama: `Vocabulario auténtico del relato (Diccionario Kukama-Kukamiria):

• Wayuri: minga, trabajo colectivo comunitario.
• Ikuan: sabio · Tsumi: curandero, chamán.
• Ritama: comunidad, pueblo · Awa: persona.
• Ku: chacra · Yawiri: yuca · Awati: maíz.
• Kaitsuma: masato · Yutsurpaki: gracias.

Saludo tradicional:
"Era kuemataka! Maniawatipa na yuti?" — "Ni mania."
(¡Buen día! ¿Cómo estás? — Ahí bien.)`,
    fullStorySpanish: `En cada comunidad ('ritama'), las familias se reúnen en 'wayuri' (minga) para limpiar la chacra ('ku'), sembrar yuca ('yawiri') y maíz ('awati'), y compartir el masato ('kaitsuma') al terminar la jornada.
En estos encuentros, los sabios ('ikuan') conversan en Kukama-Kukamiria para que los jóvenes escuchen los saludos ('Era kuemataka', 'Tsaniuri') y mantengan viva la lengua materna.
Al despedirse con gratitud, dicen 'Yutsurpaki' (gracias).`,
    moral: "La fuerza de la comunidad ('ritama') y la transmisión viva de la lengua entre generaciones."
  }
];

export const gamesQuizData = [
  {
    id: 1,
    question: "¿Qué significa el verbo 'ikua' en el Diccionario Kukama-Kukamiria?",
    options: [
      "Saber, conocer o ser hábil",
      "Río caudaloso",
      "Canoa veloz",
      "Árbol de aguaje"
    ],
    correct: 0,
    explanation: "En el diccionario oficial, 'ikua' significa 'saber, conocer / ser hábil', y 'ikuan' significa 'sabio'."
  },
  {
    id: 2,
    question: "¿Cómo se dice el número 'UNO' en Kukama-Kukamiria?",
    options: ["Mukuika", "Wepe", "Mutsapɨrɨka", "Chunka"],
    correct: 1,
    explanation: "'Wepe' es el número uno en Kukama-Kukamiria."
  },
  {
    id: 3,
    question: "¿Qué animal es 'Aɨmanta' (o 'Yawara parawa') en el diccionario?",
    options: ["El Otorongo / Tigre", "El Guacamayo", "El Bufeo Colorado", "La Nutria"],
    correct: 0,
    explanation: "'Aɨmanta' y 'yawara parawa' designan al otorongo o jaguar amazónico."
  },
  {
    id: 4,
    question: "¿Qué significa el saludo 'Era kuemataka' en Kukama-Kukamiria?",
    options: ["Gracias", "Buen día (en cualquier momento del día)", "Ahí bien", "Casa"],
    correct: 1,
    explanation: "'Era kuemataka' es el saludo para 'buen día', usado en cualquier momento del día."
  },
  {
    id: 5,
    question: "¿Cuántas grafías tiene el alfabeto oficial Kukama-Kukamiria (FORMABIAP)?",
    options: ["12 grafías", "17 grafías", "24 grafías", "27 grafías"],
    correct: 1,
    explanation: "El alfabeto oficial consta de 17 grafías: a, ch, e, i, ɨ, j, k, m, n, p, r, sh, t, ts, u, w, y."
  },
  {
    id: 6,
    question: "¿Cómo se dice el número 'DIEZ' en Kukama-Kukamiria?",
    options: ["Pichka", "Chunka", "Kantsi", "Iruaka"],
    correct: 1,
    explanation: "'Chunka' significa diez. Por ejemplo, 'mukuika chunka' es veinte."
  },
  {
    id: 7,
    question: "¿Cómo se llama el Bufeo Colorado en Kukama-Kukamiria?",
    options: ["Ipirawira pɨtani", "Iwatsu", "Tarikaya", "Tapira"],
    correct: 0,
    explanation: "'Ipirawira' es bufeo y 'pɨtani' es colorado/rojo: 'ipirawira pɨtani'."
  },
  {
    id: 8,
    question: "¿Qué palabra se usa para decir 'Gracias' en Kukama-Kukamiria?",
    options: ["Tsaniuri", "Yutsurpaki", "Uni", "Parana"],
    correct: 1,
    explanation: "'Yutsurpaki' significa 'gracias' (también se usa 'ainan ta' / 'ainan etse')."
  }
];

export const cultureInfo = [
  {
    id: "historia",
    title: "La Gente del Agua y la Canoa (Ɨara)",
    tag: "Origen Histórico",
    icon: "🛶",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    content: "Los Kukama-Kukamiria son descendientes de grandes navegantes de la familia lingüística Tupí-Guaraní asentados en las llanuras aluviales de Loreto, a lo largo de los ríos ('parana') Marañón, Ucayali, Huallaga, Tigre y Amazonas ('parana nuan').",
    highlights: [
      "Navegación tradicional en canoa ('ɨara') con remo ('yapukita')",
      "Conocimiento profundo de cochas ('ɨpatsu') y quebradas ('tɨmatsa')",
      "Comunidades ('ritama') en Nauta, Requena y la cuenca del Pacaya Samiria"
    ]
  },
  {
    id: "cosmovision",
    title: "El Agua, los Karuara y la Selva (Ɨwɨrati)",
    tag: "Cosmovisión Fluvial",
    icon: "🌊",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    content: "En la tradición oral ('ɨmɨntsara') Kukama-Kukamiria, el agua ('uni') y el río ('parana') están habitados por seres espirituales como los 'karuara' (yacurunas), la 'ipira mama' (sirena) y la 'parana mama' o 'uni mama' (yacumama).",
    highlights: [
      "El agua ('uni') y los árboles ('ɨwɨra') requieren respeto comunitario",
      "Sabiduría medicinal guiada por los curanderos ('tsumi') y sabios ('ikuan')",
      "Relatos orales ('ɨmɨntsara') que transmiten normas de cuidado ambiental"
    ]
  },
  {
    id: "lengua",
    title: "Habla Femenina (DF) y Masculina (DM)",
    tag: "Rasgo Lingüístico Único",
    icon: "🗣️",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    content: "Una característica fascinante del Kukama-Kukamiria documentada en el diccionario es la distinción entre el discurso femenino (DF) y el masculino (DM) en pronombres y demostrativos.",
    highlights: [
      "Primera persona 'yo': 'tsa / etse' (DF) frente a 'ta' (DM)",
      "Respuestas de saludo: 'Era tsa kuema' (mujer) frente a 'Era ta kuema' (hombre)",
      "Demostrativo 'este': 'ajan' (DF) frente a 'ikian' (DM)"
    ]
  },
  {
    id: "revitalizacion",
    title: "El Renacer de la Lengua: Juventud y Sabios",
    tag: "Resistencia Cultural",
    icon: "📻",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    content: "Hoy en día, escuelas de Educación Intercultural Bilingüe (EIB), proyectos como FORMABIAP y AIDESEP, radios comunitarias como Radio Ucamara en Nauta y herramientas digitales como Ikua impulsan la enseñanza del Kukama-Kukamiria.",
    highlights: [
      "Uso de materiales oficiales como el Diccionario Kukama-Kukamiria * Castellano",
      "Talleres intergeneracionales entre sabios ('ikuan') y jóvenes",
      "Trabajo colectivo ('wayuri') para preservar la memoria oral"
    ]
  }
];

// --- DATOS PARA LOS MINIJUEGOS ---

// 1. Minijuego: Navegante del Marañón (Atrapa el Vocablo)
export const riverMissionData = [
  {
    id: 1,
    mission: "¡La corriente se agita! Atrapa al PEZ GIGANTE de las cochas:",
    targetHint: "Pez de escamas colosal que respira aire",
    correctKokama: "Iwatsu",
    correctSpanish: "Paiche",
    icon: "🐟",
    options: [
      { text: "Iwatsu", icon: "🐟", isCorrect: true },
      { text: "Aɨmanta", icon: "🐆", isCorrect: false },
      { text: "Arara", icon: "🦜", isCorrect: false },
      { text: "Tarikaya", icon: "🐢", isCorrect: false }
    ]
  },
  {
    id: 2,
    mission: "¡Aparecen huellas en la orilla! Atrapa al OTORONGO del monte:",
    targetHint: "El gran felino amazónico (aɨmanta)",
    correctKokama: "Aɨmanta",
    correctSpanish: "Otorongo / Tigre",
    icon: "🐆",
    options: [
      { text: "Ipirawira", icon: "🐬", isCorrect: false },
      { text: "Aɨmanta", icon: "🐆", isCorrect: true },
      { text: "Tapira", icon: "🦛", isCorrect: false },
      { text: "Arawata", icon: "🐒", isCorrect: false }
    ]
  },
  {
    id: 3,
    mission: "¡Cuenta las canoas del puerto! Atrapa el número TRES:",
    targetHint: "Incluye la vocal central 'ɨ' dos veces",
    correctKokama: "Mutsapɨrɨka",
    correctSpanish: "Tres",
    icon: "3️⃣",
    options: [
      { text: "Wepe", icon: "1️⃣", isCorrect: false },
      { text: "Mukuika", icon: "2️⃣", isCorrect: false },
      { text: "Mutsapɨrɨka", icon: "3️⃣", isCorrect: true },
      { text: "Iruaka", icon: "4️⃣", isCorrect: false }
    ]
  },
  {
    id: 4,
    mission: "¡Un remolino en el río! Atrapa al BUFEO COLORADO:",
    targetHint: "Delfín rosado de los ríos y cochas",
    correctKokama: "Ipirawira pɨtani",
    correctSpanish: "Bufeo Colorado",
    icon: "🐬",
    options: [
      { text: "Piyakui", icon: "🦤", isCorrect: false },
      { text: "Ipirawira pɨtani", icon: "🐬", isCorrect: true },
      { text: "Iwatsu", icon: "🐟", isCorrect: false },
      { text: "Tapira", icon: "🦛", isCorrect: false }
    ]
  },
  {
    id: 5,
    mission: "¡El inicio de la cuenta! Atrapa el número UNO:",
    targetHint: "Primera unidad numérica del diccionario",
    correctKokama: "Wepe",
    correctSpanish: "Uno",
    icon: "1️⃣",
    options: [
      { text: "Wepe", icon: "1️⃣", isCorrect: true },
      { text: "Pichka", icon: "5️⃣", isCorrect: false },
      { text: "Tsukta", icon: "6️⃣", isCorrect: false },
      { text: "Kantsi", icon: "7️⃣", isCorrect: false }
    ]
  },
  {
    id: 6,
    mission: "¡Nada con calma en el remanso! Atrapa a la TARICAYA:",
    targetHint: "Tortuga acuática de las playas del río",
    correctKokama: "Tarikaya",
    correctSpanish: "Taricaya",
    icon: "🐢",
    options: [
      { text: "Arara", icon: "🦜", isCorrect: false },
      { text: "Arawata", icon: "🐒", isCorrect: false },
      { text: "Tarikaya", icon: "🐢", isCorrect: true },
      { text: "Aɨmanta", icon: "🐆", isCorrect: false }
    ]
  },
  {
    id: 7,
    mission: "¡Cuenta completa! Atrapa el número DIEZ:",
    targetHint: "Base decimal del sistema numérico",
    correctKokama: "Chunka",
    correctSpanish: "Diez",
    icon: "🔟",
    options: [
      { text: "Pichka", icon: "5️⃣", isCorrect: false },
      { text: "Chunka", icon: "🔟", isCorrect: true },
      { text: "Itskun", icon: "9️⃣", isCorrect: false },
      { text: "Putsa", icon: "8️⃣", isCorrect: false }
    ]
  }
];

// 2. Minijuego: Armador Sagrado (Constructor de Frases del Diccionario)
export const sentencePuzzleData = [
  {
    id: 1,
    spanish: "Yo quiero aprender a hablar kukama",
    words: ["Etse", "tseta", "ikua", "kumitsa", "kukama"],
    phonetic: "[et-se tse-ta i-kwa ku-mi-tsa ku-ka-ma]",
    lore: "Oración tomada del Diccionario Kukama-Kukamiria (p. 214).",
    hint: "Comienza con el pronombre femenino 'Etse' (yo)"
  },
  {
    id: 2,
    spanish: "¿Cómo estás?",
    words: ["Maniawatipa", "na", "yuti"],
    phonetic: "[ma-nya-wa-ti-pa na yu-ti]",
    lore: "Saludo frecuente del diccionario (p. 12), al que se responde 'Ni mania'.",
    hint: "Inicia con la palabra interrogativa 'Maniawatipa'"
  },
  {
    id: 3,
    spanish: "El kukama es nuestra verdadera lengua",
    words: ["Kukama", "aitsemekatun", "ini", "kumitsa"],
    phonetic: "[ku-ka-ma ai-tse-me-ka-tun i-ni ku-mi-tsa]",
    lore: "Oración registrada en el Diccionario Kukama-Kukamiria (p. 22).",
    hint: "Empieza con el nombre del pueblo: 'Kukama'"
  },
  {
    id: 4,
    spanish: "Queremos aprender a escribir en kukama",
    words: ["Ini", "tseta", "ikua", "kuatiaraka", "kukamapu"],
    phonetic: "[i-ni tse-ta i-kwa kwa-tya-ra-ka ku-ka-ma-pu]",
    lore: "Oración registrada en el Diccionario Kukama-Kukamiria (p. 108).",
    hint: "Comienza con 'Ini' (nosotros inclusivo)"
  },
  {
    id: 5,
    spanish: "Yo te amo",
    words: ["Ta", "tsachita", "ene"],
    phonetic: "[ta tsa-chi-ta e-ne]",
    lore: "Oración registrada en el Diccionario Kukama-Kukamiria (p. 201), usando 'ta' (yo, habla masculina).",
    hint: "Empieza con el pronombre 'Ta'"
  }
];

// 3. Minijuego: El Oído de la Selva (Detective Acústico)
export const soundMysteryData = [
  {
    id: 1,
    audioWord: "Aɨmanta",
    phonetic: "[a-ɨ-man-ta]",
    question: "¿A qué animal del diccionario corresponde esta palabra?",
    options: [
      { id: "aimanta", name: "Otorongo / Tigre", icon: "🐆", isCorrect: true, lore: "¡Correcto! 'Aɨmanta' (y 'yawara parawa') es el otorongo." },
      { id: "ipirawira", name: "Bufeo Colorado", icon: "🐬", isCorrect: false },
      { id: "arara", name: "Guacamayo", icon: "🦜", isCorrect: false },
      { id: "tapira", name: "Sachavaca / Tapir", icon: "🦛", isCorrect: false }
    ]
  },
  {
    id: 2,
    audioWord: "Ipirawira",
    phonetic: "[i-pi-ra-wi-ra]",
    question: "¿Qué habitante de las cochas acabas de escuchar?",
    options: [
      { id: "iwatsu", name: "Paiche (Iwatsu)", icon: "🐟", isCorrect: false },
      { id: "ipirawira", name: "Bufeo (Ipirawira)", icon: "🐬", isCorrect: true, lore: "¡Acertaste! 'Ipirawira' es el bufeo; 'ipirawira pɨtani' es el bufeo colorado." },
      { id: "tarikaya", name: "Taricaya (Tarikaya)", icon: "🐢", isCorrect: false },
      { id: "arawata", name: "Mono Choro (Arawata)", icon: "🐒", isCorrect: false }
    ]
  },
  {
    id: 3,
    audioWord: "Wepe",
    phonetic: "[we-pe]",
    question: "¿Qué número del Kukama-Kukamiria ha sonado?",
    options: [
      { id: "mutsapirika", name: "Número Tres (Mutsapɨrɨka)", icon: "3️⃣", isCorrect: false },
      { id: "mukuika", name: "Número Dos (Mukuika)", icon: "2️⃣", isCorrect: false },
      { id: "wepe", name: "Número Uno (Wepe)", icon: "1️⃣", isCorrect: true, lore: "¡Exacto! 'Wepe' significa uno en el diccionario oficial." },
      { id: "iruaka", name: "Número Cuatro (Iruaka)", icon: "4️⃣", isCorrect: false }
    ]
  },
  {
    id: 4,
    audioWord: "Iwatsu",
    phonetic: "[i-wa-tsu]",
    question: "¿Quién es el pez gigante de las cochas?",
    options: [
      { id: "iwatsu", name: "Paiche (Iwatsu)", icon: "🐟", isCorrect: true, lore: "¡Excelente! 'Iwatsu' es el nombre del paiche en Kukama-Kukamiria." },
      { id: "tarikaya", name: "Taricaya (Tarikaya)", icon: "🐢", isCorrect: false },
      { id: "aimanta", name: "Otorongo (Aɨmanta)", icon: "🐆", isCorrect: false },
      { id: "piyakui", name: "Tucán (Piyakui)", icon: "🦤", isCorrect: false }
    ]
  },
  {
    id: 5,
    audioWord: "Yutsurpaki",
    phonetic: "[yu-tsur-pa-ki]",
    question: "¿Qué expresión de cortesía acabas de escuchar?",
    options: [
      { id: "yutsurpaki", name: "Gracias (Yutsurpaki)", icon: "🙏", isCorrect: true, lore: "¡Bien hecho! 'Yutsurpaki' significa gracias en Kukama-Kukamiria." },
      { id: "tsaniuri", name: "Bienvenido (Tsaniuri)", icon: "👋", isCorrect: false },
      { id: "uni", name: "Agua (Uni)", icon: "💧", isCorrect: false },
      { id: "uka", name: "Casa (Uka)", icon: "🛖", isCorrect: false }
    ]
  }
];
