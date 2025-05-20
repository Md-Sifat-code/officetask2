import home from '../../public/assets/home-two.png'
import doube_bed from '../../public/assets/double-bed.png'
import frame from '../../public/assets/Frame 529.png'
const Summary = () => {
  return (
    <div className="mt-10">
        <p>price</p>
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
    
    <div className='flex gap-x-2.5 mt-5'>
      <img src={frame} alt="" />
      <p>Dubai Hills Estate, Dubai</p>
    </div>
        
    </div>
  )
}

export default Summary;