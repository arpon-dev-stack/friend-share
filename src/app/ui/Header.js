import React from 'react';
import { yeseva_one } from './fonts';

const Header = () => {
  return (
    <header className='w-full h-[60px] max-w-[2000px] left-1/2 -translate-x-1/2 shadow-sm fixed flex justify-between items-center sm:px-10 px-1 backdrop-blur-3xl bg-button z-50'>
      <span className={`${yeseva_one.className} text-white text-3xl`}>
        friend share
      </span>
      <button className='text-[15px] button-interaction border px-3 py-1 text-white'>
        Sign in
      </button>
    </header>
  );
};

export default Header;
