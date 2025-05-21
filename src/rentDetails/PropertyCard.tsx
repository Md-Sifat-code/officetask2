import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import propertyCard from '/assets/Frame 654.png'

const PropertyCard = () => {
    const images = [
        propertyCard,
        propertyCard,
        propertyCard
    ]

  return (
    <div className="bg-[#FEF6F5]">
        <div className="bg-[#FEF6F5]">
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-[#FEF6F5]">
      <div className="relative">
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
        >
          {images.map((src, idx) => (
            <div key={idx}>
              <img src={src} alt={`Property ${idx + 1}`} className="h-64 object-cover" width={200} height={200}/>
            </div>
          ))}
        </Carousel>
      
      </div>
        <span className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded z-10">
          AED 10,850.00
        </span>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase">
          Apartment for Sale in Sunrise Bay, Emaar Beachfront
        </p>
        <a href="#" className="block text-teal-600 font-semibold mt-1 hover:underline">
          Prime and exclusive location at Dubai Harbour
        </a>

        {/* Features */}
        <div className="flex justify-between text-xs text-gray-600 mt-4 border-t pt-3">
          <div className="flex flex-col items-center">
            <span className="text-pink-500 text-lg">🏠</span>
            <span>14 Rooms</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-pink-500 text-lg">🛏️</span>
            <span>14 Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-pink-500 text-lg">🛁</span>
            <span>2 Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-pink-500 text-lg">📐</span>
            <span>250 sqf</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PropertyCard;
