import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <img src="/assets/logo.png" alt="" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-black">
          <a href="#" className="hover:text-gray-300">Buy</a>
          <a href="#" className="hover:text-gray-300">Sell</a>
          <a href="#" className="hover:text-gray-300">Rent</a>
          <a href="#" className="hover:text-gray-300">Invest</a>
          <a href="#" className="hover:text-gray-300">Locations</a>
          <a href="#" className="hover:text-gray-300">Company</a>
          <a href="#" className="hover:text-gray-300">Visas</a>
          <a href="#" className="hover:text-gray-300">Partner</a>
        </div>

        {/* CTA Button */}
        <div>
          <button className="buttonbg text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
            LIST YOUR PROPERTY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
