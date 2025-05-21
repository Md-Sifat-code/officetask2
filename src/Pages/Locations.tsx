import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Investment/Banner';
import heroImg from '/assets/partnerImg.jpg'

import WhyShould from '../components/Investment/WhyShould';
import CallToAction from '../components/Locations/CallToAction';
import { Contactus } from '../components/Investment/Contactus';
const Locations: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Banner title="Partnership" hero={heroImg}></Banner>
      <WhyShould></WhyShould>
      <CallToAction></CallToAction>
      <Contactus></Contactus>

    </div>
  );
};

export default Locations;
