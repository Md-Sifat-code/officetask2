const Hero = () => {
  return (
    <div
  className="relative w-full min-h-[50vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: 'url("/assets/bg2.png")' }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  {/* Content */}
  <div className="relative z-10 text-white px-4 md:px-8 text-center">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#F4A896] leading-snug">
      Looking To Sell <br />
      <span className="mt-2 block">Your Property?</span>
    </h1>
  </div>
</div>

  )
}

export default Hero