import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Investment/Banner';
import WhyShould from '../components/Investment/WhyShould';

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
