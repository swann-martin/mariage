import { v4 as randomUUID } from 'uuid';
import Image from 'next/image';
import React, { useState } from 'react';

const initialListState = [
  {
    id: randomUUID(),
    name: 'Mélanie',
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Swann',
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Sacha',
    confirmed: true,
    child: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Armelle',
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Pascal',
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Jean-Claude',
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Sylvie',
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Camille',
    confirmed: true,
    invitedBy: 'Swann',
    bestMan: true
  },
  {
    id: randomUUID(),
    name: 'André',
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Vincent',
    confirmed: true,
    invitedBy: 'Mélanie',
    bestMan: true
  },
  {
    id: randomUUID(),
    name: 'Camille',
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Eva',
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Mélanie',
    confirmed: true,
    invitedBy: 'Mélanie',
    bestMan: true
  },
  {
    id: randomUUID(),
    name: 'Sofiane',
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Noam',
    child: true,
    confirmed: true,
    invitedBy: 'Mélanie'
  },
  {
    id: randomUUID(),
    name: 'Thomas',
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Maeva',
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Tea',
    child: true,
    confirmed: true,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Damien',
    confirmed: false,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Sarah',
    confirmed: false,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Valentine',
    confirmed: false,
    child: true
  },
  {
    id: randomUUID(),
    name: 'Samuel',
    child: true,
    confirmed: false,
    invitedBy: 'Swann'
  },
  {
    id: randomUUID(),
    name: 'Bastien',
    child: true,
    confirmed: false,
    invitedBy: 'Swann'
  }
];

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
