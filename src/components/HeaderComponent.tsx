import Image from 'next/image';
import React from 'react';

const HeaderComponent = () => {
  return (
    <section className="w-full italic text-center text-white font-alex">
      <div className="h-[500px] w-full bg-main bg-top bg-cover bg-no-repeat rounded-b-sm">
        <div className="mb-4">
          <h1 className="py-4 text-6xl italic">Mélanie & Swann</h1>
          <h2 className="text-4xl italic">vous invitent à leur mariage</h2>
          <div className="flex flex-col justify-center items-center mx-auto w-72 h-72 bg-center bg-no-repeat bg-cover bg-hero">
            <h3 className="py-4 text-2xl">le 20 mai 2023</h3>
            <h3 className="py-4 text-2xl">A Chilly-Mazarin</h3>
          </div>
        </div>

        {/* <Image
          className="object-cover object-top h-full rounded-sm w-100"
          src="/images/bg-main.webp"
          alt="2 personnes et un bébé"
          width={5184}
          height={3880}
        /> */}
      </div>
    </section>
  );
};

export default HeaderComponent;
