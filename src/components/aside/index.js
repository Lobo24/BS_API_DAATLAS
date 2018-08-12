import React from 'react';
import Countries from './countries/';

const Aside = () => {
  return (
    <div className='cont'>
      <div className='searched-countries'>
        <Countries />
      </div>
    </div>
  );
}

export default Aside;