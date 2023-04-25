import Image from 'next/image';
import React from 'react';
import { activitiesList } from '../utils/intialValues';

const ScheduleComponent = () => {
  return (
    <section className="container flex flex-col justify-start items-start p-2 sm:p-0">
      <h2 className="py-4 text-2xl text-center">Emploi du temps :</h2>

      <div className="grid grid-cols-1 gap-2 xl:grid-cols-2">
        {activitiesList?.map((activity, index) => (
          <div
            key={activity.id}
            className="flex flex-col justify-between items-center bg-blue-300 bg-opacity-20 rounded-lg drop-shadow-lg backdrop-blur-lg md:flex-row"
          >
            <p className="p-2 my-auto">{activity.time}&nbsp;</p>
            <div className="flex flex-col items-start w-full md:w-2/3 sm:flex-row">
              <Image
                className="object-cover my-2 mr-2 ml-auto w-full h-48 rounded-md md:h-32 md:w-32"
                src={activity.imageUrl}
                width={2556}
                height={1864}
                alt={activity.alt}
              />
              <div className="flex flex-col p-2">
                <h3 className="font-bold">
                  {activity.type}&nbsp;
                  <span className="italic">{activity.adress}</span>
                </h3>

                <p>{activity.description}</p>
                {activity.link !== '' && (
                  <a
                    className="p-2 my-2 mr-1 ml-auto font-bold rounded-md bg-accent"
                    href={activity.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {index + 1 === activitiesList.length
                      ? 'Voir le site'
                      : 'Voir le menu'}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleComponent;
