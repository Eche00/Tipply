import { Icons } from "../../lib/icons/Icons"
import { Svgs } from "../../lib/svg/Svg"

function Process() {
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
  {/* background icons T */}
    <span className="absolute top-20 left-[10%]">{Icons.usdt}</span>
    <span className="absolute top-20 right-[10%]">{Icons.bnb}</span>

    {/* background icons T */}
    <span className="absolute top-[40%] sm:left-[25%] left-[20%]">{Icons.tron}</span>
    <span className="absolute top-[40%] sm:right-[25%] right-[20%]">{Icons.eth}</span>

    <span className="absolute sm:top-[70%] top-[18%] sm:left-[25%] left-[20%]">{Icons.solana}</span>
    <span className="absolute sm:top-[70%] top-[22%] sm:right-[25%] right-[10%]">{Icons.usdt}</span>

    {/* background icons T */}
    <span className="absolute bottom-[20%] left-[5%]">{Icons.bnb}</span>
    <span className="absolute bottom-[20%] right-[5%]">{Icons.solana}</span>
<div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   h-fit  flex  items-center justify-center  w-full ">
  
      <section className="flex flex-col items-center justify-center gap-[10px] rounded-full border-none py-[50px]">
         <h2 className="  text-[40px]  font-extrabold leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center">How Tipply works ?</h2>

        <span className="sm:block hidden">{Svgs.walletbig}</span>
        <span className="block sm:hidden">{Svgs.walletsmall}</span>
        <span className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-fit text-nowrap">Connect Wallet</span>
        <hr className="h-[100px] w-2 bg-gradient-to-b from-[#FFFFFF00] to-[#FFFFFF] border-none" />
        <span className="">{Svgs.explore}</span>
        <span className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-fit text-nowrap">Explore </span>
        <hr className="h-[100px] w-2 bg-gradient-to-b from-[#FFFFFF00] to-[#FFFFFF] border-none" />
        <span className="">{Svgs.tipbig}</span>
        <span className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-fit text-nowrap">Tip </span>
        
        
        <div className="sm:w-full w-[90%] mx-auto flex flex-wrap items-stretch justify-center gap-[20px] py-[30px] relative z-30">
           <div className="bg-gradient-to-r from-[#56565653] to-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
                     <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Connect</h3>
                     <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">Securely link your wallet to start exploring, interacting, and participating in the Web3 ecosystem. Enjoy a smooth, fast connection that keeps you in control of your assets while unlocking access to Tipply.</p>
            </div>
           <div className="bg-gradient-to-r from-[#56565653] to-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
                     <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Explore</h3>
                     <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">Discover developers from around the world and browse the projects they built. Dive into profiles, see their passions, and uncover innovative ideas shaping the Web3 space here on Tipply.</p>
            </div>
           <div className="bg-gradient-to-r from-[#56565653] to-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
                     <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Tip</h3>
                     <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">Show your support in seconds, just click Tip, choose an amount, and send it directly to any developer you admire. Quick, simple, and fully in your control.</p>
            </div>
         
          
        </div>
      </section>


     
       
        


     
    </div>
    </div>
  )
}

export default Process