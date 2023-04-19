import { v4 as randomUUID } from 'uuid';

export const config = {
  author: 'Swann Martin',
  siteUrl: 'https://swann-martin.xyz/',
  year: '2023',
  brideName: 'Mélanie',
  groomName: 'Swann',
  city: 'Chilly-Mazarin',
  weddingStarts: '15h',
  weddingDay: '20 mai 2023',
  weddingPlace: 'la mairie de Chilly-Mazarin',
  weddingPlaceAddress: 'Pl. du 8 Mai 1945, 91380 Chilly-Mazarin, France'
};

export const activitiesList = [
  {
    id: randomUUID(),
    time: '11h30 -12h00',
    title: 'Livraison de repas italiens : "Gusto e Passione"',
    type: 'Repas du midi : ',
    adress: 'chez les parents de Mélanie',
    description:
      'Livraison de repas italiens : "Gusto e Passione", chez les parents de Mélanie.',
    imageUrl: '/images/pasta.jpg',
    alt: 'photo de plat italien',
    link: 'https://gustoepassione.fr/'
  },
  {
    id: randomUUID(),
    time: '13h30 -14h30',
    title: 'Dans le Parc',
    type: 'Balade / Sieste :',
    adress: '13 Av. de Carlet, 91380 Chilly-Mazarin, France',
    description:
      'Petite balade digestive dans le parc de Chilly-Mazarin. Ce sera aussi le moment de se préparer pour le mariage.',
    imageUrl: '/images/parc.jpg',
    alt: 'photo de parc',
    link: ''
  },
  {
    id: randomUUID(),
    time: '14h45 -16h00',
    title: 'Mariage',
    type: 'Evènement principal :',
    adress: '13 Av. de Carlet, 91380 Chilly-Mazarin, France',
    description:
      'Mariage de Mélanie et Swann, à la mairie de Chilly-Mazarin. Pour rappel, le dress code est mariage champêtre, décontracté.',
    imageUrl: '/images/mairie.jpeg',
    alt: 'photo de la mairie',
    link: ''
  },
  {
    id: randomUUID(),
    time: 'Réservation à 17h00',
    title: 'Goûter',
    type: 'Apéro / Goûter :',
    adress: 'Loulou Antony, Rue du Marché, Antony,',
    description:
      "Nous ferons une précommande de gateaux, le 5 mai, si vous souhaitez manger quelque chose n'hésitez pas nous le faire savoir dès que possible.",
    imageUrl: '/images/loulou.webp',
    alt: 'photo de pancakes',
    link: 'https://www.loulou-antony.com/menu'
  },
  {
    id: randomUUID(),
    time: 'Le dimanche',
    title: 'Escalade',
    type: 'Escalade bloc :',
    adress: 'Arkose Massy 4 Rue Galvani, 91300 Massy',
    description:
      "Pour ceux qui sont motivés et disponibles, on va aller grimper le lendemain matin à la salle d'escalade d'Arkose Massy. Il est possible d'y louer des chaussons.",
    imageUrl: '/images/climbingshoes.webp',
    alt: 'newly wed putting on climbing shoes from https://www.pixiesinthecellar.co.uk/',
    link: 'https://arkose.com/massy'
  }
];

export const hotelList = [
  {
    id: randomUUID(),
    title: 'HôtelF1 Chilly Mazarin les Champarts',
    adress: 'Za De La Butte Au Berger, 91380 Chilly-Mazarin, France',
    imageUrl:
      'https://images.unsplash.com/photo-1578681041175-9717c16b0d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: '40 €',
    tel: '+33892688900'
  },
  {
    id: randomUUID(),
    title: 'Ibis budget Chilly-Mazarin',
    adress: '2 Rte de Longjumeau, 91380 Chilly-Mazarin, France',
    tel: '+33892688900',
    imageUrl:
      'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: '70 €'
  },
  {
    id: randomUUID(),
    title: 'Ibis budget Antony Massy',
    adress:
      'Z.I Du, 11, Rue Marcelin Berthelot, Rue du Vaulorin, 92160 Antony, France',
    tel: '+33892680782',
    imageUrl:
      'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: '50 - 70 €'
  },
  {
    id: randomUUID(),
    title: 'Appart Hôtel Gîte Antony',
    adress: '22 Rue de la Vall. des Saubergeaux, 92160 Antony, France',
    tel: '+33671162321',
    imageUrl:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: '70 €'
  }
];
