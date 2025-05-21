import React from 'react'
import contactImg from '/assets/contactimg.jpg'
export default function CallToAction() {
    return (
        <div>
            <div className="relative bg-cover bg-center h-96"
                style={{ backgroundImage: `url(${contactImg})` }}>

                <div className="absolute inset-0 bg-[#0000004D] bg-opacity-50 z-0"></div>

                <div className='h-full flex flex-col justify-center items-center '>
                    <h1 className='font-bold text-4xl text-[#F4A896] z-10'>Let’s Grow Together</h1>
                    <p className='md:w-1/4 md:text-center text-gray-200 z-10'>Start turning your relationships into revenue. Join our Prime Partnership Program and become part of a trusted brand in Dubai’s real estate market.</p>
                </div>
            </div>


        </div>
    )
}
