import React from 'react';
import { Outlet } from 'react-router-dom';

const Investment: React.FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Investment;
