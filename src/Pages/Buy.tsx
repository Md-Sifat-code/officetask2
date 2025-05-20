import React from 'react';

import Hero from '../components/Hero';
import Discover from '../BuyComponents/Discover';

const Buy: React.FC = () => {
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <Discover/>
      </div>
    </div>
  );
};

export default Buy;
