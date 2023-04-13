import Image from 'next/image';
import React from 'react';
import { MdDriveEta, MdLocationPin } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';

const RdvMapComponent = () => {
  const title = 'Le mariage commence à 15h';
  const address =
    'A la mairie de Chilly-Mazarin : Pl. du 8 Mai 1945, 91380 Chilly-Mazarin, France';

  return (
    <section className="text-white">
      <h2 className="p-2 py-4 text-2xl">{title}</h2>

      <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-around">
        {/* container with pictures and details */}
        <div className="h-[450px] rounded-md flex flex-col justify-between w-full md:w-1/2 ">
          {/* container with picture */}
          <div className="grid grid-cols-2">
            <div className="w-full">
              <Image
                className="my-2 bg-contain rounded-md"
                src="/images/mairie.jpeg"
                width={2556}
                height={1864}
                alt="Mairie de chilly Mazarin"
              />
            </div>

            {/* container with details */}
            <div className="p-2 w-full">
              <div className="flex items-start">
                <div className="mr-2">
                  <MdLocationPin className="text-white" size={24} />
                </div>
                <h3 className="">
                  <a
                    href="https://www.google.com/maps/place/Pl.+du+8+Mai+1945,+91380+Chilly-Mazarin,+France/@48.7017472,2.311804,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6762c11393225:0x3431dfe79a93d801!8m2!3d48.7017472!4d2.3139927!16s%2Fg%2F1tfwp8h7"
                    rel="none"
                    target="_blank"
                  >
                    {address}
                  </a>
                </h3>
              </div>

              <div className="flex items-start py-2">
                <div className="mr-2">
                  <MdDriveEta className="text-white" size={24} />
                </div>
                <h3 className="">
                  Pour vous garer : le parking de l&apos;église ou près du parc
                </h3>
              </div>
              <div className="flex items-start py-2">
                <div className="mr-2">
                  <GiClothes className="text-white" size={24} />
                </div>
                <h3 className="">
                  Dress code : Mariage Champêtre, décontracté
                </h3>
              </div>
            </div>
          </div>
          {/* container with pictures of examples of weddings style  */}
          <div className="grid grid-cols-3 gap-2 pr-2 h-36">
            <Image
              className="w-full h-36 rounded-md"
              alt="wedding picture newly wed in a pasture with sheeps"
              src="https://images.unsplash.com/photo-1495705073369-e23c899a68d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-36 rounded-md"
              alt="wedding picture newly wed sat by a river"
              src="https://images.unsplash.com/photo-1430799800631-b8de6ce1fad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
              width={500}
              height={500}
            />
            <Image
              className="w-full h-36 rounded-md"
              alt="wedding picture newly wed in a vinyard"
              src="https://images.unsplash.com/photo-1509331019631-b8f9bda9f91b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              width={500}
              height={500}
            />
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
