import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaDoorOpen,
} from 'react-icons/fa';

const Hotels = () => {
  return (
    <div className="p-4 md:p-6 space-y-8">
      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Area/Community</label>
          <input
            type="text"
            placeholder="Area/Community"
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Min. Price</label>
          <input
            type="number"
            placeholder="Min. Price"
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Max. Price</label>
          <input
            type="number"
            placeholder="Max. Price"
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Min. SQ.FT</label>
          <input
            type="number"
            placeholder="Min. SQ.FT"
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Max. SQ.FT</label>
          <input
            type="number"
            placeholder="Max. SQ.FT"
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="flex items-end">
          <button className="w-full buttonbg text-white px-4 py-2 rounded font-bold">
            Search
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded shadow-sm bg-[#FEF6F5] hover:shadow-md transition space-y-4"
          >
            {/* Image */}
            <div>
              <img
                src="/assets/h1.jpg"
                alt={`Hotel ${index + 1}`}
                className="w-full h-48 object-cover rounded-t"
              />
            </div>

            {/* Icons Row */}
            <div className="flex flex-wrap justify-between text-gray-600 text-sm px-4">
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

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4">
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-700">Price</h1>
                <p className="text-blue-600 font-bold text-lg">$850,000</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
                <FaWhatsapp /> WhatsApp
              </button>
            </div>

            {/* Title */}
            <div className="px-4">
              <h1 className="font-bold text-md text-gray-800">
                EXCLUSIVE | ULTRA LUXURIOUS VILLA | SINGLE ROW
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 px-4 pb-4">
              <FaMapMarkerAlt />
              <span>Dubai Hills, Dubai</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
