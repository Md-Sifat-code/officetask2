
const Hero = () => {
  return (
    <div
      className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/company-hero.png")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-10 md:px-20 space-y-6 md:space-y-8">
        {/* Headings */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#F4A896] leading-tight">
          The Company
        </h1>
      </div>
    </div>
  );
};

export default Hero;
