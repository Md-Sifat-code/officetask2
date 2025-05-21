import Contact from "../rentDetails/Contact";
import PropertyCard from "../rentDetails/PropertyCard";
import RentHero from "../rentDetails/RentHero";
import Summary from "../rentDetails/Summary";

const BuyDetails = () => {
  return (
 <>
    <RentHero/>
    <div className="px-[10%]">
         <Summary/>
         <Contact/>
       <div className="flex gap-x-5 bg-[#FEF6F5] p-10 mt-10">
        <div className="mt-10">
          <p>Next Apartments in the area </p>
          <h1 className="text-[30px] font-[600] text-[#307989]">Dubai Harbour</h1>
        </div>
         <div className="flex gap-2.5 bg-[#FEF6F5]">
           <PropertyCard/>
         <PropertyCard/>
         <PropertyCard/>
        </div>
       </div>
    </div>
 </>
  );
};

export default BuyDetails;
