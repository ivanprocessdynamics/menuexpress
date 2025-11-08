import { Star, ChefHat, Clock, Calendar, Users, Award } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  category?: string;
}

export interface DemoRestaurant {
  restaurantName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  menuSubtitle: string;
  backgroundColor: string;
  menuBg: string;
  galleryBg: string;
  highlights: Array<{
    iconName: string;
    title: string;
    description: string;
  }>;
  menuCategories?: string[];
  menuItems: MenuItem[];
  galleryImages: string[];
  testimonials: Array<{
    text: string;
    author: string;
  }>;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  hours: Array<{
    days: string;
    time: string;
  }>;
}

export const demoRestaurants: Record<string, DemoRestaurant> = {
  'alta-cocina-gourmet': {
    restaurantName: 'Le Gourmet',
    tagline: 'Alta Cocina Francesa',
    heroTitle: 'Experiencia Culinaria Excepcional',
    heroSubtitle: 'Donde el arte se encuentra con el sabor en cada plato',
    menuSubtitle: 'Creaciones del Chef con ingredientes de temporada',
    backgroundColor: '#ffffff',
    menuBg: '#f9fafb',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'star',
        title: 'Estrella Michelin',
        description: 'Reconocimiento internacional por nuestra excelencia'
      },
      {
        iconName: 'chef',
        title: 'Chef Ejecutivo',
        description: '20 años de experiencia en alta cocina europea'
      },
      {
        iconName: 'calendar',
        title: 'Menú de Temporada',
        description: 'Ingredientes frescos y de proximidad'
      },
    ],
    menuCategories: ['Entrantes', 'Platos Principales', 'Postres'],
    menuItems: [
      // ENTRANTES
      {
        name: 'Foie Gras Mi-Cuit',
        description: 'Con reducción de oporto, chutney de higos y brioche tostado',
        price: '€28',
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500&q=80',
        popular: true,
        category: 'Entrantes',
      },
      {
        name: 'Tartar de Salmón',
        description: 'Con aguacate, caviar, crema de wasabi y crujiente de arroz',
        price: '€24',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&q=80',
        category: 'Entrantes',
      },
      {
        name: 'Vieiras a la Plancha',
        description: 'Con puré de coliflor, panceta crujiente y reducción balsámica',
        price: '€26',
        image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&q=80',
        popular: true,
        category: 'Entrantes',
      },
      {
        name: 'Sopa de Trufa Negra',
        description: 'Consomé clarificado con ravioli de trufa y parmesano',
        price: '€22',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80',
        category: 'Entrantes',
      },
      // PLATOS PRINCIPALES
      {
        name: 'Solomillo Wellington',
        description: 'Envuelto en hojaldre con duxelles de hongos y salsa de vino tinto',
        price: '€48',
        image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80',
        popular: true,
        category: 'Platos Principales',
      },
      {
        name: 'Lubina al Horno',
        description: 'Con verduras mediterráneas, limón confitado y aceite de albahaca',
        price: '€42',
        image: 'https://images.unsplash.com/photo-1580554530778-ca36943938b2?w=500&q=80',
        category: 'Platos Principales',
      },
      {
        name: 'Magret de Pato',
        description: 'Con puré de boniato, salsa de frambuesa y reducción de oporto',
        price: '€38',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&q=80',
        popular: true,
        category: 'Platos Principales',
      },
      {
        name: 'Risotto de Setas',
        description: 'Con porcini, trufa blanca, parmesano y aceite de trufa',
        price: '€34',
        image: 'https://images.unsplash.com/photo-1476124369491-f1c3d25f6d9e?w=500&q=80',
        category: 'Platos Principales',
      },
      {
        name: 'Cordero Lechal',
        description: 'Asado lentamente con hierbas provenzales y patatas fondant',
        price: '€44',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80',
        category: 'Platos Principales',
      },
      // POSTRES
      {
        name: 'Soufflé de Chocolate',
        description: 'Con helado de vainilla bourbon y salsa de caramelo',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80',
        popular: true,
        category: 'Postres',
      },
      {
        name: 'Tarta Tatin',
        description: 'De manzana caramelizada con helado de canela',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80',
        category: 'Postres',
      },
      {
        name: 'Crème Brûlée',
        description: 'Clásica con vainilla de Madagascar y frutos rojos',
        price: '€10',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80',
        category: 'Postres',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
      'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
      'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80',
      'https://images.unsplash.com/photo-1476124369491-f1c3d25f6d9e?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80',
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'Una experiencia gastronómica inolvidable. Cada plato es una obra de arte.',
        author: 'María González'
      },
      {
        text: 'El servicio es impecable y la comida simplemente excepcional.',
        author: 'Carlos Rodríguez'
      },
      {
        text: 'Sin duda el mejor restaurante de alta cocina de la ciudad.',
        author: 'Ana Martínez'
      },
    ],
    contact: {
      phone: '+34 91 123 45 67',
      email: 'reservas@legourmet.es',
      address: 'Calle Serrano 45, Madrid'
    },
    hours: [
      { days: 'Lunes - Viernes', time: '13:00 - 16:00, 20:00 - 23:00' },
      { days: 'Sábado', time: '13:00 - 23:30' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
  },
  'italiano-tradicional': {
    restaurantName: 'Trattoria Bella Italia',
    tagline: 'Auténtica Cocina Italiana',
    heroTitle: 'La Verdadera Italia en Tu Mesa',
    heroSubtitle: 'Recetas tradicionales transmitidas de generación en generación',
    menuSubtitle: 'Pasta fresca hecha a mano todos los días',
    backgroundColor: '#ffffff',
    menuBg: '#f9fafb',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'chef',
        title: 'Recetas Auténticas',
        description: 'Directamente desde la Toscana'
      },
      {
        iconName: 'star',
        title: 'Pasta Fresca',
        description: 'Hecha a mano diariamente'
      },
      {
        iconName: 'users',
        title: 'Ambiente Familiar',
        description: 'Te sentirás como en casa'
      },
    ],
    menuCategories: ['Antipasti', 'Pastas', 'Pizzas', 'Postres'],
    menuItems: [
      // ANTIPASTI
      {
        name: 'Bruschetta Classica',
        description: 'Tomate fresco, albahaca, ajo y aceite de oliva extra virgen',
        price: '€8',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&q=80',
        category: 'Antipasti',
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Finas láminas de ternera, rúcula, parmesano y aceite de trufa',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1625944342635-c871fe921a71?w=500&q=80',
        category: 'Antipasti',
        popular: true,
      },
      {
        name: 'Caprese',
        description: 'Mozzarella di bufala, tomate de rama, albahaca fresca',
        price: '€10',
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&q=80',
        category: 'Antipasti',
      },
      {
        name: 'Prosciutto e Melone',
        description: 'Jamón de Parma DOP con melón cantalupo',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&q=80',
        category: 'Antipasti',
      },
      // PASTAS
      {
        name: 'Spaghetti Carbonara',
        description: 'Panceta crujiente, huevo, queso pecorino romano y pimienta negra',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80',
        category: 'Pastas',
        popular: true,
      },
      {
        name: 'Lasagna della Nonna',
        description: 'Receta tradicional con ragú bolognese y bechamel casera',
        price: '€16',
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&q=80',
        category: 'Pastas',
        popular: true,
      },
      {
        name: 'Ravioli di Ricotta e Spinaci',
        description: 'Rellenos de ricotta y espinacas con salsa de mantequilla y salvia',
        price: '€15',
        image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=500&q=80',
        category: 'Pastas',
      },
      {
        name: 'Penne all\'Arrabbiata',
        description: 'Salsa de tomate picante con ajo, guindilla y perejil',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80',
        category: 'Pastas',
      },
      {
        name: 'Tagliatelle ai Funghi Porcini',
        description: 'Pasta fresca con setas porcini, trufa y parmesano',
        price: '€18',
        image: 'https://images.unsplash.com/photo-1611599539331-0395738669cf?w=500&q=80',
        category: 'Pastas',
      },
      // PIZZAS
      {
        name: 'Pizza Margherita',
        description: 'Tomate San Marzano, mozzarella fior di latte, albahaca fresca',
        price: '€11',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
        category: 'Pizzas',
      },
      {
        name: 'Pizza Diavola',
        description: 'Tomate, mozzarella, salami picante y aceite de guindilla',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80',
        category: 'Pizzas',
        popular: true,
      },
      {
        name: 'Pizza Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, parmesano y fontina',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
        category: 'Pizzas',
      },
      {
        name: 'Pizza Prosciutto e Funghi',
        description: 'Jamón cocido, champiñones frescos y mozzarella',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&q=80',
        category: 'Pizzas',
      },
      // POSTRES
      {
        name: 'Tiramisù Classico',
        description: 'Bizcochos de soletilla, mascarpone, café expresso y cacao',
        price: '€7',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',
        category: 'Postres',
        popular: true,
      },
      {
        name: 'Panna Cotta',
        description: 'Crema de nata con coulis de frutos rojos',
        price: '€6',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
        category: 'Postres',
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Crujientes tubos rellenos de crema de ricotta y pistachos',
        price: '€6',
        image: 'https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=500&q=80',
        category: 'Postres',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80',
      'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&q=80',
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80',
      'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=400&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80',
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'La mejor pasta italiana fuera de Italia. Simplemente deliciosa.',
        author: 'Roberto Sanchez'
      },
      {
        text: 'El ambiente es acogedor y la comida espectacular.',
        author: 'Laura Fernández'
      },
      {
        text: 'La pizza es auténtica, con ingredientes de primera calidad.',
        author: 'Miguel Torres'
      },
    ],
    contact: {
      phone: '+34 93 234 56 78',
      email: 'info@bellaitalia.es',
      address: 'Carrer de Provença 123, Barcelona'
    },
    hours: [
      { days: 'Lunes - Jueves', time: '13:00 - 16:00, 20:00 - 23:30' },
      { days: 'Viernes - Sábado', time: '13:00 - 00:00' },
      { days: 'Domingo', time: '13:00 - 23:00' },
    ],
  },
  // Los otros restaurantes usarán datos por defecto con pequeñas variaciones
  'japones-sushi': {
    restaurantName: 'Sushi Master',
    tagline: 'Arte Culinario Japonés',
    heroTitle: 'Tradición y Sabor en Cada Pieza',
    heroSubtitle: 'Sushi auténtico preparado por maestros certificados',
    menuSubtitle: 'Pescado fresco y arroz de primera calidad',
    backgroundColor: '#ffffff',
    menuBg: '#fef2f2',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'award',
        title: 'Maestro Sushiman',
        description: '15 años de experiencia en Tokio'
      },
      {
        iconName: 'star',
        title: 'Pescado Fresco',
        description: 'Importado diariamente desde Japón'
      },
      {
        iconName: 'chef',
        title: 'Técnica Tradicional',
        description: 'Preparación auténtica japonesa'
      },
    ],
    menuCategories: ['Nigiri', 'Rolls', 'Sashimi', 'Especiales', 'Postres'],
    menuItems: [
      // NIGIRI
      {
        name: 'Nigiri de Salmón',
        description: 'Salmón noruego fresco sobre arroz perfectamente sazonado',
        price: '€3.50',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80',
        category: 'Nigiri',
        popular: true,
      },
      {
        name: 'Nigiri de Atún Rojo',
        description: 'Atún rojo de Balfegó, corte premium',
        price: '€4.50',
        image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&q=80',
        category: 'Nigiri',
        popular: true,
      },
      {
        name: 'Nigiri de Anguila',
        description: 'Anguila flambeada con salsa teriyaki casera',
        price: '€4',
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&q=80',
        category: 'Nigiri',
      },
      {
        name: 'Nigiri Mix (10 piezas)',
        description: 'Selección del chef: salmón, atún, pez mantequilla, langostino',
        price: '€22',
        image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=500&q=80',
        category: 'Nigiri',
      },
      // ROLLS
      {
        name: 'California Roll',
        description: 'Cangrejo, aguacate, pepino y masago',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=500&q=80',
        category: 'Rolls',
      },
      {
        name: 'Dragon Roll',
        description: 'Tempura de camarón, aguacate, anguila y salsa teriyaki',
        price: '€18',
        image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=500&q=80',
        category: 'Rolls',
        popular: true,
      },
      {
        name: 'Spicy Tuna Roll',
        description: 'Atún picante con pepino, aguacate y mayonesa de sriracha',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80',
        category: 'Rolls',
      },
      {
        name: 'Rainbow Roll',
        description: 'California roll cubierto con salmón, atún, pez limón y aguacate',
        price: '€16',
        image: 'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=500&q=80',
        category: 'Rolls',
        popular: true,
      },
      {
        name: 'Philadelphia Roll',
        description: 'Salmón ahumado, queso crema, pepino y cebolleta',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500&q=80',
        category: 'Rolls',
      },
      // SASHIMI
      {
        name: 'Sashimi de Salmón',
        description: '8 cortes gruesos de salmón noruego premium',
        price: '€18',
        image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&q=80',
        category: 'Sashimi',
      },
      {
        name: 'Sashimi de Atún',
        description: '8 cortes de atún rojo de aleta azul',
        price: '€24',
        image: 'https://images.unsplash.com/photo-1615361200098-18c5c60d42e8?w=500&q=80',
        category: 'Sashimi',
        popular: true,
      },
      {
        name: 'Sashimi Mix Premium',
        description: '15 cortes: salmón, atún, pez mantequilla, hamachi, pulpo',
        price: '€32',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80',
        category: 'Sashimi',
        popular: true,
      },
      // ESPECIALES
      {
        name: 'Tataki de Atún',
        description: 'Atún sellado con salsa ponzu, jengibre y cebolleta',
        price: '€16',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80',
        category: 'Especiales',
      },
      {
        name: 'Tempura Mix',
        description: 'Langostinos y vegetales en tempura crujiente con salsa tentsuyu',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=500&q=80',
        category: 'Especiales',
      },
      {
        name: 'Gyozas',
        description: '6 empanadillas japonesas rellenas de cerdo y vegetales',
        price: '€8',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80',
        category: 'Especiales',
      },
      // POSTRES
      {
        name: 'Mochi Ice Cream',
        description: 'Helado envuelto en masa de arroz mochi (3 unidades)',
        price: '€7',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80',
        category: 'Postres',
        popular: true,
      },
      {
        name: 'Dorayaki',
        description: 'Tortitas japonesas rellenas de pasta de judía dulce',
        price: '€6',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80',
        category: 'Postres',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80',
      'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&q=80',
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80',
      'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&q=80',
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&q=80',
      'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&q=80',
      'https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=400&q=80',
      'https://images.unsplash.com/photo-1615361200098-18c5c60d42e8?w=400&q=80',
      'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&q=80',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80',
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'El mejor sushi que he probado en España. Calidad excepcional.',
        author: 'David López'
      },
      {
        text: 'Sabor auténtico japonés. El sushiman es un verdadero artista.',
        author: 'Patricia Vega'
      },
      {
        text: 'Pescado fresco y presentación impecable. Altamente recomendado.',
        author: 'Jorge Ruiz'
      },
    ],
    contact: {
      phone: '+34 91 345 67 89',
      email: 'reservas@sushimaster.es',
      address: 'Calle de Alcalá 89, Madrid'
    },
    hours: [
      { days: 'Lunes - Domingo', time: '13:00 - 16:00, 20:00 - 23:30' },
      { days: 'Martes', time: 'Cerrado' },
    ],
  },
  'mexicano-autentico': {
    restaurantName: 'El Mariachi Loco',
    tagline: 'Auténtica Comida Mexicana',
    heroTitle: '¡Sabor Mexicano Auténtico!',
    heroSubtitle: 'Tacos, quesadillas y más, con el verdadero sabor de México',
    menuSubtitle: 'Recetas tradicionales con ingredientes importados',
    backgroundColor: '#ffffff',
    menuBg: '#fffbf0',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'chef',
        title: 'Chef Mexicano',
        description: 'Recetas familiares de Oaxaca'
      },
      {
        iconName: 'star',
        title: 'Tortillas Artesanales',
        description: 'Hechas a mano diariamente'
      },
      {
        iconName: 'award',
        title: 'Salsas Caseras',
        description: 'Más de 10 variedades picantes'
      },
    ],
    menuCategories: ['Antojitos', 'Tacos', 'Principales', 'Postres'],
    menuItems: [
      // ANTOJITOS
      {
        name: 'Guacamole con Totopos',
        description: 'Aguacate fresco, tomate, cebolla, cilantro y jalapeño',
        price: '€8',
        image: 'https://images.unsplash.com/photo-1601924582970-9238bcb13c85?w=500&q=80',
        category: 'Antojitos',
      },
      {
        name: 'Nachos Supremos',
        description: 'Con queso fundido, jalapeños, guacamole, crema y pico de gallo',
        price: '€10',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80',
        category: 'Antojitos',
        popular: true,
      },
      {
        name: 'Elote Asado',
        description: 'Maíz a la parrilla con mayonesa, queso cotija y chile piquín',
        price: '€6',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80',
        category: 'Antojitos',
      },
      // TACOS
      {
        name: 'Tacos al Pastor',
        description: 'Carne marinada con piña, cilantro, cebolla y salsa verde',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
        category: 'Tacos',
        popular: true,
      },
      {
        name: 'Tacos de Carnitas',
        description: 'Cerdo confitado estilo Michoacán con cebolla y cilantro',
        price: '€11',
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335e3d1?w=500&q=80',
        category: 'Tacos',
      },
      {
        name: 'Tacos de Pescado',
        description: 'Pescado empanizado con repollo, pico de gallo y salsa chipotle',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&q=80',
        category: 'Tacos',
        popular: true,
      },
      {
        name: 'Tacos Vegetarianos',
        description: 'Nopales asados, champiñones, pimientos y queso',
        price: '€10',
        image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500&q=80',
        category: 'Tacos',
      },
      // PRINCIPALES
      {
        name: 'Burrito Especial',
        description: 'Carne asada, frijoles refritos, arroz, queso y pico de gallo',
        price: '€15',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80',
        category: 'Principales',
        popular: true,
      },
      {
        name: 'Quesadillas Supremas',
        description: 'Tortilla grande con pollo, queso, guacamole y crema',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=500&q=80',
        category: 'Principales',
      },
      {
        name: 'Enchiladas Verdes',
        description: 'Tortillas rellenas de pollo con salsa verde y crema',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335e3d1?w=500&q=80',
        category: 'Principales',
      },
      {
        name: 'Fajitas Mixtas',
        description: 'Pollo y ternera con pimientos, cebolla y tortillas',
        price: '€18',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',
        category: 'Principales',
      },
      // POSTRES
      {
        name: 'Churros con Chocolate',
        description: 'Churros crujientes con chocolate caliente mexicano',
        price: '€7',
        image: 'https://images.unsplash.com/photo-1541599468348-e96984315921?w=500&q=80',
        category: 'Postres',
        popular: true,
      },
      {
        name: 'Flan Napolitano',
        description: 'Flan casero con caramelo y crema batida',
        price: '€6',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500&q=80',
        category: 'Postres',
      },
      {
        name: 'Tres Leches',
        description: 'Pastel empapado en tres tipos de leche',
        price: '€7',
        image: 'https://images.unsplash.com/photo-1588195538326-c5acd89d5d0b?w=500&q=80',
        category: 'Postres',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
      'https://images.unsplash.com/photo-1599974579688-8dbdd335e3d1?w=400&q=80',
      'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400&q=80',
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&q=80',
      'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
      'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400&q=80',
      'https://images.unsplash.com/photo-1601924582970-9238bcb13c85?w=400&q=80',
      'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=80',
      'https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&q=80',
      'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&q=80',
      'https://images.unsplash.com/photo-1588195538326-c5acd89d5d0b?w=400&q=80',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
    ],
    testimonials: [
      {
        text: '¡Los mejores tacos que he probado! Sabor auténtico mexicano.',
        author: 'Carmen Díaz'
      },
      {
        text: 'Las salsas caseras son espectaculares. Ambiente muy alegre.',
        author: 'Pedro Jiménez'
      },
      {
        text: 'Me transporta a México con cada bocado. Increíble.',
        author: 'Isabel Moreno'
      },
    ],
    contact: {
      phone: '+34 95 456 78 90',
      email: 'hola@elmariachiloco.es',
      address: 'Avenida de Andalucía 234, Sevilla'
    },
    hours: [
      { days: 'Martes - Domingo', time: '13:00 - 00:00' },
      { days: 'Lunes', time: 'Cerrado' },
    ],
  },
  'fast-food-moderno': {
    restaurantName: 'Urban Burger',
    tagline: 'Burgers & More',
    heroTitle: 'Comida Rápida, Sabor Único',
    heroSubtitle: 'Hamburguesas gourmet y más, listas en minutos',
    menuSubtitle: 'Ingredientes premium, preparación rápida',
    backgroundColor: '#ffffff',
    menuBg: '#fff7ed',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'clock',
        title: 'Servicio Rápido',
        description: 'Tu pedido en menos de 10 minutos'
      },
      {
        iconName: 'star',
        title: 'Ingredientes Premium',
        description: 'Carne 100% vacuno de calidad'
      },
      {
        iconName: 'users',
        title: 'Delivery Gratis',
        description: 'En pedidos superiores a 15€'
      },
    ],
    menuItems: [
      {
        name: 'Classic Burger',
        description: 'Doble carne, queso cheddar, lechuga y tomate',
        price: '€9',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
        popular: true,
      },
      {
        name: 'BBQ Bacon Burger',
        description: 'Con bacon crujiente y salsa BBQ casera',
        price: '€11',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80',
        popular: true,
      },
      {
        name: 'Chicken Wings',
        description: 'Alitas picantes con salsa blue cheese',
        price: '€8',
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500&q=80',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80',
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&q=80',
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'Las mejores hamburguesas de la zona. Rápido y delicioso.',
        author: 'Javier Ruiz'
      },
      {
        text: 'Calidad-precio excelente. El servicio delivery es muy rápido.',
        author: 'Sandra Martín'
      },
      {
        text: 'La BBQ Bacon es mi favorita. Repetimos cada semana.',
        author: 'Alberto García'
      },
    ],
    contact: {
      phone: '+34 91 567 89 01',
      email: 'pedidos@urbanburger.es',
      address: 'Gran Vía 89, Madrid'
    },
    hours: [
      { days: 'Lunes - Domingo', time: '12:00 - 00:00' },
    ],
  },
  'pizzeria-italiana': {
    restaurantName: 'Pizzeria Da Luigi',
    tagline: 'Pizza Napoletana Auténtica',
    heroTitle: 'La Auténtica Pizza Napolitana',
    heroSubtitle: 'Horno de leña y masa madre de 72 horas de fermentación',
    menuSubtitle: 'Receta tradicional napolitana desde 1985',
    backgroundColor: '#ffffff',
    menuBg: '#fef2f2',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'award',
        title: 'Certificado VPN',
        description: 'Asociación Verace Pizza Napoletana'
      },
      {
        iconName: 'chef',
        title: 'Horno de Leña',
        description: 'Cocción a 485°C en 90 segundos'
      },
      {
        iconName: 'star',
        title: 'Masa Madre',
        description: 'Fermentación de 72 horas'
      },
    ],
    menuItems: [
      {
        name: 'Pizza Margherita',
        description: 'Tomate San Marzano, mozzarella di bufala, albahaca',
        price: '€11',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
        popular: true,
      },
      {
        name: 'Pizza Diavola',
        description: 'Tomate, mozzarella, salami picante, aceite de guindilla',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80',
        popular: true,
      },
      {
        name: 'Pizza Quattro Formaggi',
        description: 'Mozzarella, gorgonzola, parmesano, fontina',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
      'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'La pizza más auténtica que he probado fuera de Nápoles.',
        author: 'Giuseppe Rossi'
      },
      {
        text: 'La masa es increíble, crujiente por fuera y suave por dentro.',
        author: 'Marta Sánchez'
      },
      {
        text: 'Luigi es un maestro pizzero. Cada pizza es perfecta.',
        author: 'Fernando López'
      },
    ],
    contact: {
      phone: '+34 96 678 90 12',
      email: 'info@daluigi.es',
      address: 'Calle de la Marina 67, Valencia'
    },
    hours: [
      { days: 'Martes - Domingo', time: '13:00 - 16:00, 20:00 - 23:30' },
      { days: 'Lunes', time: 'Cerrado' },
    ],
  },
  'vegetariano-organico': {
    restaurantName: 'Green Garden',
    tagline: 'Cocina Vegetariana & Orgánica',
    heroTitle: 'Nutrición Natural y Consciente',
    heroSubtitle: 'Ingredientes 100% orgánicos de productores locales',
    menuSubtitle: 'Platos vegetarianos y veganos llenos de sabor',
    backgroundColor: '#ffffff',
    menuBg: '#f0fdf4',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'award',
        title: 'Certificado Ecológico',
        description: 'Ingredientes 100% orgánicos'
      },
      {
        iconName: 'star',
        title: 'Km 0',
        description: 'Productores locales de confianza'
      },
      {
        iconName: 'users',
        title: 'Opciones Veganas',
        description: 'Amplio menú plant-based'
      },
    ],
    menuItems: [
      {
        name: 'Bowl Buddha Completo',
        description: 'Quinoa, aguacate, hummus, verduras asadas y tahini',
        price: '€13',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
        popular: true,
      },
      {
        name: 'Hamburguesa Vegana',
        description: 'Lentejas y remolacha, con pan integral artesanal',
        price: '€12',
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&q=80',
        popular: true,
      },
      {
        name: 'Ensalada Detox',
        description: 'Mix de hojas verdes, frutos secos y vinagreta de frutos rojos',
        price: '€11',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'Comida vegana deliciosa y nutritiva. El bowl buddha es espectacular.',
        author: 'Elena Verde'
      },
      {
        text: 'Ingredientes frescos y de calidad. Se nota que son orgánicos.',
        author: 'Pablo Eco'
      },
      {
        text: 'Mi lugar favorito para comer saludable sin renunciar al sabor.',
        author: 'Lucía Naturaleza'
      },
    ],
    contact: {
      phone: '+34 93 789 01 23',
      email: 'info@greengarden.es',
      address: 'Rambla de Catalunya 156, Barcelona'
    },
    hours: [
      { days: 'Lunes - Sábado', time: '09:00 - 22:00' },
      { days: 'Domingo', time: '10:00 - 20:00' },
    ],
  },
  'fusion-contemporaneo': {
    restaurantName: 'Fusion Lab',
    tagline: 'Cocina de Autor Contemporánea',
    heroTitle: 'Donde la Creatividad Se Encuentra con el Sabor',
    heroSubtitle: 'Fusión de técnicas asiáticas, europeas y latinoamericanas',
    menuSubtitle: 'Menú degustación que cambia cada temporada',
    backgroundColor: '#ffffff',
    menuBg: '#fafafa',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'award',
        title: 'Chef Premiado',
        description: 'Ganador de 2 soles Repsol'
      },
      {
        iconName: 'chef',
        title: 'Técnicas Innovadoras',
        description: 'Cocina molecular y tradicional'
      },
      {
        iconName: 'star',
        title: 'Menú Degustación',
        description: '12 pasos de pura creatividad'
      },
    ],
    menuItems: [
      {
        name: 'Tataki de Atún',
        description: 'Con miso blanco, sésamo negro y reducción de soja',
        price: '€24',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
        popular: true,
      },
      {
        name: 'Risotto de Trufa',
        description: 'Con parmesano crujiente y aire de hongos',
        price: '€26',
        image: 'https://images.unsplash.com/photo-1476124369491-f1c3d25f6d9e?w=500&q=80',
      },
      {
        name: 'Cordero Laqueado',
        description: 'Con puré de coliflor y espuma de romero',
        price: '€32',
        image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=500&q=80',
        popular: true,
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80',
      'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80',
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'Una experiencia culinaria única. Cada plato es una obra de arte.',
        author: 'Ricardo Gourmet'
      },
      {
        text: 'El menú degustación fue extraordinario. Innovación y sabor.',
        author: 'Sofía Delicatessen'
      },
      {
        text: 'Chef talentoso que fusiona técnicas con maestría. Impresionante.',
        author: 'Antonio Crítico'
      },
    ],
    contact: {
      phone: '+34 91 890 12 34',
      email: 'reservas@fusionlab.es',
      address: 'Paseo de la Castellana 201, Madrid'
    },
    hours: [
      { days: 'Miércoles - Sábado', time: '20:00 - 23:00' },
      { days: 'Domingo - Martes', time: 'Cerrado' },
    ],
  },
  'familiar-buffet': {
    restaurantName: 'La Casa de la Abuela',
    tagline: 'Cocina Casera para Toda la Familia',
    heroTitle: 'Comida Casera Como en Casa',
    heroSubtitle: 'Buffet libre con más de 50 platos tradicionales',
    menuSubtitle: 'Recetas de la abuela que saben a hogar',
    backgroundColor: '#ffffff',
    menuBg: '#fef2f2',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'users',
        title: 'Buffet Libre',
        description: 'Más de 50 platos para elegir'
      },
      {
        iconName: 'star',
        title: 'Ambiente Familiar',
        description: 'Espacio amplio para grupos'
      },
      {
        iconName: 'chef',
        title: 'Menú Infantil',
        description: 'Zona de juegos incluida'
      },
    ],
    menuItems: [
      {
        name: 'Cocido Madrileño',
        description: 'El tradicional de garbanzos, carnes y verduras',
        price: '€14',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&q=80',
        popular: true,
      },
      {
        name: 'Paella Valenciana',
        description: 'Con pollo, conejo y judías verdes',
        price: '€16',
        image: 'https://images.unsplash.com/photo-1630175860474-9f63cf21496b?w=500&q=80',
        popular: true,
      },
      {
        name: 'Buffet Completo',
        description: 'Acceso ilimitado a todos los platos, postres y bebidas',
        price: '€19',
        image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&q=80',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&q=80',
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'Perfecto para ir con niños. El buffet tiene de todo y está riquísimo.',
        author: 'Rosa Familia'
      },
      {
        text: 'Comida casera de verdad. Nos sentimos como en casa de la abuela.',
        author: 'Manuel Tradición'
      },
      {
        text: 'Excelente relación calidad-precio. Repetiremos con toda la familia.',
        author: 'Carmen Hogar'
      },
    ],
    contact: {
      phone: '+34 91 901 23 45',
      email: 'info@lacasadelaabuela.es',
      address: 'Calle de Bravo Murillo 134, Madrid'
    },
    hours: [
      { days: 'Lunes - Domingo', time: '13:00 - 16:30, 20:00 - 23:00' },
    ],
  },
  'cafeteria-brunch': {
    restaurantName: 'Bloom Café',
    tagline: 'Brunch & Coffee Bar',
    heroTitle: 'Tu Momento Bloom del Día',
    heroSubtitle: 'Brunch, café de especialidad y postres artesanales',
    menuSubtitle: 'Desayunos todo el día en ambiente Instagram',
    backgroundColor: '#ffffff',
    menuBg: '#fff5f7',
    galleryBg: '#ffffff',
    highlights: [
      {
        iconName: 'star',
        title: 'Café de Especialidad',
        description: 'Granos seleccionados y tostado artesanal'
      },
      {
        iconName: 'chef',
        title: 'Repostería Propia',
        description: 'Tartas y pasteles hechos diariamente'
      },
      {
        iconName: 'users',
        title: 'Brunch Todo el Día',
        description: 'Desde las 9AM hasta las 5PM'
      },
    ],
    menuItems: [
      {
        name: 'Pancakes Deluxe',
        description: 'Con frutos rojos, sirope de arce y crema batida',
        price: '€10',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80',
        popular: true,
      },
      {
        name: 'Avocado Toast',
        description: 'Pan de masa madre, aguacate, huevo pochado y sésamo',
        price: '€11',
        image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&q=80',
        popular: true,
      },
      {
        name: 'Açaí Bowl',
        description: 'Con granola casera, plátano y mantequilla de cacahuete',
        price: '€9',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&q=80',
      },
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
      'https://images.unsplash.com/photo-1559305616-3580e6d80cb0?w=400&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80',
    ],
    testimonials: [
      {
        text: 'El mejor brunch de la ciudad. Ambiente precioso y comida deliciosa.',
        author: 'Laura Trendy'
      },
      {
        text: 'Café increíble y postres espectaculares. Muy Instagrameable.',
        author: 'Marina Lifestyle'
      },
      {
        text: 'Mi café favorito para trabajar o quedar con amigas. Perfecto.',
        author: 'Clara Chic'
      },
    ],
    contact: {
      phone: '+34 93 012 34 56',
      email: 'hola@bloomcafe.es',
      address: 'Carrer del Bruc 89, Barcelona'
    },
    hours: [
      { days: 'Lunes - Viernes', time: '09:00 - 19:00' },
      { days: 'Sábado - Domingo', time: '09:00 - 20:00' },
    ],
  },
};

// Datos por defecto para restaurantes sin configuración específica
export const getDefaultDemoData = (templateName: string): DemoRestaurant => ({
  restaurantName: `Restaurante ${templateName}`,
  tagline: 'Cocina de Calidad',
  heroTitle: 'Bienvenido a Nuestra Mesa',
  heroSubtitle: 'Donde la tradición se encuentra con el sabor',
  menuSubtitle: 'Platos elaborados con ingredientes frescos',
  backgroundColor: '#ffffff',
  menuBg: '#f9fafb',
  galleryBg: '#ffffff',
  highlights: [
    {
      iconName: 'chef',
      title: 'Chef Profesional',
      description: 'Experiencia en cocina internacional'
    },
    {
      iconName: 'star',
      title: 'Ingredientes Frescos',
      description: 'De proveedores locales'
    },
    {
      iconName: 'users',
      title: 'Ambiente Acogedor',
      description: 'Perfecto para cualquier ocasión'
    },
  ],
  menuCategories: [],
  menuItems: [
    {
      name: 'Plato Destacado 1',
      description: 'Preparado con ingredientes de temporada',
      price: '€15',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
      popular: true,
      category: '',
    },
    {
      name: 'Plato Destacado 2',
      description: 'Receta de la casa con toque especial',
      price: '€18',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
      category: '',
    },
    {
      name: 'Plato Destacado 3',
      description: 'Especialidad del chef',
      price: '€20',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
      category: '',
    },
  ],
  galleryImages: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80',
    'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
  ],
  testimonials: [
    {
      text: 'Excelente comida y servicio. Volveremos seguro.',
      author: 'Cliente Satisfecho'
    },
    {
      text: 'Ambiente agradable y platos deliciosos.',
      author: 'Visitante Habitual'
    },
    {
      text: 'Recomendado 100%. Gran experiencia gastronómica.',
      author: 'Amante de la Buena Comida'
    },
  ],
  contact: {
    phone: '+34 900 123 456',
    email: 'info@restaurante.es',
    address: 'Calle Principal 123, Ciudad'
  },
  hours: [
    { days: 'Lunes - Viernes', time: '13:00 - 16:00, 20:00 - 23:00' },
    { days: 'Sábado - Domingo', time: '13:00 - 23:30' },
  ],
});
