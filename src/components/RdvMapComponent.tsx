import Image from "next/image";
import React from "react";

const RdvMapComponent = () => {
  const title = "Rendez-vous pour le mariage à 15h";
  const subtitle =
    "A la mairie de Chilly-Mazarin : Pl. du 8 Mai 1945, 91380 Chilly-Mazarin, France";
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.131536802875!2d2.310820415399214!3d48.70296677927251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6762c4fe9e9a9%3A0x4194a55eab07c40!2sPl.%20de%20l&#39;%C3%89glise%2C%2091380%20Chilly-Mazarin%2C%20France!5e0!3m2!1sfr!2sbe!4v1680526090930!5m2!1sfr!2sbe"
          width={600}
          height={450}
          className="h-[450px] w-full md:w-1/2 rounded-md my-2 "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="pr-3 text-end">
        🚗 Pour vous garer : le parking de l&apos;église, près du parc, le
        parking de liddl.
      </p>
    </section>
  );
};

export default RdvMapComponent;
