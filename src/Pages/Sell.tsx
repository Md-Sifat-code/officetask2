import React from 'react';
import Hero from '../sell/Hero';
import SellingProcess from '../sell/SellingProcess';
import ContactForm from '../sell/ContactForm';

const Sell: React.FC = () => {
  return (
    <div>
      <Hero/>
      <SellingProcess/>
      <ContactForm/>
    </div>
  );
};

export default Sell;
