import { Link } from "react-router"
import { Svgs } from "../lib/svg/Svg"
import { motion } from "framer-motion"
import { Icons } from "../lib/icons/Icons"

function ConnectWallet() {
  return (
    <div className=" h-[100vh]  relative overflow-hidden flex items-center justify-center">
      
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
          <span className="absolute top-20 right-[10%]">{Icons.usdt}</span>
      
       
          {/* background icons T */}
          <span className="absolute bottom-[20%] left-[5%]">{Icons.bnb}</span>
          <span className="absolute bottom-[20%] right-[5%]">{Icons.solana}</span>

    <motion.section className="flex flex-col items-center justify-center gap-[10px] relative z-10" initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>
       <div className="flex items-center justify-center gap-2">
          <Link to='/'><img src="/logo.png" alt="Tipply-logo" className="sm:w-[54px] sm:h-[50px] w-[38px] h-[34px] rounded-full object-cover" /></Link>
          <h2 className="text-[#FFFFFF] sm:text-[36px] text-[24px] font-[400] leading-[30px]">ipply</h2>
       </div>
          <p className=" text-[#AFB3CA] sm:text-[20px] text-[16px] font-[400] sm:leading-[36px] sm:px-0 px-4 text-center">Experience secure wallet connections with our <br /> intuitive modal interface.</p>
     <button   className="sm:w-[284px] w-fit sm:px-0 px-[30px] h-[40px] bg-gradient-to-b bg-[#56565653]   flex  items-center justify-center rounded-[13px] cursor-pointer">Connect Wallet</button>
    </motion.section>

<motion.span className="absolute bottom-[2%] left-[50%] -translate-x-1/2 hidden sm:flex" initial={{ scale: 0.8, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
transition={{
  type: "spring",  
  bounce: 0.5,      
  duration: 1,    
  delay: 0.3        
}}
viewport={{ once: true }}>{Svgs.secure}</motion.span>
<motion.span className="absolute bottom-[2%] left-[50%] -translate-x-1/2 sm:hidden flex" initial={{ scale: 0.8, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
transition={{
  type: "spring",  
  bounce: 0.5,      
  duration: 0.8,    
  delay: 0.3        
}}
viewport={{ once: true }}>{Svgs.securesmall}</motion.span>
</div>
  )
}

export default ConnectWallet