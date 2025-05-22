import Contact from "../rentDetails/Contact";
import PropertyCard from "../rentDetails/PropertyCard";
import RentHero from "../rentDetails/RentHero";
import Summary from "../rentDetails/Summary";

const BuyDetails = () => {
  return (
    <>
      <RentHero />

      <div className="px-4 md:px-8 lg:px-[10%]">
        <Summary />
        <Contact />

        {/* Nearby Properties Section */}
        <div className="mt-16">
          <div className="mb-6 text-center lg:text-left">
            <p className="text-sm text-gray-500">Next Apartments in the area</p>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#307989]">Dubai Harbour</h1>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyDetails;

