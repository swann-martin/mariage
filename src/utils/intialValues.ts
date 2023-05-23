import { v4 as randomUUID } from 'uuid';

export const mainBg =
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const config = {
  author: 'Emile Martin',
  siteUrl: 'https://Emile-martin.xyz/',
  year: '2023',
  brideName: 'Lucienne',
  groomName: 'Emile',
  city: 'Lille',
  weddingStarts: '15h',
  weddingDay: '24 juin 2024',
  weddingPlace: 'la mairie de Lille',
  weddingPlaceAddress: '59033 Pl. Augustin Laurent, 59800 Lille, France',
  carPark: 'le parking de la mairie ou près du parc JB Lebas',
  dressCode: 'Mariage décontracté',
  imgCouncil:
    'https://lh5.googleusercontent.com/p/AF1QipOgqvHMxo_qEcWokl3_VjZjJOs-nW4-uiihvlg=w408-h271-k-no',
  img1: 'https://images.unsplash.com/photo-1646052963275-27546791ce95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGxpbGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  img2: 'https://images.unsplash.com/photo-1610064980867-ae10cf264e1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  img3: 'https://images.unsplash.com/photo-1630415262546-88ae8f14d716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
};
export const initialListState = [
  {
    id: randomUUID(),
    name: 'Lucienne',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Emile',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Sacha',
    confirmed: true,
    child: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Armand',
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Pascaline',
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Jean-Eude',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Sylvie',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Georgina',
    confirmed: true,
    invitedBy: 'Emile',
    bestMan: true
  },
  {
    id: randomUUID(),
    name: 'Andrée',
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Vincenzo',
    confirmed: true,
    invitedBy: 'Lucienne',
    bestMan: true
  },
  {
    id: randomUUID(),
    name: 'Camille',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Emma',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Marianne',
    confirmed: true,
    invitedBy: 'Lucienne',
    bestMan: true
  },
  {
    id: randomUUID(),
    name: 'Sophie',
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Noah',
    child: true,
    confirmed: true,
    invitedBy: 'Lucienne'
  },
  {
    id: randomUUID(),
    name: 'Thomas',
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Mélina',
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Theodor',
    child: true,
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Damien',
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Sarah',
    confirmed: false,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Valentin',
    confirmed: true,
    child: true
  },
  {
    id: randomUUID(),
    name: 'Samantha',
    child: true,
    confirmed: true,
    invitedBy: 'Emile'
  },
  {
    id: randomUUID(),
    name: 'Batiste',
    child: true,
    confirmed: true,
    invitedBy: 'Emile'
  }
];

export const activitiesList = [
  {
    id: randomUUID(),
    time: '10h45 -12h00',
    title: 'Mariage',
    type: 'Evènement principal :',
    adress: '59033 Pl. Augustin Laurent, 59800 Lille, France',
    description:
      'Mariage, à la mairie. Pour rappel, le dress code est mariage décontracté.',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOgqvHMxo_qEcWokl3_VjZjJOs-nW4-uiihvlg=w408-h271-k-no',
    alt: 'photo de la mairie',
    link: ''
  },
  {
    id: randomUUID(),
    time: '12h30 -14h00',
    title: "Burgers : Mom's Burgers",
    type: 'Repas du midi : ',
    adress: '1 avenue quelque part à Lille, 59000 Lille, France',
    description: 'Burgers : "Mom\'s Burgers"',
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
    alt: 'photo de burgers',
    link: 'https://moms-burgers.vercel.app/menu'
  },
  {
    id: randomUUID(),
    time: '14h00 -15h30',
    title: 'Dans le Parc',
    type: 'Balade :',
    adress: 'Bd Jean-Baptiste Lebas, 59000 Lille, France',
    description:
      'Petite balade digestive dans le parc... Visite de la gare St So',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipPXJqRrJ_qxL4eVa53i8Opsuu6UX9SV-VOgw_mD=w408-h306-k-no',
    alt: 'photo de parc',
    link: ''
  },

  {
    id: randomUUID(),
    time: 'Réservation à 17h00',
    title: 'Goûter',
    type: 'Apéro / Goûter :',
    adress: "L'impertinente, 9 Bd Papin, 59800 Lille, France",
    description:
      "Nous ferons une précommande un peu avant la date du mariage, si vous souhaitez manger quelque chose n'hésitez pas nous le faire savoir dès que possible.",
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOatjRJKBcE4JyURPtwQ9yHWqtAfgvw1kRFD-hC=w262-h104-p-k-no',
    alt: 'photo du restaurant',
    link: 'http://www.limpertinente.fr/'
  },
  {
    id: randomUUID(),
    time: 'Le soir',
    title: 'Fiesta',
    type: 'Grosse chouille :',
    adress: 'Rue Solférino, 59000 Lille, France',
    description:
      "Pour ceux qui sont motivés et disponibles, on va faire un pub golf sur la rue de la soif. L'objectif est de finir un verre par bar et de faire les 9 ou 18 trous (bars).",
    imageUrl:
      'https://images.unsplash.com/photo-1600854109241-46990389fb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80',
    alt: 'sign of party',
    link: 'https://lille-centre.climb-up.fr/'
  },
  {
    id: randomUUID(),
    time: 'Le dimanche',
    title: 'Escalade',
    type: 'Escalade bloc :',
    adress: '12 Rue de la Rivierette, 59800 Lille, France',
    description:
      "Pour ceux qui sont motivés et disponibles, on va aller grimper le lendemain matin à la salle d'escalade. Il est possible d'y louer des chaussons.",
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipM5WdESg3mg6Ox6eH4S2axMDIO-d_uZ4I2SNhY1=w408-h272-k-no',
    alt: 'people climbing',
    link: 'https://lille-centre.climb-up.fr/'
  }
];

export const hotelList = [
  {
    id: randomUUID(),
    title: 'Carlton Lille Hotel',
    adress: '3 Rue Pierre Mauroy, 59000 Lille, France',
    tel: '+33320133313',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lille_carlton_depuis_place_du_theatre.jpg/260px-Lille_carlton_depuis_place_du_theatre.jpg',
    price: '170 €',
    link: ''
  },
  {
    id: randomUUID(),
    title: "L'Hermitage Gantois",
    adress: '224 Rue Pierre Mauroy, 59000 Lille, France',
    tel: '+33320853030',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/5/50/Lille_hospice_gantois_trois_quarts_N.jpg',
    price: '260 €',
    link: ''
  },
  {
    id: randomUUID(),
    title: 'Hôtel Ibis Lille Centre Grand Palais',
    adress: '1-3 Rue des Moulins de Garance, 59000 Lille, France',
    tel: '+33320113790',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipMnyiq09jKrfTUOEKcZTUC12R0VCYvqN8wSzfFx=w408-h388-k-no',
    price: '160 €',
    link: ''
  }
];
