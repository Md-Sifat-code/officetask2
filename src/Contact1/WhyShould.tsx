import { useLocation } from 'react-router-dom';
import card from '/assets/card.jpg'
import explore from '/assets/explore.jpg'
import parnter from "/assets/partnercard.jpg"
const WhyShould: React.FC = () => {

    const { pathname }: { pathname: string } = useLocation()
    console.log(pathname)


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
        <div className='container mx-auto max-w-6xl mt-10'>
            <h1 className='text-[40px] font-[700] text-[#358597] text-center'>Why Prime Locations</h1>
            <div className='max-w-7xl mx-auto px-4 py-14 space-y-8'>
                {pathname === "/invest" ? (
                    <div>
                        <h1 className='text-5xl text-[#F4A896] text-center'>Why Should You Make a Real Estate Investment in Dubai?</h1>
                        <p className='text-[#358597] text-center'>Investing in property in Dubai offers significant potential for those who approach the process with thorough research, careful planning, and professional guidance. The city’s real estate market has become increasingly attractive due to its strong potential for long-term returns on investment (ROI) and various appealing factors for both local and international buyers.</p>
                    </div>
                )
                    : (<div className='flex gap-5 '>
                        <div className='flex-1'>
                            <h1 className='text-5xl text-[#F4A896] '>Partner With Prime Location Properties</h1>
                            <p className='text-[#358597] '>Turn Your Network Into Opportunity </p>
                            <br />
                            <p className='text-sm text-gray-400'>Are you an influencer, banker, lawyer, personal trainer, P.A., housewife, or someone who’s simply well-connected?</p>
                            <br />
                            <p className='text-sm text-gray-400'>If you know anyone looking to buy or sell property in the UAE, you can earn generous commissions by referring them to Prime Location Properties.</p>
                        </div>
                        <div className=" flex-1 ">
                            <img className=' w-full h-full object-cover rounded-md' src={parnter} alt="" />
                        </div>
                    </div>)}
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

            </div>
        </div>
    );
};
export default WhyShould;
