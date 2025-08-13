import { useState } from "react"
import { Icons } from "../../lib/icons/Icons"
import { Svgs } from "../../lib/svg/Svg"

function Faqs() {
  const[faq1,setFaq1] = useState(false)
  const[faq2,setFaq2] = useState(false)
  const[faq3,setFaq3] = useState(false)
  const[faq4,setFaq4] = useState(false)
  return (
       <div className=" relative overflow-hidden">
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

    
      


       <section className="flex flex-col w-[90%] mx-auto py-[50px] z-30 relative ">
         <h2 className="  text-[40px]  font-[400] leading-[55px] capitalize bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center">Frequently asked questions</h2>
         <p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px] text-center">Discover Devs, access Projects and tip with you fully in control.</p>

 <div className="flex xl:flex-row flex-col-reverse items-center">
   <span className=" xl:rotate-[90deg] xl:inline-block hidden">{Svgs.infinity}</span>
         <section className="flex flex-col gap-[32px] w-full max-w-[90%] sm:max-w-[1200px] mx-auto py-[80px]">
          {/* faq1  */}
           <div className=" w-full bg-[#56565633] rounded-[24px] text-[#AFB3CA] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px]"><span onClick={()=>setFaq1(!faq1)} className=" cursor-pointer">{!faq1 ? Icons.plus : Icons.minus}</span> What is Tipply?</p> 
            {faq1 && <p className=" text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">Discover Devs, access Projects and tip with you fully in control.</p>}
           </div>
          {/* faq2  */}
           <div className=" w-full bg-[#56565633] rounded-[24px] text-[#AFB3CA] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px]"><span onClick={()=>setFaq2(!faq2)} className=" cursor-pointer">{!faq2 ? Icons.plus : Icons.minus}</span> Which blockchains does Tipply support??</p> 
            {faq2 && <p className=" text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">Discover Devs, access Projects and tip with you fully in control.</p>}
           </div>
          {/* faq3  */}
           <div className=" w-full bg-[#56565633] rounded-[24px] text-[#AFB3CA] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px]"><span onClick={()=>setFaq3(!faq3)} className=" cursor-pointer">{!faq3 ? Icons.plus : Icons.minus}</span>  How does Tipply ensure asset security??</p> 
            {faq3 && <p className=" text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">Discover Devs, access Projects and tip with you fully in control.</p>}
           </div>
          {/* faq4  */}
           <div className=" w-full bg-[#56565633] rounded-[24px] text-[#AFB3CA] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px]"><span onClick={()=>setFaq4(!faq4)} className=" cursor-pointer">{!faq4 ? Icons.plus : Icons.minus}</span>How can I Tip a Developer?</p> 
            {faq4 && <p className=" text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">Discover Devs, access Projects and tip with you fully in control.</p>}
           </div>
         </section>
         </div>
     </section>
</div>
  )
}

export default Faqs