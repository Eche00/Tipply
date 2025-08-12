import { Link } from "react-router"
import { Icons } from "../../lib/icons/Icons"

function Hero() {
  return (
    <div>
       <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   sm:h-[100vh]  flex  items-center justify-center  w-full ">
       <section className="flex flex-col items-center justify-center text-center text-wrap gap-[24px] py-[50px]  relative z-20 sm:w-full w-[95%] mx-auto" >
      
          <p className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase">Tipper Inquiry {Icons.star}</p>

        <h1 className=" text-[#FFFFFF] sm:text-[64px] text-[44px] font-extrabold sm:leading-[82px] leading-[62px] capitalize">Tipply, Your Web3 Tipping Vault</h1>
        <p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px]">Tip, Discover, and Support Developers with Showcases That Inspire</p>
        <Link to='/connect-wallet'  className="w-[146px] h-[40px] bg-[#56565653]  border-b-[1px] border-[#FFFFFFBD] flex  items-center justify-center rounded-[13px]">Connect Wallet</Link>

        <div className="relative w-[400px] mx-auto flex   top-1/2 gap-[20px]">
          <img src="/hey.png" alt="" className=" sm:w-[238px] w-[198px] sm:h-[484px] h-[384px] bg-black sm:object-cover  rounded-[34px]" />
          <img src="/hey.png" alt="" className="absolute top-[50px] sm:right-[0px] right-[10%] sm:w-[238px] w-[198px] sm:h-[484px] h-[384px] bg-black sm:object-cover  rounded-[34px]" />
        </div>
      </section>
      </div>
    </div>
  )
}

export default Hero