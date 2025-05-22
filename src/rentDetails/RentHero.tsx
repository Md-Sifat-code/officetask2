import logo from '/assets/logo.png';

const RentHero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row h-auto md:h-[650px] gap-2">
        
        {/* Left Side */}
        <div className="bg-[url('/assets/rent-details-hero-1.png')] bg-cover bg-center w-full md:w-[60%] h-[300px] md:h-full flex justify-center items-center">
          <img src={logo} alt="logo" className="w-24 sm:w-32 md:w-40 lg:w-48" />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[40%] flex flex-col gap-2">
          
          {/* Top Box */}
          <div className="h-[150px] sm:h-[180px] md:h-1/2 bg-[url('/assets/rent-details-hero-2.png')] bg-cover bg-center flex justify-center items-center">
            <img src={logo} alt="logo" className="w-20 sm:w-28 md:w-32 lg:w-40" />
          </div>

          {/* Bottom Box */}
          <div className="h-[150px] sm:h-[180px] md:h-1/2 bg-[url('/assets/rent-details-hero-2.png')] bg-cover bg-center flex justify-center items-center">
            <img src={logo} alt="logo" className="w-20 sm:w-28 md:w-32 lg:w-40" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RentHero;
