import { useLocation } from 'react-router-dom';
import card from '/assets/card.jpg'
import parnter from "/assets/partnercard.jpg"

const WhyShould: React.FC = () => {
  const { pathname } = useLocation();

  interface InfoItem {
    title: string;
    description: string[];
    img: string;
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
    <div className="container mx-auto max-w-6xl mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#358597] text-center mb-8">
        Why Prime Locations
      </h1>

      <div className="max-w-7xl mx-auto space-y-10">
        {pathname === "/invest" ? (
          <div className="px-4 sm:px-0 text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#F4A896]">
              Why Should You Make a Real Estate Investment in Dubai?
            </h1>
            <p className="text-[#358597] text-base sm:text-lg">
              Investing in property in Dubai offers significant potential for those who approach the process with thorough research, careful planning, and professional guidance. The city’s real estate market has become increasingly attractive due to its strong potential for long-term returns on investment (ROI) and various appealing factors for both local and international buyers.
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#F4A896] mb-3">
                Partner With Prime Location Properties
              </h1>
              <p className="text-[#358597] mb-3 text-lg">Turn Your Network Into Opportunity</p>
              <p className="text-gray-500 text-sm mb-2">
                Are you an influencer, banker, lawyer, personal trainer, P.A., housewife, or someone who’s simply well-connected?
              </p>
              <p className="text-gray-500 text-sm">
                If you know anyone looking to buy or sell property in the UAE, you can earn generous commissions by referring them to Prime Location Properties.
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <img
                className="rounded-md w-full h-auto object-cover"
                src={parnter}
                alt="Partner with Prime Location Properties"
                loading="lazy"
              />
            </div>
          </div>
        )}

        <div className="space-y-12">
          {data.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <div className="flex items-center gap-4">
                  <h1 className="text-lg font-bold text-[#F4A896] min-w-[40px]">
                    0{idx + 1}
                  </h1>
                  <div className="h-1 bg-[#F4A896] flex-grow rounded"></div>
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm text-gray-500">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 max-w-full h-auto rounded-md overflow-hidden shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyShould;
