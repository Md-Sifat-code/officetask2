import cardImg from '/assets/extrapic.png';

const PrimeLocations = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#358597] text-center mb-12">
        Prime Locations | Dubai & UAE
      </h1>

      <div className="bg-white flex items-center justify-center font-inter py-6">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200 flex flex-col">
            <img
              src={cardImg}
              alt="External building lights"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-6 bg-[#FEF6F5] flex flex-col flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4A896] mb-2">Dubai & UAE</h2>
              <p className="font-semibold mb-2 text-[#358597] text-sm sm:text-base">
                Experience the Future of Waterfront Living
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-grow">
                Discover iconic developments and innovative infrastructure projects shaping the skyline of
                Dubai and the UAE. From luxurious residences to world-class marinas, explore how the region
                continues to lead in architectural excellence and urban transformation.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200 flex flex-col">
            <img
              src={cardImg}
              alt="External building lights"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-6 bg-[#FEF6F5] flex flex-col flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4A896] mb-2">Dubai Marina</h2>
              <p className="font-semibold mb-2 text-[#358597] text-sm sm:text-base">
                Experience the Future of Waterfront Living
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-grow">
                Discover iconic developments and innovative infrastructure projects shaping the skyline of
                Dubai and the UAE. From luxurious residences to world-class marinas, explore how the region
                continues to lead in architectural excellence and urban transformation.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200 flex flex-col">
            <img
              src={cardImg}
              alt="External building lights"
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-6 bg-[#FEF6F5] flex flex-col flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F4A896] mb-2">Palm Jumeirah</h2>
              <p className="font-semibold mb-2 text-[#358597] text-sm sm:text-base">
                Experience the Future of Waterfront Living
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed flex-grow">
                Discover iconic developments and innovative infrastructure projects shaping the skyline of
                Dubai and the UAE. From luxurious residences to world-class marinas, explore how the region
                continues to lead in architectural excellence and urban transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimeLocations;
