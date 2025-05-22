const HomeContact = () => {
  return (
    <div className="flex flex-col gap-6 max-w-6xl container mx-auto mt-24 mb-48 px-4 sm:px-6 lg:px-0">
      {/* 1. Heading */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-[#F4A896] leading-tight">
          Contact Us for Information About Premium Dubai Investment <br /> Properties
        </h1>
      </div>

      {/* 2. Paragraph */}
      <div className="flex justify-center">
        <p className="text-[#358597] leading-relaxed max-w-3xl text-center text-sm sm:text-base px-2 sm:px-0">
          We help clients locate prime opportunities, including Dubai off plan property
          investments, that have exceptional value and potential. Whether you're looking
          for a lucrative investment property in Dubai or a dream home, our bespoke services
          ensure you find the perfect match. From property selection to streamlining the
          buying process, we provide comprehensive support and expert guidance at every step.
        </p>
      </div>

      {/* 3. Contact Form */}
      <div className="bg-white shadow-md rounded-3xl p-8 sm:p-12 border border-gray-100 max-w-4xl mx-auto w-full">
        {/* Section 1: First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="First Name"
            className="border-b border-gray-300 focus:border-[#F4A896] focus:outline-none p-3 text-base rounded-tl-md rounded-tr-md md:rounded-tr-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-b border-gray-300 focus:border-[#F4A896] focus:outline-none p-3 text-base rounded-tr-md rounded-br-md md:rounded-tl-none"
          />
        </div>

        {/* Section 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="email"
            placeholder="Email Address"
            className="border-b border-gray-300 focus:border-[#F4A896] focus:outline-none p-3 text-base rounded-tl-md rounded-tr-md md:rounded-tr-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-b border-gray-300 focus:border-[#F4A896] focus:outline-none p-3 text-base rounded-tr-md rounded-br-md md:rounded-tl-none"
          />
        </div>

        {/* Section 3: Message */}
        <textarea
          placeholder="Enter your message here"
          rows={5}
          className="border border-gray-300 rounded-xl focus:border-[#F4A896] focus:outline-none p-4 text-base resize-none mb-6 w-full"
        ></textarea>

        {/* Section 4: Submit Button */}
        <button className="w-full bg-[#F4A896] hover:bg-[#d98c7c] text-white font-bold py-3 rounded-xl transition duration-300">
          Send
        </button>
      </div>
    </div>
  );
};

export default HomeContact;
