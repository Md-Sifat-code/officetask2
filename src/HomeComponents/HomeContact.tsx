const HomeContact = () => {
    return (
        <div className="flex flex-col gap-6 max-w-6xl container mx-auto  mt-24 mb-[200px]">
            {/* 1. Heading */}
            <div>
                <h1 className="text-3xl text-center font-bold text-[#F4A896]">
                    Contact Us for Information About Premium Dubai Investment <br /> Properties
                </h1>
            </div>

            {/* 2. Paragraph */}
            <div className=" flex flex-row items-center justify-center">
                <p className="text-[#358597]  leading-relaxed w-[70%] text-center mb-12">
                    We help clients locate prime opportunities, including Dubai off plan property investments, that have exceptional value and potential. Whether you're looking for a lucrative investment property in Dubai or a dream home, our bespoke services ensure you find the perfect match. From property selection to streamlining the buying process, we provide comprehensive support and expert guidance at every step.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
                {/* 3. Contact Form */}
                <div className="bg-white shadow-md rounded-3xl p-12 flex flex-col gap-6 border border-gray-100 max-w-5xl container mx-auto">
                    {/* Section 1: First & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border-b border-gray-300 focus:outline-none p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border-b border-gray-300 focus:outline-none p-2"
                            />
                        </div>
                    </div>

                    {/* Section 2: Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border-b border-gray-300 focus:outline-none p-2"
                            />
                        </div>
                        <div className="flex flex-col">
                            
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="border-b border-gray-300 focus:outline-none p-2"
                            />
                        </div>
                    </div>

                    {/* Section 3: Message */}
                    <div className="flex flex-col">
                        
                        <textarea
                            placeholder="Enter your message here"
                            className="border rounded-xl border-gray-300 focus:outline-none p-2 resize-none"
                            rows={4}
                        ></textarea>
                    </div>

                    {/* Section 4: Submit Button */}
                    <div>
                        <button className="w-full buttonbg font-bold text-white py-3 rounded  transition">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;
