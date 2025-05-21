import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Rent', path: '/rent' },
    { name: 'Invest', path: '/invest' }, // Assuming this is planned
    { name: 'Locations', path: '/locations' },
    { name: 'Company', path: '/company' },
    { name: 'Visas', path: '/visas' },
    { name: 'Partner', path: '/partner' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full  z-50 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-row justify-between items-center">
        
        {/* Logo */}
        <Link to={'/'} className="text-2xl font-bold text-white">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end={path === '/'} // So only '/' matches exactly for 'Buy'
              className={({ isActive }) =>
                isActive
                  ? 'font-semibold text-gray-300 border-b-2 border-white pb-1'
                  : 'hover:text-gray-300 transition'
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <button className="buttonbg text-white font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
            LIST YOUR PROPERTY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
