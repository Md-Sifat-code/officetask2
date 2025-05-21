import FeedBack from "../Contact1/FeedBack"
import Hero from "../Contact1/Hero"
import Info from "../Contact1/Info"
import MeetTheTeam from "../Contact1/MeetTheTeam"
import MoreInfo from "../Contact1/MoreInfo"
import WhyShould from "../Contact1/WhyShould"


const Contact1 = () => {
  return (
   <>
    <div>
      <Hero/>
    </div>
    <div className="px-[10%]">
      <Info/>
      <MoreInfo/>
      <MeetTheTeam/>
      <WhyShould/>
      <FeedBack/>
    </div>
   </>
  )
}

export default Contact1