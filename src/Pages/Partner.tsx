import Banner from '../components/Investment/Banner';
import heroImg from '/assets/partnerImg.jpg'

import WhyShould from '../components/Investment/WhyShould';
import CallToAction from '../components/Locations/CallToAction';
import { Contactus } from '../components/Investment/Contactus';
import { Outlet } from 'react-router-dom';

const Partner = () => {
  return (
    <div>
      <Outlet />
      <Banner title="Partnership" hero={heroImg}></Banner>
      <WhyShould></WhyShould>
      <CallToAction></CallToAction>
      <Contactus hero='Contact Us for Information About Premium Dubai Investment Properties' title="We help clients locate prime opportunities, including Dubai off plan property investments, that have exceptional value and potential.  Whether you're looking for a lucrative investment property in Dubai or a dream home, our bespoke services ensure you find the perfect match. From property selection to streamlining the buying process, we provide comprehensive support and expert guidance at every step. " ></Contactus>
    </div>
  );
};

export default Partner;
