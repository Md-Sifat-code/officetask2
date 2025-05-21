import Contact from "../rentDetails/Contact";
import RentHero from "../rentDetails/RentHero";
import Summary from "../rentDetails/Summary";

const RentDetails = () => {
  return (
 <>
    <RentHero/>
    <div className="px-[10%]">
         <Summary/>
         <Contact/>
    </div>
 </>
  );
};

export default RentDetails;
