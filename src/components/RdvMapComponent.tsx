import Image from 'next/image';
import React from 'react';
import { MdDriveEta, MdLocationPin } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';

const RdvMapComponent = () => {
  const title = 'Le mariage commence à 15h';
  const subtitle =
    'A la mairie de Chilly-Mazarin : Pl. du 8 Mai 1945, 91380 Chilly-Mazarin, France';
  return (
    <section className="text-white">
      <h2 className="p-2 py-4 text-2xl">{title}</h2>
      <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-around">
        <div className="h-[450px] rounded-md  w-full md:w-1/2 flex justify-between">
          <div className="w-1/2">
            <Image
              className="my-2 bg-contain rounded-md"
              src="/images/mairie.jpeg"
              width={2556}
              height={1864}
              alt="Mairie de chilly Mazarin"
            />
          </div>
          <div className="p-2 w-1/2">
            <div className="flex items-start">
              <div className="mr-2">
                <MdLocationPin className="text-white" size={24} />
              </div>
              <h3 className="">{subtitle}</h3>
            </div>

            <div className="flex items-start py-2">
              <div className="mr-2">
                <MdDriveEta className="text-white" size={24} />
              </div>
              <h3 className="">
                Pour vous garer : le parking de l&apos;église, près du parc, le
                parking de liddl.
              </h3>
            </div>
            <div className="flex items-start py-2">
              <div className="mr-2">
                <GiClothes className="text-white" size={24} />
              </div>
              <h3 className="">Dress code : Mariage Champêtre</h3>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default RdvMapComponent;
