import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Investment/Banner';
import heroImg from '/assets/partnerImg.jpg'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from 'react-icons/fa';
import location from '/assets/rent-details-location.png'
import { Contactus } from '../components/Investment/Contactus';
const Company: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Banner title="Contact Us" hero={heroImg}></Banner>
      {/* contact details */}
      <div className='max-w-7xl mx-auto flex flex-col gap-6 md:flex-row px-14 py-14'>
        <div className='w-full  space-y-2' >
          <h1 className='text-[#F4A896] text-6xl'>
            Let's Connect and Get Started
          </h1>
          <p className='text-sm'>
            Have a question? Looking to invest, buy, or sell property in Dubai?
          </p>
          <p className='text-sm'>
            We’re here to help — every step of the way.
            Whether you’re a first-time buyer, a seasoned investor, or simply exploring your options, our team at <span className='text-[#358597]'>Prime Location  Properties </span> is ready to provide expert guidance tailored to your needs.
          </p>
          <br />
          <p className='text-sm text-[#358597] font-bold'>Visit Us</p>
          <p className='text-sm text-[#F4A896] font-bold'>Prime Location </p>
          <p className='text-sm '>Office 402, The Binary Tower </p>
          <p className='text-sm '>Business Bay, Dubai, UAE </p>
          <br />
          <div className=''>
            <div className='flex gap-2 items-center'>
              <FaPhoneVolume />
              <p className='text-[#358597] text-sm'>Call Us</p>
            </div>
            <p className='text-sm'>+971 4 123 4567</p>
            <div className='flex gap-2 items-center'>
              <FaEnvelope />
              <p className='text-[#358597] text-sm'>Email Us</p>
            </div>
            <p className='text-sm'>info@pricemlp.com</p>
          </div>


        </div>
        {/* right section */}
        <div className='w-full space-y-8'>
          <div className='rounded-2xl bg-[#FCE4DE] p-4 space-y-2' >
            <h1 className='text-[#F4A896] text-2xl font-bold'>Connect with an Expert</h1>
            <p className='text-[#358597]'>Explore Our Team of Property Experts for Tailored Guidance.</p>
            <div className='flex justify-between '>
              <div className="dropdown w-full dropdown-bottom bg-transparent">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-sm
                ">Agent Name ⬇️</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              <div className="dropdown w-full dropdown-bottom bg-transparent">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-sm
                ">Buy Properties ⬇️</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            </div>
            <button className='w-full bg-[#F4A896] text-center py-2 rounded-md text-white'>Find Expert</button>
          </div>
          <div className='rounded-2xl bg-[#FCE4DE] p-4 space-y-2' >
            <h1 className='text-[#F4A896] text-2xl font-bold'>Connect with an Expert</h1>
            <p className='text-[#358597]'>Explore Our Team of Property Experts for Tailored Guidance.</p>

            <button className='w-full bg-[#F4A896] text-center py-2 rounded-md text-white'>Find Expert</button>
          </div>
        </div>

      </div>
      <div className='max-w-7xl mx-auto px-14'>
        <h2 className='font-bold text-sm text-[#F4A896]'>Location</h2>
        <p className='text-sm'>Dubai Hills Estate, Dubai</p>
        <img className='w-full' src={location} alt="" />
      </div>

      <Contactus hero='Request a callback'></Contactus>

    </div>
  );
};

export default Company;
