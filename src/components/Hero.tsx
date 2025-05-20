import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/herobg.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-8">
        
        {/* Headings */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#F4A896]">
            Sell/Rent Your Property with us.
          </h1>
          <p className="text-lg md:text-xl">
            Expert Advice with a Premium Bespoke Service.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-4xl ">
          
          {/* Top Buttons */}
          <div className="ml-2 flex justify-start w-fit overflow-hidden rounded-t-2xl border border-[#FEF6F5] bg-[#FEF6F5]">
            <button className="flex-1 min-w-[100px] text-center text-[#F4A896] px-6 py-3 font-semibold hover:bg-gray-100 transition border-r border-white">
              Buy
            </button>
            <button className="flex-1 min-w-[100px] text-center text-[#F4A896] px-6 py-3 font-semibold hover:bg-gray-100 transition border-r border-white">
              Sell
            </button>
            <button className="flex-1 min-w-[100px] text-center text-[#F4A896] px-6 py-3 font-semibold hover:bg-gray-100 transition">
              Rent
            </button>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-4 bg-[#FEF6F5] p-4 rounded-2xl mt-[-2px]">
            
            {/* Residential Dropdown */}
            <div>
              <select className="w-full bg-[#FEF6F5] text-[#F4A896] px-4 py-2 rounded-md outline-none">
                <option value="">Residential</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            {/* Area / Community */}
            <div className="bg-[#FEF6F5] text-black px-4 py-2 rounded-md text-left text-sm flex items-center h-full">
              Area / Community
            </div>

            {/* Search Button */}
            <div>
              <button className="w-full border border-[#F4A896] text-[#F4A896] px-4 py-2 rounded-md hover:bg-[#F4A896] hover:text-white transition font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
