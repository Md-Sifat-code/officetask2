import React from 'react';

import Hero from '../components/Hero';
import Discover from '../BuyComponents/Discover';
import ExploreNow from '../BuyComponents/ExploreNow';

const Buy: React.FC = () => {
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div>
        <Discover/>
      </div>
      <div>
        <ExploreNow/>
      </div>
    </div>
  );
};

export default Buy;
