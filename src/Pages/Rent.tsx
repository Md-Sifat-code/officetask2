import React from 'react';
import Homehero from "../HomeComponents/Homehero"
import Hotels from "../HomeComponents/Hotels"

const Rent: React.FC = () => {
  return (
    <div>
      <div>
            <Homehero/>
        </div>
        <div className='mt-12'>
            <Hotels/>
        </div>
    </div>
  );
};

export default Rent;
