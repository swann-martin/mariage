import { v4 as randomUUID } from 'uuid';
import Image from 'next/image';
import React, { useState } from 'react';
import { initialListState } from '@/utils/intialValues';

const GuestsListComponent = ({ className }: { className?: string }) => {
  const [list, setList] = useState(initialListState);

  return (
    <div
      className={`flex flex-col justify-between items-center text-white ${className}`}
    >
      <h2 className="my-2 text-2xl">Liste des invités : </h2>
      <div className="flex justify-center items-center w-full">
        {/* <div className="flex items-center">
          <Image
            className="h-[450px] w-full rounded-md md:pr-2 "
            src="/images/flowers.webp"
            width={435}
            height={237}
            alt="friends fun ecard"
          />
        </div> */}
        <div className="grid content-center bg-cover md:grid-cols-3 gap-1w-full">
          {list.map((guest, i) => (
            <div
              className="grid grid-cols-3 col-span-gap-1"
              key={`${guest.id}`}
            >
              <p>{i + 1}</p>
              <p>{guest.bestMan ? guest.name + ' 💍' : guest.name}</p>
              <p
                onClick={() => {
                  guest.confirmed = !guest.confirmed;
                  console.log('guest', guest);
                }}
              >
                {guest.confirmed ? '✅' : '❌'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestsListComponent;
