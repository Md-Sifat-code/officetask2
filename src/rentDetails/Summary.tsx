import home from '/assets/home-two.png';
import double_bed from '/assets/home-two.png';
import frame from '/assets/Frame 529.png';
import location from '/assets/rent-details-location.png';
import image from '/assets/image 6.png';

const Summary = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 gap-10 px-4 lg:px-10">
      
      {/* Left Section */}
      <div className="w-full lg:w-[70%]">
        <p className="font-medium text-[#358597] text-base">PRICE</p>
        <h1 className="text-[#F4A896] text-2xl md:text-3xl mt-3">AED 10,850,000</h1>

        <div className="flex flex-wrap gap-5 mt-5">
          <div className="flex items-center gap-2">
            <img src={home} alt="Rooms" className="w-6 h-6" />
            <p className="text-sm sm:text-base">14 Rooms</p>
          </div>
          {[...Array(3)].map((_, index) => (
            <div className="flex items-center gap-2" key={index}>
              <img src={double_bed} alt="Beds" className="w-6 h-6" />
              <p className="text-sm sm:text-base">14 Beds</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-10">
          <img src={frame} alt="Location" className="w-6 h-6" />
          <p className="font-medium text-lg text-[#515756]">Dubai Hills Estate, Dubai</p>
        </div>

        <hr className="mt-5 border-[#FAD7CF]" />

        <div className="mt-10">
          <h2 className="text-[#358597] text-xl font-semibold">Marina Vista</h2>
          <p className="text-[#515756] mt-3 text-justify text-sm md:text-base leading-relaxed">
            Marina Vista is twin-tower residential development located in Emaar Beachfront...
            (content continues as needed).
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-[#F4A896] text-2xl font-semibold">Location</h2>
          <h4 className="font-medium text-lg mt-3 text-[#515756]">Dubai Hills Estate, Dubai</h4>
          <img src={location} alt="Map" className="mt-5 w-full rounded-md shadow-md" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[30%] space-y-6">
        <div className="border rounded-md border-[#F8C5B9] p-6 shadow-sm bg-white">
          <img src={image} alt="Agent" className="w-full rounded-md object-cover" />
          <div className="mt-5">
            <h1 className="text-[#358597] font-bold text-xl sm:text-2xl leading-tight">
              Edward Millward
            </h1>
            <p className="text-[#F4A896] font-semibold text-sm mt-1">
              Your agent for this property
            </p>
            <h3 className="font-semibold text-lg mt-2 text-[#515756]">+971 56 520 3469</h3>

            <h4 className="text-[#358597] mt-5 font-medium">Leave us contact details</h4>
            <input
              type="text"
              placeholder="Name"
              className="border border-[#FAD7CF] p-3 rounded-md w-full mt-2 text-sm"
            />
            <input
              type="text"
              placeholder="Contact"
              className="border border-[#FAD7CF] p-3 rounded-md w-full mt-3 text-sm"
            />
            <button className="bg-[#F4A896] text-white px-4 py-3 w-full rounded-md mt-4 hover:bg-[#e89483] transition font-semibold text-sm">
              Send
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md shadow-sm border border-[#FAD7CF]">
          <h3 className="font-semibold text-base text-[#358597]">Payment Plan</h3>
          <ul className="list-disc ml-5 mt-2 text-[#515756] text-sm space-y-1">
            <li>20% Down Payment</li>
            <li>39% During Construction</li>
            <li>39% on Hand Over</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
