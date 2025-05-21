
import { Outlet } from 'react-router-dom';
import WhyShould from '../components/Investment/WhyShould';
import Banner from '../components/Investment/Banner';
import { KeyReasons } from '../components/Investment/KeyReasons';
import { Contactus } from '../components/Investment/Contactus';
import hero from '/assets/investmentBanner.jpg'
const Investment = () => {
    return (
        <div >
            <Outlet />
            <Banner title="Investment" hero={hero} ></Banner>
            <WhyShould></WhyShould>
            <KeyReasons></KeyReasons>
            <Contactus hero='Contact Us for Information About Premium Dubai Investment Properties' title="We help clients locate prime opportunities, including Dubai off plan property investments, that have exceptional value and potential.  Whether you're looking for a lucrative investment property in Dubai or a dream home, our bespoke services ensure you find the perfect match. From property selection to streamlining the buying process, we provide comprehensive support and expert guidance at every step. "></Contactus>

        </div >
    );
};

export default Investment;
