import PropertyCard from "../rentDetails/PropertyCard";
import RentHero from "../rentDetails/RentHero";
import Summary from "../rentDetails/Summary";

const RentDetails = () => {
  return (
    <>
      <RentHero />

      {/* Summary Section */}
      <div className="px-4 sm:px-8 md:px-[10%]">
        <Summary />
        {/* <Contact/> */}
      </div>

      {/* Related Properties Section */}
      <div className="bg-[#FEF6F5] mt-10">
        <div className="px-4 sm:px-8 md:px-[10%] py-10">
          <div className="mb-6 text-center sm:text-left">
            <p className="text-sm text-gray-600">Next Apartments in the area</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#307989]">
              Dubai Harbour
            </h1>
          </div>

          {/* Property Cards */}
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

export default RentDetails;
