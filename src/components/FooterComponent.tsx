import { config } from '@/utils/intialValues';
import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="py-3">
      <p className="text-center text-white">
        &copy; &nbsp;{config.author} {config.year}
      </p>
    </footer>
  );
};

export default FooterComponent;
