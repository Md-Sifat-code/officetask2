import React from 'react';

const Homehero: React.FC = () => {
  return (
    <div
      className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/bg2.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6 sm:px-10 md:px-16 py-12 md:py-20">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight md:leading-snug text-[#F4A896]">
          Buying A New <span>Property</span>
        </h1>
      </div>
    </div>
  );
};

export default Homehero;

