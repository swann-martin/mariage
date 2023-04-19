import React from 'react';
import { config } from '../utils/intialValues';
const HeaderComponent = () => {
  const { brideName, groomName, city } = config;
  return (
    <section className="w-full italic text-center text-white font-alex">
      <div className="h-[500px] w-full bg-main bg-top bg-cover bg-no-repeat rounded-b-sm">
        <div className="mb-4">
          <h1 className="py-4 text-6xl italic">
            {brideName} & {groomName}
          </h1>
          <h2 className="text-4xl italic">vous invitent à leur mariage</h2>
          <div className="flex flex-col justify-center items-center mx-auto w-72 h-72 bg-center bg-no-repeat bg-cover bg-hero">
            <h3 className="py-4 text-2xl">{config.weddingDay}</h3>
            <h3 className="py-4 text-2xl">à {city}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderComponent;
