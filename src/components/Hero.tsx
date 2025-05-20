import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: 'url("/assets/herobg.png")' }}>
      

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Dream Property</h1>
        <p className="text-lg md:text-xl mb-6">Find the perfect place to buy, sell, or invest.</p>
        <button className="bg-white text-black px-6 py-3 font-semibold rounded hover:bg-gray-200 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
