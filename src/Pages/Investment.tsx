import React from 'react';
import { Outlet } from 'react-router-dom';
import WhyShould from '../components/Investment/WhyShould';
import Banner from '../components/Investment/Banner';
import { KeyReasons } from '../components/Investment/KeyReasons';
import { Contactus } from '../components/Investment/Contactus';
import Footer from '../components/Footer';

const Investment: React.FC = () => {
    return (
        <div>
            <Outlet />
            <Banner></Banner>
            <WhyShould></WhyShould>
            <KeyReasons></KeyReasons>
            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Investment;
