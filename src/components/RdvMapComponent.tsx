import Image from 'next/image';
import React from 'react';
import { MdDriveEta, MdLocationPin } from 'react-icons/md';
import { GiClothes } from 'react-icons/gi';
import { config } from '@/utils/intialValues';

const RdvMapComponent = () => {
  const title = `Le mariage commence à ${config.weddingStarts}`;
  const address = `A ${config.weddingPlace} : ${config.weddingPlaceAddress};`;

  return (
    <section className="p-2 text-white sm:p-0">
      <h2 className="py-4 text-2xl">{title}</h2>

      <div className="flex flex-col flex-wrap justify-around items-center md:flex-row">
        {/* container with 2 part map  */}
        <div className="md:h-[450px] rounded-md flex flex-col justify-between w-full md:w-1/2 mb-2">
          {/* container with city  council picture and details */}
          <div className="grid md:grid-cols-2">
            {/* city council picture  */}
            <div className="w-full">
              <Image
                className="my-2 bg-contain rounded-md"
                src={config.imgCouncil}
                width={2556}
                height={1864}
                alt="image de mairie"
              />
            </div>

            {/* container with 2  */}
            <div className="p-2 w-full">
              {/* container   */}
              <div className="flex items-start">
                {/* city council address infos  */}
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

              {/* car park infos  */}
              <div className="flex items-start py-2">
                <div className="mr-2">
                  <MdDriveEta className="text-white" size={24} />
                </div>
                <h3 className="">Pour vous garer : {config.carPark}</h3>
              </div>

              {/* dress code  infos  */}
              <div className="flex items-start py-2">
                <div className="mr-2">
                  <GiClothes className="text-white" size={24} />
                </div>
                <h3 className="">Dress code : {config.dressCode}</h3>
              </div>
            </div>
          </div>
          {/* container with pictures of examples of weddings style  */}
          <div className="grid grid-cols-3 gap-2 h-32 md:pr-2 md:h-36">
            <Image
              className="w-full h-32 rounded-md md:h-36"
              alt="wedding picture newly wed in a pasture with sheeps"
              src={config.img1}
              width={500}
              height={500}
            />
            <Image
              className="w-full h-32 rounded-md md:h-36"
              alt="wedding picture newly wed sat by a river"
              src={config.img2}
              width={500}
              height={500}
            />
            <Image
              className="w-full h-32 rounded-md md:h-36"
              alt="wedding picture newly wed in a vinyard"
              src={config.img3}
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
          // src="https://www.openstreetmap.org/export/embed.html?bbox=2.309440970420838%2C48.70179517650844%2C2.316253781318665%2C48.705123041147374&amp;zoom=50&amp;layer=mapnik&amp;marker=48.70257051782459%2C2.3125845193862915"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.0611085891723633%2C50.62725783205689%2C3.074734210968018%2C50.633471276369605&amp;layer=mapnik&amp;marker=50.63036465686395%2C3.0679214000701904"
          className="h-[250px] md:h-[450px] w-full mt-3 md:w-1/2 rounded-md my-2"
          seamless
        />
      </div>
    </section>
  );
};

export default RdvMapComponent;
