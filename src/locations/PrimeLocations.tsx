import cardImg from '/assets/extrapic.png'
const PrimeLocations = () => {
   
  return (
      <div className='mt-20'>
        <h1 className='text-[40px] font-[600] text-[#358597] text-center mb-10'> Prime Locations | Dubai & UAE</h1>
        <div className="bg-white flex items-center justify-center font-inter mt- py-5">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full">
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200">
          <img
            src={cardImg}
            alt="External building lights"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-[#FEF6F5]">
            <h2 className="text-2xl font-bold text-[#F4A896] mb-2">Dubai & UAE</h2>
            <p className="font-semibold mb-2 text-[#358597]">Experience the Future of Waterfront Living</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Discover iconic developments and innovative infrastructure projects shaping the skyline of
              Dubai and the UAE. From luxurious residences to world-class marinas, explore how the region
              continues to lead in architectural excellence and urban transformation.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200">
          <img
            src={cardImg}
            alt="External building lights"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-[#FEF6F5]">
            <h2 className="text-2xl font-bold text-[#F4A896] mb-2">Dubai Marina</h2>
            <p className="font-semibold mb-2 text-[#358597]">Experience the Future of Waterfront Living</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Discover iconic developments and innovative infrastructure projects shaping the skyline of
              Dubai and the UAE. From luxurious residences to world-class marinas, explore how the region
              continues to lead in architectural excellence and urban transformation.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200">
          <img
            src={cardImg}
            alt="External building lights"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-[#FEF6F5]">
            <h2 className="text-2xl font-bold text-[#F4A896] mb-2">Palm Jumeirah</h2>
            <p className="font-semibold mb-2 text-[#358597]">Experience the Future of Waterfront Living</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Discover iconic developments and innovative infrastructure projects shaping the skyline of
              Dubai and the UAE. From luxurious residences to world-class marinas, explore how the region
              continues to lead in architectural excellence and urban transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default PrimeLocations