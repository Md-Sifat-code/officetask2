

interface BannerProps {
    hero: string;
    title: string;
}
const Banner: React.FC<BannerProps> = ({ hero, title }) => {
    return (
        <div>
            <div className="relative bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${hero})` }}>

                <div className="absolute inset-0 bg-[#0000004D] bg-opacity-50 z-0"></div>

                <div className='h-full flex justify-center items-center '>
                    <h1 className='text-white font-bold text-4xl z-10'>{title}</h1>
                </div>
            </div>


        </div>
    );
};
export default Banner;
