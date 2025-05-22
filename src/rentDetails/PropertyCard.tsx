import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import propertyCard from '/assets/Frame 654.png';

const PropertyCard = () => {
  const images = [propertyCard, propertyCard, propertyCard];

  return (
    <div className="bg-[#FEF6F5] px-4 py-6">
      <div className="max-w-full sm:max-w-sm mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200 bg-[#FEF6F5] transition hover:shadow-lg duration-300 ease-in-out">
        
        {/* Carousel */}
        <div className="relative">
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            className="rounded-t-xl"
          >
            {images.map((src, idx) => (
              <div key={idx}>
                <img
                  src={src}
                  alt={`Property ${idx + 1}`}
                  className="w-full h-48 sm:h-64 md:h-72 object-cover"
                />
              </div>
            ))}
          </Carousel>

          {/* Price Tag */}
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded shadow-md z-10">
            AED 10,850.00
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">
            Apartment for Sale in Sunrise Bay, Emaar Beachfront
          </p>

          <a
            href="#"
            className="block text-[#358597] font-semibold text-sm sm:text-base mt-1 hover:underline"
          >
            Prime and exclusive location at Dubai Harbour
          </a>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 text-center text-xs sm:text-sm text-gray-600 mt-4 border-t pt-3 gap-y-3">
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
  );
};

export default PropertyCard;
