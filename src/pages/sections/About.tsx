import { motion } from "framer-motion"
import { Svgs } from "../../lib/svg/Svg"

function About() {
  return (
    <div className="relative w-full h-[100vh] bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]">
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
         <motion.h2 className="  text-[40px]  font-extrabold leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center" initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>About Tipply </motion.h2>
         <motion.p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px] text-center" initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>Empowering Developers with Safe Tips, Risk Control, and Reward Growth</motion.p>

    </section>

    <motion.main className="flex sm:flex-row flex-col items-stretch justify-between gap-[20px] w-[90%] mx-auto py-[50px] " initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}  viewport={{once:true}}>
      {/* left sided page  */}
      <section className="flex-1">
        {/* first circle container  */}
        <div className="w-full h-[182px]  bg-gradient-to-r from-[#008CFF] to-[#45454500] rounded-full p-[2px] ">
          {/* fist section  */}
          <div className="flex-1 flex items-center  w-full h-full bg-[#050520] rounded-l-full pl-2">
            {/* the circle  */}
            <div className="border border-[#008CFF] border-dotted h-fit w-fit p-[10px] rounded-full">
              <p className=" w-[98px] h-[98px] bg-gradient-to-b from-[#008CFF] to-[#B8ED3B00] rounded-full flex items-center justify-center">{Svgs.facemoji}</p>
            </div>
            {/* other contents  */}
            
           <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[350px] pl-[10px]">
            <h2 className="  text-[14px] m-0  font-bold capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent ">what Tiply enables users to do</h2>
            Discover talented Web3 creators and back their work with instant, crypto-powered tips.</p>
          </div>
        </div>

      </section>
        <hr className="h-[400px] w-[0.1px] border-[1px] border-dashed sm:flex hidden" />
       <section className="flex-1">
        {/* second circle container  */}
        <div className="sm:mt-42 w-full h-[182px]  bg-gradient-to-r from-[#45454500] to-[#454545] rounded-full p-[2px] ">
          {/* fist section  */}
          <div className="flex-1 flex items-center justify-end  w-full h-full bg-[#050520] rounded-r-full pr-2 ">
            {/* other contents  */}
            
            <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[350px] pr-[10px]">
              <h2 className="  text-[14px]  font-bold capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent  text-end">how Tiply works / philosophy</h2>
              A decentralized platform where your support goes straight to the developer — no banks, no barriers.</p>
            {/* the circle  */}
            <div className="border border-[#FFFFFF14] border-dotted h-fit w-fit p-[10px] rounded-full">
              <p className=" w-[98px] h-[98px] bg-gradient-to-b from-[#FFFFFF14] to-[#FFFFFF66] rounded-full flex items-center justify-center">{Svgs.dollar}</p>
            </div>
            
          </div>
        </div>

      </section>
    </motion.main>
    <motion.div className="flex items-center justify-center" whileInView={{ rotate: 360 }}
              transition={{ duration: 2}} >
      <span>{Svgs.repeat}</span>
    </motion.div>

    </div>
  )
}

export default About