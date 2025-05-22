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
<<<<<<< HEAD
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
=======
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
>>>>>>> 2c12d9db9829e17e9ea79ff2302f13b7b2c4466d

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
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> 2c12d9db9829e17e9ea79ff2302f13b7b2c4466d
        {Array.from({ length: 9 }).map((_, index) => (
          <article
            key={index}
<<<<<<< HEAD
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
=======
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
>>>>>>> 2c12d9db9829e17e9ea79ff2302f13b7b2c4466d
                EXCLUSIVE | ULTRA LUXURIOUS VILLA | SINGLE ROW
              </h2>

<<<<<<< HEAD
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 px-4 pb-4">
              <FaMapMarkerAlt />
              <span>Dubai Hills, Dubai</span>
=======
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
>>>>>>> 2c12d9db9829e17e9ea79ff2302f13b7b2c4466d
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
