import { FaBed, FaBath, FaRulerCombined, FaWhatsapp, FaMapMarkerAlt, FaDoorOpen } from 'react-icons/fa';

const Hotels = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto space-y-10">

      {/* Filter Section */}
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {[
          { label: "Area/Community", type: "text", placeholder: "Area/Community" },
          { label: "Min. Price", type: "number", placeholder: "Min. Price" },
          { label: "Max. Price", type: "number", placeholder: "Max. Price" },
          { label: "Min. SQ.FT", type: "number", placeholder: "Min. SQ.FT" },
          { label: "Max. SQ.FT", type: "number", placeholder: "Max. SQ.FT" },
        ].map(({ label, type, placeholder }, idx) => (
          <div key={idx} className="flex flex-col">
            <label htmlFor={placeholder.toLowerCase().replace(/[\s\.]/g, '')} className="mb-1 text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              id={placeholder.toLowerCase().replace(/[\s\.]/g, '')}
              type={type}
              placeholder={placeholder}
              className="border border-gray-300 p-3 rounded-md w-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A896] focus:border-[#F4A896]"
            />
          </div>
        ))}

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-[#F4A896] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#d98c7c] transition focus:outline-none focus:ring-4 focus:ring-[#f7b1a5]/50"
          >
            Search
          </button>
        </div>
      </form>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, index) => (
          <article
            key={index}
            className="border border-gray-200 rounded-lg shadow-md bg-[#FEF6F5] hover:shadow-lg transition overflow-hidden flex flex-col"
            role="region"
            aria-label={`Property listing ${index + 1}`}
          >
            {/* Image */}
            <img
              src="/assets/h1.jpg"
              alt={`Hotel ${index + 1}`}
              className="w-full h-48 sm:h-56 object-cover"
              loading="lazy"
            />

            {/* Content */}
            <div className="flex flex-col flex-grow p-4">

              {/* Title */}
              <h2 className="text-gray-900 font-bold text-lg mb-2 leading-tight">
                EXCLUSIVE | ULTRA LUXURIOUS VILLA | SINGLE ROW
              </h2>

              {/* Icons Row */}
              <div className="flex flex-wrap justify-between gap-3 text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-1 whitespace-nowrap" title="Rooms">
                  <FaDoorOpen aria-hidden="true" />
                  <span>3 Rooms</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap" title="Beds">
                  <FaBed aria-hidden="true" />
                  <span>2 Beds</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap" title="Baths">
                  <FaBath aria-hidden="true" />
                  <span>2 Baths</span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap" title="Square Feet">
                  <FaRulerCombined aria-hidden="true" />
                  <span>1500 SQ.FT</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>Dubai Hills, Dubai</span>
              </div>

              {/* Price + CTA */}
              <div className="mt-auto flex flex-col sm:flex-row justify-between items-center gap-3">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                    <div className="flex flex-row lg:flex-col lg:items-start lg:space-y-1 lg:space-x-0 space-x-2 items-center">
                      <span className="font-semibold text-gray-700 text-base">Price</span>
                      <span className="text-blue-600 font-bold text-lg">$850,000</span>
                    </div>

                  </div>

                </div>

                <button
                  className="bg-green-500 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition w-full sm:w-auto justify-center font-semibold focus:outline-none focus:ring-4 focus:ring-green-400"
                  aria-label="Contact via WhatsApp"
                >
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
