import Image from 'next/image';
import React from 'react';
import { v4 as randomUUID } from 'uuid';

const ScheduleComponent = () => {
  const activitiesList = [
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

  return (
    <section className="container flex flex-col justify-start items-start p-2 sm:p-0">
      <h2 className="py-4 text-2xl text-center">Emploi du temps :</h2>

      <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
        {activitiesList?.map((activity, index) => (
          <div
            key={activity.id}
            className="flex justify-between items-center p-2 bg-blue-300 bg-opacity-20 rounded-lg drop-shadow-lg backdrop-blur-lg md:flex-row"
          >
            <p className="my-auto">{activity.time}&nbsp;</p>
            <div className="flex items-start w-2/3">
              <Image
                className="object-cover my-2 mr-2 ml-auto w-24 h-24 rounded-md md:h-32 md:w-32"
                src={activity.imageUrl}
                width={2556}
                height={1864}
                alt={activity.alt}
              />
              <div className="flex flex-col">
                <h3 className="font-bold">
                  {activity.type}&nbsp;
                  <span className="italic">{activity.adress}</span>
                </h3>

                <p>{activity.description}</p>
                {activity.link !== '' && (
                  <a
                    className="p-2 my-2 mr-1 ml-auto font-bold rounded-md bg-accent"
                    href={activity.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {index + 1 === activitiesList.length
                      ? 'Voir le site'
                      : 'Voir le Menu'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleComponent;
