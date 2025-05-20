import React from 'react';

const Buy_Partners: React.FC = () => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center text-center bg-white">
      
      {/* Heading */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#F4A896]">
          We use the best technology and are listed with best platforms in the UAE:
        </h1>
      </div>

      {/* Partner Logos */}
      <div className="flex flex-row gap-12 mt-12 flex-wrap justify-center items-center">
        <img src="/assets/p1.png" alt="Partner 1" className="h-16 md:h-20 object-contain" />
        <img src="/assets/p2.png" alt="Partner 2" className="h-16 md:h-20 object-contain" />
        <img src="/assets/p3.png" alt="Partner 3" className="h-16 md:h-20 object-contain" />
      </div>

    </div>
  );
};

export default Buy_Partners;
