import React from 'react';
import { Outlet } from 'react-router-dom';
import WhyShould from '../components/Investment/WhyShould';
import Banner from '../components/Investment/Banner';
import { KeyReasons } from '../components/Investment/KeyReasons';

const Investment: React.FC = () => {
    return (
        <div>
            <Outlet />
            <Banner></Banner>
            <WhyShould></WhyShould>
            <KeyReasons></KeyReasons>
        </div>
    );
};

export default Investment;
