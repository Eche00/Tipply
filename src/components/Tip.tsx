import { useState } from "react"
import { Svgs } from "../lib/svg/Svg"
import { Check } from "@mui/icons-material"
import { motion } from "framer-motion"

interface tipProp{
  tip: boolean,
  setTip: React.Dispatch<React.SetStateAction<boolean>>
}
function Tip({tip,setTip}:tipProp) {
  const [success,setSuccess] = useState<boolean>(false)
  return (
    <motion.div className="fixed top-0 left-0 w-full h-[100vh] bg-[black]/80 z-40 flex items-center justify-center overflow-scroll" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.35, type:'spring', bounce: 0.5,}} viewport={{once:true}}>
       {success ? 
       <motion.section className="bg-[#141414] sm:w-[420px] w-[95%] mx-auto h-fit  rounded-[16px] pb-[20px] sm:relative  absolute sm:top-10 top-[80px]" initial={{scale:0.8,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.35,duration:1}} viewport={{once:true}}>
             <h2 className="  text-[24px]  font-bold leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center" > Success </h2>
            <div className="flex items-center gap-[10px] w-[90%] mx-auto">
              <hr className="flex-1 w-full h-[2px] rounded-full bg-[#008CFF] border-none" />
              <span className=" w-[40px] h-[40px] border-[1px] border-[#008CFF] text-[#008CFF] rounded-full flex items-center justify-center"><Check/></span>
              <hr className="flex-1 w-full h-[2px] rounded-full bg-[#008CFF] border-none" />
            </div>
            {/* success info  */}
             <div className=" w-[90%] mx-auto  bg-[#56565653] rounded-[8px] mt-[30px] flex flex-col  px-[10px]">
                  <p className="flex flex-1 items-center justify-between gap-[10px] text-[14px] font-[400] text-gray-400 border-b border-[#343841] py-4 ">Sent: <span className=" text-white font-bold text-[12px] flex items-end gap-[5px]">5 USD {Svgs.dollarsmall}</span>
              </p>
                  <p className="flex flex-1 items-center justify-between gap-[10px] text-[14px] font-[400] text-gray-400 border-b border-[#343841] py-4 ">To: <span className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA3456F887373TBSW2U82WYW56F8</span>
              </p>
                  <p className="flex flex-1 items-center justify-between gap-[10px] text-[14px] font-[400] text-gray-400 border-b border-[#343841] py-4 ">Gas fee: <span className=" text-white font-bold text-[12px] flex items-end gap-[5px]">500 USD {Svgs.dollarsmall}</span>
              </p>
                 </div>
                 <div className="w-[90%] mx-auto pt-[20px]">
                 <button className="w-full bg-[#008CFF] py-3 rounded-[8px] cursor-pointer font-bold " onClick={()=>setTip(!tip)}>Close</button>
                 </div>
       </motion.section>
       : 
       <motion.section className="bg-[#141414] sm:w-[420px] w-[95%] mx-auto h-fit  rounded-[16px] pb-[20px] sm:relative  absolute sm:top-10 top-[80px]" initial={{scale:0.8,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.35,duration:1}} viewport={{once:true}}>
             <h2 className="  text-[24px]  font-bold leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center" > Tip </h2>
             <div className="flex flex-col w-[90%] mx-auto py-[20px]">
              {/* row 1  */}
              <p className="flex items-center justify-between gap-[10px] text-[18px] font-[400] text-gray-400 border-b border-[#343841] py-4">User: <span className=" text-white font-bold text-[16px] flex items-end gap-[5px]">Batman</span>
              </p>
              {/* row 1  */}
              <p className="flex items-center justify-between gap-[10px] text-[18px] font-[400] text-gray-400 border-b border-[#343841] py-4">Address: <span className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA3456F887373TBSW2U82WYW56F8</span>
              </p>
             
             {/* input amount  */}
              <section className="flex flex-col">
                 <p className=" text-[14px] font-[400] text-gray-400 text-center py-5">Tip Amout:</p>
                 <input type="number" className="border-2 border-[#008CFF] bg-[56565653] outline-none w-full p-3 rounded-[8px] text-[40px] [appearance:textfield]
         [&::-webkit-inner-spin-button]:appearance-none
        //  [&::-webkit-outer-spin-button]:appearance-none" />           
              {/* display amout  */}
                 <div className=" flex items-center justify-between gap-[20px] pt-[30px]">
                   <button  className="flex-1 w-full h-[50px] bg-[#56565653]  border-b-[1px] flex  items-center justify-center rounded-[13px] border-[#008CFF]">- - - -</button>
                   <button  className="flex-1 w-full h-[50px] bg-[#56565653]  border-b-[1px] flex  items-center justify-center rounded-[13px] border-[#008CFF]">- - - -</button>
                 </div>
                 {/* amout  */}
                 <div className=" w-full  bg-[#56565653] rounded-[8px] my-[30px] flex flex-col  px-[10px]">
                  <p className="flex flex-1 items-center justify-between gap-[10px] text-[14px] font-[400] text-gray-400 border-b border-[#343841] py-4 ">Min Amount: <span className=" text-white font-bold text-[12px] flex items-end gap-[5px]">5 USD {Svgs.dollarsmall}</span>
              </p>
                  <p className="flex flex-1 items-center justify-between gap-[10px] text-[14px] font-[400] text-gray-400 border-b border-[#343841] py-4 ">Balance: <span className=" text-white font-bold text-[12px] flex items-end gap-[5px]">500 USD {Svgs.dollarsmall}</span>
              </p>
                  <p className="flex flex-1 items-center justify-between gap-[10px] text-[14px] font-[400] text-gray-400 border-b border-[#343841] py-4 ">Gas fee: <span className=" text-white font-bold text-[12px] flex items-end gap-[5px]">500 USD {Svgs.dollarsmall}</span>
              </p>
                 </div>
                 <button className="w-full bg-[#008CFF] py-3 rounded-[8px] cursor-pointer font-bold" onClick={()=>setSuccess(true)}>T I P</button>
              </section>
             </div>
       </motion.section>}
      </motion.div>
  )
}

export default Tip