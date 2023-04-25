import Image from 'next/image';
import React from 'react';
import { MdLocationPin, MdPhone, MdEuro } from 'react-icons/md';
import { hotelList } from '@/utils/intialValues';

const TipsComponent = () => {
  return (
    <section className="p-2 w-full sm:p-0">
      <h2 className="my-2 text-2xl">Astuces et recommandations</h2>
      <h2 className="my-2 text-lg">Hébergement</h2>
      <div className="w-full">
        <div className="grid grid-cols-1 content-center md:grid-cols-3 lg:grid-cols-4">
          {hotelList?.map((hotel) => (
            <div
              className="my-3 w-full bg-blue-300 bg-opacity-20 rounded-lg drop-shadow-lg backdrop-blur-lg d md:w-56"
              key={hotel.id}
            >
              <h5 className="p-2 h-20 text-center uppercase">{hotel.title}</h5>
              <Image
                className="object-cover object-center w-full h-48 rounded-sm"
                src={hotel.imageUrl}
                alt="Card image cap"
                width={500}
                height={500}
              />

              <div className="p-2">
                <div className="flex justify-start">
                  <div className="w-10">
                    <MdLocationPin className="text-secondary" size={24} />
                  </div>
                  <span>{hotel.adress}</span>
                </div>

                <div className="flex justify-start">
                  <div className="w-10">
                    <MdPhone className="text-secondary" size={24} />
                  </div>
                  <span>{hotel?.tel}</span>
                </div>

                <div className="flex justify-start">
                  <div className="w-10">
                    <MdEuro className="text-secondary" size={24} />
                  </div>
                  <span>{hotel?.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsComponent;
