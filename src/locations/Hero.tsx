
const Hero = () => {
  return (
     <div
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/location-hero.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-10 space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4A896] leading-tight">
            Visit Our
            <br />
            <span className="text-white">Prime</span> Location
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero