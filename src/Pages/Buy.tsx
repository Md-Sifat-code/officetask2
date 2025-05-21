import React from 'react';

import Hero from '../components/Hero';
import Discover from '../BuyComponents/Discover';
import ExploreNow from '../BuyComponents/ExploreNow';
import Buy_Partners from '../BuyComponents/Buy_Partners';
import MakeBest from '../BuyComponents/MakeBest';
import Display from '../BuyComponents/Display';
import Lavelup from '../BuyComponents/Lavelup';


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
        
      </div>
      <div>
        <ExploreNow/>
      </div>
      <div>
        <Buy_Partners/>
      </div>
      <div>
        <MakeBest/>
      </div>
      <div>
        <Display/>
      </div>
      <div>
        <Lavelup/>
      </div>
      
    </div>
  );
};

export default Buy;
