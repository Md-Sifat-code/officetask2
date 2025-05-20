import React from 'react';
import { Outlet } from 'react-router-dom';
import WhyShould from '../components/Investment/WhyShould';
import Banner from '../components/Investment/Banner';

const Investment: React.FC = () => {
    return (
        <div>
            <Outlet />
            <Banner></Banner>
            <WhyShould></WhyShould>
        </div>
    );
};

export default Investment;
