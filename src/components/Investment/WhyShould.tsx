import card from '/assets/card.jpg'

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
            title: "Empowering the Next Generation",
            description: [
                "Education is the foundation of empowerment.",
                "Give children the tools to shape their future.",
                "Hope grows where knowledge is planted.",
            ],
            img: card
        },
        {
            title: "Modern Infrastructure & Living Standardsv",
            description: [
                "Dubai’s modern infrastructure and high standard of living continue to make it a sought-after destination for property investments.",
            ],
            img: card
        },
        {
            title: "Community and Unity",
            description: [
                "Together, we are stronger.",
                "Support your neighbors, lift each other up.",
                "Unity is the heartbeat of hope.",
            ],
            img: card
        }
    ];



    return (
        <div>


            <div className='max-w-7xl mx-auto py-14 space-y-8'>
                <div>
                    <h1 className='text-5xl text-[#F4A896] text-center'>Why Should You Make a Real Estate Investment in Dubai?</h1>
                    <p className='text-[#358597] text-center'>Investing in property in Dubai offers significant potential for those who approach the process with thorough research, careful planning, and professional guidance. The city’s real estate market has become increasingly attractive due to its strong potential for long-term returns on investment (ROI) and various appealing factors for both local and international buyers.</p>
                </div>
                <div>{data.map((item, idx) => (
                    <div>{item.title}</div>
                ))}</div>
            </div>
        </div>
    );
};
export default WhyShould;
