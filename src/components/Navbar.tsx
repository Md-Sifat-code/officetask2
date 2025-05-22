import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Rent', path: '/rent' },
    { name: 'Invest', path: '/invest' },
    { name: 'Locations', path: '/locations' },
    { name: 'Company', path: '/company' },
    { name: 'Visas', path: '/visas' },
    { name: 'Partner', path: '/partner' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 text-white">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end={path === '/'}
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

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <button className="buttonbg text-white font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
            LIST YOUR PROPERTY
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden text-white">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="block lg:hidden bg-black/90 px-4 py-4 space-y-4 text-white">
          <nav className="flex flex-col space-y-3">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                end={path === '/'}
                onClick={() => setMobileMenuOpen(false)} // close menu on link click
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-gray-300 border-b-2 border-white pb-1'
                    : 'hover:text-gray-300 transition'
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="buttonbg w-full text-white font-bold px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            LIST YOUR PROPERTY
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
