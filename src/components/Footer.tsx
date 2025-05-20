import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#FEF6F5] text-black pt-40 pb-6 px-6 mt-[300px]">

      {/* Floating Card */}
      <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 bg-[#FEF6F5] border border-[#F4A896] shadow-lg rounded-lg px-6 md:px-8 py-6 w-[95%] max-w-6xl z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-2/3">
          <div>
            <h2 className="text-xl font-bold text-[#358597] mb-1">WE'RE HERE TO HELP</h2>
            <p className="text-sm text-gray-700">
              We help clients locate prime opportunities, including Dubai off plan property investments,
              that have exceptional value and potential. Whether you're looking for a lucrative investment
              property in Dubai or a dream home, our bespoke services ensure you find the perfect match.
              From property selection to streamlining the buying process, we provide comprehensive support
              and expert guidance at every step.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="border-[#F4A896] border  px-6 py-2 rounded-md text-[#e1897e] transition flex flex-row items-center gap-2">
              <FaPhone />Get In Touch
            </button>
            <button className="border-[#F4A896] border px-6 py-2 rounded-md text-[#e1897e] transition flex flex-row items-center gap-2">
              <FaWhatsapp />WhatsApp
            </button>
            <button className="border-[#F4A896]  border px-6 py-2 rounded-md text-[#e1897e] transition flex flex-row items-center gap-2">
              <CiMail />Mail us
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <img className="max-h-96 w-auto object-contain" src="/assets/extrapic.png" alt="support" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-20">

        {/* Logo & Newsletter */}
        <div className="space-y-6">
          <img src="/assets/logo2.png" alt="Logo" className="h-12" />
          <h1 className="text-xl font-bold text-[#358597]">Subscribe to our newsletter</h1>

          <div className="relative w-full border border-dotted">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-4 pr-28 rounded-md text-black"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#F4A896] text-white px-4 py-2 rounded-md hover:bg-[#e1897e] transition">
              Send
            </button>
          </div>
        </div>

        {/* Guides */}
        <div>
          <h2 className="text-lg font-bold text-[#358597] mb-4">Guides</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Buyer's Guide</a></li>
            <li><a href="#" className="hover:underline">Seller's Guide</a></li>
            <li><a href="#" className="hover:underline">Rental Guide</a></li>
            <li><a href="#" className="hover:underline">Investment Tips</a></li>
            <li><a href="#" className="hover:underline">Location Guide</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-bold text-[#358597] mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">The Team</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Latest News</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h2 className="text-lg font-bold text-[#358597] mb-4">Get In Touch</h2>
          <p className="text-sm mb-4">123 Dubai Marina Blvd, Dubai, UAE</p>
          <p className="text-sm mb-4">Email: contact@realestateuae.com</p>
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF className="hover:text-[#F4A896] transition" /></a>
            <a href="#"><FaInstagram className="hover:text-[#F4A896] transition" /></a>
            <a href="#"><FaTwitter className="hover:text-[#F4A896] transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-[#F4A896] transition" /></a>
          </div>
        </div>
      </div>

      <hr className="mt-10 text-[#F4A896]" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto mt-8 gap-4 text-sm px-4">
        <p>© 2024 Equity Real Estate</p>
        <div className="flex flex-wrap gap-6 justify-center md:justify-end">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Designed by Soft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
