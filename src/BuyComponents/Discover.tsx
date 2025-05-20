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

    </div>
  );
};

export default Discover;
