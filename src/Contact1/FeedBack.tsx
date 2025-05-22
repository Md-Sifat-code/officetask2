const FeedBack = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 font-inter container mx-auto max-w-6xl">
      <div className="w-full max-w-4xl rounded-xl text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F4A896] mb-8 sm:mb-12">
          Happy Clients
        </h1>

        {/* Testimonial Card */}
        <div className="relative bg-[#FFF6F2] bg-opacity-30 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg max-w-full mx-auto">
          {/* Top Left Quote */}
          <span className="absolute -top-6 -left-6 text-orange-400 text-6xl sm:text-7xl md:text-8xl font-bold opacity-70 select-none pointer-events-none">
            &ldquo;
          </span>

          {/* Testimonial Text */}
          <p className="text-[#358597] text-base sm:text-lg md:text-xl leading-relaxed mb-8 relative z-10">
            Working with Prime Location Properties was a game-changer. From the very first
            consultation, I felt like more than just a client—I felt understood. They listened to
            my needs, showed me properties that perfectly matched my lifestyle, and
            handled every detail with professionalism and discretion. Their market
            knowledge is top-tier, and the team genuinely cares about getting the best
            outcome for you. I wouldn't trust anyone else with my real estate investments in
            Dubai.
          </p>

          {/* Bottom Right Quote */}
          <span className="absolute -bottom-6 -right-6 text-orange-400 text-6xl sm:text-7xl md:text-8xl font-bold opacity-70 select-none pointer-events-none">
            &rdquo;
          </span>
        </div>

        {/* Client Info */}
        <p className="font-semibold text-base sm:text-lg md:text-xl mt-6 sm:mt-8 text-[#358597]">
          – Amira Khalid, Investor & Homebuyer from London
        </p>
      </div>
    </div>
  );
};

export default FeedBack;
