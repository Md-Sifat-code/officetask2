import React from 'react';

const Renthero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/bg2.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-8">
        
        {/* Headings */}
        <div>
          <h1 className="text-3xl flex flex-col gap-3 md:text-5xl font-bold mb-2 text-[#F4A896]">
            Renting A New <span>Property</span>
          </h1>
          
        </div>

        

      </div>
    </div>
  );
};

export default Renthero;
