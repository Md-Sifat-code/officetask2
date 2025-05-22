import home from '/assets/home-two.png';
import double_bed from '/assets/home-two.png';
import frame from '/assets/Frame 529.png';
import location from '/assets/rent-details-location.png';
import image from '/assets/image 6.png';

const Summary = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 gap-10 px-4">
      
      {/* Left Section */}
      <div className="w-full lg:w-[70%]">
        <p className="font-medium text-[#358597] text-base">PRICE</p>
        <h1 className="text-[#F4A896] text-2xl mt-3">AED 10,850,00</h1>

        <div className="flex flex-wrap gap-5 mt-5">
          <div className="flex items-center gap-2">
            <img src={home} alt="Rooms" className="w-6 h-6" />
            <p>14 Rooms</p>
          </div>
          {[...Array(3)].map((_, index) => (
            <div className="flex items-center gap-2" key={index}>
              <img src={double_bed} alt="Beds" className="w-6 h-6" />
              <p>14 Beds</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-10">
          <img src={frame} alt="Location" className="w-6 h-6" />
          <p className="font-medium text-lg">Dubai Hills Estate, Dubai</p>
        </div>

        <hr className="mt-5" />

        <div className="mt-10">
          <h2 className="text-[#358597] text-xl font-semibold">Marina Vista</h2>
          <p className="text-[#515756] mt-3 text-justify">
            Marina Vista is twin-tower residential development located in Emaar Beachfront...
            (content continues as needed).
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-[#F4A896] text-2xl font-semibold">Location</h2>
          <h4 className="font-medium text-lg mt-3">Dubai Hills Estate, Dubai</h4>
          <img src={location} alt="Map" className="mt-5 w-full rounded-md" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[30%]">
        <div className="border rounded-md border-[#F8C5B9] p-6">
          <img src={image} alt="Agent" className="w-full rounded-md" />
          <div className="mt-5">
            <h1 className="text-[#358597] font-bold text-2xl leading-tight">Edward Millward</h1>
            <p className="text-[#F4A896] font-semibold text-sm mt-1">Your agent for this property</p>
            <h3 className="font-semibold text-lg mt-2">+971 56 520 3469</h3>
            <h4 className="text-[#358597] mt-5 font-medium">Leave us contact details</h4>
            <input
              type="text"
              placeholder="Name"
              className="border border-[#FAD7CF] p-3 rounded-md w-full mt-2"
            />
            <input
              type="text"
              placeholder="Contact"
              className="border border-[#FAD7CF] p-3 rounded-md w-full mt-3"
            />
            <button className="bg-[#F4A896] text-white px-4 py-3 w-full rounded-md mt-4 hover:bg-[#e89483] transition">
              Send
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-base">Payment plan</h3>
          <p className="mt-2">20% Down Payment</p>
          <p className="mt-2">39% During Construction</p>
          <p className="mt-2">39% on Hand Over</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
