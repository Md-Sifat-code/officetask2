import React from 'react';

const Discover: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      
      {/* Heading */}
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#F4A896]">
          Discover this week's property line <br/>up.
        </h1>
      </div>

      {/* Subheading */}
      <div>
        <p className="text-lg md:text-xl text-[#358597] max-w-2xl">
          Check out some of our featured houses, apartments, town homes, commercial spaces, and more.
        </p>
      </div>
      <div className='flex flex-row gap-6 items-center mt-8 text-white'>
        <p className='px-6 py-2 rounded-xl font-bold buttonbg'>Discover</p>
        <p className='text-[#F4A896] px-6 py-2 rounded-xl font-bold border border-[#F4A896]'>Explore</p>
      </div>

    </div>
  );
};

export default Discover;
