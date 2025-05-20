import RentHero from "../rentDetails/RentHero";
import Summary from "../rentDetails/Summary";

const RentDetails = () => {
  return (
 <>
    <RentHero/>
    <div className="px-[10%]">
         <Summary/>
    </div>
 </>
  );
};

export default RentDetails;
