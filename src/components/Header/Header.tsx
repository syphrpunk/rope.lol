import React from 'react';
import AccountButton from '../TopBar/components/AccountButton';

export const Header = () => {
  return (
    <div>
      <header className='visible sm:invisible sm:hidden'>
        <div className='flex justify-end'>
          <img
            className='object-contain'
            src='/images/NFTz-coming-soon.png'
            alt='soon'
          />
        </div>
        <img
          className='object-contain pl-4 -mt-16'
          src='/images/ROPE.png'
          alt='rope'
        />
      </header>
      <header className='hidden invisible sm:flex sm:visible w-full justify-between'>
        <img
          className='object-contain pl-4'
          src='/images/ROPE.png'
          alt='rope'
        />
        <div className='mt-4'>
          <AccountButton />
        </div>
        <img
          className='object-contain'
          src='/images/NFTz-coming-soon.png'
          alt='soon'
        />
      </header>
    </div>
  );
};
