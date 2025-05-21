import HomeContact from "../HomeComponents/HomeContact"
import Homehero from "../HomeComponents/Homehero"
import Hotels from "../HomeComponents/Hotels"


const Home = () => {
  return (
    <div>
        <div>
            <Homehero/>
        </div>
        <div>
            <Hotels/>
        </div>
        <div className="mb-12">
            <HomeContact/>
        </div>
      
    </div>
  )
}

export default Home
