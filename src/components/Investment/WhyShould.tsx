import card from '/assets/card.jpg'
import explore from '/assets/explore.jpg'
const WhyShould: React.FC = () => {
    interface InfoItem {
        title: string;
        description: string[];
        img: string
    }
    let data: InfoItem[] = [
        {
            title: "Key Financial Benefits",
            description: [
                "High rental yields",
                "Relatively competitive property prices compared to other major global cities",
                "Strong potential for long-term ROI",
            ],
            img: card
        },

        {
            title: "Lifestyle Advantages",
            description: [
                "Year-round warm weather",
                "Tax-free income environment",
                "Low crime rate",
                "Access to high-quality education and healthcare systems",

            ],
            img: card
        },





        {
            title: "Strategic Location & Connectivity",
            description: [
                "A major hub for tourism and commerce in the Middle East",
                "A key global aviation link with excellent international connectivity",

            ],
            img: card
        },


        {
            title: "Modern Infrastructure & Living Standards",
            description: [
                "Dubai’s modern infrastructure and high standard of living continue to make it a sought-after destination for property investments.",
            ],
            img: card
        },

    ];



    return (
        <div>


            <div className='max-w-7xl mx-auto py-14 space-y-8'>
                <div>
                    <h1 className='text-5xl text-[#F4A896] text-center'>Why Should You Make a Real Estate Investment in Dubai?</h1>
                    <p className='text-[#358597] text-center'>Investing in property in Dubai offers significant potential for those who approach the process with thorough research, careful planning, and professional guidance. The city’s real estate market has become increasingly attractive due to its strong potential for long-term returns on investment (ROI) and various appealing factors for both local and international buyers.</p>
                </div>
                <div className='my-8'>
                    {data.map((item, idx) => (
                        <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between items-center gap-6 py-6`}>
                            {/* Left side: Text and List */}
                            <div className="flex flex-col gap-4 w-full">
                                {/* Grid with number and line */}
                                <div className="grid grid-cols-6 items-center gap-4">
                                    <h1 className="col-span-1 text-lg font-bold text-[#F4A896]">0{idx + 1}</h1>
                                    <div className="col-span-5 h-1 bg-[#F4A896] w-full"></div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold">{item.title}</h3>

                                {/* Description list with bullet points */}
                                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                    {item.description.map((desc, i) => (
                                        <li className='text-sm text-gray-400' key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            {/* Right side: Image */}
                            <div className="h-[340px] w-[500px]">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-8 flex flex-col lg:flex-row justify-between gap-6 px-4 py-6 items-center">
                    {/* Text section */}
                    <div className="space-y-4 flex-1">
                        <h1 className="text-[#F4A896] text-3xl lg:text-4xl leading-snug">
                            Explore Options for the Best Property Investment in Dubai
                        </h1>
                        <p className="text-sm text-gray-500">
                            At Prime Location Properties, our expert team brings years of experience in Dubai’s real estate market. With deep knowledge of local trends and regulations, we help clients make smart investment choices while avoiding hidden obstacles and costly mistakes.
                        </p>
                        <p className="text-sm text-gray-500">
                            <b>Expert Guidance You Can Trust:</b> Our goal is to help you invest wisely and grow your wealth through carefully selected property opportunities. We are fully committed to:
                        </p>
                        <p className="text-sm text-gray-500">
                            <b>A Wide Range of Investment Opportunities:</b> Whether you're a seasoned investor or exploring your first property in Dubai, we offer a diverse selection of real estate options across the city. From luxury apartments to villas, off-plan developments to commercial units — we can tailor opportunities to fit your vision and budget.
                            <br /><br />
                            <b>Your Success Is Our Priority:</b> No matter your investment type or strategy, we are here to guide you every step of the way. Our mission is to equip you with everything you need for maximum revenue growth and long-term success in Dubai's dynamic property market.
                        </p>
                    </div>

                    {/* Image section */}
                    <div className="flex-1">
                        <img
                            src={explore}
                            alt="Explore Property"
                            className="w-full max-w-[500px] mx-auto object-cover rounded-md"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};
export default WhyShould;
