
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
            <Contactus></Contactus>

        </div>
    );
};

export default Investment;
