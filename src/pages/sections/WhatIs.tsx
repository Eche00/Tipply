
function WhatIs() {
  return (
    <div className="  relative overflow-hidden">
        {/* Hero left  background blur */}
          <div 
        className="absolute top-[-5%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-20%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-[-5%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-20%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />

    
     <section className="flex flex-col w-[90%] mx-auto py-[50px]">
         <h2 className="  text-[40px]  font-[400] leading-[55px] capitalize bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center">What is Tipply ?</h2>
         <p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px] text-center">Empowering Developers with Safe Tips, Risk Control, and Reward Growth</p>

        <section className="flex flex-col gap-[32px] py-[32px]" >
          {/* Multichain Tipping */}
          <div className="flex sm:flex-row flex-col gap-[20px] bg-[#141414] rounded-[24px] sm:h-full sm:max-h-[307px] h-[752px] overflow-hidden ">
           <div className="flex flex-col gap-[16px] sm:py-[61px] py-[30px] sm:pl-[70px] sm:pr-0 pr-[30px] pl-[30px] sm:flex-1 w-full" >
             <p className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-[117px]">About</p>
             <h3 className=" text-[#CAD1E9] text-[32px] font-[400]">Multichain Tipping</h3>
             <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[750px]">A secure, non-custodial platform for tipping and supporting developers across multiple blockchains. Keep full control of your funds while easily interacting with Web3 projects and developer profiles — privacy and simplicity guaranteed.</p>
           </div>
           <div className="flex sm:items-end justify-baseline sm:w-[35%] w-full sm:pr-[70px] pr-[0px] relative ">
              <div className="absolute sm:top-1/5 top-[100px] sm:left-0 left-1/2 sm:-translate-x-0 -translate-x-1/2  sm:w-fit w-[90%]  h-fit  bg-black rounded-[34px] p-[27px]">
                <img src="/hey.png" alt="" className="w-[238px] h-[484px]  object-cover rounded-[20px] mx-auto" />
             </div>

           </div>
          </div>

          {/* Explore & Support */}
          <div className="flex sm:flex-row flex-col gap-[20px] bg-[#141414] rounded-[24px] sm:h-full sm:max-h-[307px] h-[752px] overflow-hidden ">
           <div className="flex flex-col gap-[16px] sm:py-[61px] py-[30px] sm:pl-[70px] sm:pr-0 pr-[30px] pl-[30px] sm:flex-1 w-full" >
             <p className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-[117px]">About</p>
             <h3 className=" text-[#CAD1E9] text-[32px] font-[400]">Explore & Support </h3>
             <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[750px]">Discover and explore developers’ projects across multiple blockchains in a secure, non-custodial platform. Easily browse Web3 creations and support your favorite developers directly keeping full control of your funds with privacy and simplicity.</p>
           </div>
           <div className="flex sm:items-end justify-baseline sm:w-[35%] w-full sm:pr-[70px] pr-[0px] relative ">
              <div className="absolute sm:top-1/5 top-[100px] sm:left-0 left-1/2 sm:-translate-x-0 -translate-x-1/2  sm:w-fit w-[90%]  h-fit  bg-black rounded-[34px] p-[27px]">
                <img src="/hey.png" alt="" className="w-[238px] h-[484px]  object-cover rounded-[20px] mx-auto" />
             </div>
              <div className="absolute sm:top-1/2 top-[100px] sm:left-[80px] left-1/2 sm:-translate-x-0 -translate-x-1/2  sm:w-fit w-[90%]  h-fit  bg-black rounded-[34px] sm:flex hidden">
                <img src="/hey.png" alt="" className="w-[238px] h-[484px]  object-cover rounded-[20px] mx-auto" />
             </div>
              

           </div>
          </div>

         
        </section>

     </section>
    </div>
  )
}

export default WhatIs