import { FaBed, FaBath, FaRulerCombined, FaWhatsapp, FaMapMarkerAlt, FaDoorOpen } from 'react-icons/fa';
const HotelsBuy = () => {
  return (
    <div>
        {/* Cards Section */}
              <div className="grid grid-cols-3 gap-6 max-w-6xl container mx-auto">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded shadow-sm bg-[#FEF6F5]  hover:shadow-md transition space-y-4"
                  >
                    {/* 1. Image */}
                    <div>
                      <img
                        src= "/assets/h1.jpg"
                        alt={`Hotel ${index + 1}`}
                        className="w-full h-48 object-cover rounded"
                      />
                    </div>
        
                    {/* 2. Icons Row */}
                    <div className="flex justify-between text-gray-600 text-sm px-4">
                      <div className="flex items-center gap-1">
                        <FaDoorOpen /> <span>3 Rooms</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBed /> <span>2 Beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaBath /> <span>2 Baths</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRulerCombined /> <span>1500 SQ.FT</span>
                      </div>
                    </div>
        
                    {/* 3. Price + CTA */}
                    <div className="flex flex-row justify-between items-center px-4">
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-gray-700">Price</h1>
                        <p className="text-blue-600 font-bold text-lg">$850,000</p>
                      </div>
                      <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
                        <FaWhatsapp /> WhatsApp
                      </button>
                    </div>
        
                    {/* 4. Title */}
                    <div className='px-4'>
                      <h1 className="font-bold text-md text-gray-800">
                        EXCLUSIVE | ULTRA LUXURIOUS VILLA | SINGLE ROW
                      </h1>
                    </div>
        
                    {/* 5. Location */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 px-4 mb-4">
                      <FaMapMarkerAlt />
                      <span>Dubai Hills, Dubai</span>
                    </div>
                  </div>
                ))}
              </div>
      
    </div>
  )
}

export default HotelsBuy
