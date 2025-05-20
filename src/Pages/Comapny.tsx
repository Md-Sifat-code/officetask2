import React from 'react';
import { Outlet } from 'react-router-dom';

const Company: React.FC = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default Company;
