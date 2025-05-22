import React from 'react';

const Discover: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 md:py-24 md:px-8 lg:px-0">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#F4A896] leading-tight max-w-3xl">
        Discover this week's property line <br /> up.
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg md:text-xl text-[#358597] max-w-3xl mx-auto px-2 sm:px-0">
        Check out some of our featured houses, apartments, town homes, commercial spaces, and more.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10">
        <button className="px-8 py-3 rounded-xl font-semibold text-white buttonbg transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4A896]">
          Discover
        </button>
        <button className="px-8 py-3 rounded-xl font-semibold text-[#F4A896] border border-[#F4A896] transition hover:bg-[#F4A896] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F4A896]">
          Explore
        </button>
      </div>

    </div>
  );
};

export default Discover;
