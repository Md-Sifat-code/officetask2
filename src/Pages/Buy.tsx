import React from 'react';

import Hero from '../components/Hero';
import Discover from '../BuyComponents/Discover';
import ExploreNow from '../BuyComponents/ExploreNow';
import Buy_Partners from '../BuyComponents/Buy_Partners';

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
      <div>
        <Buy_Partners/>
      </div>
    </div>
  );
};

export default Buy;
