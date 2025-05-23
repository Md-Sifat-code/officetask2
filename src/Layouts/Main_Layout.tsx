import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div>
        <Navbar/>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
