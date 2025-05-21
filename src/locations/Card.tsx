import cardImg from '/assets/extrapic.png';

const Card = () => {
  return (
    <div className="bg-rose-50 flex items-center justify-center font-inter mt-14 py-5">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full">
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-rose-200">
          <img
            src={cardImg}
            alt="External building lights"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-[#FEF6F5]">
            <h2 className="text-2xl font-bold text-teal-600 mb-2">Dubai & UAE</h2>
            <p className="font-semibold mb-2 text-[#F4A896]">Experience the Future of Waterfront Living</p>
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
            <h2 className="text-2xl font-bold text-[#358597] mb-2">International</h2>
            <span className="text-[#F4A896] font-semibold mb-2">Global Visions, Local Impact</span>
            <span className="text-gray-700 text-sm leading-relaxed ms-1">
               Explore major waterfront and urban developments around the globe. From smart cities to sustainable hubs, see
              how international projects mirror Dubai's ambition, bringing innovation and excellence to
              communities worldwide.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
