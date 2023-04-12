import Image from 'next/image';
import React from 'react';

const ScheduleComponent = () => {
  return (
    <section className="container flex flex-col justify-start items-start p-2">
      <h2 className="py-4 text-2xl text-center">Emploi du temps :</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="my-auto">11h30 -12h00 :&nbsp;</p>
        <div className="flex justify-between items-center md:flex-row">
          <Image
            className="object-center my-2 mr-2 ml-auto w-24 h-24 rounded-md md:h-32 md:w-32"
            src="/images/pasta.jpg"
            width={2556}
            height={1864}
            alt="Mairie de chilly Mazarin"
          />
          <span className="text-left">
            Livraison de repas italiens &quot;Gusto e Passione&quot;, chez les
            parents de Mélanie.
            <a
              href="https://gustoepassione.fr/"
              className="text-left text-violet-500"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Voir le Menu
            </a>
          </span>
        </div>
        <p className="my-auto">13h30 - 14h30 :&nbsp;</p>
        <div className="flex justify-between items-center md:flex-row">
          <Image
            className="object-cover object-left my-2 mr-2 w-24 h-24 rounded-md md:h-32 md:w-32"
            src="/images/parc.jpg"
            width={2556}
            height={1864}
            alt="Mairie de chilly Mazarin"
          />
          <span className="">
            Sieste de Sacha ou balade dans le parc, 13 Av. de Carlet, 91380
            Chilly-Mazarin, France
            <a href="#"></a>
          </span>
        </div>
        <p className="my-auto">14h50 - 15h00 :&nbsp;</p>
        <div className="flex justify-between items-center md:flex-row">
          <Image
            className="my-2 mr-2 ml-auto w-24 h-24 rounded-md md:h-32 md:w-32"
            src="/images/mairie.jpeg"
            width={2556}
            height={1864}
            alt="Mairie de chilly Mazarin"
          />
          <span className="">
            Evènement principal : Mariage de Mélanie et Swann, 13 Av. de Carlet,
            91380 Chilly-Mazarin,
            <a href="#"></a>
          </span>
        </div>
        <p className="my-auto">Réservation à 17h00 :&nbsp;</p>
        <div className="flex justify-between items-center md:flex-row">
          <Image
            className="my-2 mr-2 ml-auto w-24 h-24 rounded-md md:h-32 md:w-32"
            src="/images/loulou.webp"
            width={435}
            height={255}
            alt="Mairie de chilly Mazarin"
          />
          <span className="">
            Apéro goûté au Loulou Antony, Rue du Marché, Antony, France, France
            <a
              className="text-violet-500"
              href="https://www.loulou-antony.com/menu"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;Voir le Menu envoyer un email 2 semaine avant pour
              précommander à lucas@loulou-antony.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ScheduleComponent;
