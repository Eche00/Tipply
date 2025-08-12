import { Svgs } from "../../lib/svg/Svg"

function About() {
  return (
    <div className="relative w-full h-[100vh] bg-[#171733]">
        {/* Hero left  background blur */}
          <div 
        className="absolute top-[-10%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-[-10%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />

    <section className="flex flex-col w-[90%] mx-auto py-[50px]">
         <h2 className="  text-[40px]  font-[400] leading-[55px] capitalize bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center">About Tipply</h2>
         <p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px] text-center">Empowering Developers with Safe Tips, Risk Control, and Reward Growth</p>

    </section>

    <main className="flex sm:flex-row flex-col items-stretch justify-between gap-[20px] w-[90%] mx-auto py-[50px] ">
      {/* left sided page  */}
      <section className="flex-1">
        {/* first circle container  */}
        <div className="w-full h-[182px]  bg-gradient-to-r from-[#7346F1] to-[#45454500] rounded-full p-[2px] ">
          {/* fist section  */}
          <div className="flex-1 flex items-center  w-full h-full bg-[#171733] rounded-l-full pl-2">
            {/* the circle  */}
            <div className="border border-[#7346F1] border-dotted h-fit w-fit p-[10px] rounded-full">
              <p className=" w-[98px] h-[98px] bg-gradient-to-b from-[#7346F1] to-[#B8ED3B00] rounded-full flex items-center justify-center">{Svgs.facemoji}</p>
            </div>
            {/* other contents  */}
           <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[350px] pl-[10px]">Discover and explore developers’ projects across multiple blockchains in a secure, non-custodial platfore.</p>
          </div>
        </div>

      </section>
        <hr className="h-[400px] w-[0.1px] border-[1px] border-dashed sm:flex hidden" />
       <section className="flex-1">
        {/* second circle container  */}
        <div className="sm:mt-42 w-full h-[182px]  bg-gradient-to-r from-[#45454500] to-[#454545] rounded-full p-[2px] ">
          {/* fist section  */}
          <div className="flex-1 flex items-center justify-end  w-full h-full bg-[#171733] rounded-r-full pr-2 ">
            {/* other contents  */}
            <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[350px] pr-[10px]">Discover and explore developers’ projects across multiple blockchains in a secure, non-custodial platform. </p>
            {/* the circle  */}
            <div className="border border-[#FFFFFF14] border-dotted h-fit w-fit p-[10px] rounded-full">
              <p className=" w-[98px] h-[98px] bg-gradient-to-b from-[#FFFFFF14] to-[#FFFFFF66] rounded-full flex items-center justify-center">{Svgs.dollar}</p>
            </div>
            
          </div>
        </div>

      </section>
    </main>
    <div className="flex items-center justify-center">
      <span>{Svgs.repeat}</span>
    </div>

    </div>
  )
}

export default About