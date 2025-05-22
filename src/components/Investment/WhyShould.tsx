import { useLocation } from 'react-router-dom';
import card from '/assets/card.jpg';
import explore from '/assets/explore.jpg';
import partner from '/assets/partnercard.jpg';

const WhyShould: React.FC = () => {
    const { pathname }: { pathname: string } = useLocation();

    interface InfoItem {
        title: string;
        description: string[];
        img: string;
    }

    const data: InfoItem[] = [
        {
            title: "Key Financial Benefits",
            description: [
                "High rental yields",
                "Relatively competitive property prices compared to other major global cities",
                "Strong potential for long-term ROI",
            ],
            img: card,
        },
        {
            title: "Lifestyle Advantages",
            description: [
                "Year-round warm weather",
                "Tax-free income environment",
                "Low crime rate",
                "Access to high-quality education and healthcare systems",
            ],
            img: card,
        },
        {
            title: "Strategic Location & Connectivity",
            description: [
                "A major hub for tourism and commerce in the Middle East",
                "A key global aviation link with excellent international connectivity",
            ],
            img: card,
        },
        {
            title: "Modern Infrastructure & Living Standards",
            description: [
                "Dubai’s modern infrastructure and high standard of living continue to make it a sought-after destination for property investments.",
            ],
            img: card,
        },
    ];

    return (
        <div className="px-14 py-14 max-w-7xl mx-auto space-y-12">
            {pathname === "/invest" ? (
                <div className="space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#F4A896] text-center">
                        Why Should You Make a Real Estate Investment in Dubai?
                    </h1>
                    <p className="text-[#358597] text-center text-sm sm:text-base">
                        Investing in property in Dubai offers significant potential for those who approach the process with thorough research, careful planning, and professional guidance. The city’s real estate market has become increasingly attractive due to its strong potential for long-term returns on investment (ROI) and various appealing factors for both local and international buyers.
                    </p>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#F4A896]">
                            Partner With Prime Location Properties
                        </h1>
                        <p className="text-[#358597] text-base">Turn Your Network Into Opportunity</p>
                        <p className="text-sm text-gray-400">
                            Are you an influencer, banker, lawyer, personal trainer, P.A., housewife, or someone who’s simply well-connected?
                        </p>
                        <p className="text-sm text-gray-400">
                            If you know anyone looking to buy or sell property in the UAE, you can earn generous commissions by referring them to Prime Location Properties.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <img src={partner} alt="Partner" className="w-full h-[300px] object-cover rounded-md" />
                    </div>
                </div>
            )}

            <div className="space-y-12">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-center`}
                    >
                        <div className="w-full lg:w-1/2 space-y-4">
                            <div className="grid grid-cols-6 items-center gap-4">
                                <h1 className="col-span-1 text-lg font-bold text-[#F4A896]">0{idx + 1}</h1>
                                <div className="col-span-5 h-1 bg-[#F4A896] w-full"></div>
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                {item.description.map((desc, i) => (
                                    <li className="text-sm text-gray-400" key={i}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-[500px] h-[250px] lg:h-[340px]">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="text-[#F4A896] text-2xl sm:text-3xl lg:text-4xl leading-snug">
                        Explore Options for the Best Property Investment in Dubai
                    </h1>
                    <p className="text-sm text-gray-500">
                        At Prime Location Properties, our expert team brings years of experience in Dubai’s real estate market. With deep knowledge of local trends and regulations, we help clients make smart investment choices while avoiding hidden obstacles and costly mistakes.
                    </p>
                    <p className="text-sm text-gray-500">
                        <b>Expert Guidance You Can Trust:</b> Our goal is to help you invest wisely and grow your wealth through carefully selected property opportunities.
                    </p>
                    <p className="text-sm text-gray-500">
                        <b>A Wide Range of Investment Opportunities:</b> Whether you're a seasoned investor or exploring your first property in Dubai, we offer a diverse selection of real estate options across the city. From luxury apartments to villas, off-plan developments to commercial units — we can tailor opportunities to fit your vision and budget.
                        <br /><br />
                        <b>Your Success Is Our Priority:</b> No matter your investment type or strategy, we are here to guide you every step of the way. Our mission is to equip you with everything you need for maximum revenue growth and long-term success in Dubai's dynamic property market.
                    </p>
                </div>
                <div className="flex-1 w-full">
                    <img
                        src={explore}
                        alt="Explore Property"
                        className="w-full max-w-[500px] mx-auto object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyShould;
