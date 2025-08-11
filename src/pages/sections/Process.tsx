import { Svgs } from "../../lib/svg/Svg"

function Process() {
  return (
      <div className="bg-black  relative overflow-hidden">
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

      <section className="flex flex-col items-center justify-center gap-[10px] rounded-full border-none py-[50px]">
        <span className="sm:block hidden">{Svgs.walletbig}</span>
        <span className="block sm:hidden">{Svgs.walletsmall}</span>
        <span className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-fit text-nowrap">Connect Wallet</span>
        <hr className="h-[100px] w-2 bg-gradient-to-b from-[#FFFFFF00] to-[#FFFFFF] border-none" />
        <span className="">{Svgs.explore}</span>
        <span className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-fit text-nowrap">Explore </span>
        <hr className="h-[100px] w-2 bg-gradient-to-b from-[#FFFFFF00] to-[#FFFFFF] border-none" />
        <span className="">{Svgs.tipbig}</span>
        <span className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-fit text-nowrap">Tip </span>
        
        
        <div className="w-[90%] mx-auto flex flex-wrap items-stretch justify-center gap-[48px] py-[30px]">
           <div className="bg-gradient-to-r from-[#FFFFFF00] to-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
                     <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Connect</h3>
                     <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">Securely link your wallet to start exploring, interacting, and participating in the Web3 ecosystem. Enjoy a smooth, fast connection that keeps you in control of your assets while unlocking access to Tipply.</p>
            </div>
           <div className="bg-gradient-to-r from-[#FFFFFF00] to-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
                     <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Explore</h3>
                     <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">Discover developers from around the world and browse the projects they built. Dive into profiles, see their passions, and uncover innovative ideas shaping the Web3 space here on Tipply.</p>
            </div>
           <div className="bg-gradient-to-r from-[#FFFFFF00] to-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
                     <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Tip</h3>
                     <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">Show your support in seconds, just click Tip, choose an amount, and send it directly to any developer you admire. Quick, simple, and fully in your control.</p>
            </div>
         
          
        </div>
      </section>


     
       
        


     
    </div>
  )
}

export default Process