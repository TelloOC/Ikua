// Base de datos cultural y lingüística de Ikua (Pueblo Kukama-Kukamiria)
// Loreto, Amazonía Peruana

export const languageStats = [
  { label: "Familia Lingüística", value: "Tupí-Guaraní", detail: "Una de las familias más extendidas de Sudamérica" },
  { label: "Ubicación Principal", value: "Loreto, Perú", detail: "Ríos Marañón, Huallaga, Ucayali y Nanay" },
  { label: "Población Étnica", value: "+30,000", detail: "Comunidades ribereñas e interculturales" },
  { label: "Reserva Emblemática", value: "Pacaya Samiria", detail: "La 'Selva de los Espejos', territorio ancestral" }
];

export const categoriesData = [
  {
    id: "numeros",
    title: "Papachika",
    subtitle: "Los Números en Kokama",
    icon: "🔢",
    badge: "1 al 10",
    description: "Aprende el sistema numérico ancestral Kokama basado en las manos y los ciclos de la naturaleza.",
    color: "#2d6a4f",
    bgPattern: "jungle",
    count: "10 términos"
  },
  {
    id: "alfabeto",
    title: "Ikuashawa",
    subtitle: "Alfabeto y Frases Clave",
    icon: "🔤",
    badge: "Fonética y Saludos",
    description: "Conoce las 5 vocales, la singular vocal 'ɨ', consonantes y expresiones de cortesía y encuentro.",
    color: "#8c5e3c",
    bgPattern: "earth",
    count: "16 términos"
  },
  {
    id: "animales",
    title: "Miyari",
    subtitle: "Fauna de la Selva Peruana",
    icon: "🐆",
    badge: "Biodiversidad",
    description: "Descubre los nombres ancestrales del jaguar, el delfín rosado, la boa madre, el paiche y las aves sagradas.",
    color: "#1b4332",
    bgPattern: "fauna",
    count: "10 animales"
  },
  {
    id: "naturaleza",
    title: "Ka'a & Teta",
    subtitle: "Ríos, Plantas y Comunidad",
    icon: "🌿",
    badge: "Cosmovisión",
    description: "Palabras del agua, la canoa, la maloca, el sol, la luna y las plantas medicinales que curan el espíritu.",
    color: "#a06a42",
    bgPattern: "flora",
    count: "12 vocablos"
  }
];

export const numbersList = [
  { number: 1, kokama: "Wepɨ", phonetic: "[güép-uh]", spanish: "Uno", usage: "Wepɨ ipuri (Un pez)", note: "Se pronuncia con la sexta vocal 'ɨ' gutural" },
  { number: 2, kokama: "Mukuika", phonetic: "[mu-kwi-ka]", spanish: "Dos", usage: "Mukuika miyari (Dos animales)", note: "Base dual muy común en la cultura fluvial" },
  { number: 3, kokama: "Motsapɨr", phonetic: "[mot-sa-puhr]", spanish: "Tres", usage: "Motsapɨr arara (Tres guacamayos)", note: "Término clásico tupí" },
  { number: 4, kokama: "Iruaka", phonetic: "[i-ru-a-ka]", spanish: "Cuatro", usage: "Iruaka yapana (Cuatro canoas)", note: "Número de los cuatro rumbos del río" },
  { number: 5, kokama: "Wepɨ Po", phonetic: "[güe-püh po]", spanish: "Cinco", usage: "Wepɨ po kuarachy (Cinco soles)", note: "Literalmente 'una mano completa' (po = mano)" },
  { number: 6, kokama: "Sokta", phonetic: "[sok-ta]", spanish: "Seis", usage: "Sokta takuara (Seis casas)", note: "También 'wepɨ ipo yupuni' (pasando una mano)" },
  { number: 7, kokama: "Kanchis", phonetic: "[kan-chis]", spanish: "Siete", usage: "Kanchis yasy (Siete lunas)", note: "Adoptado por contacto interétnico regional" },
  { number: 8, kokama: "Pusak", phonetic: "[pu-sak]", spanish: "Ocho", usage: "Pusak warakusu (Ocho paiches)", note: "Uso extendido en comunidades bilingües" },
  { number: 9, kokama: "Iskon", phonetic: "[is-kon]", spanish: "Nueve", usage: "Iskon yawar (Nueve jaguares)", note: "Representa la plenitud antes del ciclo" },
  { number: 10, kokama: "Mukuika Po", phonetic: "[mu-kwi-ka po]", spanish: "Diez", usage: "Mukuika po churi (Diez niños)", note: "Literalmente 'dos manos completas'" }
];

export const alphabetList = [
  {
    letter: "A a",
    kokama: "Arara",
    meaning: "Guacamayo rojo y azul",
    phonetic: "[a-ra-ra]",
    category: "Vocal oral",
    example: "Arara weve ka'a ari (El guacamayo vuela sobre el bosque)"
  },
  {
    letter: "E e",
    kokama: "Etepe",
    meaning: "Hola / Saludo de paz y respeto",
    phonetic: "[e-te-pe]",
    category: "Vocal oral",
    example: "Etepe erua (Hola, hermano / amigo)"
  },
  {
    letter: "I i",
    kokama: "Ikua",
    meaning: "Saber, conocer, sabiduría",
    phonetic: "[i-kwa]",
    category: "Vocal oral",
    example: "Yaki ta ikua kukama (Nosotros aprendemos la lengua kukama)"
  },
  {
    letter: "ɨ ɨ",
    kokama: "Wepɨ",
    meaning: "Uno (vocal central alta cerrada)",
    phonetic: "[güép-uh]",
    category: "Vocal amazónica especial",
    example: "Es la sexta vocal distintiva de la familia Tupí-Guaraní"
  },
  {
    letter: "U u",
    kokama: "Uni",
    meaning: "Agua / Río vital",
    phonetic: "[u-ni]",
    category: "Vocal oral",
    example: "Uni tsupi katu (El agua es buena y pura)"
  },
  {
    letter: "K k",
    kokama: "Kukama",
    meaning: "Pueblo de la chacra y del agua",
    phonetic: "[ku-ka-ma]",
    category: "Consonante oclusiva",
    example: "Kukama i purukara (El pueblo Kukama canta y resiste)"
  },
  {
    letter: "M m",
    kokama: "Mai katu",
    meaning: "¿Cómo estás? / Saludo fraterno",
    phonetic: "[mai ka-tu]",
    category: "Frase de cortesía",
    example: "Mai katu erua? — Katu ti (¿Cómo estás hermano? — Muy bien)"
  },
  {
    letter: "P p",
    kokama: "Parana",
    meaning: "Río grande / Caudaloso",
    phonetic: "[pa-ra-na]",
    category: "Geografía sagrada",
    example: "Parana Marañón (El gran río Marañón)"
  },
  {
    letter: "T ts",
    kokama: "Tsupi",
    meaning: "Verdadero, auténtico, justo",
    phonetic: "[tsu-pi]",
    category: "Valor ético",
    example: "Kukama tsupi (Verdadero corazón kukama)"
  },
  {
    letter: "Y y",
    kokama: "Yawar",
    meaning: "Jaguar / Otorongo",
    phonetic: "[ya-gwar]",
    category: "Fauna sagrada",
    example: "Yawar pua ka'a pe (El jaguar camina en el bosque)"
  },
  {
    letter: "Frase",
    kokama: "Irapatse",
    meaning: "Muchas gracias / Gratitud",
    phonetic: "[i-ra-pat-se]",
    category: "Expresión cotidiana",
    example: "Irapatse tupan (Gracias a la vida y a la naturaleza)"
  },
  {
    letter: "Frase",
    kokama: "Katu ti",
    meaning: "Estoy bien / Todo está en calma",
    phonetic: "[ka-tu ti]",
    category: "Expresión cotidiana",
    example: "Respuesta al saludo 'Mai katu'"
  }
];

export const animalsList = [
  {
    id: "yawar",
    kokama: "Yawar",
    phonetic: "[Ya-wár]",
    spanish: "Otorongo / Jaguar",
    scientific: "Panthera onca",
    category: "Felino sagrado",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
    description: "El felino más imponente de la Amazonía peruana. En la cosmovisión Kokama, representa la fuerza y el espíritu protector de los árboles antiguos.",
    lore: "Los sabios abuelos cuentan que el jaguar no ataca a quien respeta los caminos ancestrales de la selva.",
    curiosity: "Nada con agilidad en los ríos amazónicos y caza tanto en tierra como en orillas."
  },
  {
    id: "wapuri",
    kokama: "Wapuri / Ipurapari",
    phonetic: "[Wa-pú-ri]",
    spanish: "Bufeo Colorado (Delfín Rosado)",
    scientific: "Inia geoffrensis",
    category: "Espíritu fluvial",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description: "El habitante mítico de las cochas y caños de Pacaya Samiria. Puede medir hasta 2.5 metros y posee un tono rosáceo característico.",
    lore: "Se transforma en un caballero vestido de blanco con sombrero de paja en las noches de fiesta a orillas del Marañón.",
    curiosity: "Posee vértebras cervicales libres, lo que le permite mover la cabeza en 90 grados entre raíces inundadas."
  },
  {
    id: "arara",
    kokama: "Arara",
    phonetic: "[A-ra-ra]",
    spanish: "Guacamayo Rojo",
    scientific: "Ara macao",
    category: "Ave del dosel",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    description: "El mensajero multicolor del cielo amazónico. Vuela en parejas inseparables sobre las copas de los aguajales.",
    lore: "Sus plumas rojas, azules y amarillas eran utilizadas en coronas ceremoniales de líderes espirituales.",
    curiosity: "Tiene una fuerza en el pico capaz de romper las cáscaras más duras de nueces y castañas amazónicas."
  },
  {
    id: "warakusu",
    kokama: "Warakusu / Piraruku",
    phonetic: "[Wa-ra-kú-su]",
    spanish: "Paiche (Gigante del Río)",
    scientific: "Arapaima gigas",
    category: "Pez de agua dulce",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "El pez de escamas más grande del río Amazonas. Puede superar los 3 metros y 200 kilogramos de peso.",
    lore: "Los pescadores Kokama le cantan respetuosamente antes de lanzar sus redes para pedir abundancia sin depredar.",
    curiosity: "Necesita salir a la superficie a respirar aire cada 15 a 20 minutos con un resoplido inconfundible."
  },
  {
    id: "yawati",
    kokama: "Yawatï",
    phonetic: "[Ya-wa-túh]",
    spanish: "Charapa / Taricaya",
    scientific: "Podocnemis expansa",
    category: "Reptil fluvial",
    image: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
    description: "Tortuga acuática emblemática de las playas de arena del río Ucayali y Marañón.",
    lore: "Símbolo de sabiduría calmada y paciencia para la crianza y el cuidado de las aguas tranquilas.",
    curiosity: "Las comunidades Kukama lideran planes de conservación de nidadas en playas artificiales para protegerlas."
  },
  {
    id: "tapira",
    kokama: "Tapira",
    phonetic: "[Ta-pí-ra]",
    spanish: "Sachavaca / Tapir",
    scientific: "Tapirus terrestris",
    category: "Mamífero de la espesura",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    description: "El mayor mamífero terrestre de la selva peruana, gran nadador y dispersor vital de semillas de árboles gigantes.",
    lore: "En la mitología amazónica, la sachavaca abrió los primeros senderos transitables a través del monte cerrado.",
    curiosity: "Su trompa flexible es usada como un dedo adicional para tomar hojas tiernas y frutos caídos."
  },
  {
    id: "kai",
    kokama: "Ka'i",
    phonetic: "[Ka-í]",
    spanish: "Mono Choro / Macaco",
    scientific: "Lagothrix lagothricha",
    category: "Primate acrobático",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
    description: "Primate lanudo de cola prensil que habita los árboles altos y alerta a la selva con sus silbidos.",
    lore: "Se le considera el juguetón compañero de los caminantes solitarios y avisador de tormentas.",
    curiosity: "Su cola prensil tiene tanta fuerza que puede sostener el peso de todo su cuerpo mientras se alimenta."
  },
  {
    id: "tukana",
    kokama: "Tukana",
    phonetic: "[Tu-ká-na]",
    spanish: "Tucán de Pecho Blanco",
    scientific: "Ramphastos tucanus",
    category: "Ave frugívora",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
    description: "Reconocido por su enorme pico liviano y esponjoso con colores vibrantes.",
    lore: "Su canto al amanecer indica que el sol 'Kuarachy' bendecirá la siembra y la pesca del día.",
    curiosity: "Su pico contiene una red de vasos sanguíneos que le ayuda a regular su temperatura corporal en el calor tropical."
  }
];

export const natureList = [
  { kokama: "Uni", phonetic: "[U-ni]", spanish: "Agua / Río", category: "Elemento vital", desc: "El origen de toda la vida y cosmovisión de los Kokama." },
  { kokama: "Ka'a", phonetic: "[Ka-á]", spanish: "Selva / Monte", category: "Hogar", desc: "El gran bosque que provee medicina, alimento y cobijo." },
  { kokama: "Kuarachy", phonetic: "[Kwa-ra-chy]", spanish: "Sol", category: "Astro diurno", desc: "El dador de luz, calor y maduración para los frutos del platanar." },
  { kokama: "Yasy", phonetic: "[Ya-sý]", spanish: "Luna", category: "Astro nocturno", desc: "Guía el calendario de pesca y la siembra en las riberas." },
  { kokama: "Takuara", phonetic: "[Ta-kwa-ra]", spanish: "Casa / Maloca", category: "Comunidad", desc: "Espacio comunitario donde los sabios transmiten historias." },
  { kokama: "Yapana", phonetic: "[Ya-pa-na]", spanish: "Canoa tradicional", category: "Navegación", desc: "Tallada en un solo tronco de cedro o cumala para cruzar corrientes." },
  { kokama: "Irapay", phonetic: "[I-ra-pay]", spanish: "Lupuna (Árbol sagrado)", category: "Flora sagrada", desc: "El árbol más colosal del bosque amazónico, morada de espíritus." },
  { kokama: "Aguaje", phonetic: "[A-gwa-ye]", spanish: "Fruto de la palmera moriche", category: "Alimento", desc: "El fruto reina de la selva de Loreto, rico en vitaminas y vitalidad." },
  { kokama: "Churi", phonetic: "[Chu-ri]", spanish: "Niño / Hija o hijo pequeño", category: "Familia", desc: "Los portadores del futuro de la lengua y los cantos ancestrales." },
  { kokama: "Taita / Paje", phonetic: "[Tai-ta / Pa-je]", spanish: "Sabio / Chamán sanador", category: "Sabiduría", desc: "Guardián de los cantos 'Ícaros' y la medicina tradicional de plantas." },
  { kokama: "Irapatse", phonetic: "[I-ra-pat-se]", spanish: "Gratitud profunda", category: "Espiritualidad", desc: "Reconocer con el corazón los dones recibidos del río y la selva." },
  { kokama: "Kukama Ikuan", phonetic: "[Ku-ka-ma I-kwan]", spanish: "Sabiduría del pueblo Kukama", category: "Lema", desc: "El camino del conocimiento vivo y la memoria colectiva." }
];

export const storiesData = [
  {
    id: "bufeo-colorado",
    title: "El Secreto del Bufeo Colorado",
    kokamaTitle: "Wapuri Yurimawa Ikuashawa",
    badge: "Mito Fluvial de Nauta",
    river: "Río Marañón / Loreto",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    summary: "El misterioso habitante de las profundidades del río que danza en las noches de fiesta patronal y recuerda a los humanos nunca olvidar el respeto a las aguas vivas.",
    kokamaExcerpt: "Wapuri tsupi uni yara. Aipana tsuni yupuni, aipana pua yapana yawé, yuka churi ta tsupi katu...",
    spanishExcerpt: "El Bufeo Colorado es el dueño sereno del agua. Al caer la noche de luna llena, sube a la orilla luciendo un sombrero de paja para ocultar su secreto y celebrar con los pueblos ribereños.",
    fullStoryKokama: `Aipana tsupi kuarachy yaika pe, Wapuri weve uni tsuni pe.
Kukama ta ikua: Wapuri ima tsupi paje katu. Aipana pura kuachi tsupi yapana ari.
Yasy pukú pe, Wapuri pua yuka teta pe. Oyuwa tapiira tsaputa, oñeme'ẽ sombreru katu.
Purukara katu ti, kachi katu churi ta tsupi.
Ipuku uni pe ojevy, yapana ta omonheta: 'Ekatia uni, emondo respeto parana pe'.`,
    fullStorySpanish: `En las curvas misteriosas del río Marañón, donde el agua parece un espejo negro bajo los sauces y renacos, habita Wapuri, el delfín rosado de agua dulce.
Los antiguos abuelos Kukama enseñan que Wapuri no es un pez común, sino un navegante encantado de las ciudades sumergidas.
En las noches de luna clara, sale a las playas de Nauta vestido como un forastero elegante, baila con alegría contagiante y comparte relatos del fondo de la laguna.
Al llegar el canto del primer gallo, retorna siempre al río, recordándonos una ley inquebrantable: 'Quien cuida el agua viva, cuida el corazón de su propia familia'.`,
    moral: "El respeto incondicional por los ríos y los seres que habitan el mundo subacuático (Uni Yara)."
  },
  {
    id: "lupuna-madre",
    title: "La Gran Lupuna y el Origen de las Aguas",
    kokamaTitle: "Irapay Tsaputa Parana Yupuni",
    badge: "Leyenda Cosmológica",
    river: "Cuenca Pacaya Samiria",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80",
    summary: "Cómo el árbol más gigante de la Amazonía albergaba en su copa las aguas primigenias que dieron nacimiento a los ríos Marañón y Ucayali.",
    kokamaExcerpt: "Irapay puku katu yupuni. Yvaga pe oporavy, uni opaite oĩ ipo pe...",
    spanishExcerpt: "La colosal Lupuna tocaba el cielo con su copa. En sus ramas descansaban las primeras lluvias que llenaron las cuencas de la Amazonía peruana.",
    fullStoryKokama: `Irapay ima tuichaiterei ka'a mbyte pe.
Ymaite, uni ndaipóri yvy ari: opaite uni oĩ yvaga pe, Irapay rakã ari.
Kukama ta kuimba'e ha kuña ojerure tupan pe: 'Mondo uni oreve, ore memby ta yuhéi'.
Upépe, yvytu hatã oipeju, Irapay rakã opẽ, ha uni osyry tsupi: Marañón, Ucayali ha Amazonas oñepyrũ oiko.
Ko'ápeve, Irapay opyta ka'a yara ramo.`,
    fullStorySpanish: `Cuentan los abuelos que en el principio de los tiempos la tierra era árida y la gente caminaba con sed buscando manantiales.
En el centro del monte crecía una Lupuna gigantesca llamada Irapay, tan ancha que hacían falta veinte personas tomadas de la mano para rodear su tallo.
En lo más alto de sus ramas verdes se encontraba una laguna celestial guardada por aves sagradas.
Cuando los jóvenes Kukama aprendieron a cantar con humildad pidiendo la bendición del agua, una suave brisa inclinó las ramas de la Lupuna y derramó los cauces que hoy forman el río Marañón y el Ucayali.
Por eso, cada vez que un árbol de Lupuna es visto en la orilla, la gente guarda silencio en señal de reverencia.`,
    moral: "La generosidad de los árboles protectores y el agua como herencia sagrada para todos los seres."
  },
  {
    id: "yacumama",
    title: "La Yacumama, Madre de las Aguas",
    kokamaTitle: "Yacumama Uni Sy",
    badge: "Guardián de la Selva",
    river: "Río Ucayali / Lagunas Sagradas",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    summary: "La gigantesca serpiente protectora de las lagunas vírgenes que asegura que los peces se reproduzcan y nadie extraiga más de lo necesario.",
    kokamaExcerpt: "Yacumama parana sy, tuicha mbói tsupi katu oĩ uni guype...",
    spanishExcerpt: "La gran madre boa yace en el fondo de las cochas profundas. Cuando los pescadores actúan con codicia, un remolino les advierte volver a la orilla.",
    fullStoryKokama: `Yacumama oiko yno'õ pypuku pe.
Ima tuichaiterei, ipire hovy ha overa kuarahy rendy pe.
Ha'e oñangareko pira kuéra ari: warakusu, yawatï ha piraña.
Pescador oñembyaty ramo pira tekotevẽva añoite, Yacumama oheja chupekuéra osẽ porã.
Ha katu oĩ ramo oñembosaráiva ha ojuka reíva, parana opu'ã yvytu ndive ha omoĩ orden.`,
    fullStorySpanish: `En las cochas más silenciosas de la selva baja de Loreto, donde las hojas de victoria regia flotan gigantescas, duerme la Yacumama, la gran serpiente madre del agua.
Mide decenas de metros y su lomo se confunde con los troncos caídos cubiertos de musgo.
Ella no es enemiga de los pescadores justos; al contrario, guía a los cardúmenes de paiche y gamitana hacia las canoas de quienes tienen familias con hambre.
Pero cuando algún pescador codicioso intenta saquear la laguna o arroja desperdicios al agua limpia, la Yacumama bate su cola colosal creando oleajes altos que alejan las lanchas.
Los niños Kokama aprenden desde pequeños: 'Nunca tires suciedad al río; la Madre del Agua siempre observa'.`,
    moral: "La sostenibilidad ecológica ancestral: tomar de la naturaleza solo lo necesario con gratitud."
  },
  {
    id: "chullachaqui",
    title: "El Chullachaqui, Protector del Monte",
    kokamaTitle: "Chullachaqui Ka'a Yara",
    badge: "Misterio Amazónico",
    river: "Bosques de Requena y Nauta",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    summary: "El pequeño guardián del bosque con pies diferentes que cuida los senderos y prueba el corazón de los viajeros.",
    kokamaExcerpt: "Chullachaqui peteĩ ipy yvypóra ha ambue mymba py, ka'a mboyve...",
    spanishExcerpt: "Tiene una huella humana y otra de sachavaca o venado. Aquel que tala árboles sin pedir permiso se pierde en su laberinto de lianas.",
    fullStoryKokama: `Ka'a pypuku pe oiko peteĩ karai michĩva: Chullachaqui.
Peteĩ ipy tsupi yvypóra py yawé, ha ambue katu tapira py.
Ha'e oikuaa opaite yvyrarakã, opaite ka'avo pohã rehegua.
Ndoipotái avave oity yvyra reírei. Oimérõ peteĩ ombyaíva ka'a, Chullachaqui ombopy'atarova chupe tape pe.`,
    fullStorySpanish: `En la densa floresta de la selva peruana, el guardián más temido por los cazadores deshonestos es el Chullachaqui.
Su nombre proviene de su particularidad física: una de sus piernas tiene pie humano y la otra es la pata de un tapir o un venado de monte.
Es capaz de tomar la apariencia de un primo, hermano o vecino para llamar al caminante hacia lo más profundo de las trochas.
Si el viajero mira al suelo y descubre la huella desigual, rompe el hechizo de inmediato.
Los abuelos sabios enseñan que el Chullachaqui no es malvado: es el fiscalizador que la Pachamama puso para que los madereros ilegales no dejen sin sombra a los animales.`,
    moral: "El respeto a los límites de la selva y la necesidad de conservar los bosques vírgenes."
  }
];

export const gamesQuizData = [
  {
    id: 1,
    question: "¿Qué significa el nombre 'Ikua' en la lengua Kokama?",
    options: [
      "Saber, aprender o conocer",
      "Río de oro",
      "Canoa veloz",
      "Árbol de flores"
    ],
    correct: 0,
    explanation: "'Ikua' (o 'Ikwa') expresa el acto de saber, conocer o tener sabiduría comunitaria."
  },
  {
    id: 2,
    question: "¿Cómo se dice el número 'UNO' en Kokama?",
    options: ["Mukuika", "Wepɨ", "Motsapɨr", "Chunka"],
    correct: 1,
    explanation: "'Wepɨ' es el número uno, pronunciado con la singular vocal central 'ɨ'."
  },
  {
    id: 3,
    question: "¿Qué animal es 'Yawar' en la Amazonía peruana?",
    options: ["El Otorongo / Jaguar", "El Guacamayo", "El Delfín Rosado", "La Nutria"],
    correct: 0,
    explanation: "'Yawar' designa al felino más poderoso de la selva baja: el jaguar u otorongo."
  },
  {
    id: 4,
    question: "¿Cuál es el saludo cotidiano en Kokama equivalente a 'Hola / Buenos días'?",
    options: ["Irapatse", "Etepe", "Katu ti", "Takuara"],
    correct: 1,
    explanation: "'Etepe' es el saludo cálido y tradicional de bienvenida y encuentro."
  },
  {
    id: 5,
    question: "¿A qué familia lingüística pertenece la lengua Kukama-Kukamiria?",
    options: ["Pano", "Arawak", "Tupí-Guaraní", "Quechua"],
    correct: 2,
    explanation: "El Kokama pertenece a la rama Tupí-Guaraní, emparentada con pueblos navegantes milenarios."
  },
  {
    id: 6,
    question: "¿Qué significa literalmente 'Mukuika Po' (el número 10)?",
    options: ["Dos canoas", "Dos manos completas", "Cinco soles", "Diez pescados"],
    correct: 1,
    explanation: "'Mukuika' (dos) y 'Po' (mano): diez dedos, las dos manos juntas."
  },
  {
    id: 7,
    question: "¿Cómo se llama el mítico Delfín Rosado en Kokama?",
    options: ["Wapuri / Ipurapari", "Warakusu", "Yawatï", "Tapira"],
    correct: 0,
    explanation: "'Wapuri' es el legendario bufeo colorado que protege los ríos de Pacaya Samiria."
  },
  {
    id: 8,
    question: "¿Qué palabra se utiliza para decir 'Muchas gracias' en Kokama?",
    options: ["Mai katu", "Irapatse", "Uni", "Parana"],
    correct: 1,
    explanation: "'Irapatse' es la bella palabra para manifestar gratitud de corazón."
  }
];

export const cultureInfo = [
  {
    id: "historia",
    title: "La Gente del Agua (Gente de Río)",
    tag: "Origen Histórico",
    icon: "🛶",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    content: "Los Kukama-Kukamiria son descendientes de grandes navegantes de la familia Tupí-Guaraní que migraron hace siglos remontando los ríos amazónicos hasta asentarse en las ricas llanuras aluviales de Loreto, donde el Marañón y el Ucayali se unen para alumbrar al colosal río Amazonas.",
    highlights: [
      "Maestros en la construcción de canoas de un solo leño ('yapana')",
      "Conocimiento profundo de las crecientes y vaciantes del río",
      "Asentamientos estratégicos en Nauta, Requena y Pacaya Samiria"
    ]
  },
  {
    id: "cosmovision",
    title: "Los Tres Mundos y la Vida Submarina",
    tag: "Espiritualidad Ancestral",
    icon: "🌊",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    content: "En la cosmovisión Kokama, el cosmos está integrado por el Mundo de Arriba (Yvaga / cielo), el Mundo del Medio (este suelo donde sembramos y caminamos) y el Mundo de Abajo (Uni Yara / el mundo de las aguas). En el fondo de los ríos existen ciudades hermosas habitadas por los 'espíritus del agua'.",
    highlights: [
      "El agua no es un recurso inerte, es un ser vivo dotado de madre ('Sy')",
      "Respeto sagrado a las lagunas vírgenes y bosques inundables (tahuampas)",
      "Vínculo simbiótico entre medicina vegetal e Ícaros curativos"
    ]
  },
  {
    id: "artesania",
    title: "Cerámica, Tintes Naturales y Cestería",
    tag: "Arte y Diseño",
    icon: "🏺",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    content: "Las mujeres Kukama son renombradas por moldear tinajas ceremoniales de arcilla pura con pigmentos minerales: rojo de achiote, negro de carbón y blanco de caolín. Los motivos geométricos simbolizan las escamas de la boa, el flujo de las corrientes y la piel del jaguar.",
    highlights: [
      "Tejido en fibra de chambira para hamacas y bolsos resistentes",
      "Pinturas de motivos fluviales que narran mapas espirituales",
      "Uso de resinas de árboles amazónicos para impermeabilizar vasijas"
    ]
  },
  {
    id: "revitalizacion",
    title: "El Renacer de la Lengua: Juventud y Sabios",
    tag: "Resistencia Cultural",
    icon: "📻",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    content: "Hoy en día, emisoras comunitarias como Radio Ucamara en Nauta, escuelas bilingües interculturales (EIB) y colectivos de jóvenes artistas rapean, cantan y producen audiovisuales en Kokama para transmitir a las nuevas generaciones el orgullo de su voz milenaria.",
    highlights: [
      "Grabación de canciones tradicionales como 'Kumbarikira'",
      "Talleres intergeneracionales entre sabios abuelos y escolares",
      "Inclusión de materiales didácticos digitales como Ikua"
    ]
  }
];
