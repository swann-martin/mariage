import Image from "next/image";
import React from "react";

const HeaderComponent = () => {
  return (
    <section className="w-full font-bold text-center text-white">
      <h1 className="py-4 text-4xl">
        Vous êtes convié.e au Mariage de Mélanie et Swann
      </h1>
      <h2 className="py-4 text-2xl">Le 20 mai 2023 à Chilly-Mazarin</h2>
      <div className="h-[500px] w-full">
        <Image
          className="object-cover object-top h-full rounded-sm w-100"
          src="/images/bg-main.jpg"
          alt="2 personnes et un bébé"
          width={5184}
          height={3880}
        />
      </div>
    </section>
  );
};

export default HeaderComponent;
