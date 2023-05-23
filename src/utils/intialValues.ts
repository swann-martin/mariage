import { v4 as randomUUID } from 'uuid';

export const mainBg =
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

export const config = {
  author: 'Swann Martin',
  siteUrl: 'https://swann-martin.xyz/',
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
      'https://lh3.googleusercontent.com/gps-proxy/AE4_-5HdSXWku3mbd30Z_MxjESpiAu1RfEJSKR6Eoji6esisvdsvQos73JQToBB2jg6cX5QGJ9ssn6NRGJ5jVKeFjO7g9jlm3oYw4DoMO5ei3CmUtEES3Hbem0vLk6FdFfGbPKwiO2ZXtO7gnADEYk8xBNc0hO_ilHeFpnoS-IgPbOcl9yOhjLZNGiqKgQ=w408-h306-k-no',
    price: '170 €',
    link: ''
  },
  {
    id: randomUUID(),
    title: "L'Hermitage Gantois",
    adress: '224 Rue Pierre Mauroy, 59000 Lille, France',
    tel: '+33320853030',
    imageUrl:
      'https://lh3.googleusercontent.com/gps-proxy/AE4_-5EOflUGwJNe8RSEUEgmjr4NDD0K393s4Mu7yp2em5FsPY1YlYRkMm6QbyArQBo0TIeQ4R9I9Ys4lqcUtfkQLZRtF5CgPaVxV4M26AcHgtY2nG6q_jk4QyjOlj8GXnoYvb79L--krS01A3T-JmbnW3LvNQu1-n7OsfcFIwbTKUaW4pLkWrf1KhSn=w444-h240-k-no',
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
