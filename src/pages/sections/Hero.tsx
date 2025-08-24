import { Link } from "react-router"
import { Icons } from "../../lib/icons/Icons"
import { motion } from "framer-motion";

function Hero() {
  const MotionLink = motion(Link)
  return (
    <div>
       <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   sm:h-[100vh]  flex  items-center justify-center  w-full">

       <section className="flex flex-col items-center justify-center text-center text-wrap gap-[24px] py-[50px]  relative z-20 sm:w-full w-[95%] mx-auto" >
        
      
          <motion.p className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase" initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>Tipper Inquiry {Icons.star}</motion.p>

        <motion.h1 className=" bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent sm:text-[64px] text-[44px] font-extrabold sm:leading-[82px] leading-[62px] capitalize" initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>Tipply, Your Web3 Tipping Chain</motion.h1>
        <motion.p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px]" initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>Tip, Discover, and Support Developers with Showcases That Inspire</motion.p>
        <MotionLink initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1}}  viewport={{once:true}} to='/connect-wallet'  className="w-[146px] h-[40px] bg-[#56565653]  border-b-[1px] flex  items-center justify-center rounded-[13px] border-[#008CFF]">Connect Wallet</MotionLink>

        <motion.div className="relative w-[400px] mx-auto flex   top-1/2 gap-[20px]" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale:1,opacity: 1 }}
              transition={{ duration: 1}} viewport={{once:true}}>
          <img src="/dashboards.webp" alt="" className=" sm:w-[238px] w-[198px] sm:h-[484px] h-[384px] bg-black sm:object-cover  rounded-[34px]" />
          <img src="/dashboard.webp" alt="" className="absolute top-[50px] sm:right-[0px] right-[10%] sm:w-[238px] w-[198px] sm:h-[484px] h-[384px] bg-black sm:object-cover  rounded-[34px]" />
        </motion.div>
      </section>
      </div>
    </div>
  )
}

export default Hero