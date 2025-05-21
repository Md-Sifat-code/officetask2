

const TermHero = () => {
  return (
    <div
      className="relative w-full h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/assets/contact.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 space-y-8">
        
        {/* Headings */}
        <div>
          <h1 className="text-3xl flex flex-col gap-3 md:text-5xl font-bold mb-2 text-[#F4A896]">
            Terms & Conditions
          </h1>
          
        </div>

        

      </div>
    </div>
  )
}

export default TermHero
