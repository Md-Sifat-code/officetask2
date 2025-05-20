import home from '../../public/assets/home-two.png'
import doube_bed from '../../public/assets/home-two.png'
import frame from '../../public/assets/Frame 529.png'
import location from '../../public/assets/rent-details-location.png'
import image from '../../public/assets/image 6.png'

const Summary = () => {
  return (
 <div className='flex mt-10 gap-x-10'>
       <div className="mt-10 w-[70%]">
        <p className='font-[400] text-[#358597] text-[16px]'>PRICE</p>
        <h1 className="text-[#F4A896] mt-5">AED 10,850,00</h1>
     <div className='flex gap-x-7 mt-5'>
         <div className='flex gap-x-2.5'>
          <img src={home} alt="" />
          <p>14 Rooms</p>
        </div>
        <div className='flex gap-x-2.5'>
          <img src={doube_bed} alt="" />
          <p>14 Beds</p>
        </div>
        <div className='flex gap-x-2.5'>
          <img src={doube_bed} alt="" />
          <p>14 Beds</p>
        </div>
        <div className='flex gap-x-2.5'>
          <img src={doube_bed} alt="" />
          <p>14 Beds</p>
        </div>
     </div>
    
    <div className='flex gap-x-2.5 mt-14'>
      <img src={frame} alt="" />
      <p className='font-[500] text-[18px]'>Dubai Hills Estate, Dubai</p>
    </div>
        <hr  className='mt-5'/>

        <div>
            <h1 className='text-[#358597] mt-14'>Marina Vista</h1>
            <p className='text-[#515756]'>Marina Vista is twin-tower residential development located in Emaar Beachfront. It comprises two towers and a podium level with amenities, retail & dining outlets and facilities and offers apartments with 2 to 4 bedrooms. Apartments for sale in Marina Vista feature modern interior design, elegant finishing and furniture and floor-to-ceiling windows that provide uninterrupted views of the sandy beach with sea and the Dubai Marina. The construction of the Emaar Beachfront Marina Vista began in 2019 and is expected to be completed by 2022.</p>
        </div>

        <div className='mt-14'>
            <h1 className='text-[#F4A896] font-[600] text-[24px] mt-5'>Location</h1>
            <h4 className='font-[500] text-[18px] mt-5'>Dubai Hills Estate, Dubai</h4>
            <img src={location} alt="" className='mt-5' />
        </div>
    </div>
 <div className='w-[30%]'>
       <div className='border rounded-md border-[#F8C5B9] p-10 '>
        <img src={image} alt="profile" width={750}/>
        <div>
            <h1 className='text-[#358597] font-[700] text-[24px]'>Edward <br /> Millward</h1>
            <p className='text-[#F4A896] font-[600] text-[14px]'>Your agent for this property</p>
            <h3 className='font-[600] text-[20px]'>+971 56 520 3469</h3>
            <h1 className='text-[#358597] mt-5'>Leave us contact details</h1>
            <input type="text" placeholder='Name' className='border border-[#FAD7CF] p-3 rounded-sm w-full'/>
            <input type="text" placeholder='Contact' className='border border-[#FAD7CF] p-3 rounded-sm mt-5 w-full'/>
            <button className='bg-[#F4A896] px-[8px] py-[16px] w-full border border-[#FAD7CF] rounded-md mt-5'>Send</button>
        </div>
    </div>
     <div>
            <h3 className='font-[600] text-[16px] mt-5'>Payment plan</h3>
            <p className='mt-3'>20% Down Payment</p>
            <p className='mt-3'>39% During Construction</p>
            <p className='mt-3'>39% on Hand Over</p>
        </div>
 </div>
     
 </div>
  )
}

export default Summary;