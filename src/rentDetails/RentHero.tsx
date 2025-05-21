
import logo from '/assets/logo.png'
const RentHero = () => {
  return (
     <div>
      <div className="hero-wrapper h-[650px] flex">
        {/* Left Side with Background Image */}
        <div className="left-wrapper bg-[url('/assets/rent-details-hero-1.png')] bg-cover bg-center w-[60%] h-full me-2">
          <div className="flex justify-center items-center h-full">
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Right Side with Two Stacked Background Images */}
        <div className="right-wrapper w-[40%] h-full flex flex-col">
          <div className="h-1/2 bg-[url('/assets/rent-details-hero-2.png')] bg-cover bg-center flex justify-center items-center mb-2">
            <img src={logo} alt="logo" />
          </div>
          <div className="h-1/2 bg-[url('/assets/rent-details-hero-2.png')] bg-cover bg-center flex justify-center items-center">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RentHero;