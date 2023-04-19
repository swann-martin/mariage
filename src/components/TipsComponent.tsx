import Image from 'next/image';
import React from 'react';
import { v4 as randomUUID } from 'uuid';
import { MdLocationPin, MdPhone, MdEuro } from 'react-icons/md';

const TipsComponent = () => {
  const hotelList = [
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

  return (
    <section className="p-2 w-full sm:p-0">
      <h2 className="my-2 text-2xl">Astuces et recommandations</h2>
      <h2 className="my-2 text-lg">Hébergement</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
    </section>
  );
};

export default TipsComponent;
