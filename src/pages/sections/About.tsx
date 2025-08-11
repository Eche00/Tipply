import { Svgs } from "../../lib/svg/Svg"

function About() {
  return (
    <div className="relative w-full h-[100vh] bg-black">
      {/* Hero center  background blur */}
      {/* <div 
        className="absolute bottom-1/2 left-0 w-full h-[200%] bg-[#dfdfdf] opacity-40 blur-[393.85px] rounded-full z-0 translate-y-[-5%]"
      /> */}
      {/* Hero left  background blur */}
      <div 
        className="absolute top-0 left-[-5%] w-[678px] h-[80px] bg-[#FFFFFF]/40  rounded-r-[50%] blur-[50px]  rotate-[43.54deg] z-10"
      />
      <div 
        className="absolute top-[20%] left-[-5%] w-[438px] h-[80px] bg-[#FFFFFF]/40  rounded-r-[50%] blur-[50px]  rotate-[43.54deg] z-10"
      />
    <img src="/stars.png" alt="" className="absolute top-[-20%] left-[-0%] rotate-[-43.54deg] w-[269px] h-[525px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-0 right-[-5%] w-[678px] h-[80px] bg-[#FFFFFF]/40  rounded-l-[50%] blur-[50px]  rotate-[-43.54deg] z-10"
      />
      <div 
        className="absolute top-[20%] right-[-5%] w-[438px] h-[80px] bg-[#FFFFFF]/40  rounded-l-[50%] blur-[50px]  rotate-[-43.54deg] z-10"
      />
    <img src="/stars.png" alt="" className="absolute top-[-20%] right-[-0%] rotate-[43.54deg] w-[269px] h-[525px] object-cover opacity-[70%] z-10" />
    
    <section className="flex flex-col w-[90%] mx-auto py-[50px]">
         <h2 className="  text-[40px]  font-[400] leading-[55px] capitalize bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center">About Tipply</h2>
         <p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px] text-center">Empowering Developers with Safe Tips, Risk Control, and Reward Growth</p>

    </section>

    <main className="flex sm:flex-row flex-col items-stretch justify-between gap-[20px] w-[90%] mx-auto py-[50px] ">
      {/* left sided page  */}
      <section className="flex-1">
        {/* first circle container  */}
        <div className="w-full h-[182px]  bg-gradient-to-r from-[#B8ED3B] to-[#45454500] rounded-full p-[2px] ">
          {/* fist section  */}
          <div className="flex-1 flex items-center  w-full h-full bg-black rounded-l-full pl-2">
            {/* the circle  */}
            <div className="border border-[#B8ED3BA6] border-dotted h-fit w-fit p-[10px] rounded-full">
              <p className=" w-[98px] h-[98px] bg-gradient-to-b from-[#B8ED3BA6] to-[#B8ED3B00] rounded-full flex items-center justify-center">{Svgs.facemoji}</p>
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
          <div className="flex-1 flex items-center justify-end  w-full h-full bg-black rounded-r-full pr-2 ">
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