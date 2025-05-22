import phone from '/assets/phone-call.png';
import rectangle from '/assets/Rectangle 26.png';

const Contact = () => {
  return (
    <div className="bg-[#FEF6F5] px-4 py-10 md:px-8 lg:px-12 border border-[#F4A896] rounded-md">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex-1 w-full">
          <h1 className="text-[#F4A896] font-semibold text-2xl md:text-3xl lg:text-4xl mb-4 leading-snug">
            WE'RE HERE TO HELP
          </h1>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            We help clients locate prime opportunities, including <strong>Dubai off plan property investments</strong>, 
            that have exceptional value and potential. Whether you're looking for a lucrative 
            <strong> investment property in Dubai</strong> or a dream home, our bespoke services ensure you find the perfect match.
            From property selection to streamlining the buying process, we provide comprehensive support and expert guidance at every step.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                className="flex items-center gap-2 border border-[#F4A896] text-[#F4A896] rounded-md py-2 px-5 hover:bg-[#F4A896]/10 transition-all duration-200 text-sm sm:text-base"
              >
                <img src={phone} alt="phone" className="w-[18px] h-[18px]" />
                <span>Get In Touch</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full">
          <img
            src={rectangle}
            alt="Contact visual"
            className="w-full max-w-[600px] h-auto object-cover rounded-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
