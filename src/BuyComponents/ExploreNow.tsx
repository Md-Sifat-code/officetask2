import React from 'react';

const ExploreNow: React.FC = () => {
    return (
        <div className="relative bg-[#16383F] text-white w-full py-16 px-6 overflow-hidden">

            {/* Bottom-left background image */}
            <img
                src="/assets/house.png"
                alt="Background House"
                className="absolute bottom-0 left-0 w-48 md:w-[600px] opacity-20"
            />

            {/* Grid content */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">

                {/* Left Text Content */}
                <div className='flex flex-col gap-6 items-start'>
                    <div>
                        <h2 className="text-xl md:text-2xl text-[#F4A896] font-bold mb-4">Prime Location Properties – Expert Real Estate Company in Dubai</h2>
                    <p className="text-lg md:text-sm text-gray-300">
                        Explore a wide range of luxury properties in Dubai, located in some of the city’s most sought-after locations. Our carefully curated portfolio includes villas, apartments, townhouses, and plots of land.

                        Prime Location Properties offers options that combine comfort, quality, and convenience. With a user-friendly website, we make it easy for you to find the finest luxury property in Dubai. Whether you’re searching for a modern apartment or a spacious villa, our collection offers something for everyone. Enjoy access to premium real estate in prime areas of Dubai that truly reflect the best of luxury living.
                    </p>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl text-[#F4A896] font-bold mb-4">Prime Location Properties – Expert Real Estate Company in Dubai</h2>
                    <p className="text-lg md:text-sm text-gray-300">
                        Explore a wide range of luxury properties in Dubai, located in some of the city’s most sought-after locations. Our carefully curated portfolio includes villas, apartments, townhouses, and plots of land.

                        Prime Location Properties offers options that combine comfort, quality, and convenience. With a user-friendly website, we make it easy for you to find the finest luxury property in Dubai. Whether you’re searching for a modern apartment or a spacious villa, our collection offers something for everyone. Enjoy access to premium real estate in prime areas of Dubai that truly reflect the best of luxury living.
                    </p>
                    </div>
                    <p className='px-6 py-2 buttonbg font-bold rounded-lg'>Explore Now</p>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="/assets/house2.png"
                        alt="Featured Property"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </div>
    );
};

export default ExploreNow;
