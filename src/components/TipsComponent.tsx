import Image from "next/image";
import React from "react";
import { v4 as randomUUID } from "uuid";

const TipsComponent = () => {
  const hotelList = [
    {
      id: randomUUID(),
      title: "HôtelF1 Chilly Mazarin les Champarts",
      adress: "Za De La Butte Au Berger, 91380 Chilly-Mazarin, France",
      imageUrl:
        "https://images.unsplash.com/photo-1578681041175-9717c16b0d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: "40 €",
      tel: "+33892688900",
    },
    {
      id: randomUUID(),
      title: "Ibis budget Chilly-Mazarin",
      adress: "2 Rte de Longjumeau, 91380 Chilly-Mazarin, France",
      tel: "+33892688900",
      imageUrl:
        "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "70 €",
    },
    {
      id: randomUUID(),
      title: "Ibis budget Antony Massy",
      adress:
        "Z.I Du, 11, Rue Marcelin Berthelot, Rue du Vaulorin, 92160 Antony, France",
      tel: "+33892680782",
      imageUrl:
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "50 - 70 €",
    },
    {
      id: randomUUID(),
      title: "Appart Hôtel Gîte Antony",
      adress: "22 Rue de la Vall. des Saubergeaux, 92160 Antony, France",
      tel: "+33671162321",
      imageUrl:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: "70 €",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="my-2 text-2xl">Astuces et recommandations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {hotelList?.map((hotel) => (
          <div className="m-3 w-56 bg-purple-700 rounded-md" key={hotel.id}>
            <h5 className="p-2 h-20 text-center uppercase">{hotel.title}</h5>
            <Image
              className="object-contain object-center w-full h-48 rounded-sm"
              src={hotel.imageUrl}
              alt="Card image cap"
              width={500}
              height={500}
            />

            <div className="p-2">
              <p className="text-italic">{hotel.adress}</p>

              <p>tel : {hotel?.tel}</p>
              <p>Prix : {hotel?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsComponent;
