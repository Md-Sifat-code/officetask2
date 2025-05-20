const WhyShould: React.FC = () => {
    interface InfoItem {
        title: string;
        description: string[];
    }
    let data: InfoItem[] = [
        {
            title: "Key Financial Benefits",
            description: [
                "High rental yields",
                "Relatively competitive property prices compared to other major global cities",
                "Strong potential for long-term ROI",
            ],
        },


        {
            title: "Strategic Location & Connectivity",
            description: [
                "A major hub for tourism and commerce in the Middle East",
                "A key global aviation link with excellent international connectivity",

            ],
        },




        {
            title: "Empowering the Next Generation",
            description: [
                "Education is the foundation of empowerment.",
                "Give children the tools to shape their future.",
                "Hope grows where knowledge is planted.",
            ],
        },
        {
            title: "Environmental Awareness",
            description: [
                "Our planet needs conscious choices.",
                "Small actions lead to big impact.",
                "Protect nature — it protects us.",
            ],
        },
        {
            title: "Community and Unity",
            description: [
                "Together, we are stronger.",
                "Support your neighbors, lift each other up.",
                "Unity is the heartbeat of hope.",
            ],
        }
    ];



    return (
        <div>


            <div className='max-w-7xl mx-auto py-14 space-y-8'>
                <h1 className='text-5xl text-[#F4A896] text-center'>Why Should You Make a Real Estate Investment in Dubai?</h1>
                <p className='text-[#358597] text-center'>Investing in property in Dubai offers significant potential for those who approach the process with thorough research, careful planning, and professional guidance. The city’s real estate market has become increasingly attractive due to its strong potential for long-term returns on investment (ROI) and various appealing factors for both local and international buyers.</p>
            </div>
        </div>
    );
};
export default WhyShould;
