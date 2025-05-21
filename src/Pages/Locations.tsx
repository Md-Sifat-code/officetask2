import React from 'react';
import Hero from '../locations/Hero';
import Info from '../locations/Info';
import Card from '../locations/Card';
import PrimeLocations from '../locations/PrimeLocations';

const Locations: React.FC = () => {
  return (
   <>
   <Hero/>
    <div className='px-[10%]'>
      
      <Info/>
    </div>
    <div>
      <Card/>
      <PrimeLocations/>
    </div>
   </>
  );
};

export default Locations;
