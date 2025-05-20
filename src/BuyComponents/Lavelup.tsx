import React from 'react';

const Lavelup: React.FC = () => {
  return (
    <div
      className="w-full h-[700px]  mt-24 mb-24 bg-cover bg-center flex items-center justify-center text-center text-white px-4"
      style={{ backgroundImage: "url('/assets/bg1.jpg')" }} // make sure the extension is correct
    >
      <div className="bg-black/40 rounded-lg w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 text-[#F4A896]">
          Demand More From Your Brokerage
        </h1>
        <p className="text-lg">
          Level up your brand and business with a brokerage that’s ready<br/> to disrupt the game and leave the old guard in the dust.
        </p>
        <p className='px-6 py-2 bg-[#F4A896] text-white font-bold mt-2 rounded-lg'>Level up now</p>
      </div>
    </div>
  );
};

export default Lavelup;
