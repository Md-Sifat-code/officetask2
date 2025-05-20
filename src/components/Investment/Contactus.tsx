import React from 'react'

export const Contactus = () => {
    return (
        <div className='max-w-7xl mx-auto py-24 '>
            <div className='space-y-12'>
                <h1 className='text-[#F4A896] text-4xl font-bold text-center'>
                    Contact Us for Information About Premium Dubai Investment Properties
                </h1>
                <p className='text-[#358597] text-lg text-center'>We help clients locate prime opportunities, including Dubai off plan property investments, that have exceptional value and potential. Whether you're looking for a lucrative investment property in Dubai or a dream home, our bespoke services ensure you find the perfect match. From property selection to streamlining the buying process, we provide comprehensive support and expert guidance at every step.</p>
            </div>

            {/* form section */}
            <form className='border rounded-xl space-y-8 border-amber-50 px-4 py-6 my-12'>
                <div className='flex flex-col md:flex-row justify-between gap-6'>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-2 rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4A896]"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4A896]"
                    />
                </div>

                <div className='flex flex-col md:flex-row justify-between gap-6'>
                    <input
                        type="email"
                        placeholder="Mail Address"
                        className="w-full px-4 py-2 rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4A896]"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 rounded-none border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F4A896]"
                    />
                </div>

                <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-[#F4A896] focus:ring-0 resize-none"
                />

                <button
                    type="submit"
                    className="bg-[#F4A896] w-full text-white px-6 py-2 rounded-md hover:bg-[#e89084] transition duration-200"
                >
                    Send
                </button>
            </form>

        </div>
    )
}
