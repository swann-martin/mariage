import GuestsListComponent from '@/components/GuestsListComponent';
import Link from 'next/link';
import React from 'react';

export default function list() {
  return (
    <div className="h-screen text-white bg-primary">
      <div className="container pt-2 mx-auto">
        <Link className="" href={'/'}>
          Go back to main page
        </Link>
        <GuestsListComponent />
      </div>
    </div>
  );
}
