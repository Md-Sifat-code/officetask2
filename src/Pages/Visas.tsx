import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Investment/Banner';
import heroImg from '/assets/partnerImg.jpg'
import { Contactus } from '../components/Investment/Contactus';
import { StaticText } from '../components/visas/StaticText';
const Visas: React.FC = () => {
  return (
    <div>
      <Outlet />
      <Banner hero={heroImg} title='Visas'></Banner>
      <StaticText></StaticText>



      <div className='bg-[#FEF6F5] px-4'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5  px-12 py-14'>
          <div className='flex flex-col gap-5' >
            <h1 className='text-4xl text-[#358597]'>About the Dubai Property Investment Visa</h1>
            <p>Have questions? We’ve got answers. Below, we address the most common questions related to this blog post to help you gain deeper insights.</p>
          </div>
          <div className='space-y-3'>
            <div className="collapse collapse-plus bg-transparent  border-b border-[#C0D9DF] rounded-none ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="text-[#F4A896] collapse-title font-semibold">How do I create an account?</div>
              <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-plus bg-transparent border-b border-[#C0D9DF] rounded-none">
              <input type="radio" name="my-accordion-3" />
              <div className="text-[#F4A896] collapse-title font-semibold">I forgot my password. What should I do?</div>
              <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-plus bg-transparent  border-b border-[#C0D9DF] rounded-none">                       <input type="radio" name="my-accordion-3" />
              <div className="text-[#F4A896] collapse-title font-semibold">How do I update my profile information?</div>
              <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-plus bg-transparent  border-b border-[#C0D9DF] rounded-none">                       <input type="radio" name="my-accordion-3" />
              <div className="text-[#F4A896] collapse-title font-semibold">How do I update my profile information?</div>
              <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-plus bg-transparent  border-b border-[#C0D9DF] rounded-none">                       <input type="radio" name="my-accordion-3" />
              <div className="text-[#F4A896] collapse-title font-semibold">How do I update my profile information?</div>
              <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-plus bg-transparent  border-b border-[#C0D9DF] rounded-none">                       <input type="radio" name="my-accordion-3" />
              <div className="text-[#F4A896] collapse-title font-semibold">How do I update my profile information?</div>
              <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-plus bg-transparent  border-b border-[#C0D9DF] rounded-none">                       <input type="radio" name="my-accordion-3" />
              <div className="text-[#F4A896] collapse-title font-semibold">How do I update my profile information?</div>
              <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
          </div>
        </div>
      </div >
      <Contactus hero="Request a callback"></Contactus>
    </div>
  );
};

export default Visas;
