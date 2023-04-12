import Image from 'next/image';
import React from 'react';

const RdvMapComponent = () => {
  const title = 'Rendez-vous pour le mariage à 15h';
  const subtitle =
    'A la mairie de Chilly-Mazarin : Pl. du 8 Mai 1945, 91380 Chilly-Mazarin, France';
  return (
    <section className="text-center text-white">
      <h2 className="py-4 text-2xl">{title}</h2>
      <h3 className="py-4 text-2xl">{subtitle}</h3>
      <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-around">
        <Image
          className="h-[450px] w-full md:w-1/2 rounded-md my-2 "
          src="/images/mairie.jpeg"
          width={2556}
          height={1864}
          alt="Mairie de chilly Mazarin"
        />
        <iframe
          width={600}
          height={450}
          loading="lazy"
          style={{ border: 0, margin: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=2.309440970420838%2C48.70179517650844%2C2.316253781318665%2C48.705123041147374&amp;zoom=50&amp;layer=mapnik&amp;marker=48.70257051782459%2C2.3125845193862915"
          className="h-[450px] w-full md:w-1/2 rounded-md my-2"
          seamless
        />
        <p className="z-10 pr-3 text-end text-red">
          🚗 Pour vous garer : le parking de l&apos;église, près du parc, le
          parking de liddl.
        </p>
      </div>
    </section>
  );
};

export default RdvMapComponent;
